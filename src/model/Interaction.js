/**
 * Defines Three Raycaster, and supporting variables. Call PointerHover in model.js
 */

// Modules Imports
import * as THREE from "https://unpkg.com/three@0.164.1/build/three.module.js";

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

/**
 *
 * @param {event} event     event: pass event listener to function
 * @param {object} target   objects: desired objects for raycaster to interact with
 * @param {object} camera   object: scene camera
 * @returns                 dict: object(first intersected object)
 */
export function PointerHover(event, target, camera) {
  let intersected,
    firstIntersected = null;
  let x, y;
  x = (-window.innerWidth / 2 + event.clientX) / (window.innerWidth / 2);
  y = (window.innerHeight / 2 - event.clientY) / (window.innerHeight / 2);

  pointer.x = x;
  pointer.y = y;

  raycaster.setFromCamera(pointer, camera);

  let visibleTargets = [];
  target.forEach((item) => {
    if (item.visible === true) {
      visibleTargets.push(item);
    }
  });

  intersected = raycaster.intersectObjects(visibleTargets, true);
  if (intersected.length > 0) {
    firstIntersected = intersected[0].object;
  } else {
    firstIntersected = null;
  }
  return {
    object: firstIntersected,
  };
}

export function HoverColor(targets, materials, intersected) {
  let visibleTargets = [];
  targets.forEach((item) => {
    if (item.visible === true) {
      visibleTargets.push(item);
    }
  });

  if (intersected !== null) {
    //Execute if intersecting an object
    let hoverColor = new THREE.Color("rgb(255,100,0)");
    intersected.material.color.set(hoverColor);

    //Loop targets to do stuff to items that arent the intersected item
    visibleTargets.forEach((target) => {
      if (target.uuid !== intersected.uuid) {
        materials.forEach((material) => {
          if (material.uuid === target.uuid) {
            target.material.color.set(material.color);
          }
        });
      }
    });
  } else {
    //Execute if not interesting anything
    visibleTargets.forEach((target) => {
      materials.forEach((material) => {
        if (material.uuid === target.uuid) {
          target.material.color.set(material.color);
        }
      });
    });
  }
}

export function ClickedColor(targets, materials, clicked) {
  if (clicked !== null) {
    let clickedColor = new THREE.Color("rgb(100,255,0)");
    clicked.material.color.set(clickedColor);
  }
}
