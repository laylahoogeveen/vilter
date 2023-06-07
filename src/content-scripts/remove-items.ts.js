export const getBlockedList = async () => {
  let result = [""];
  const localList = await chrome.storage.sync.get(["blocked"]);
  if (!!localList && localList.blocked && localList.blocked.length > 0) {
    result = localList.blocked;
  } else {
    await chrome.storage.sync.set({ blocked: [""] });
  }
  return result;
};
let previousUrl = "";
const observer = new MutationObserver(function() {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    setTimeout(() => {
      getBlockedItems();
    }, 1e3);
  }
  getBlockedItems();
});
const config = { subtree: true, childList: true };
observer.observe(document, config);
getBlockedItems();
export async function getBlockedItems() {
  const regularItems = getItemsByClassName("feed-grid__item");
  const homePageItems = getItemsByClassName("horizontal-scroll__item");
  const highlightedItems = getItemsByClassName("closet__item");
  removeItemsFromDOM(regularItems);
  removeItemsFromDOM(highlightedItems);
  removeItemsFromDOM(homePageItems);
  function getItemsByClassName(className) {
    return Array.from(document.getElementsByClassName(className));
  }
  async function removeItemsFromDOM(items) {
    if (items) {
      for (let i = 0; i < items.length; i++) {
        const isHtmlElementBlockedBrand = await isItemBlocked(items[i]);
        if (isHtmlElementBlockedBrand) {
          items[i].style.display = "none";
        }
      }
    }
  }
  async function isItemBlocked(item) {
    const brandContainer = Array.from(
      item.getElementsByClassName("web_ui__ItemBox__details")
    )[0];
    if (!brandContainer) {
      return;
    }
    const brandNameHeading = brandContainer.getElementsByTagName("h4")[0];
    if (!brandNameHeading) {
      return;
    }
    const isBlocked = await isBrandNameInBlockedList(brandNameHeading.innerHTML);
    return isBlocked;
  }
  async function isBrandNameInBlockedList(brandName) {
    const blocked = await getBlockedList();
    if (blocked?.length > 0) {
      return blocked.includes(brandName);
    }
    return false;
  }
}
