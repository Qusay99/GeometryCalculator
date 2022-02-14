// console.log("Welcome to Deno!22");
// console.log("Warum funktioniert das nicht?11");
import {GeometryCalculator} from './calculator.ts';

console.log(GeometryCalculator.rectangle(5,4));

// function FindAllMethods(obj: any) {
//     return Object.getOwnPropertyNames(obj).filter(function(property) {
//         return typeof obj[property] == "function";
//     });
// }

console.log(GeometryCalculator.availableMethods(GeometryCalculator));