import { FloatingTab, Sidebar, Taskbar } from "./src/ui/Containers";
import { Button, revButton } from "./src/ui/Components";
import { getParentDimensions, UpdateStyle } from "./src/ui/UIUtils";

//Call desired UI container(s)
/**
 * Return UI container as dict of components:
 * - Main (outer most wrapper)
 * - Head, body, etc. (for accessing in Model.js)
 * - any additional information
 */
//Call desired UI menu (pop-up, expand, accordian)

//Call desired container & menu content (Layer Table, Camera, Stacking diagram, etc.)

//Wrap all UI elements in dict to be called in model to avoid document.getElement loop

//Call preferred container (sidebar)
//Call desired number of buttons

export function UIElements() {
  let elements = {};
  let ui = document.getElementById("ui");

  elements.sb = Sidebar();
  elements.buttons = {
    layers: revButton(
      elements.sb.menu.body,
      "/assets/icons/Layers.png",
      "layer-button"
    ),
    cameras: revButton(
      elements.sb.menu.body,
      "/assets/icons/Cameras.png",
      "camera-button"
    ),
    groups: revButton(
      elements.sb.menu.body,
      "/assets/icons/Groups.png",
      "group-button"
    ),
    metrics: revButton(
      elements.sb.menu.body,
      "/assets/icons/Metrics.png",
      "metrics-button"
    ),
  };

  console.log(elements);
  console.log(elements.buttons);
  return elements;
}
