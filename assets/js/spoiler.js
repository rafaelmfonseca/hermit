/**
 * Utils
 */

(function() {
  'use strict';

  function removeSpacingForSingleHighlight(containerEl) {
    const spoilerCode = containerEl.querySelector(".spoiler-content");
    const children = Array.from(spoilerCode.children);

    if (children.length === 1 && children[0].classList.contains("highlight")) {
      spoilerCode.classList.add('remove-spacing');
    }
  }

  function toggleSpoilerVisibility(containerEl) {
    try {
      const spoilerCode = containerEl.querySelector(".spoiler-content");
      spoilerCode.classList.toggle('hidden');
    } catch(e) {
      console && console.log(e);
    }
  }

  function applySpoilerBehavior(containerEl) {
    const spoilerBtn = containerEl.querySelector(".spoiler-header");
    spoilerBtn.addEventListener('click', () => toggleSpoilerVisibility(containerEl));
  }

  function addToggleBehavior(containerEl) {
    removeSpacingForSingleHighlight(containerEl);
    applySpoilerBehavior(containerEl);
  }

  // Add spoiler behavior to spoiler blocks
  const spoilerBlocks = document.getElementsByClassName('spoiler');
  Array.prototype.forEach.call(spoilerBlocks, addToggleBehavior);
})();