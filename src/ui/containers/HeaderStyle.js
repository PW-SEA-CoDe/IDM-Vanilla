import { neutralColors } from "../Styles";

const HeaderStyle = {
  container: {
    position: "absolute",
    top: "0",
    right: "12.5%",
    height: "4%",
    width: "75%",
    backgroundColor: neutralColors.lightBlack,
    boxShadow: `0px 0px 10px ${neutralColors.lightBlack50}`,
    color: neutralColors.offWhite,
    fontSize: "18px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0px 0px 10px 10px",
  },
};

export default HeaderStyle;
