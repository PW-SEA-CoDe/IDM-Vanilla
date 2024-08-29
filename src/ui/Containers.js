/**
 * Module for defining basic UI containers. Scope should be limited to defining the general position
 * and styling of the container/wrapper while any graphic/interactivity should be defined in a seperate
 * import module. For example:
 *
 * function SideBar should be defined in this file while,
 * function SideBarNav should be defined in Menus.js
 * function StackingDiagram should be defined in Graphics.js
 */

import { CreateDiv, UpdateStyle } from "./UIUtils";
import { HoverStyle, neutralColors, pwColors } from "./Styles";
import { Button, LayerTable } from "./Components";
import { BasicDepthPacking } from "three";

//Global Variables
const ui = document.getElementById("ui");
console.log("Imported " + ui.id + " correctly!");

//UI Container Elements
export function Taskbar() {
  const style = {
    pointerEvents: "all",

    //Position
    position: "absolute",
    top: "93%",
    left: "2.5%",
    width: "95%",
    height: "6%",
    zIndex: "1",

    //Display
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    //Color
    backgroundColor: neutralColors.lightBlack75,

    //Edges
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
  };
  const div = CreateDiv("taskbar", style);
  ui.append(div);

  let button1 = Button("layers", `url("../assets/icons/Layers.png")`);
  let button2 = Button("cameras", `url("../assets/icons/Cameras.png")`);
  let button3 = Button("groups", `url("../assets/icons/Groups.png")`);
  let button4 = Button("metrics", `url("../assets/icons/Metrics.png")`);

  let buttons = [button1, button2, button3, button4];
  div.append(button1);
  div.append(button2);
  div.append(button3);
  div.append(button4);

  const menuStyle = {
    pointerEvents: "all",

    //Position
    position: "absolute",
    bottom: "5%",
    left: "45%",
    width: "50%",
    height: "1%",
    zIndex: "0",

    //Display
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

    //Color
    backgroundColor: neutralColors.lightBlack50,

    //Edges
    borderRadius: "8px",
    backdropFilter: "blur(10px)",
    boxShadow: `0px 10px 100px ${neutralColors.lightBlack25}`,

    //Transitions
    transition: "height 0.25s ease-in-out",
  };
  const menu = CreateDiv("taskbar-menu", menuStyle);
  let mHead, mBody, mFoot;
  let hStyle, bStyle, fStyle;
  hStyle = {
    //Position
    height: "5%",
    width: "100%",
    //Edges
    padding: "10px",
    //Color
    color: `${neutralColors.offWhite}`,
    //Font
    fontWeight: "600",
    textAlign: "center",
  };
  bStyle = {
    height: "90%",
    width: "90%",
  };
  fStyle = {
    height: "5%",
    width: "100%",
  };
  const menuHeader = CreateDiv("tb-menu-head", hStyle);
  const menuBody = CreateDiv("tb-menu-body", bStyle);
  const menuFooter = CreateDiv("tb-menu-foot", fStyle);
  menu.append(menuHeader);
  menu.append(menuBody);
  menu.append(menuFooter);

  let menuOpen = false;
  ui.append(menu);

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(button.id);
      if (menuOpen === false) {
        menu.style.height = "60%";
        menuOpen = true;
      } else if (menuOpen === true) {
        menu.style.height = "1%";
        menuOpen = false;
      }
      menuHeader.innerText =
        button.id.charAt(0).toUpperCase() + button.id.slice(1);
    });
  });

  return {
    mHead: menuHeader,
    mBody: menuBody,
    mFoot: menuFooter,
  };
}

export function Sidebar() {
  const style = {
    pointerEvents: "all",

    //Position
    position: "absolute",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "8%",

    //Display
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",

    //Color
    backgroundColor: neutralColors.lightBlack75,

    //Edges
    borderRadius: "0px 8px 8px 0px",
    backdropFilter: "blur(10px)",
    boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,

    //Transitions
    transition: "width 0.25s ease-in-out",
  };
  const sidebar = CreateDiv("sidebar", style);
  let sidebarState = "closed";
  ui.append(sidebar);

  let header, body, footer;
  function SideBarContent() {
    let headerStyle = {
      //Position
      height: "5%",
      width: "100%",
      //Display
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
    header = CreateDiv("sb-head", headerStyle);
    let bodyStyle = {
      //Position
      height: "90%",
      width: "100%",
      //Display
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "top",
    };
    body = CreateDiv("sb-body", bodyStyle);
    let footerStyle = {
      //Position
      height: "5%",
      width: "100%",
      //Display
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
    footer = CreateDiv("sb-footer", footerStyle);
    sidebar.append(header);
    sidebar.append(body);
    sidebar.append(footer);
  }
  SideBarContent();

  const toggleStyle = {
    //Position
    position: "relative",
    top: "0%",
    left: "0%",
    height: "30px",
    width: "30px",

    //Display
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    //Color
    backgroundColor: neutralColors.darkGray25,

    //Edges
    borderRadius: "50%",
    boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
  };
  let sbToggle = CreateDiv("sb-toggle", toggleStyle);
  header.append(sbToggle);

  function AltButton(id) {
    let button;
    let buttonStyle = {
      height: "65px",
      width: "85%",
      backgroundColor: neutralColors.darkGray25,
      boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
      borderRadius: "8px",
      marginTop: "10px",
    };
    button = CreateDiv(id, buttonStyle);
    return button;
  }

  let button1 = AltButton("button-1");
  let button2 = AltButton("button-2");
  let button3 = AltButton("button-3");
  let button4 = AltButton("button-4");
  body.append(button1, button2, button3, button4);

  function ToggleWidth(sidebar, sidebarState) {
    return function () {
      let openStyle = {
        //Position
        width: "40%",
      };
      let closedStyle = {
        //Position
        width: "8%",
      };
      if (sidebarState === "closed") {
        UpdateStyle(sidebar, openStyle);
        sidebarState = "open";
      } else if (sidebarState === "open") {
        UpdateStyle(sidebar, closedStyle);
        sidebarState = "closed";
      }
    };
  }
  let interactiveButtons = [sbToggle, button1, button2, button3, button4];
  interactiveButtons.forEach((button) => {
    button.addEventListener("click", ToggleWidth(sidebar, sidebarState));
  });
}

export function FloatingTab() {
  let wrapper, wrapperStyle;
  wrapperStyle = {
    //Location
    position: "absolute",
    bottom: "1%",
    left: "1%",

    //Size
    minWidth: "200px",
    width: "15%",
    maxWidth: "100%",

    minHeight: "100px",
    height: "50%",
    maxHeight: "100%",

    //Framing
    padding: "10px",
    margin: "10px",

    //Style
    backgroundColor: neutralColors.lightBlack75,
    backdropFilter: "blur(5px)",
    borderRadius: "20px",
  };
  wrapper = CreateDiv("fb-wrapper", wrapperStyle);
  //ui.append(wrapper);
  return {
    wrapper: wrapper,
    test: "Test",
  };
}
