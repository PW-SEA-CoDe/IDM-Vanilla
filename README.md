# IDM-Vanilla

> This project is part of the 2024 Perkins&Will 'Innovation Incubator' research grant. The codebase is intended for public use, and while currently under heavy development, we welcome contributions once the research grant has concluded (~ Q4 2024).

## Overview

This repository is a companion to [Interactive Design Models](https://github.com/PW-SEA-CoDe/InteractiveDesignModels) and focuses on Vanilla Javascript and Three.js to create a templated project which allows designers to load and interact with a Rhino '.3dm' file in a lightweight standalone web application.

As Three's documentation is focused around implementation in Vanilla JS, this repo acts as the foundation upon which our research and testing as part of the 2024 Perkins&Will 'Innovation Incubator' has taken place. Additional research has also been done using React-Three-Fiber(R3F), a JSX wrapper for Three.js, and can be found in a sibling repo here: [IDM - R3F](https://github.com/PW-SEA-CoDe/IDM-R3F)

## Scope

This project focuses on creating a simple template which tries to integrate all of the 'essential' components required to build a client-side Three.js web application. Our goal was to research and test the best practices for model loading, site structure and model interactivity and, in service of this goal, the current codebase focuses on the following topics:

- Loading .3dm files and accessing model data (layers, materials, attributes, etc.)
- Creation of basic Three.js scene and critical components (lighting, camera, controls, etc.)
- Interaction with model components (i.e. click or hover over model geometry)
- Interaction between UI elements on model components
- Basic styling of UI and models

The current application incorporates all of the items above, although there is still considerable work needed for styling, interaction and QOL which we hope to continue exploring.

## Quick-Start Guide

### Cloning & Installing

You can clone this project to your local machine using the following bash commands(from within your desired directory):

``` bash
$ git clone --no-checkout https://github.com/PW-SEA-CoDe/IDM-Vanilla
$ cd IDM-Vanilla
$ rm -rf .git
```

### Dependencies

Once the repo is cloned, you will need to install relevant dependencies for the project:

```bash
$ npm install
```
> 💡We have tried, where possible, to use ES-Module-Shims which allow the application to access dependencies via an API call on the web (instead of compiling local Node Modules). This reduces the size of the application on build, but requires additional links in the index.html file. 

### Deployment & Testing

#### Vite Config

This project uses [Vite](https://v2.vitejs.dev/) to build & test and has been optimized for deployment on GitHub Pages. Since GH-Pages references to the repository, a few changes needed to be made to the 'vite.config.js' file:

```Javascript
vite.config.js

export default {
  base: "/IDM-Vanilla/",    /// Pre-pends repo name so that assets are correctly referenced on build and test
  publicDIR: "public",      /// Hard-reference to public folder (Vite should handle this by default)
}
```

#### Local Testing

To deploy a local testing environment, use the the `vite` run:
```bash
$ npm run dev
```
This will serve your test deploy via a local port, [http://localhost:XXXX/IDM-Vanilla/](http://localhost:XXXX/), where you can see live updates and changes to the application.

#### Build & Deployment

To build your application for deployment, run:
```bash
$ npm run build
```
This will create a `dist` folder in your project directory. Using Git, make sure you are tracking this new dist folder:
``` bash
$ git add dist/
$ git commit -a -m "dist: tracking dist folder"
$ git push
```
Once the `dist` folder is tracked and pushed to the repository, you can then create a `subtree` from which GH-Pages will listen for any new updates to `dist` and automatically update the link for your application:

> 💡GH-Pages will only re-run the deployment when there are changes to the pushed dist folder. 

> 💡On build, the .JS and .CSS files in dist/assets/ may re-compile under a different name/id. Make sure to check that these files are being tracked correctly by Git before committing/pushing

``` bash
$ git subtree push --prefix dist origin gh-pages
```

## Project Structure

This project is written using Javascript to create a consistent language & syntax between UI elements and Three.js functions so that newer programmers can more clearly connect the logic of the application. That being said, the team has worked to implement similar design principles used by React in the way that we structured the project's components.  

### Core Components

At the root directory of the project, there are four primary files which act as the root from which all other functions and components are reference:

```
index.html      // Root file from which the site is served, and all other files are compiled
index.css       // Defines the base styles used across the site
main.js         // Main JS file where UI elements are called and compiled
model.js        // Main JS file where Model functions are called and compiled
```

In this template, the bulk of the design and programming occurs in the `main.js` and `model.js` files, and their respective tree of components which will be called.

### SRC/ Folder

This project organizes all functions which are used by the application under the `src/` folder. In src, there are sub-folders which collect groupings of different functions.

```
index.html
index.css
main.js
model.js

src/ ↴
  data/ ↴
  model/ ↴
  scene/ ↴
  ui/ ↴ 
```

#### src/data/

Collects all functions used to get data from either the loaded model, or outside sources (json, csv, etc.) 

> 💡 This template does not yet have relevant scripts saved to this folder, but our goal is to populate scripts used on other projects at a later date.

#### src/model/
Collects all functions used to interact with the loaded .3dm model. These scripts depend on Three.js components.
```
src/ ↴
  model/ ↴
    Interaction.js    // Handles raycasting to loaded model (i.e. onHover, onClick functions with model)
    Load3dm.js        // Handles loading the .3dm file and associated data (layers, materials, geometry)
    LoadViews.js      // [IN DEV] Handles camera coordinates of Rhino Cameras using .json file 
```
#### src/scene/
Collects all functions used to create the Three.js scene and its supporting components
```
src/ ↴
  scene/ ↴
    Lighting.js           // Handles a series of possible lighting scenarios which can be loaded
    Postproccessing.js    // Handles postprocessing effects native to Three.js
    SceneInit.js          // Handles creation of core scene components (scene, camera, renderer, etc.)
    SceneUtils.js         // Handles collection of misc utils used by scene (handleWindowResize, etc.)
```

#### src/ui/
Collects all functions/components used to create UI elements in the application. Contains subfolders for `containers/` and `components/` with sibling files similar to React file structure. For now, .JS files are used to handle styles similar to Tailwinds in order to allow tokenization in CSS for repeated styles like colors, fonts, etc.
```
src/ ↴
  ui/ ↴
    containers/ ↴
      Header.js         // Header component
      Sidebar.js        // Sidebar component

    components/ ↴
      LayerTable.js     // Layer table constructed by model layers
      NavButton.js      // Repeatable NavButton

    Styles.js           // General styles repeatably used across app
    UIUtils.js          // Re-usable components to help with UI build (CreatDiv, UpdateStyle, etc.)
```
### Public Folder
The public folder collects all static assets which are used by the application. This is where your .3dm file, any icons used in the app, and any external data (.csv, .json) should be stored.  The public folder contains subfolders for different data as follows:
```
public/ ↴
  data/ ↴         // Any data used by the app (.csv, .json, etc.)
  icons/ ↴        // Any icons used by the app
  models/ ↴       // Any models loaded by the app
```