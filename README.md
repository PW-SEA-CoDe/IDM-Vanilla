# IDM-Vanilla

> This project is part of the 2024 Perkins&Will 'Innovation Incubator' research grant. The codebase is intended for public use, and while currently under heavy development, we welcome contributions once the research grant has concluded (~ Q4 2024).

### Overview

This repository is a companion to [Interactive Design Models](https://github.com/PW-SEA-CoDe/InteractiveDesignModels) and focuses on Vanilla Javascript and Three.js to create a templated project which allows designers to load and interact with a Rhino '.3dm' file in a lightweight standalone web application.

As Three's documentation is focused around implementation in JS, this repo acts as the foundation upon which our research and testing as part of the 2024 Perkins&Will 'Innovation Incubator' has taken place. Additional research has also been done using React-Three-Fiber(R3F) and can be found in a sibling repo here: [IDM - R3F](https://github.com/PW-SEA-CoDe/IDM-R3F)

### Scope

This project aims to explore the potential for users to interact with 3d models on the web using Three. Our initial goal is to better understand the core functionality that Three provides and develope best practices around model loading, site structure and model interactivity. In service of that goal, the project currently is focused around research and testing of the following components:

- Loading .3dm files and accessing model data (layers, materials, attributes, etc.)
- Creation of basic Three.js scene and critical components (lighting, camera, controls, etc.)
- Interaction with model components (i.e. click or hover over model geometry)
- Interaction between UI elements on model components
- Basic styling of UI and models

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
- Unload hidden assets on layer click
- ✅ Buttons update on screen resize
- Move container/component styles to respective files (i.e. ComponentStyle.js, ContainerStyles.js)
- Layertable toggling parent also toggles sub layers
- Parent layers have drop down to hide children layers
- Sidebar buttons toggle menu open on click, but not when menu is open (only listen to buttons if menuOpen = false)
- EDIT Button, allow user to click on geometry and change material, edit name, etc

- Layer Table

  - Unload assets when layer is hidden (instead of toggle visibility)
  - Toggling parent layer also controls child layers

- Scene Controls

  - Track updated FOV and sun position and pass into function
  - Perspective / Ortho camera switching
  - Imported Views from Rhino

- Edit

- Metrics
