const closeSubNavItem = (lastElement, classListVals, closerObj) => {
  const closeObj = document.querySelector(closerObj);

  closeObj.addEventListener('click', () => {
    const classListValueLength = classListVals.length;

    const lastElementClassListValue = lastElement.classList.value.slice(
      -classListValueLength,
    );

    if (lastElementClassListValue === classListVals) {
      lastElement.classList.toggle(classListVals);
    }
  });

  return closeObj;
};

export default closeSubNavItem;
