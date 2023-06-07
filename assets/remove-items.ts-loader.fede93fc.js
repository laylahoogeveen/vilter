(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/remove-items.ts.840753d9.js")
    );
  })().catch(console.error);

})();
