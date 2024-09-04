import { FloatingTab, OldSidebar, Sidebar, Taskbar } from "./src/ui/Containers";
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
  elements.tb = Taskbar();
  elements.sb = Sidebar();
  let layersBtn = revButton(
    elements.sb.menu.body,
    "/assets/icons/Layers.png",
    "layer-button"
  );
  let camerasBtn = revButton(
    elements.sb.menu.body,
    "/assets/icons/Cameras.png",
    "layer-button"
  );
  let gorupsBtn = revButton(
    elements.sb.menu.body,
    "/assets/icons/Groups.png",
    "layer-button"
  );
  let metricsBtn = revButton(
    elements.sb.menu.body,
    "/assets/icons/Metrics.png",
    "layer-button"
  );

  console.log(elements);
  return elements;
}
