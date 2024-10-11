import { CreateDiv, getParentDimensions, UpdateStyle } from "../UIUtils";
import SidebarStyle from "./SidebarStyle";

function NewSidebar() {
  const ui = document.getElementById("ui");

  function NavBar() {
    const container = CreateDiv(
      "sidebar-nav-container",
      SidebarStyle.navContainer
    );

    const header = CreateDiv("sidebar-nav-header", SidebarStyle.navHeader);
    const body = CreateDiv("sidebar-nav-body", SidebarStyle.navBody);
    const footer = CreateDiv("sidebar-nav-footer", SidebarStyle.navFooter);
    container.append(header, body, footer);

    return {
      container: container,
      header: header,
      body: body,
      footer: footer,
    };
  }

  function ContextMenu() {
    const container = CreateDiv(
      "sidebar-panel-container",
      SidebarStyle.contextContainer
    );

    const header = CreateDiv(
      "sidebar-context-header",
      SidebarStyle.contextHeader
    );

    const headerIcon = CreateDiv(
      "sidebar-context-header-icon",
      SidebarStyle.contextHeadIcon
    );
    const headerTitle = CreateDiv(
      "sidebar-context-header-title",
      SidebarStyle.contextHeadTitle
    );
    header.append(headerIcon, headerTitle);
    headerTitle.innerText = "Layers";

    const body = CreateDiv("sidebar-context-body", SidebarStyle.contextBody);
    const footer = CreateDiv(
      "sidebar-context-footer",
      SidebarStyle.contextFooter
    );
    container.append(header, body, footer);

    return {
      container: container,
      header: header,
      headTitle: headerTitle,
      headIcon: headerIcon,
      body: body,
      footer: footer,
    };
  }

  function ToggleButton(targ, panel) {
    let parentDim = getParentDimensions(targ);
    let adjustedStyle = {
      height: `${parentDim - 10}px`,
      width: `${parentDim - 10}px`,
    };
    let toggle = CreateDiv("sidebar-panel-toggle", SidebarStyle.toggle);
    let toggleOpen = true;
    UpdateStyle(toggle, adjustedStyle);
    toggle.innerText = "✕";
    targ.append(toggle);
    function updatePanelState() {
      if (toggleOpen === false) {
        toggleOpen = true;
      } else {
        toggleOpen = false;
      }
    }
    toggle.addEventListener("click", function () {
      if (toggleOpen === false) {
        toggle.style.transform = "rotate(0deg)";
        panel.style.left = "8%";
        updatePanelState();
      } else {
        toggle.style.transform = "rotate(-45deg)";
        panel.style.left = "-100%";
        updatePanelState();
      }
    });
  }

  const nav = NavBar();
  const context = ContextMenu();
  const toggle = ToggleButton(nav.header, context.container);

  ui.append(nav.container, context.container);

  return {
    nav: nav,
    context: context,
  };
}

export default NewSidebar;
