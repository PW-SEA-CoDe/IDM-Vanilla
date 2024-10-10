import { Sidebar } from "./src/ui/Containers";
import { Button } from "./src/ui/Components";

//Wrap all UI elements in dict to be called in model to avoid document.getElement loop

//Call preferred container (sidebar)
//Call desired number of buttons

export function UIElements() {
  let elements = {};
  let ui = document.getElementById("ui");

  elements.sb = Sidebar();
  //elements.header = Header();
  elements.buttons = {
    layers: Button(
      elements.sb.menu.body,
      "IDM-Vanilla/icons/Layers.png",
      "layer-button"
    ),
    scene: Button(
      elements.sb.menu.body,
      "IDM-Vanilla/icons/Cameras.png",
      "camera-button"
    ),
    edit: Button(
      elements.sb.menu.body,
      "IDM-Vanilla/icons/Groups.png",
      "group-button"
    ),
    metrics: Button(
      elements.sb.menu.body,
      "IDM-Vanilla/icons/Metrics.png",
      "metrics-button"
    ),
  };
  function ActiveButton() {
    let activeLink;
    for (const [key, value] of Object.entries(elements.buttons)) {
      let button = value;
      button.addEventListener("click", function () {
        console.log(`${key} button clicked`);
        activeLink = key;
      });
    }
    return activeLink;
  }
  let activeButton = ActiveButton();
  console.log(activeButton);

  console.log(elements);
  console.log(elements.buttons);
  return elements;
}
