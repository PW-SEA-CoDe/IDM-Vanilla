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
  elements.tb = Taskbar();
  elements.sb = Sidebar();
  console.log(elements.sb.content.header);
  let buttonOne = revButton(
    elements.sb.content.body,
    `url("../assets/icons/Layers.png")`,
    "button-1"
  );
  let buttonTwo = revButton(
    elements.sb.content.body,
    `url("../assets/icons/Cameras.png")`,
    "button-2"
  );
  let buttonThree = revButton(
    elements.sb.content.body,
    `url("../assets/icons/Metrics.png")`,
    "button-3"
  );
  elements.sb.content.body.append(buttonOne);
  elements.sb.content.body.append(buttonTwo);
  elements.sb.content.body.append(buttonThree);
  let buttons = [buttonOne, buttonTwo, buttonThree];
  let menuOpen = null;
  buttons.forEach((item) => {
    window.addEventListener("resize", function () {
      item.style.height = `${
        getParentDimensions(elements.sb.content.body) - 6
      }px`;
      item.style.width = `${
        getParentDimensions(elements.sb.content.body) - 6
      }px`;
    });
  });
  //elements.sb = Sidebar();
  //elements.fb = FloatingTab();

  console.log(elements);
  return elements;
}
