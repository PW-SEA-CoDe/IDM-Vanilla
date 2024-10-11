import { CreateDiv, UpdateStyle, getParentDimensions } from "../UIUtils";
import LayerTableStyle from "./LayerTableStyle";

function LayerTable(layers, container) {
  function constructLayerTable() {
    const wrapper = CreateDiv("layer-table-wrapper", LayerTableStyle.wrapper);

    layers.forEach((layer) => {
      const layerDiv = CreateDiv(
        `${layer.name}`,
        LayerTableStyle.layerBaseStyle
      );
      layerDiv.innerText = layer.name;
      layerDiv.style.marginLeft = `${10 * (layer.depth - 1)}%`;
      layerDiv.style.width = `${100 - 10 * (layer.depth - 1)}%`;
      wrapper.append(layerDiv);

      if (layer.object.visible === true) {
        UpdateStyle(layerDiv, LayerTableStyle.layerActiveStyle);
      } else if (layer.object.visible === false) {
        UpdateStyle(layerDiv, LayerTableStyle.layerHiddenStyle);
      }
    });
    container.append(wrapper);
  }
  constructLayerTable();

  function layerToggle(target, button) {
    const layerTable = document.getElementById("layer-table-wrapper");
    const layerDivs = layerTable.querySelectorAll("div");
    layerDivs.forEach((div) => {
      div.addEventListener("click", function (event) {
        layers.forEach((layer) => {
          Toggle(layer, div);
        });
      });
    });

    function Toggle(target, button) {
      console.log(button.id);
      if (target.name === button.id) {
        console.log(target);
        //Need to update to provide a live list of visible geometry in scene
        target.geometry.forEach((geometry) => {
          geometry.visible = !geometry.visible;
        });
        target.object.visible = !target.object.visible;
        if (target.object.visible === true) {
          UpdateStyle(button, LayerTableStyle.layerActiveStyle);
        } else if (target.object.visible === false) {
          UpdateStyle(button, LayerTableStyle.layerHiddenStyle);
        }
      }
    }
  }
  layerToggle();
}

export default LayerTable;
