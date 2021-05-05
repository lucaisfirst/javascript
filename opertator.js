//1. String concatenation
//백틱 `` 이거 쓰면 특수 기호나 형식 같은 거 무시하고 편하게 쓸 수 있다.
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literls: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multifly 
console.log(5 % 2); //remainer
console.log(2 ** 3); //exponentiation

//3. Increment and decrement opertators
//앞에 ++, -- 붙으면 변화하고 변수에 할당, ++, --가 뒤에 붙으면 기존 값 할당하고 이후에 변화 
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4번째 강의 듣고 있는데 재미가 없다. 그냥 실제 만들어보면서 여기는 필요할 때마다 찾으러 와야겠다..