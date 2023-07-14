(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/remove-items.ts.f0ec7e7b.js")
    );
  })().catch(console.error);

})();
