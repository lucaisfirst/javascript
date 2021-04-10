//1. Use strict 
//added in ES5
//javascript is flexible --> flexible === dangerous
//in vanila js 'use strict' is moer helpful to parsing, 조금 더 상식적으로 사용 가능 
'use strict';

//2. Variable 
//let (added in ES6)
//글로벌한 변수들은 최소화
//블록으로 가둘 수 있다. 
let globalName = 'global name';
{
    let name = 'luca';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!) 변수를 선언하기도 전에 정의가 가능함. 
//var hoisting (move declartion from bottom to top)
//has no block scope 블록 영향을 안 받음
console.log(age);
age = 5;
console.log(age);
var age

//3. Constants
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);

//4. Variable types 
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// objict, box container
// function, first-class function 

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a nuber' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet) 추가된지 얼마 안 됨. 지원 브라우저 별로 없음.
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) 백틱 기호를 이용하여 문자열 띄어쓰기 편하게
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any ather value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
//선언되었지만 값이 정해지지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`)

//object, real-life object, data structure
//고정변수 안의 오브젝트는 변형이 가능하다. 
const luca = { name: 'luca', age: 21 };
luca.age = 20;
console.log(luca);
const hajin = { name: 'hajin', age: 23};
hajin.age = 24
console.log(hajin);

//5. Dynamic typing: dynamically typed language
//While coding with js, you can confuse type of variable. --> TS(typescript) is comming out!
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

//this is my playground to code my dream... and today i messed my fcking math test......no desctiption that's too bad
