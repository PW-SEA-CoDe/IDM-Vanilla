import { CreateDiv } from "../UIUtils";
import HeaderStyle from "./HeaderStyle";

function Header() {
  const ui = document.getElementById("ui");
  const headerContainer = CreateDiv("header-container", HeaderStyle.container);
  headerContainer.innerText = "IDM-Vanilla";
  ui.append(headerContainer);
}

export default Header;
