/**
 * It takes an object of class names and returns a string of the class names that are truthy
 * @param classObj - An object that contains the class names as keys and a boolean value as the value.
 * @returns A string of all the keys in the object that have a truthy value.
 */
export const getClasses = (classObj) => {
  return Object.keys(classObj)
    .filter((key) => classObj[key])
    .join(' ');
};
