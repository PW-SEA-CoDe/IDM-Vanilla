import { CreateDiv, getParentDimensions, UpdateStyle } from "../UIUtils";
import ButtonStyle from "./NavButtonStyle";

function NavButton(container, icon, id, togglePanel) {
  const button = CreateDiv(id, ButtonStyle.static);
  button.style.height = `${getParentDimensions(container) - 25}px`;
  button.style.width = `${getParentDimensions(container) - 25}px`;
  button.style.backgroundImage = `url(${icon})`;
  container.append(button);

  button.addEventListener("mouseover", function () {
    UpdateStyle(button, ButtonStyle.hover);
  });
  button.addEventListener("mouseleave", function () {
    UpdateStyle(button, ButtonStyle.static);
  });

  window.addEventListener("resize", function () {
    button.style.height = `${getParentDimensions(container) - 25}px`;
    button.style.width = `${getParentDimensions(container) - 25}px`;
  });

  button.addEventListener("click", function () {
    if (togglePanel.style.left !== "8%") {
      togglePanel.style.left = "8%";
    }
  });

  return button;
}

export default NavButton;
