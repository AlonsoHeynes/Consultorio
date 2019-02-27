//jshint esversion: 6

let dosis = 0;
let peso= 0;
let vecesPorDia = 0;

// Select antibiotic
let antibiotics = document.querySelector("#antibioticos").addEventListener('change', function(){
dosis = document.querySelector('#dosis');
mgSusp = document.querySelector('#suspensionMg');
mlSusp = document.querySelector('#suspensionMl');

switch(this.value){
  case 'amoxi-acidoClav':
    dosis.placeholder = "20 / 30 / 40 mg";
    mgSusp.placeholder = "125 mg";
    mlSusp.placeholder = "5 ml";
  break;
  case 'amoxi-susp':
    dosis.placeholder = "80 / 100 mg";
    mgSusp.placeholder = "250 / 500 mg";
    mlSusp.placeholder = "5 ml";
  break;
  case 'ampici':
    dosis.placeholder = "50 / 100 mg";
    mgSusp.placeholder = "No definido";
    mlSusp.placeholder = "No definido";
  break;
  case 'azitro':
    dosis.placeholder = "10 mg";
    mgSusp.placeholder = "No definido";
    mlSusp.placeholder = "No definido";
  break;
  case 'cefaclor':
    dosis.placeholder = "25 / 50 mg";
    mgSusp.placeholder = "No definido";
    mlSusp.placeholder = "No definido";
  break;
  case 'cefadro':
    dosis.placeholder = "30 mg";
    mgSusp.placeholder = "250 mg";
    mlSusp.placeholder = "5 ml";
  break;
  case 'cefale':
    dosis.placeholder = "50 / 75 / 100 mg";
    mgSusp.placeholder = "125 / 250 mg";
    mlSusp.placeholder = "5 ml";
  break;
  case 'cefuro':
    dosis.placeholder = "20 / 30 / 40 mg";
    mgSusp.placeholder = "125 / 250 mg";
    mlSusp.placeholder = "5 ml";
  break;
  case 'claritro':
    dosis.placeholder = "15 mg";
    mgSusp.placeholder = "125 / 250 mg";
    mlSusp.placeholder = "5 ml";
  break;
  case 'eritro':
    dosis.placeholder = "30 / 40 mg";
    mgSusp.placeholder = "125 / 250 mg";
    mlSusp.placeholder = "5 ml";
  break;
}
});


// Get the values of the inputs
function getValues() {
  peso = parseFloat(document.querySelector("#peso").value);
  vecesPorDia = parseInt(document.querySelector("#veces-por-dia").value);
  dosis = parseInt(document.querySelector("#dosis").value);
  mgSusp = parseInt(document.querySelector("#suspensionMg").value);
  mlSusp = parseInt(document.querySelector("#suspensionMl").value);
}


// Do the maths when press the button "Calcular"
document.querySelector("#botonCalcular").addEventListener("click", function(){
  getValues();
  let element = document.querySelector('#resultado');
  if(isNaN(peso) || isNaN(vecesPorDia) || isNaN(dosis) || isNaN(mgSusp) || isNaN(mlSusp)){
    element.classList.add('warning');
    resultado.innerHTML = "¡Verificar! Llenar todos los valores";
  } else {
    element.classList.remove('warning');
    dosisPerDay();
  }
});


// Math of dosis per day
function dosisPerDay(){
let calculo1 = Math.round((peso * dosis) / vecesPorDia);
let calculo2 = (calculo1 / (mgSusp / mlSusp)).toFixed(1);
resultado.innerHTML = "Tomar " + calculo1 + " mg (" + calculo2 +  " ml) cada " + (24 / vecesPorDia) + " horas";
}


// Reset the form values
document.querySelector("#botonBorrar").addEventListener("click", function(){
  document.querySelector("#miFormulario").reset();
  resultado.innerHTML = "";
});
