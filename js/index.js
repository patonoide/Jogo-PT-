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

//arrays com as coordenadas para jogo ganho
/*
123
456
789
*/
var g1=[1,2,3];
var g2=[4,5,6];
var g3=[7,8,9];
var g4=[1,4,7];
var g5=[2,5,8];
var g6=[3,6,9];
var g7=[1,5,9];
var g8=[3,5,7];


//arrays com as coordenadas conquistadas
var x =[];
var o =[];

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
        document.getElementById("a1").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(1);
    } else if (turno.get() === 1) {
    document.getElementById("a1").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(1);
    }

}
function a2() {

    if (turno.get() === 0) {
        document.getElementById("a2").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(2);
    } else if (turno.get() === 1) {
        document.getElementById("a2").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(2);
    }

}

function a3() {

    if (turno.get() === 0) {
        document.getElementById("a3").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(3);
    } else if (turno.get() === 1) {
        document.getElementById("a3").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(3);
    }

}
function b1() {

    if (turno.get() === 0) {
        document.getElementById("b1").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(4);
    } else if (turno.get() === 1) {
        document.getElementById("b1").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(4);
    }

}
function b2() {

    if (turno.get() === 0) {
        document.getElementById("b2").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(5);
    } else if (turno.get() === 1) {
        document.getElementById("b2").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(5);
    }

}
function b3() {

    if (turno.get() === 0) {
        document.getElementById("b3").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(6);
    } else if (turno.get() === 1) {
        document.getElementById("b3").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(6);
    }

}

function c1() {

    if (turno.get() === 0) {
        document.getElementById("c1").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(7);
    } else if (turno.get() === 1) {
        document.getElementById("c1").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(7);
    }

}
function c2() {

    if (turno.get() === 0) {
        document.getElementById("c2").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(8);
    } else if (turno.get() === 1) {
        document.getElementById("c2").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(8);
    }

}
function c3() {

    if (turno.get() === 0) {
        document.getElementById("c3").innerHTML = ' <img src="../img/x.png" alt=""> ';
        turno.set(1);
        x.push(9);
    } else if (turno.get() === 1) {
        document.getElementById("c3").innerHTML = '<img src="../img/o.png" alt="">';
        turno.set(0);
        o.push(9);
    }

}
