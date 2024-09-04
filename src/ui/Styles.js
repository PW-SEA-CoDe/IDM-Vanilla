/**
 * Modules for defining colors, styles and other style related scripts/elements to be loaded into site.
 * Modules should be called into Containers.js when init of UI elements occurs, but can exist elsewhere as needed.
 *
 */

import { UpdateStyle } from "./UIUtils";

//Colors
export let pwColors = {
  //Blues
  darkBlue: "rgba(0,30,98,1)",
  Blue: "rgba(24,24,165,1)",
  lightBlue: "rgba(85,118,209,1)",
  iceBlue: "rgba(198,214,237,1)",
  //Greens
  darkGreen: "rgba(40,92,77,1)",
  Green: "rgba(0,155,119,1)",
  lightGreen: "rgba(113,204,152,1)",
  iceGreen: "rgba(189,233,201,1)",
  //Pinks
  darkPink: "rgba(125,0,97,1)",
  Pink: "rgba(171,0,139,1)",
  lightPurple: "rgba(25,127,210,1)",
  icePurple: "rgba(247,184,202,1)",
  //Purples
  darkPurple: "rgba(68,0,153,1)",
  Purple: "rgba(102,56,189)",
  lightPurple: "rgba(144,99,205)",
  icePurple: "rgba(210,198,230,1)",
  //Oranges
  darkOrange: "rgba(221,72,50,1)",
  Orange: "rgba(242,99,68,1)",
  lightOrange: "rgba(255,169,0,1)",
  iceOrange: "rgba(249,204,131,1)",
  //Yellows
  iceYellow: "rgba(233,236,107,1)",
};

export let neutralColors = {
  //Whites
  white: "rgba(255,255,255,1)",
  white75: "rgba(255,255,255,0.75)",
  white50: "rgba(255,255,255,0.50)",
  white25: "rgba(255,255,255,0.25)",
  offWhite: "rgba(243,243,239,1)",
  offWhite75: "rgba(243,243,239,0.75)",
  offWhite50: "rgba(243,243,239,0.50)",
  offWhite25: "rgba(243,243,239,0.25)",
  //Grays
  darkGray: "rgba(76,79,84,1)",
  darkGray75: "rgba(76,79,84,0.75)",
  darkGray50: "rgba(76,79,84,0.50)",
  darkGray25: "rgba(76,79,84,0.25)",
  lightGray: "rgba(236,239,234,1)",
  //Blacks
  fullBlack: "rgba(0,0,0,1)",
  lightBlack: "rgba(26,29,34,1)",
  lightBlack75: "rgba(26,29,34,0.75)",
  lightBlack50: "rgba(26,29,34,0.50)",
  lightBlack25: "rgba(26,29,34,0.25)",
};

//Styles
export let containerStyles = {
  flexCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  flexCenterRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
};

//Interaction and Animation

export function HoverStyle(target, activeStyle, inactiveStyle) {
  target.addEventListener("mouseover", function () {
    UpdateStyle(target, activeStyle);
  });
  target.addEventListener("mouseleave", function () {
    UpdateStyle(target, inactiveStyle);
  });
}

//Sidebar
export let SidebarStyle = {
  wrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "10%",
    height: "100%",
    right: "0",
    top: "0",
    backgroundColor: neutralColors.lightBlack75,
  },
  header: {
    height: "5%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    height: "90%",
    width: "100%",
  },
  footer: {
    height: "5%",
    width: "100%",
  },
  panelWrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "100%",
    right: "10%",
    top: "0",
    padding: "5px",
    backgroundColor: neutralColors.darkGray75,
    opacity: "0",
    transition: "opacity 0.5s",
    transitionTimingFunction: "ease",
  },
  panelHeader: {
    height: "10%",
    width: "100%",
    display: "flex",
    flexDireciton: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: neutralColors.offWhite25,
  },
  panelBody: {
    height: "70%",
    width: "100%",
    marginTop: "5px",
    display: "flex",
    flexDireciton: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: neutralColors.offWhite25,
  },
  toggle: {
    pointerEvents: "all",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: neutralColors.darkGray75,
    color: neutralColors.offWhite,
    fontSize: "21px",
    transform: "rotate(45deg)",
    transition: "transform 0.5s",
    transitionTimingFunction: "ease",
  },
};
