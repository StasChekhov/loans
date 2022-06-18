export const getAvailableString = (available, number) =>
 replaceWithCommas(String(available.split(",").join("") - Number(number)));

export const replaceWithCommas = (string) =>
 string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
