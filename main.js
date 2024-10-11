import { Sidebar } from "./src/ui/Containers";
import { Button } from "./src/ui/Components";
import NewSidebar from "./src/ui/containers/Sidebar";
import Header from "./src/ui/containers/Header";

//Wrap all UI elements in dict to be called in model to avoid document.getElement loop

//Call preferred container (sidebar)
//Call desired number of buttons

export function UIElements() {
  let elements = {};
  let ui = document.getElementById("ui");

  elements.nb = NewSidebar();
  elements.hd = Header();

  elements.buttons = {
    layers: Button(elements.nb.nav.body, "icons/Layers.png", "layer-button"),
    scene: Button(elements.nb.nav.body, "icons/Cameras.png", "camera-button"),
    edit: Button(elements.nb.nav.body, "icons/Groups.png", "group-button"),
    metrics: Button(
      elements.nb.nav.body,
      "icons/Metrics.png",
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
