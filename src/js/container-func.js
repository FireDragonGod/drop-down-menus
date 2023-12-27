const outsideDropDown =
  function whenClickedOutsideOfTheNavBarAndItsSubNavBarToggleTheLastValueFromItsArrayToToggleItsClassList(
    lastElement,
    classListVals,
  ) {
    const mainContainer = document.querySelector('div[id="main-container"]');

    mainContainer.addEventListener('click', () => {
      const classListValueLength = classListVals.length;

      const lastElementClassListValue = lastElement.classList.value.slice(
        -classListValueLength,
      );

      if (lastElementClassListValue === classListVals) {
        lastElement.classList.toggle(classListVals);
      }
    });

    return mainContainer;
  };

export default outsideDropDown;
