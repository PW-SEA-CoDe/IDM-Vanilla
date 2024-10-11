import { neutralColors } from "../Styles";

const LayerTableStyle = {
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

export default LayerTableStyle;
