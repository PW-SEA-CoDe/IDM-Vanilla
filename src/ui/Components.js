/**
 * Module for defining basic UI containers. Scope should be limited to defining the general position
 * and styling of the container/wrapper while any graphic/interactivity should be defined in a seperate
 * import module. For example:
 *
 * function SideBar should be defined in this file while,
 * function SideBarNav should be defined in Menus.js
 * function StackingDiagram should be defined in Graphics.js
 */
import { CreateDiv, UpdateStyle, getParentDimensions } from "./UIUtils";
import { ButtonStyle, CameraControlsStyle, neutralColors } from "./Styles";
import { contain } from "three/src/extras/TextureUtils.js";

//Functional UI Elements
export function Button(container, icon, id) {
  let btn;
  btn = CreateDiv(id, ButtonStyle.static);
  btn.style.height = `${getParentDimensions(container) - 25}px`;
  btn.style.width = `${getParentDimensions(container) - 25}px`;
  btn.style.backgroundImage = `url(${icon})`;
  container.append(btn);
  btn.addEventListener("mouseover", function () {
    UpdateStyle(btn, ButtonStyle.hover);
  });
  btn.addEventListener("mouseleave", function () {
    UpdateStyle(btn, ButtonStyle.static);
  });

  btn.addEventListener("resize", function () {
    btn.style.height = `${getParentDimensions(container - 25)}px`;
    btn.style.width = `${getParentDimensions(container - 25)}px`;
  });

  return btn;
}

export function LayerTable(layers, cont) {
  const container = cont;

  function ConstructTable() {
    const wrapperStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",

      color: "white",
      fontSize: "12px",
      fontWeight: "200",
    };
    const wrapper = CreateDiv("layer-list", wrapperStyle);

    const layerStyle = {
      width: "100%",
      height: "5%",
      marginTop: "2%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "all",

      borderRadius: "5px",

      backgroundColor: neutralColors.darkGray,
      color: neutralColors.offWhite,
      boxShadow: "0px 2px 2px rgb(50,50,50)",
    };
    layers.forEach((layer) => {
      const activeStyle = {
        backgroundColor: neutralColors.darkGray75,
        color: neutralColors.offWhite,
        boxShadow: "2px 1px 0px rgba(50, 50, 50, 0.9)",
        fontWeight: "200",
        boxShadow: "0px 2px 2px rgb(50,50,50)",
      };
      const unactiveStyle = {
        backgroundColor: neutralColors.offWhite50,
        color: neutralColors.offWhite,
        fontWeight: "100",
        boxShadow: "0px 0px 0px rgb(50,50,50)",
      };
      const div = CreateDiv(`${layer.name}`, layerStyle);
      div.innerText = layer.name;
      wrapper.append(div);

      layer.sublayers.forEach((sublayer) => {
        const subLayerStyle = {
          marginLeft: "10%",
          width: "90%",
        };
        const div = CreateDiv(`${sublayer.name}`, layerStyle);
        const tertLayerStyle = {
          marginLeft: "20%",
          width: "80%",
        };
        UpdateStyle(div, subLayerStyle);
        div.innerText = sublayer.name;

        if (sublayer.object.visible === true) {
          console.log(true);
          UpdateStyle(div, activeStyle);
        } else if (sublayer.object.visible === false) {
          console.log(false);
          UpdateStyle(div, unactiveStyle);
        }

        wrapper.append(div);

        sublayer.sublayers.forEach((tertlayer) => {
          const div = CreateDiv(`${tertlayer.name}`, layerStyle);
          UpdateStyle(div, tertLayerStyle);
          div.innerText = tertlayer.name;
          console.log(tertlayer.object);
          /*
  
            if (tertlayer.object.visible === true) {
              console.log(true);
              UpdateStyle(div, activeStyle);
            } else if (tertlayer.object.visible === false) {
              console.log(false);
              UpdateStyle(div, unactiveStyle);
            }
              */
          wrapper.append(div);
        });
      });
    });

    container.append(wrapper);
  }
  ConstructTable();

  function LayerToggle(layers) {
    const activeStyle = {
      backgroundColor: neutralColors.darkGray,
      color: neutralColors.offWhite,
      fontWeight: "200",
      boxShadow: "0px 2px 2px rgb(50,50,50)",
    };
    const unactiveStyle = {
      backgroundColor: neutralColors.offWhite50,
      color: neutralColors.offWhite,
      fontWeight: "100",
      boxShadow: "0px 0px 0px rgb(50,50,50)",
    };
    const layerTable = document.getElementById("layer-list");
    let uiLayers = layerTable.querySelectorAll("div");
    uiLayers.forEach((child) => {
      child.addEventListener("click", function (event) {
        layers.forEach((layer) => {
          Toggle(layer, child);
          layer.sublayers.forEach((sublayer) => {
            Toggle(sublayer, child);
            sublayer.sublayers.forEach((tertLayer) => {
              Toggle(tertLayer, child);
            });
          });
        });
      });
    });

    function Toggle(target, button) {
      console.log(button.id);
      if (target.name === button.id) {
        console.log(target);
        target.geometry.forEach((geometry) => {
          geometry.visible = !geometry.visible;
        });
        target.object.visible = !target.object.visible;
        if (target.object.visible === true) {
          UpdateStyle(button, activeStyle);
        } else if (target.object.visible === false) {
          UpdateStyle(button, unactiveStyle);
        }
      }
    }
  }
  LayerToggle(layers);
}

export function CameraControls(container) {
  let wrapper, sunConPanel, cameraConPanel;
  wrapper = CreateDiv("controls", CameraControlsStyle.wrapper);
  function SunControl() {
    let panel, position, height, temp;
    panel = CreateDiv("sun-controls", CameraControlsStyle.sunPanel);
    position = document.createElement("input");
    position.type = "range";
    UpdateStyle(position, CameraControlsStyle.positionSlider);
    height = document.createElement("input");
    height.type = "range";
    UpdateStyle(height, CameraControlsStyle.positionSlider);
    panel.append(position);
    panel.append(height);
    return {
      panel: panel,
    };
  }
  function CameraControl() {
    let panel;
    panel = CreateDiv("camera-controls", CameraControlsStyle.cameraPanel);
    return {
      panel: panel,
    };
  }
  cameraConPanel = CameraControl();
  sunConPanel = SunControl();
  wrapper.append(sunConPanel.panel);
  wrapper.append(cameraConPanel.panel);
  container.append(wrapper);
}
