document.getElementById("a1").addEventListener("click", a1, true);
document.getElementById("a2").addEventListener("click", a2, true);
document.getElementById("a3").addEventListener("click", a3, true);
document.getElementById("b1").addEventListener("click", b1, true);
document.getElementById("b2").addEventListener("click", b2, true);
document.getElementById("b3").addEventListener("click", b3, true);
document.getElementById("c1").addEventListener("click", c1, true);
document.getElementById("c2").addEventListener("click", c2, true);
document.getElementById("c3").addEventListener("click", c3, true);

//turno 0 para x e turno 1 para O

var turno = {
  atual: 0,
  get: function() {
            return this.atual;
        },
  set: function(val) {
            this.atual = val;
        }
}

function resetar(){
    document.getElementById("a1").innerHTML ="";
    document.getElementById("a2").innerHTML ="";
    document.getElementById("a3").innerHTML ="";
    document.getElementById("b1").innerHTML ="";
    document.getElementById("b2").innerHTML ="";
    document.getElementById("b3").innerHTML ="";
    document.getElementById("c1").innerHTML ="";
    document.getElementById("c2").innerHTML ="";
    document.getElementById("c3").innerHTML ="";

}


function a1() {

    if (turno.get() === 0) {
        document.getElementById("a1").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("a1").name = 1;
        turno.set(0);

    }

}
function a2() {

    if (turno.get() === 0) {
        document.getElementById("a2").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("a2").name = 1;
        turno.set(0);

    }

}

function a3() {

    if (turno.get() === 0) {
        document.getElementById("a3").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("a3").name = 1;
        turno.set(0);

    }

}
function b1() {

    if (turno.get() === 0) {
        document.getElementById("b1").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("b1").name = 1;
        turno.set(0);

    }

}
function b2() {

    if (turno.get() === 0) {
        document.getElementById("b2").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("b2").name = 1;
        turno.set(0);

    }

}
function b3() {

    if (turno.get() === 0) {
        document.getElementById("b3").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("b3").name = 1;
        turno.set(0);

    }

}
function b3() {

    if (turno.get() === 0) {
        document.getElementById("b3").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("b3").name = 1;
        turno.set(0);

    }

}
function c1() {

    if (turno.get() === 0) {
        document.getElementById("c1").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("c1").name = 1;
        turno.set(0);

    }

}
function c2() {

    if (turno.get() === 0) {
        document.getElementById("c2").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("c2").name = 1;
        turno.set(0);

    }

}
function c3() {

    if (turno.get() === 0) {
        document.getElementById("c3").name = 0;
        turno.set(1);
    } else if (turno.get() === 1) {
        document.getElementById("c3").name = 1;
        turno.set(0);

    }

}
