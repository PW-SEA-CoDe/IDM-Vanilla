import { FloatingTab, Sidebar, Taskbar } from "./src/ui/Containers";

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

export function UIElements() {
  let elements = {};
  let ui = document.getElementById("ui");
  //elements.fb = FloatingTab();
  elements.tb = Taskbar();
  elements.sb = Sidebar();
  elements.fb = FloatingTab();
  console.log(elements.fb);
  ui.append(elements.fb.wrapper);

  console.log(elements);
  return elements;
}
