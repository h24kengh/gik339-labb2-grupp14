/* Hämtar checkboxen med getElementById och lagrar den
i variabeln checkbox */
const checkbox = document.getElementById("checkbox")

/* Hämtar alla textfält med getElementsByClassName och lagrar
den i variabeln textfield */
const textfield = document.getElementsByClassName("textfield");

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

/* Kopplar eventlyssnare till textfältet */
document.getElementsByClassName('textfield')[0].addEventListener('input', handleInput);

/* Kopplar eventlyssnare till checkboxen och kopplar den anonyma funktionen */
document.getElementById('divStyle').addEventListener('change', () => {
    const colorInput = document.getElementById('color');
    const chosenColor = colorInput.value;
    div.style.backgroundColor = chosenColor;
});

/* Kopplar eventlyssnare till knappen och kopplar den anonyma funktionen */
document.querySelectorAll('button')[0].addEventListener('click', () => {
    document.querySelector('div').remove();
});
