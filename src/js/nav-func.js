import outsideDropDown from './container-func';

const elementDataAttribute = ({
  elementToGetAttribute,
  dataAttributeValue,
}) => {
  const getDataAttribute = () => {
    const attributeValue =
      elementToGetAttribute.getAttribute(dataAttributeValue);
    return attributeValue;
  };
  return {
    getDataAttribute,
  };
};

const customClassList = ({ classListVal, element }) => {
  const toggleClassList = () => {
    element.classList.toggle(classListVal);
  };
  return {
    toggleClassList,
  };
};

const arrayOfElements = () => {
  const elements = [];

  const lengthGetter = function getLastItemFromElements() {
    return elements.length;
  };

  const lastGetter = function getLastItemFromElements() {
    return elements.slice(-1).at(-1);
  };

  const secondLastGetter = function getSecondLastItemFromElements() {
    return elements.slice(-2).reverse().slice(-1).at(-1);
  };

  const adder = function addItemToElements(elementToAdd) {
    return elements.push(elementToAdd);
  };
  return {
    lengthGetter,
    lastGetter,
    secondLastGetter,
    adder,
  };
};

const dynamicClassToggler = ({
  classListValues,
  elementToAddInArrays,
  elementsInArray,
}) => {
  const addElementInArray = () => elementsInArray.adder(elementToAddInArrays);

  const toggleLastElementClassList = () => {
    customClassList({
      classListVal: classListValues,
      element: elementsInArray.lastGetter(),
    }).toggleClassList();
  };

  const toggleSecondLastElementClassList = () => {
    customClassList({
      classListVal: classListValues,
      element: elementsInArray.secondLastGetter(),
    }).toggleClassList();
  };

  const toggleThisElementsClassListWithCondition = (
    classListValue,
    ClassListValueMatch,
  ) => {
    if (
      classListValue.classList.value === ClassListValueMatch.classList.value
    ) {
      toggleLastElementClassList();
    }
  };

  const switchToggler =
    function switchBetweenToggledItemToCurrentThenToggleItWhenToggled(
      length,
      lastElement,
      secondLastElement,
      classListValue,
    ) {
      if (
        length >= 2 &&
        lastElement.classList.value === classListValue &&
        secondLastElement.classList.value === classListValue
      ) {
        toggleSecondLastElementClassList();

        toggleThisElementsClassListWithCondition(
          lastElement,
          secondLastElement,
        );
      }
    };

  const toggleClass = () => {
    addElementInArray();
    toggleLastElementClassList();

    const elementsInArrayLength = elementsInArray.lengthGetter();
    const lastElemenInArray = elementsInArray.lastGetter();
    const secondLastElementInArray = elementsInArray.secondLastGetter();
    const elementToAddClassListValue = elementToAddInArrays.classList.value;

    switchToggler(
      elementsInArrayLength,
      lastElemenInArray,
      secondLastElementInArray,
      elementToAddClassListValue,
    );

    outsideDropDown(lastElemenInArray, classListValues);
  };

  return {
    toggleClass,
  };
};

const subNavInArray = arrayOfElements();
const navBarTogglerInArray = arrayOfElements();

const dropDown = ({
  elementToListen,
  itsDataAttribute,
  subElement,
  classListValue,
  togglerClassListValue,
}) => {
  const dropDownElement = () => {
    elementToListen.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.stopPropagation();

        const dataAttributeValue = elementDataAttribute({
          elementToGetAttribute: element,
          dataAttributeValue: itsDataAttribute,
        }).getDataAttribute();

        const subNavItem = document.querySelector(
          `${subElement}="${dataAttributeValue}"]`,
        );

        subNavItem.addEventListener('click', (e2) => e2.stopPropagation());

        dynamicClassToggler({
          classListValues: classListValue,
          elementToAddInArrays: subNavItem,
          elementsInArray: subNavInArray,
        }).toggleClass();

        dynamicClassToggler({
          classListValues: togglerClassListValue,
          elementToAddInArrays: element,
          elementsInArray: navBarTogglerInArray,
        }).toggleClass();
      });
    });
  };

  return {
    dropDownElement,
  };
};

export default dropDown;
