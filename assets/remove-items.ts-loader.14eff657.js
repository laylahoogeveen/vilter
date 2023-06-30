(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/remove-items.ts.d061801c.js")
    );
  })().catch(console.error);

})();
