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
import {
  ButtonStyle,
  SceneControlsStyle,
  containerStyles,
  neutralColors,
} from "./Styles";
import { update } from "three/examples/jsm/libs/tween.module.js";

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

export function SceneControls(container) {
  let wrapper;
  let sunControls, cameraControls, importedViews;
  wrapper = CreateDiv("scene-controls", SceneControlsStyle.wrapper.wrapper);
  UpdateStyle(wrapper, containerStyles.flexColumn);

  function SunControls() {
    let wrapper;
    let title, body, toDWrapper, toYWrapper, toDSlider, toYSlider;
    wrapper = CreateDiv(
      "sc-sun-controls",
      SceneControlsStyle.SunControls.wrapper
    );
    UpdateStyle(wrapper, containerStyles.flexColumn);

    title = CreateDiv("sc-sc-title", SceneControlsStyle.SunControls.title);
    title.innerText = "Sun";
    body = CreateDiv("sc-sc-body", SceneControlsStyle.SunControls.body);
    UpdateStyle(body, containerStyles.flexColumn);

    toDWrapper = CreateDiv(
      "sc-sc-toD-wrapper",
      SceneControlsStyle.SunControls.toDWrapper
    );
    UpdateStyle(toDWrapper, containerStyles.flexColumn);
    toDWrapper.innerText = "Time of Day";
    toDSlider = document.createElement("input");
    toDSlider.type = "range";
    UpdateStyle(toDSlider, SceneControlsStyle.SunControls.toDSlider);

    toYWrapper = CreateDiv(
      "sc-sc-toY-wrapper",
      SceneControlsStyle.SunControls.toYWrapper
    );
    UpdateStyle(toYWrapper, containerStyles.flexColumn);
    toYWrapper.innerText = "Time of Year";
    toYSlider = document.createElement("input");
    toYSlider.type = "range";
    UpdateStyle(toYSlider, SceneControlsStyle.SunControls.toYSlider);

    wrapper.append(title);
    wrapper.append(body);
    body.append(toDWrapper);
    toDWrapper.append(toDSlider);
    body.append(toYWrapper);
    toYWrapper.append(toYSlider);

    return {
      wrapper: wrapper,
    };
  }

  function CameraControls() {
    let wrapper;
    let title, body, fovWrapper, fovSlider, projWrapper, perspProj, orthoProj;
    wrapper = CreateDiv(
      "sc-camera-controls",
      SceneControlsStyle.CameraControls.wrapper
    );

    title = CreateDiv("sc-cc-title", SceneControlsStyle.CameraControls.title);
    title.innerText = "Camera";
    body = CreateDiv("sc-cc-body", SceneControlsStyle.CameraControls.body);
    UpdateStyle(body, containerStyles.flexColumn);

    fovWrapper = CreateDiv(
      "sc-cc-fov-wrapper",
      SceneControlsStyle.CameraControls.fovWrapper
    );
    fovWrapper.innerText = "FOV";
    UpdateStyle(fovWrapper, containerStyles.flexColumn);
    fovSlider = document.createElement("input");
    fovSlider.type = "range";
    UpdateStyle(fovSlider, SceneControlsStyle.CameraControls.fovSlider);

    projWrapper = CreateDiv(
      "sc-cc-proj-wrapper",
      SceneControlsStyle.CameraControls.projWrapper
    );
    projWrapper.innerText = "Projection";
    UpdateStyle(projWrapper, containerStyles.flexColumn);
    perspProj = CreateDiv(
      "sc-cc-proj-perspective",
      SceneControlsStyle.CameraControls.perspProj
    );
    perspProj.innerText = "Perspective";
    UpdateStyle(
      perspProj,
      containerStyles.flexColumn,
      containerStyles.centerColumn
    );
    orthoProj = CreateDiv(
      "sc-cc-proj-orthographic",
      SceneControlsStyle.CameraControls.orthoProj
    );
    orthoProj.innerText = "Orthographic";
    UpdateStyle(
      orthoProj,
      containerStyles.flexColumn,
      containerStyles.centerColumn
    );

    wrapper.append(title);
    wrapper.append(body);
    body.append(fovWrapper);
    fovWrapper.append(fovSlider);
    body.append(projWrapper);
    projWrapper.append(perspProj);
    projWrapper.append(orthoProj);

    return {
      wrapper: wrapper,
    };
  }

  function ImportedViews() {
    let wrapper;
    let title, body;
    wrapper = CreateDiv(
      "sc-imported-views",
      SceneControlsStyle.ImportedViews.wrapper
    );
    title = CreateDiv("sc-iv-title", SceneControlsStyle.ImportedViews.title);
    title.innerText = "Imported Views";
    body = CreateDiv("sc-iv-body", SceneControlsStyle.ImportedViews.body);
    UpdateStyle(body, containerStyles.flexColumn);

    wrapper.append(title);
    wrapper.append(body);

    return {
      wrapper: wrapper,
    };
  }

  sunControls = SunControls();
  cameraControls = CameraControls();
  importedViews = ImportedViews();

  wrapper.append(sunControls.wrapper);
  wrapper.append(cameraControls.wrapper);
  wrapper.append(importedViews.wrapper);
  container.append(wrapper);
  return {
    wrapper: wrapper,
  };
}
