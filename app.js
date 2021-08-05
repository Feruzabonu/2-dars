alert("Xarajatlar hisoblagichiga xush kelibsiz!");

let name = prompt("Ismingizni kiriting : ")
let sum = prompt("So'mda necha pulingiz bor ekanligini kiriting : ");

let go_back = 500 * 9433.34;
let hotel = 250 * 9433.34;
let park = 120 * 10354.03;

let total_cost = go_back + hotel + park;
console.log(`Jami harajat : ${total_cost} so'm`);

if(sum>total_cost){
    console.log(`Oq yo'l, ${name}!`)
}else{
    console.log(`${name}, ozgina sabr qilish kerak bo’lar ekan.`)
}