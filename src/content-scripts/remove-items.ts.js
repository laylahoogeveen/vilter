import {
  addSearchToList,
  getSearchesPreference,
  removeSearchByCurrentUrl
} from "/src/utils/chrome-searches-storage.ts.js";
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (!request.message) {
    return;
  }
  if (request.message == "rerun_script_permission") {
    observer.takeRecords();
    observer.disconnect();
    getBlockedItems();
    observer.observe(content, config);
  }
});
let saveButton;
let savedSearchForm;
let hasSaved = false;
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
const content = document.getElementById("content") ?? document.body;
const config = { subtree: true, childList: true };
const observer = new MutationObserver(function(_, observer2) {
  observer2.takeRecords();
  observer2.disconnect();
  getBlockedItems();
  observer2.observe(content, config);
});
function observe() {
  observer.observe(content, config);
  if (!!location.href && !location.href.includes("vinted.")) {
    observer.disconnect();
  }
}
onFirstLoad();
export async function getBlockedItems() {
  const blocked = await getBlockedList();
  const regularItems = getItemsByClassName("feed-grid__item");
  const homePageItems = getItemsByClassName("horizontal-scroll__item");
  const highlightedItems = getItemsByClassName("closet__item");
  removeItemsFromDOM(regularItems);
  removeItemsFromDOM(highlightedItems);
  removeItemsFromDOM(homePageItems);
  function getItemsByClassName(className, container) {
    if (container) {
      return Array.from(
        container.getElementsByClassName(className)
      );
    }
    return Array.from(document.getElementsByClassName(className));
  }
  function removeItemsFromDOM(items) {
    const toBeRemoved = [];
    items?.forEach((item) => {
      const isHtmlElementBlockedBrand = isItemBlocked(item);
      if (isHtmlElementBlockedBrand) {
        toBeRemoved.push(item);
      }
    });
    toBeRemoved.forEach((item) => {
      item.style.display = "none";
    });
  }
  function isItemBlocked(item) {
    const possibleBrandContainers = getItemsByClassName("new-item-box__description", item);
    if (!possibleBrandContainers) {
      return;
    }
    let brandNameHeading;
    const lastContainer = possibleBrandContainers[possibleBrandContainers.length - 1];
    if (lastContainer) {
      brandNameHeading = lastContainer.querySelector("h4");
    } else {
      brandNameHeading = item.querySelectorAll(
        '[data-testid$="description-subtitle"]'
      )[0];
    }
    if (!brandNameHeading) {
      return;
    }
    const isBlocked = isBrandNameInBlockedList(brandNameHeading.innerHTML);
    return isBlocked;
  }
  function isBrandNameInBlockedList(brandName) {
    if (blocked?.length > 0) {
      return blocked.includes(brandName.trim());
    }
    return false;
  }
}
async function getAddToSavedSearchesButton() {
  const shouldReplace = await getSearchesPreference();
  if (!shouldReplace) {
    return;
  }
  saveButton = content.querySelector('button[data-testid*="catalog-search-save-button"]');
  if (!saveButton) {
    saveButton = content.querySelector('button[data-testid*="catalog-search-delete-button"]');
    if (saveButton) {
      hasSaved = true;
    } else {
      return;
    }
  }
  saveButton.addEventListener("click", handleSavedSearchButtonClick);
}
function handleSavedSearchButtonClick() {
  const dataAttribute = saveButton?.getAttribute("data-testid");
  if (dataAttribute.includes("delete-button")) {
    hasSaved = true;
  } else if (dataAttribute.includes("save-button")) {
    hasSaved = false;
  }
  if (hasSaved) {
    removeSearchByCurrentUrl(location.href);
    return;
  }
  const saveButtonNode = saveButton;
  savedSearchForm = document.createElement("form");
  const formElement = savedSearchForm;
  formElement.style.width = "100%";
  formElement.style.flex = "1";
  formElement.style.display = "flex";
  formElement.style.flexDirection = "column";
  formElement.style.gap = "10px";
  const inputLabel = document.createElement("label");
  inputLabel.style.fontSize = "1.5rem";
  inputLabel.htmlFor = "input-for-saved-search";
  inputLabel.innerHTML = "<b>Geef je zoekopdracht een naam:</b>";
  savedSearchForm.appendChild(inputLabel);
  const inputNode = document.createElement("input");
  inputNode.style.fontSize = "1.5rem";
  inputNode.classList.add("web_ui__Card__card");
  inputNode.style.minHeight = "20px";
  inputNode.style.padding = "8px 12px";
  inputNode.id = "input-for-saved-search";
  inputNode.placeholder = "Bv. kleurrijke vintage blouses";
  savedSearchForm.appendChild(inputNode);
  const buttonNode = document.createElement("button");
  buttonNode.type = "submit";
  buttonNode.innerHTML = '<span class="web_ui__Button__label"><span class="web_ui__Button__label" style="color: white;">Voeg toe</span></span>';
  const buttonClassList = [
    "web_ui__Button__button",
    "web_ui__Button__filled",
    "web_ui__Button__default",
    "web_ui__Button__primary",
    "web_ui__Button__truncated"
  ];
  buttonClassList.forEach((className) => {
    buttonNode.classList.add(className);
  });
  savedSearchForm.appendChild(buttonNode);
  saveButtonNode.parentNode.style.flexDirection = "column";
  saveButtonNode.parentNode.style.gap = "10px";
  saveButtonNode.parentNode.appendChild(savedSearchForm);
  savedSearchForm.addEventListener("submit", submitSavedSearch);
}
function submitSavedSearch() {
  const savedSearchDescription = document.getElementById(
    "input-for-saved-search"
  );
  const savedSearchValue = savedSearchDescription.value;
  savedSearchDescription.value = "";
  addSearchToList({ description: savedSearchValue, query: location.href });
  const saveButtonNode = saveButton;
  saveButtonNode.parentNode.removeChild(savedSearchForm);
}
function onFirstLoad() {
  getAddToSavedSearchesButton();
  observe();
}
