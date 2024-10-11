import { neutralColors } from "../Styles";

const NavButtonStyle = {
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

export default NavButtonStyle;
