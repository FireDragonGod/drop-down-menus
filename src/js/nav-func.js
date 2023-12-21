/**
 *  ? when menu item and it's sub element have the same data attribute value
 *  ? put it's value to document selector so the 'menu item click listener' can be used to toggle the sub menu classList
 *
 */

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

const elementsInArray = arrayOfElements();

const dropDown = ({
  elementToListen,
  itsDataAttribute,
  subElement,
  classListValue,
}) => {
  const dropDownElement = () => {
    elementToListen.forEach((element) => {
      element.addEventListener('click', () => {
        const dataAttributeValue = elementDataAttribute({
          elementToGetAttribute: element,
          dataAttributeValue: itsDataAttribute,
        }).getDataAttribute();

        const subNavItem = document.querySelector(
          `${subElement}="${dataAttributeValue}"]`,
        );

        elementsInArray.adder(subNavItem);

        customClassList({
          classListVal: classListValue,
          element: elementsInArray.lastGetter(),
        }).toggleClassList();

        // click the second menu item to drop up the previous element
        if (
          elementsInArray.lengthGetter() >= 2 &&
          elementsInArray.lastGetter().classList.value ===
            'nav-sub-item visibility' &&
          elementsInArray.secondLastGetter().classList.value ===
            'nav-sub-item visibility'
        ) {
          customClassList({
            classListVal: classListValue,
            element: elementsInArray.secondLastGetter(),
          }).toggleClassList();

          // but drop down the element if it was clicked again
          if (
            elementsInArray.secondLastGetter().classList.value ===
              'nav-sub-item' &&
            elementsInArray.lastGetter().classList.value === 'nav-sub-item'
          ) {
            customClassList({
              classListVal: classListValue,
              element: elementsInArray.lastGetter(),
            }).toggleClassList();
          }
        }
      });
    });
  };

  return {
    dropDownElement,
  };
};

export default dropDown;
