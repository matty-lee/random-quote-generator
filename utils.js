function getElement(target) {
  const element = document.querySelector(target);
  if (element) {
    return element;
  } else {
    throw new Error(`${target} does not exist`);
  }
}

export { getElement };
