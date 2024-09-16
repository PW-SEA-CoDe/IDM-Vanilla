# IDM-Vanilla

A companion repo for Interactive Design Models, using Vanilla Javascript and Three.

### Notes

- Scope of project is to create a template codebase that can be leveraged to create a unique microsite for specific projects
- Codebase contains:
  - (3) classic types of UI containers (sidebar, taskbar and floating tab) which can be called as desired
    - Each container contains a menu for interacting with model data, which is currently unique to each menu type (expand for sidebar, pop-up menu for taskbar, accordian collapse for floating tab). Ultimate goal would be to have these seperate and can be called independently
  - UI interactive menus (layer table, sun/scene controls, camera controls, model metrics)
  - Basic Three.js scene setup
  - Basic Rhino Model loading functions
  - (POTENTIAL) Example project metrics to load (ideally this is pulled directly from model on load)

### To-Do's

- Light / Dark mode toggle
- Unload hidden assets
- ✅ Buttons update on screen resize
- Move container/component styles to respective files (i.e. ComponentStyle.js, ContainerStyles.js)
- Layertable toggling parent also toggles sub layers
- Parent layers have drop down to hide children layers
- Sidebar buttons toggle menu open on click, but not when menu is open (only listen to buttons if menuOpen = false)
- EDIT Button, allow user to click on geometry and change material, edit name, etc
