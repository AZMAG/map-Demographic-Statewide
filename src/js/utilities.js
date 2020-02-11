
"use strict";
define([
    "./config/appConfig",
    "./config/censusFieldsConfig",
    "./config/acsFieldsConfig",
    "./maps/maps-utils",
    "esri/Graphic"
], function (
    config,
    censusFieldsConfig,
    acsFieldsConfig,
    mapsutils,
    Graphic
) {
    //This file should include miscellaneous repeatable functions used in multiple places in the code. 

    var summableFields = null;
    const representativeCache = {};

    var utils = {
        AddHighlightGraphics: function (features, zoomTo) {
            let gfx = [];
            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                let g = new Graphic({
                    geometry: feature.geometry,
                    symbol: {
                        type: "simple-fill",
                        color: [0, 255, 255, 0.5],
                        opacity: 0.5,
                        outline: {
                            color: "cyan",
                            width: "3"
                        }
                    }
                });
                gfx.push(g);
            }
            let gfxLayer = mapsutils.map.findLayerById("gfxLayer");
            gfxLayer.addMany(gfx);

            if (zoomTo) {
                mapsutils.view.goTo(gfx);
            }
        },

        AddHighlightGraphic: function (graphic) {
            let gfxLayer = mapsutils.map.findLayerById("gfxLayer");

            if (gfxLayer.graphics && gfxLayer.graphics.items.length > 0) {
                console.log("no graphics to highlight");
            } else {
                var tempGraphic = $.extend({}, graphic);

                tempGraphic.symbol = {
                    type: "simple-fill",
                    color: [0, 255, 255, 0.5],
                    opacity: 0.4,
                    outline: {
                        color: "cyan",
                        width: "3"
                    }
                };

                gfxLayer.add(tempGraphic);
            }
        },

        clearDrawnGraphics: function () {
            let gfxLayer = mapsutils.map.findLayerById("gfxLayer");
            gfxLayer.removeAll();

            let bufferGraphics = mapsutils.map.findLayerById("bufferGraphics");
            bufferGraphics.removeAll();
            mapsutils.view.graphics.removeAll();
        },

        summarizeFeatures: function (res) {
            // console.log(res);

            if (!summableFields) {
                summableFields = [];
                acsFieldsConfig.forEach(conf => {
                    if (conf.canSum) {
                        summableFields.push(conf.fieldName);
                    }
                });
                censusFieldsConfig.forEach(conf => {
                    if (conf.canSum) {
                        summableFields.push(conf.fieldName);
                    }
                });
            }

            let data = {};
            res.features.forEach(feature => {
                let attr = feature.attributes;
                Object.keys(attr).forEach(key => {
                    if (summableFields.indexOf(key) > -1) {
                        if (data[key]) {
                            data[key] += attr[key];
                        } else {
                            data[key] = attr[key];
                        }
                    }
                });
            });

            return data;
        },

        PopupFormat: async function (gfx) {
            let attr = gfx.graphic.attributes;
            let repHtml = "";
            if (attr["googleID"]) {
                repHtml = await GetRepHtml(attr["googleID"]);
            }

            return `
                        <span class="popf">${attr["NAME"]}</span>
                        <hr class="pop">
                        <div>Total Population: <strong>${attr["TOTAL_POP"].toLocaleString()}</strong></div>
                        <div>Minority Population: <strong>${attr["MINORITY_POP"].toLocaleString()}</strong></div>
                        ${attr["MEDIAN_AGE"] ? `<div>Median Age: <strong>${attr["MEDIAN_AGE"]} years</strong></div>` : ""}
                        <div>Number of Households: <strong>${attr["TOTAL_HOUSEHOLDS"].toLocaleString()}</strong></div>
                        ${attr["MEDIAN_HOUSEHOLD_INCOME"] ? `<div>Median Household Income: <strong>$${attr["MEDIAN_HOUSEHOLD_INCOME"].toLocaleString()}</strong></div>` : ""}
                        ${repHtml ? `
                        <hr>
                        <h6>Representative Info</h6>
                        <div>${repHtml}</div>
                        ` : ""}
                    `;
        }
    }

    async function GetRepresentativeInfo(id) {
        if (representativeCache[id]) {
            return new Promise(function (resolve, reject) {
                resolve(representativeCache[id]);
            });
        }
        let url = `https://content.googleapis.com/civicinfo/v2/representatives/${encodeURIComponent(
            id
        )}?recursive=false&key=${config.googleCivicInfoApiKey}`;
        return new Promise(function (resolve, reject) {
            $.get(url, function (data) {
                representativeCache[id] = data;
                resolve(data);
            }).fail(function (err) {
                reject(err);
            });
        });
    }

    function GetPartyLetter(party) {
        if (party === "Unknown" || !party)
            return "";
        if (party.indexOf("Democratic") > -1) {
            return '<strong title="Democratic" style="font-weight: bold; color: blue;"> (D)</strong>';
        } else if (party.indexOf("Republican") > -1) {
            return '<strong title="Republican" style="font-weight: bold; color: red;"> (R)</strong>';
        } else {
            return `<strong title="${party}" style="font-weight: bold; color: green;"> (${party.charAt(0)})</strong>`;
        }
    }

    function GetChannelsHTML(channels) {
        let channelsHTML = "";
        let types = {
            Facebook: {
                icon: "fab fa-facebook-square",
                url: "https://www.facebook.com/"
            },
            Twitter: {
                icon: "fab fa-twitter",
                url: "https://twitter.com/"
            },
            YouTube: {
                icon: "fab fa-youtube-square",
                url: "https://www.youtube.com/user/"
            }
        };

        channels.forEach(function (channel) {
            let type = types[channel.type];
            if (type) {
                channelsHTML += `<a class="socialChannel" title="Visit the ${channel.type} page" target="_blank" href="${type.url + channel.id}"><i class="${type.icon}"></i></a>`;
            }
        });
        return channelsHTML === "" ? "" : `<div>${channelsHTML}</div>`;
    }

    function GetRepHTML(rep) {
        if (rep) {
            return `<div class="repContainer">
                        <div class="repPicContainer">
                            ${rep.photoUrl ? `<img title="${rep.name}" class="rep-pic" src="${rep.photoUrl}" alt="${rep.name}">` : ""}
                        </div>
                        <div class="repInfoContainer">
                            <div><i class="fas fa-user-alt"></i> <strong>${rep.name}</strong>${GetPartyLetter(rep.party)} - ${rep.office ? rep.office : ""}</div>
                            ${rep.address ?
                    `
                                <div>
                                    <div><i class="fas fa-map-marked"></i> ${rep.address[0].line1}</div>
                                    <div>${rep.address[0].city}, ${rep.address[0].state} ${rep.address[0].zip}</div>
                                </div>
                                ` : ""}
                            ${rep.phones ? `
                                <span title="Phone ${rep.name}" ><i class="fas fa-phone" aria-hidden="true"></i>  ${rep.phones[0]}</span><br>
                            `: ""}
                            ${rep.emails ? `
                                <a title="Send an email to ${rep.name}" href="mailto:${rep.emails[0]}">
                                <i class="fa fa-envelope" aria-hidden="true"></i>  ${rep.emails[0]}</a>
                            `: ""}
                            ${rep.urls && rep.urls.length > 0 ? `
                                <div>
                                <a title="Visit the website ${rep.urls[0]}" target="_blank" href="${rep.urls[0]}">
                                <i class="fas fa-external-link-alt"></i>  Website</a>
                                </div>
                            `: ""}
                            ${rep.channels && rep.channels.length > 0 ? GetChannelsHTML(rep.channels) : ""}
                        </div>
                </div>`;
        }
    }


    function GetRepHtml(googleID) {
        return GetRepresentativeInfo(googleID)
            .then(function (data) {
                if (data.offices) {
                    let rtnHTML = "";
                    data.offices.map(office => {
                        config.googleCivicOffices.forEach(function (conf) {
                            if (office.name.indexOf(conf.name) > -1) {
                                if (data.officials && office.officialIndices) {
                                    for (let i = 0; i < office.officialIndices.length; i++) {
                                        let rep = data.officials[office.officialIndices[i]];
                                        rep["office"] = conf.displayValue;
                                        let html = GetRepHTML(rep);
                                        rtnHTML += `${html}<br>`;
                                    }
                                }
                            }
                        });
                    });
                    return rtnHTML;
                } else {
                    return "";
                }
            })
            .catch(function (err) {
                console.log(err);
            });

    }

    return utils;
})
