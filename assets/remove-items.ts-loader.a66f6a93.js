(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/remove-items.ts.e37d703c.js")
    );
  })().catch(console.error);

})();
