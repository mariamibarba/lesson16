// 1. დაწერეთ ფუნქცია, 
// რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
// function evenOrodd(a) {

//     if (a % 2 == 0){
//       console.log("true");
//     } else {
//       console.log("false");
//     }
// }
// evenOrodd(2);

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ 
// რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.

// function areaRectangle(a,b) {
//     console.log(a*b);
// }
// areaRectangle(2,4);


// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. 
// ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.

// function areaSquare(areaRectangle){
//     console.log(areaRectangle*areaRectangle);
// }
// areaSquare(3)

// 4.  დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

// function randomFun(a){

//     return Math.floor(Math.random() * a);
// }

// let rand= randomFun(100);
// console.log(rand);

// 5. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. 
// შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს
// . ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმ

// let userInfo = [
// 	{
// 		name: "giorgi",
// 		age: 15,
// 	},
// 	{
// 		name: "lika",
// 		age: 30,
// 	},
// 	{
// 		name: "mari",
// 		age: 25,
// 	},
// 	{
// 		name: "nika",
// 		age: 27,
// 	},
// 	{
// 		name: "natia",
// 		age: 20,
// 	},
// ];
// let lowest = userInfo.sort(function (a, b) {
//     return a.age - b.age;
// });

// console.log(lowest[0]);



// 6. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის 
// კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) 
// თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება

// function getCurrencySymbolFromCode (a){
//     if (a=="USD"){
//         return "$"
//     }else if (a=="EUR"){
//         return "€"
//     }else if(a=="GEL"){
//         return "ლ"
//     }else{
//         return "error"
//     }

// }
// let valuta = getCurrencySymbolFromCode ("EUR")

// console.log(valuta);
