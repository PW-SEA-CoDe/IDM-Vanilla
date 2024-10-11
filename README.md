# IDM-Vanilla

> This project is part of the 2024 Perkins&Will 'Innovation Incubator' research grant. The codebase is intended for public use, and while currently under heavy development, we welcome contributions once the research grant has concluded (~ Q4 2024).

## Overview

This repository is a companion to [Interactive Design Models](https://github.com/PW-SEA-CoDe/InteractiveDesignModels) and focuses on Vanilla Javascript and Three.js to create a templated project which allows designers to load and interact with a Rhino '.3dm' file in a lightweight standalone web application.

As Three's documentation is focused around implementation in JS, this repo acts as the foundation upon which our research and testing as part of the 2024 Perkins&Will 'Innovation Incubator' has taken place. Additional research has also been done using React-Three-Fiber(R3F) and can be found in a sibling repo here: [IDM - R3F](https://github.com/PW-SEA-CoDe/IDM-R3F)

## Scope

This project aims to explore the potential for users to interact with 3d models on the web using Three. Our initial goal is to better understand the core functionality that Three provides and develope best practices around model loading, site structure and model interactivity. In service of that goal, the project currently is focused around research and testing of the following components:

- Loading .3dm files and accessing model data (layers, materials, attributes, etc.)
- Creation of basic Three.js scene and critical components (lighting, camera, controls, etc.)
- Interaction with model components (i.e. click or hover over model geometry)
- Interaction between UI elements on model components
- Basic styling of UI and models

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