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

// Mostra/nascondi attestati java
var boolAttestatiJava = false;
function mostraAttestatiJava() {
    if(boolAttestatiJava) {
        $("#attestatiJava").css("display", "none");
    } else {
        $("#attestatiJava").css("display", "block");
    }
    boolAttestatiJava = !(boolAttestatiJava);
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
