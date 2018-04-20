/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

var szer = canvasElem.witdh, wys = canvasElem.height;

// kolor wypełnienia
ctx.fillStyle = "#e8c81f";

// rysujemy prostokąt
// x, y, width, height
ctx.fillRect(25, 25, 100, 100);

//kolor obrysu
ctx.fillStroke = "#446082";

//drugi obrys prostokąta
ctx.strokeRect(30, 30, 100, 100);

//czyszczenie obszaru
ctx.clearRect(45, 45, 60, 60);

//rysowanie lini
ctx.fillStroke = "gray";
ctx.moveTo(0, 0);
ctx.lineTo(szer, wys);
ctx.moveTo(0, wys);
ctx.lineTo(szer, 0);
ctx.stroke();

//rysowanie koła
ctx.beginPath();
//x, y, radius, start, stop, true/false
ctx.arc(szer / 2, wys / 2, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.arc(szer / 2, wys / 2, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.arc(200, 100, 70, 0, 2 * Math.PI);
ctx.stroke();
