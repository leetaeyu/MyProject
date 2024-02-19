// Array [배열]

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //사과
console.log(fruits[1]); //바나나
console.log(fruits[fruits.length - 1]); //배열의 마지막 찾기 바나나

console.clear();
// 3.looping over an array
// print all fruits
// a.for
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b.for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c.forEach ★
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. addtion, deletion, copy
// push: add an item to the end
fruits.push('딸기', '복숭아'); // 뒤에서 추가
console.log(fruits);

// pop : remove an item from the end
fruits.pop(); // 뒤에서 제일 첫번째 제거
fruits.pop(); // 뒤에서 제일 두번째 제거
console.log(fruits);

// unshift: add and item to the benigging
fruits.unshift('딸기', '복숭아'); //앞으로 추가
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits); //앞에꺼 삭제

// splice: remove an item by index position
fruits.push('낑깡', '레몬');
console.log(fruits)
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '수박');
console.log(fruits);

// combine two arrays
const fruits2 = ["참외", "포도"];
const newFruits = fruits.concat(fruits2); // 배열에 배열 추가 (붙힌다)
console.log(newFruits);


// 5.searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('수박')); // 있으면 index 번호 부여, 없으면 -1

// includes
console.log(fruits.includes('수박')); // 있으면 true, false

//lastIndexOf
console.clear();
fruits.push('수박')
console.log(fruits);
console.log(fruits.indexOf('수박'));
console.log(fruits.lastIndexOf('수박'));


