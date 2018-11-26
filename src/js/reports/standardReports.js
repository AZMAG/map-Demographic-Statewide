require([
        "dojo/topic",
        "esri/tasks/QueryTask"
    ],
    function (tp, QueryTask) {
        tp.subscribe("layers-added", initReports);

        function initReports() {
            var html = '<option value="default">Select a Type</option>';
            for (let i = 0; i < app.config.layers.length; i++) {
                const layer = app.config.layers[i];
                if (layer.showReport) {
                    html += `<option data-id="${i}">${layer.title}</option>`;
                }
            }
            $("#reportType").html(html);
            $("#reportType option").each(function (i, el) {
                let id = $(el).data("id");
                $(el).data("conf", app.config.layers[id]);
            })

        }

        function hideReportLayers() {
            app.config.layers.forEach(function (conf) {
                const layer = app.map.findLayerById(conf.id);
                if (layer && conf.showReport) {
                    layer.visible = false;
                }
            })
        }

        function updateReportDDL(layer, conf) {
            let sumField = conf.displayField || layer.displayField;

            hideReportLayers();
            layer.visible = true;

            const q = {
                where: "1=1",
                outFields: ["OBJECTID", "GEOID10", sumField],
                returnGeometry: false,
                distinct: true,
                orderByFields: [sumField]
            }

            layer.queryFeatures(q).then(function (res) {
                $("#specificReport").html('');
                for (let i = 0; i < res.features.length; i++) {
                    const feature = res.features[i];
                    $("#specificReport").append(`<option data-geo-id="${feature.attributes["GEOID10"]}" data-object-id="${feature.attributes["OBJECTID"]}">${feature.attributes[sumField]}</option>`);
                }
            })
        }

        $("#reportType").change(function () {
            let $selectedItem = $(this).find(":selected");
            let text = $selectedItem.text();
            if (text !== "Select a Type") {
                let conf = $selectedItem.data("conf");
                let layer = app.map.findLayerById(conf.id);
                updateReportDDL(layer, conf);
                $("#specificReportDiv").show();
                $("#standardBtnSubmit").show();
            } else {
                ResetForm();
            }
        })

        function ResetForm() {
            $("#specificReportDiv").hide();
            $("#standardBtnSubmit").hide();
            $("#reportType").val("default");
        }

        async function GetData(conf, geoid) {
            let q = {
                returnGeometry: true,
                outFields: ["*"],
                where: `GEOID10 = '${geoid}'`
            }

            let qt = new QueryTask({
                url: app.config.mainUrl + "/" + conf.ACSIndex
            });
            let acsPromise = qt.execute(q);

            qt.url = app.config.mainUrl + "/" + conf.censusIndex;
            q.where = `GEOID = '${geoid}'`;
            q.returnGeometry = false;

            let censusPromise = qt.execute(q);

            return {
                acsData: await acsPromise,
                censusData: await censusPromise
            }
        }

        $("#reportForm").submit(function (e) {
            $("#reportLoader").css("display", "flex");
            e.preventDefault();
            $("#summaryReport").hide();
            let conf = $("#reportType").find(":selected").data("conf");
            let layer = app.map.findLayerById(conf.id);
            let GEOID = $("#specificReport").find(":selected").data("geo-id");
            let OBJECTID = $("#specificReport").find(":selected").data("object-id");

            GetData(conf, GEOID).then(function (data) {
                if (data) {
                    tp.publish("open-report-window", data.acsData, app.acsFieldsConfig);
                    app.selectedReport = {
                        conf: conf,
                        acsData: data.acsData,
                        censusData: data.censusData
                    }
                } else {
                    console.error("No matching features for: " + q);
                }
                $("#reportForm").hide();
                ResetForm();
                $("#reportLoader").hide();
            })
        })
    })
