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
import { SceneControlsStyle, containerStyles, neutralColors } from "./Styles";

//Functional UI Elements
export function SceneControls(container, light, camera) {
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
    toDSlider.min = "1";
    toDSlider.value = "180";
    toDSlider.max = "360";
    UpdateStyle(toDSlider, SceneControlsStyle.SunControls.toDSlider);

    toYWrapper = CreateDiv(
      "sc-sc-toY-wrapper",
      SceneControlsStyle.SunControls.toYWrapper
    );
    UpdateStyle(toYWrapper, containerStyles.flexColumn);
    toYWrapper.innerText = "Time of Year";
    toYSlider = document.createElement("input");
    toYSlider.type = "range";
    toYSlider.min = "500";
    toYSlider.value = "750";
    toYSlider.max = "1200";
    UpdateStyle(toYSlider, SceneControlsStyle.SunControls.toYSlider);

    wrapper.append(title);
    wrapper.append(body);
    body.append(toDWrapper);
    toDWrapper.append(toDSlider);
    body.append(toYWrapper);
    toYWrapper.append(toYSlider);

    toDSlider.oninput = function () {
      let radius, angleRad, x, y;
      radius = 500;
      angleRad = (this.value * Math.PI) / 180;
      x = radius * Math.sin(angleRad);
      y = radius * Math.cos(angleRad);
      light.position.x = x;
      light.position.y = y;
      console.log(light.position);
      console.log(this.value);
    };

    toYSlider.oninput = function () {
      light.position.z = parseInt(this.value);
    };

    return {
      wrapper: wrapper,
      timeSlider: toDSlider,
      dateSlider: toYSlider,
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
    fovSlider.min = "5";
    fovSlider.max = "120";
    fovSlider.value = "50";
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

    fovSlider.oninput = function () {
      console.log(this.value);
      console.log(camera);
      camera.fov = parseInt(this.value);
      camera.updateProjectionMatrix();
    };

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
