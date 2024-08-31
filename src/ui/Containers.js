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

//Global Variables
const ui = document.getElementById("ui");
console.log("Imported " + ui.id + " correctly!");

//UI Container Elements
export function Taskbar() {
  const constStyle = {
    //Position
    position: "absolute",
    //Display
    //Color
    //Edgs
    //Font
  };
  const closeStyle = {
    //Position
    //Display
    //Color
    //Edgs
    //Font
  };
  const openStyle = {
    //Position
    //Display
    //Color
    //Edgs
    //Font
  };
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

/**
 *
 */
export function Sidebar() {
  function Wrapper() {}
  function Content() {}
  function Menu() {}
  function MenuContent() {}
}

export function OldSidebar() {
  function Container() {
    let obj, constStyle, closeStyle, openStyle;
    constStyle = {
      pointerEvents: "all",
      //Position
      position: "absolute",
      left: "0%",
      top: "0%",
      //Display
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      backdropFilter: "blur(10px)",
      //Color
      backgroundColor: neutralColors.lightBlack75,
      color: neutralColors.offWhite,
      //Edges
      borderRadius: "0px 8px 8px 0px",
      boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
      //Font
      //Transitions
      transition: "width 0.25s, max-width 0.25s, min-width 0.25s",
      transitionTimingFunction: "ease-in-out",
    };
    closeStyle = {
      //Position
      height: "100%",
      width: "5%",
      minWidth: "80px",
      maxWidth: "300px",
      //Display
      //Color
      //Edges
      //Font
      //Transitions
      transition: "width 0.25s, max-width 0.25s, min-width 0.25s",
      transitionTimingFunction: "ease-in-out",
    };
    openStyle = {
      //Position
      height: "100%",
      width: "35%",
      minWidth: "100px",
      maxWidth: "600px",
      //Display
      //Color
      //Edges
      //Font
      //Transitions
      transition: "width 0.25s, max-width 0.25s, min-width 0.25s",
      transitionTimingFunction: "ease-in-out",
    };
    obj = CreateDiv("sidebar", constStyle);
    UpdateStyle(obj, closeStyle);
    return {
      object: obj,
      closedStyle: closeStyle,
      openStyle: openStyle,
    };
  }
  const container = Container();
  ui.append(container.object);

  function Toggle() {
    let obj, constStyle, closeStyle, openStyle;
    constStyle = {
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
      transform: "rotate(45deg)",
      cursor: "pointer",
      //Color
      backgroundColor: neutralColors.darkGray25,

      //Edges
      borderRadius: "50%",
      boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
    };
    closeStyle = {
      transform: "rotate(45deg)",
      transition: "transform 0.25s",
      transitionTimingFunction: "ease-in-out",
    };
    openStyle = {
      transform: "rotate(90deg)",
      transition: "transform 0.25s",
      transitionTimingFunction: "ease-in-out",
    };
    obj = CreateDiv("sidebar-toggle", constStyle);
    UpdateStyle(obj, closeStyle);
    obj.innerText = "✕";
  }
  function button() {
    return {
      object: obj,
      closedStyle: closeStyle,
      openStyle: openStyle,
    };
  }
  const constStyle = {
    pointerEvents: "all",
    //Position
    position: "absolute",
    left: "0%",
    top: "0%",
    //Display
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    backdropFilter: "blur(10px)",
    //Color
    backgroundColor: neutralColors.lightBlack75,
    color: neutralColors.offWhite,
    //Edges
    borderRadius: "0px 8px 8px 0px",
    boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
    //Font
    //Transitions
    transition: "width 0.25s, max-width 0.25s, min-width 0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  const closeStyle = {
    //Position
    height: "100%",
    width: "5%",
    minWidth: "80px",
    maxWidth: "300px",
    //Display
    //Color
    //Edges
    //Font
    //Transitions
    transition: "width 0.25s, max-width 0.25s, min-width 0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  const openStyle = {
    //Position
    height: "100%",
    width: "35%",
    minWidth: "100px",
    maxWidth: "600px",
    //Display
    //Color
    //Edges
    //Font
    //Transitions
    transition: "width 0.25s, max-width 0.25s, min-width 0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  const sidebar = CreateDiv("sidebar", constStyle);
  let sidebarState = "closed";
  UpdateStyle(sidebar, closeStyle);
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

  const toggleConstStyle = {
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
    transform: "rotate(45deg)",
    cursor: "pointer",
    //Color
    backgroundColor: neutralColors.darkGray25,

    //Edges
    borderRadius: "50%",
    boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
  };
  const toggleOpenStyle = {
    transform: "rotate(90deg)",
    transition: "transform 0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  const toggleCloseStyle = {
    transform: "rotate(45deg)",
    transition: "transform 0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  let sbToggle = CreateDiv("sb-toggle", toggleConstStyle);
  sbToggle.innerText = "✕";
  header.append(sbToggle);

  function sbButton(id) {
    let button;
    let buttonStyle = {
      //Position
      height: "65px",
      width: "85%",
      padding: "5px",
      //Display
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: neutralColors.darkGray25,
      boxShadow: `0px 5px 10px ${neutralColors.lightBlack75}`,
      borderRadius: "8px",
      marginTop: "10px",
    };
    button = CreateDiv(id, buttonStyle);
    return {
      button: button,
    };
  }

  let button1 = sbButton("button-1").button;
  let button2 = sbButton("button-2").button;
  let button3 = sbButton("button-3").button;
  let button4 = sbButton("button-4").button;
  body.append(button1, button2, button3, button4);

  function ToggleWidth(sidebar, sidebarState) {
    return function () {
      if (sidebarState === "closed") {
        UpdateStyle(sidebar, openStyle);
        UpdateStyle(sbToggle, toggleOpenStyle);
        sidebarState = "open";
      } else if (sidebarState === "open") {
        UpdateStyle(sidebar, closeStyle);
        UpdateStyle(sbToggle, toggleCloseStyle);
        sidebarState = "closed";
      }
    };
  }
  let interactiveButtons = [sbToggle];
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
