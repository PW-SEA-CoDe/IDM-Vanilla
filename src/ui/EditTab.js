import { neutralColors } from "./Styles";
import { CreateDiv, UpdateStyle } from "./UIUtils";

//Global Variables
const ui = document.getElementById("ui");

export default function EditTab(container) {
  let wrapper, head, body;
  let wrapperStyle = {
    pointerEvents: "all",
    width: "100%",
    height: "100%",
    backgroundColor: neutralColors.offWhite,
  };
  wrapper = CreateDiv("edit-container", wrapperStyle);
  container.append(wrapper);
}
