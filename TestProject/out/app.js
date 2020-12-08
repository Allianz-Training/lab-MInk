// let text:string;
// text = 'Hello World';
// let text2:string;
// text2 = 'Hello 2';
// console.log(text)
// console.log(text2)
//lab1
let m = "I want to ";
console.log("length: " + m.length);
console.log("charAt[2]: " + m.charAt(2));
console.log("m[2]: " + m[2]);
let s1 = 'Hello';
let s2 = 'World';
console.log(`${s1}${s2}`);
//lab2
let str3 = 'microsoft excel';
console.log(str3.toLocaleUpperCase());
let str4 = 'GoOOGLE AND APPLE';
console.log(str4.toLocaleLowerCase());
let str6 = 'hello world';
let str7 = '';
for (var val of str6) {
    if (val == 'h' || val == 'w') {
        str7 += val.toLocaleUpperCase();
    }
    else {
        str7 += val;
    }
}
console.log(str7);
//lab3
let str8 = 'Hello world';
console.log('startsWith Hello:' + str8.startsWith('Hello'));
console.log('startsWith World:' + str8.startsWith('World'));
console.log('endsWith Hello:' + str8.endsWith('Hello'));
console.log('endsWith world:' + str8.endsWith('world'));
let str9 = 'Computer';
let str10 = 'Death Race';
let str11 = 'Republican';
console.log(str9.substring(3, 6));
console.log(str10.substring(0, 5));
console.log(str11.substring(2, 8));
//# sourceMappingURL=app.js.map