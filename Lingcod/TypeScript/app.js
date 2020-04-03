"use strict";
exports.__esModule = true;
var class_1 = require("./class");
var square = new class_1.Square('Square', 4, 8, 'Red');
square.PrintColorAndName();
square.GetName();
console.log("Area: " + square.GetArea() + " , Perimeter:  " + square.GetPerimeter());
console.log();
var rec = new class_1.Rectangle('Rectangle', 4, 5, 10);
rec.GetName();
console.log("Area: " + rec.GetArea() + " , Perimeter:  " + rec.GetPerimeter());
