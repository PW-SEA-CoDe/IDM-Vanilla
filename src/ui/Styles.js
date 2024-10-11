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
  //None
  empty: "rgba(0,0,0,0)",
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
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  centerColumn: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  centerRow: {
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
    width: "5%",
    minWidth: "80px",
    maxWidth: "300px",
    height: "100%",
    left: "0",
    top: "0",
    backgroundColor: neutralColors.lightBlack75,
    boxShadow: `0px 0px 10px ${neutralColors.lightBlack50}`,
    backdropFilter: "blur(20px)",
    borderRadius: "0px 10px 10px 0px",
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  },
  footer: {
    height: "5%",
    width: "100%",
  },
  panelWrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    width: "30%",
    height: "98%",
    left: "min(10%, 80px)",
    top: "1%",
    padding: "5px",
    backgroundColor: neutralColors.lightBlack50,
    opacity: "1",
    transition: "left 0.5s",
    transitionTimingFunction: "ease",
    borderRadius: "0px 10px 10px 0px",
    boxShadow: `0px 0px 5px ${neutralColors.lightBlack25}`,
    backdropFilter: "blur(20px)",
  },
  panelHeader: {
    height: "5%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    borderRadius: "10px",
    backgroundColor: "none",
  },
  panelBody: {
    height: "100%",
    width: "100%",
    marginTop: "5px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: neutralColors.lightBlack75,
  },
  panelFooter: {
    height: "0%",
    width: "100%",
    marginTop: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "none",
  },
  panelHeadIcon: {
    width: "30%",
    height: "100%",
    backgroundColor: "none",
    backgroundImage: "url(icons/Layers.png)",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  panelHeadTitle: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    color: neutralColors.offWhite,
    fontSize: "18px",
    fontWeight: "600",
  },
  toggle: {
    pointerEvents: "all",
    cursor: "pointer",
    width: "100%",
    minWidth: "20px",
    maxWidth: "100px",
    minHeight: "20px",
    maxHeigh: "100px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: neutralColors.darkGray75,
    color: neutralColors.offWhite,
    fontSize: "16px",
    transform: "rotate(0deg)",
    transition: "transform 0.5s",
    transitionTimingFunction: "ease",
  },
};

export let ButtonStyle = {
  static: {
    pointerEvents: "all",
    cursor: "pointer",
    padding: "1px",
    margin: "10px 0px",
    backgroundColor: neutralColors.empty,
    boxShadow: `0px 0px 0px ${neutralColors.lightBlack75}`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    opacity: "0.75",
  },
  hover: {
    backgroundColor: neutralColors.darkGray,
    boxShadow: `0px 5px 5px ${neutralColors.lightBlack}`,
  },
};

export let LayerTableStyle = {
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    pointerEvents: "all",
  },
  layerBaseStyle: {
    width: "100%",
    height: "4%",
    marginTop: "2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "all",

    borderRadius: "5px",

    backgroundColor: neutralColors.darkGray75,
    color: neutralColors.offWhite,
    boxShadow: "0px 2px 2px rgb(50,50,50)",
  },
  layerActiveStyle: {
    backgroundColor: neutralColors.darkGray75,
    color: neutralColors.offWhite,
    border: "none",
    boxShadow: "2px 1px 0px rgba(50, 50, 50, 0.9)",
    fontWeight: "200",
    boxShadow: "0px 2px 2px rgb(50,50,50)",
  },
  layerHiddenStyle: {
    backgroundColor: neutralColors.lightBlack75,
    color: neutralColors.white25,
    fontWeight: "100",
    border: "dashed",
    borderWidth: "0.25px",
    borderColor: neutralColors.white25,
    boxShadow: `0px 0px 0px ${neutralColors.darkGray75}`,
  },
};

export let SceneControlsStyle = {
  //Overall items
  wrapper: {
    wrapper: {
      width: "100%",
      height: "100%",
      padding: "0px",
    },
  },
  //Sun Controls
  SunControls: {
    wrapper: {
      height: "auto",
      width: "100%",
      padding: "5px",
      //backgroundColor: neutralColors.darkGray25,
    },
    title: {
      width: "100%",
      height: "auto",
      padding: "5px",
      color: neutralColors.offWhite,
      fontWeight: "600",
    },
    body: {
      width: "100%",
      height: "auto",
      padding: "5px",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: neutralColors.lightBlack25,
    },
    toDWrapper: {
      pointerEvents: "all",
      width: "100%",
      height: "100%",
      color: neutralColors.offWhite,
    },
    toYWrapper: {
      pointerEvents: "all",
      width: "100%",
      height: "100%",
      color: neutralColors.offWhite,
    },
    toDSlider: {
      height: "auto",
      marginTop: "10%",
      marginBottom: "10%",
    },
    toYSlider: {
      height: "auto",
      marginTop: "10%",
      marginBottom: "10%",
    },
  },
  //Camera Controls
  CameraControls: {
    wrapper: {
      height: "auto",
      width: "100%",
      padding: "5px",
      //backgroundColor: neutralColors.darkGray25,
    },
    title: {
      width: "100%",
      height: "auto",
      padding: "5px",
      color: neutralColors.offWhite,
      fontWeight: "600",
    },
    body: {
      width: "100%",
      height: "auto",
      padding: "5px",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: neutralColors.lightBlack25,
    },
    fovWrapper: {
      height: "auto",
      width: "100%",
      pointerEvents: "all",
      color: neutralColors.offWhite,
    },
    fovSlider: {
      height: "auto",
      marginTop: "10%",
      marginBottom: "10%",
    },
    projWrapper: {
      height: "100%",
      width: "100%",
      pointerEvents: "all",
      color: neutralColors.offWhite,
    },
    perspProj: {
      width: "100%",
      height: "50%",
      borderRadius: "8px",
      marginTop: "5%",
      marginBottom: "5%",
      backgroundColor: neutralColors.darkGray,
    },
    orthoProj: {
      width: "100%",
      height: "100%",
      borderRadius: "8px",
      marginTop: "5%",
      marginBottom: "5%",
      backgroundColor: neutralColors.darkGray,
    },
  },
  //Imported Views
  ImportedViews: {
    wrapper: {
      height: "100%",
      width: "100%",
      //backgroundColor: neutralColors.darkGray25,
    },
    title: {
      width: "100%",
      height: "auto",
      padding: "5px",
      color: neutralColors.offWhite,
      fontWeight: "600",
    },
    body: {
      width: "100%",
      height: "auto",
      padding: "5px",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: neutralColors.lightBlack25,
    },
  },
};
