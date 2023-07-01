(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/remove-items.ts.64735d42.js")
    );
  })().catch(console.error);

})();
