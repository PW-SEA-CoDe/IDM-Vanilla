import { FloatingTab, Sidebar, Taskbar } from "./src/ui/Containers";

export function UIElements() {
  let elements = {};
  //elements.fb = FloatingTab();
  elements.tb = Taskbar();
  elements.sb = Sidebar();

  console.log(elements);
  return elements;
}
