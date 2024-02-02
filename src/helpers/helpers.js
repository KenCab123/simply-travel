export const findFirstObjectKey = (obj, key) => {
  const objectAtKey = obj[key];
  if (!objectAtKey) {
    return "No flights available";
    //maybe fetch????
  }
  const firstKey = Object.keys(objectAtKey)[0];
  return obj[key][firstKey];
};
