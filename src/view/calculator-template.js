const calculatorTemplate = () => {
  return `
    <section class="calculator">
      <div class="calculator__subdisplay" aria-label="дисплей"></div>
      <div class="calculator__display" aria-label="дисплей"></div>
      <div class="calculator__buttons">
        <button class="calculator__button calculator__button--giper" type="button">1/x</button>
        <button class="calculator__button calculator__button--power2" type="button">x<sup>2</sup></button>
        <button class="calculator__button calculator__button--clear" type="button">С</button>
        <button class="calculator__button calculator__button--backspace" type="button">&larr;</button>
        <button class="calculator__button calculator__button--number calculator__button--7" type="button">7</button>
        <button class="calculator__button calculator__button--number calculator__button--8" type="button">8</button>
        <button class="calculator__button calculator__button--number calculator__button--9" type="button">9</button>
        <button class="calculator__button calculator__button--divide" type="button">/</button>
        <button class="calculator__button calculator__button--number calculator__button--4" type="button">4</button>
        <button class="calculator__button calculator__button--number calculator__button--5" type="button">5</button>
        <button class="calculator__button calculator__button--number calculator__button--6" type="button">6</button>
        <button class="calculator__button calculator__button--multiply" type="button">&times;</button>
        <button class="calculator__button calculator__button--number calculator__button--1" type="button">1</button>
        <button class="calculator__button calculator__button--number calculator__button--2" type="button">2</button>
        <button class="calculator__button calculator__button--number calculator__button--3" type="button">3</button>
        <button class="calculator__button calculator__button--minus" type="button">&minus;</button>
        <button class="calculator__button calculator__button--dot" type="button">.</button>
        <button class="calculator__button calculator__button--number calculator__button--0" type="button">0</button>
        <button class="calculator__button calculator__button--calculate" type="button">=</button>
        <button class="calculator__button calculator__button--sum" type="button">+</button>
      </div>
    </section>
  `;
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

export {
  calculatorTemplate,
  createElement
};
