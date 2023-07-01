export function sortBrandList(list) {
  list.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase())
      return -1;
    if (a.toLowerCase() > b.toLowerCase())
      return 1;
    return 0;
  });
}
export function sortSearchesList(list) {
  return list;
}
