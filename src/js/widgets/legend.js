require([
        "esri/widgets/Legend",
        'dojo/topic',
        'dojo/domReady!'
    ],
    function (Legend, tp) {
        tp.subscribe("map-loaded", function () {

            //Legend
            let legend = $('#legend');
            app.view.ui.add('legend', 'top-right');

            $(".customWidget").show();
            if (window.innerWidth < 800) {
                $("#legend").hide();
                // $(".legendToggle").removeAttr('checked');
            }

            //Create Block Group legend separately
            //Have to do this otherwise it makes the block group legend go to the bottom when other items are checked

            var blockGroupsLayer = app.map.findLayerById("blockGroups");
            console.log(blockGroupsLayer.loaded);

            new Legend({
                view: app.view,
                container: 'legend',
                layerInfos: [{
                    title: app.config.layerDef["blockGroups"].title,
                    layer: blockGroupsLayer
                }]
            })


            //Add Slider
            legend.append(`
                <div class="slidecontainer">
                    <span style="padding: 8px;">Transparency</span>
                    <input type="range" min="0" max="1" value=".8" step=".05" class="round slider" id="slider">
                    <span id="sliderLabel">80%</span>
                </div>
                <hr>
                <br>
            `)
            $("#slider").on("input", function () {
                blockGroupsLayer.opacity = this.value;
                $("#sliderLabel").html(`${Math.floor(this.value * 100)}%`)
                // alert(this.value)
            });

            let layerInfos = [];
            app.config.layers.sort((a, b) => {
                return a.drawOrder - b.drawOrder;
            }).forEach(conf => {
                if (conf.legend && conf.id !== "blockGroups") {
                    layerInfos.push({
                        title: conf.title,
                        layer: app.map.findLayerById(conf.id)
                    })
                }
            });

            new Legend({
                view: app.view,
                container: 'legend',
                layerInfos: layerInfos
            })


            $("#legend").draggable({
                handle: "#legendHeader",
                // scroll: false,
                containment: "#container",
                cursor: "move"
            });
        });
    })
