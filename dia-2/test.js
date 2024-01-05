let Nome = prompt("Digite Seu Nome!!");
let Idade = parseInt(prompt("Digite Sua Idade!!"));
let Altura = parseInt(prompt("Digite sua Altura em centímetros!!"));
let Peso = parseInt(prompt("Digite seu Peso em quilogramas!!"));

let nasc = 2024 - Idade; 
let IMC = Peso / ((Altura / 100) * (Altura / 100)); 

console.log("Olá " + Nome + ", você tem " + Idade + " anos, nasceu em " + nasc + ", tem " + Altura + " cm de altura, pesa " + Peso + " kg e seu IMC é " + IMC.toFixed(2) + " Kg/m2");