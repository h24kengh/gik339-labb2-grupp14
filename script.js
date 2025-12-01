/* Hämtar checkboxen med getElementById och lagrar den
i variabeln checkbox */
const checkbox = document.getElementById("checkbox")

/* Hämtar alla textfält med getElementsByClassName och lagrar
den i variabeln textfield */
const textfield = document.getElementsByClassName("textfield")

/* Hämtar knappen med querySelectorAll och lagrar den i
variabeln button */
const button = document.querySelectorAll('button')

/* Hämtar div-elementet med querySelector och lagrar
den i variabeln div */
const div = document.querySelector('div')

/* Kopplar funktionen till input-fältet med name="content" */
document.querySelector('input[name="content"]').addEventListener('input', handleInput);

/* Skapar funktionsdeklarationen handleInput  */
function handleInput(e) {
console.log('Eventet genererades av inputfältet: ', e.target);
const fieldName = e.target.name;
if (fieldName === "content") {
    const inputValue = e.target.value;
div.innerHTML = inputValue;
}
}

document.getElementsByClassName('textfield').addEventListener('input', handleInput);

document.getElementById('checkbox').addEventListener('change', () => {
    const colorInput = document.getElementById('color');
    const chosenColor = colorInput.value;
    div.style.backgroundColor = chosenColor;
});

document.querySelectorAll('button').addEventListener('click', handleClick);