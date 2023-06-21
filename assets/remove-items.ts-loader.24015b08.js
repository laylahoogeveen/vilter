(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/remove-items.ts.79ed12f7.js")
    );
  })().catch(console.error);

})();
