//check which calcu will appear
const calcuBtn = document.getElementsByClassName("btn");
var math = document.getElementById("scical");
var chem = document.getElementById("chemcal");

function mathReveal() {
    math.style.display = "block";
    chem.style.display = "none";
}

function chemReveal() {
    math.style.display = "none";
    chem.style.display = "block";
}

//for scical
const display = document.getElementById('result');

function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
    let result;
    const value = display.value;
    if (value) {
      result = eval(value);
      if (result !== undefined) {
        display.value = result.toFixed(3);
      } 
      
      else {
        display.value = '';
      }
    } 
    
    else {
      display.value = 'Error';
    }
}
// end of for scical

//for chemcal(i gave up i really tried here:sob:)
function balance() {
  const reactants = document.getElementById("reactants").value;
  const products = document.getElementById("products").value;

  const reactantsArr = reactants.split("+");
  const productsArr = products.split("+");
  const elementCount = {};

  // loop and calculate the counts
  for (let i = 0; i < reactantsArr.length; i++) {
    const reactant = reactantsArr[i].trim();
    const splitReactant = reactant.split(/(?=\d)/);
    const coefficient = splitReactant[0] ? splitReactant[0] : "1";
    const molecules = splitReactant[1] ? splitReactant[1].split(/(?=[A-Z])/) : [''];

    for (let j = 0; j < molecules.length; j++) {
      const molecule = molecules[j];
      const element = molecule.match(/[A-Z][a-z]*/)[0];
      const count = molecule.match(/\d+/);
      const elementCountCoefficient = elementCount[element] ? elementCount[element] + coefficient * (count ? Number(count[0]) : 1) : coefficient * (count ? Number(count[0]) : 1);
      elementCount[element] = elementCountCoefficient;
    }
  }

  // Loop and subtract the counts
  for (let i = 0; i < productsArr.length; i++) {
    const product = productsArr[i].trim();
    const splitProduct = product.split(/(?=\d)/);
    const coefficient = splitProduct[0] ? splitProduct[0] : "1";
    const molecules = splitProduct[1] ? splitProduct[1].split(/(?=[A-Z])/) : [''];

    for (let j = 0; j < molecules.length; j++) {
      const molecule = molecules[j];
      const element = molecule.match(/[A-Z][a-z]*/)[0];
      const count = molecule.match(/\d+/);
      const elementCountCoefficient = elementCount[element] ? elementCount[element] - coefficient * (count ? Number(count[0]) : 1) : -coefficient * (count ? Number(count[0]) : 1);
      elementCount[element] = elementCountCoefficient;
    }
  }

  for (const element in elementCount) {
    if (elementCount[element] !== 0) {
      document.getElementById("equation").innerHTML = "The chemical equation is not balanced";
      return;
    }

    else {
      document.getElementById("equation").innerHTML = "The chemical equation is balanced";
    }
  }
}