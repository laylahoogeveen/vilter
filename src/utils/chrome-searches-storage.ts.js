import { sortSearchesList } from "/src/utils/list.ts.js";
export const getSearchesList = async () => {
  let result = [];
  const localList = await chrome.storage.sync.get(["savedSearches"]);
  if (!!localList && localList.savedSearches && localList.savedSearches.length > 0) {
    result = localList.savedSearches;
    sortSearchesList(result);
  } else {
    await chrome.storage.sync.set({ savedSearches: [] });
  }
  return result;
};
export const getVintedDomain = async () => {
  let result = ".nl";
  const domain = await chrome.storage.sync.get("vintedDomain");
  if (domain.vintedDomain) {
    result = domain.vintedDomain;
  } else {
    await chrome.storage.sync.set({ vintedDomain: ".nl" });
  }
  return result;
};
export const getSearchesPreference = async () => {
  let result = false;
  const savedSearchPreference = await chrome.storage.sync.get("replaceDefaultSavedSearch");
  if (savedSearchPreference) {
    result = savedSearchPreference.replaceDefaultSavedSearch;
  } else {
    await chrome.storage.sync.set({ replaceDefaultSavedSearch: false });
  }
  return result;
};
export const removeSearchFromStorage = async (value, list) => {
  const index = list.findIndex((item) => item.query === value.query);
  list.splice(index, 1);
  await updateSearchesList(list);
  const newList = await getSearchesList();
  return newList;
};
export const updateSearchesList = async (newList) => {
  await chrome.storage.sync.set({ savedSearches: newList });
};
export const updateReplaceDefaultSearchPreference = async (value) => {
  await chrome.storage.sync.set({ replaceDefaultSavedSearch: value });
};
export const addSearchToList = async (search, currentSearchList) => {
  let query = "";
  if (!search.query) {
    return;
  } else {
    query = parseQuery(search.query);
  }
  if (!currentSearchList) {
    currentSearchList = await getSearchesList();
  }
  currentSearchList.push({ query, description: search.description });
  await updateSearchesList(currentSearchList);
  return currentSearchList;
};
export function parseQuery(url) {
  const queryMatch = /catalog\?(.*)/;
  const match = url.match(queryMatch);
  const query = match?.length > 0 ? match[match.length - 1] : null;
  return `catalog?${query}`;
}
export async function removeSearchByCurrentUrl(url) {
  const list = await getSearchesList();
  const query = parseQuery(url);
  removeSearchFromStorage({ description: "", query }, list);
}
