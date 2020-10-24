function infoSito() {
    alert("Ho sviluppato questo sito utilizzando le seguenti tecnologie: \n- HTML;\n- CSS;\n- JavaScript;\n- jQuery;\n- Bootstrap.");
}

function infoSitoEn() {
  alert("I developed this site using the following technologies: \n- HTML;\n- CSS;\n- JavaScript;\n- jQuery;\n- Bootstrap.");
}

// Mostra/nascondi attestati Python
var boolAttestatiPy = false;
function mostraAttestatiPython() {
    if(boolAttestatiPy) {
        $("#attestatiPython").css("display", "none");
    } else {
        $("#attestatiPython").css("display", "block");
    }
    boolAttestatiPy = !(boolAttestatiPy);
}

// Mostra/nascondi attestati Java
var boolAttestatiJava = false;
function mostraAttestatiJava() {
    if(boolAttestatiJava) {
        $("#attestatiJava").css("display", "none");
    } else {
        $("#attestatiJava").css("display", "block");
    }
    boolAttestatiJava = !(boolAttestatiJava);
}

// Mostra/nascondi attestati Cyber Security
var boolAttestatiCyber = false;
function mostraAttestatiCyber() {
    if(boolAttestatiCyber) {
        $("#attestatiCyber").css("display", "none");
    } else {
        $("#attestatiCyber").css("display", "block");
    }
    boolAttestatiCyber = !(boolAttestatiCyber);
}

// Mostra/nascondi attestati MS Office
var boolAttestatiMSoffice = false;
function mostraAttestatiMSoffice() {
    if(boolAttestatiMSoffice) {
        $("#attestatiMSoffice").css("display", "none");
    } else {
        $("#attestatiMSoffice").css("display", "block");
    }
    boolAttestatiMSoffice = !(boolAttestatiMSoffice);
}

// Slider per le immagini degli attestati Python
var imagesPy = [
    "./images/PCAP_Python.jpg",
    "./images/Python_Bit.jpg"
    ];

    var numPy = 0;
  
  function nextPy() {
    var sliderPy = document.getElementById("sliderPy");
    numPy++;
    if(numPy >= imagesPy.length) {
      numPy = 0;
    }
    sliderPy.src = imagesPy[numPy];
    }
  
  function prevPy() {
    var sliderPy = document.getElementById("sliderPy");
    numPy--;
    if(numPy < 0) {
      numPy = imagesPy.length-1;
    }
    sliderPy.src = imagesPy[numPy];
  }

// Data per scrivere la tua età
var today = new Date();
var myBirth = new Date(1995, 11, 21);
var diff;
var meseToday = today.getMonth();
var meseBirth = myBirth.getMonth();
var dayToday = today.getDate();
var dayBirth = myBirth.getDate();

if(meseToday >= meseBirth && dayToday >= dayBirth){
    diff = today.getFullYear() - myBirth.getFullYear();      // Differenza tra anni delle date
} else {
    diff = today.getFullYear() - myBirth.getFullYear() - 1;      // Compleanno non ancora compiuto (-1) 
}

console.log(diff)
console.log(typeof diff)
var dataHtml = document.getElementById("dataAnnoHtml");
dataHtml.innerHTML = diff;
