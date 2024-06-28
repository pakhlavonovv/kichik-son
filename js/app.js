// let number = +prompt("Son kiriting")
// console.log(number);
// console.log(isNaN(number));

// if (isNaN(number)){
//     console.log("Son kiritsez yaxshi bolardi");
// }else {
//     if (number % 2 == 0){
//         console.log(` ${number} son juft `);
// }else {
//     console.log(`son toq ${number}`);
// }

// }



// let random = parseInt(Math.random()*10)
// console.log(random);

// let promptt = prompt("Ixtiyoriy sonni kiriting")
// console.log(promptt);

// let farq = Math.abs(random - promptt)
// if (random == promptt){
//     console.log("Sonlar teng");
// }else {
//     console.log(`Sonlar orasidagi farqi ${farq}`);
// }

// let day = +prompt("7 gacha bolgan son kiriting")
// if(day % 7 == 1){
//     console.log("Monday");
// }
// if(day % 7 == 2){
//     console.log("Tuesday");
// }
// if(day % 7 == 3){
//     console.log("Wednesday");
// }
// if(day % 7 == 4){
//     console.log("Thirsday");
// }
// if(day % 7 == 5){
//     console.log("Friday");
// }
// if(day % 7 == 6){
//     console.log("Saturday");
// }
// if(day % 7 == 7){
//     console.log("Sunday");
// }
// if (day >= 7){
//     console.log("pls enter the number to 7");
// }

// let number = +prompt("Ixtiyoriy son kiriting")
// console.log(number);
// let number2 = +prompt("Ixtiyoriy son kiriting")
// console.log(number2);
// if (number && number2 >0){
//     console.log("Ikkala sonham musbat")
// }else {
//     if(number > 0){
//         console.log("Musbat son");
//     }else {
//         if(number2 > 0){
//             console.log("Musbat son");
//         }    
//     }
// }


// let number = +prompt("Birinchi sonni kiriting")
// console.log(number)
// let number2 = +prompt("Ikkinchi sonni kiriting")
// console.log(number2)
// let number3 = +prompt("Uchinchi sonni kiriting")
// console.log(number3)

// if (number > number2) {
//     console.log("Birinchi son katta");
// } else {
//     if (number2 > number3) {
//         console.log("Ikkinchi son katta");
//     } else {
//         if (number3 > number) {
//             console.log("Uchinchi son katta");
//         }
//     } 
// }


let num1 = parseFloat(prompt("Birinchi sonni kiriting: "));
let num2 = parseFloat(prompt("Ikkinchi sonni kiriting: "));
let num3 = parseFloat(prompt("Uchinchi sonni kiriting: "));

let max;

if (num1 <= num2 && num1 >= num3) {
    max = num1;
} else if (num2 >= num1 && num2 <= num3) {
    min = num2;
} else {
    min = num3;
}

alert("Eng kichik son: " + min
);