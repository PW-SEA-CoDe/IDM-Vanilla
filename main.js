import Sidebar from "./src/ui/containers/Sidebar";
import Header from "./src/ui/containers/Header";
import NavButton from "./src/ui/components/NavButton";

//Wrap all UI elements in dict to be called in model to avoid document.getElement loop

//Call preferred container (sidebar)
//Call desired number of buttons

export function UIElements() {
  let elements = {};
  let ui = document.getElementById("ui");

  elements.nb = Sidebar();
  elements.hd = Header();

  elements.buttons = {
    layers: NavButton(
      elements.nb.nav.body,
      "icons/Layers.png",
      "layer-button",
      elements.nb.context.container
    ),
    scene: NavButton(
      elements.nb.nav.body,
      "icons/Cameras.png",
      "camera-button",
      elements.nb.context.container
    ),
    edit: NavButton(
      elements.nb.nav.body,
      "icons/Groups.png",
      "group-button",
      elements.nb.context.container
    ),
    metrics: NavButton(
      elements.nb.nav.body,
      "icons/Metrics.png",
      "metrics-button",
      elements.nb.context.container
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
