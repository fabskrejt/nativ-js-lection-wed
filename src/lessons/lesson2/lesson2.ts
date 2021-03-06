console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9


function sum(a: number) {
    return (b: number) => {
        return a + b
    }
}

console.log(sum(3)(6) === 9)

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0;
    return () => {
        count += 1
        return count
    }
}

const counter = makeCounter()
const counter2 = makeCounter()

console.log(counter())
console.log(counter2())
console.log(counter())
console.log(counter2())
console.log(counter())
console.log(counter2())
counter()
counter()
counter2()

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter1(startNumber: number) {
    let count = startNumber;
    return {
        increase() {
            count += 1
            return `Counter value increase, current value = ${count}`
        },
        decrease() {
            count -= 1
            return `Counter value decrease, current value = ${count}`
        },
        set(setValue: number) {
            count += setValue
            return `Set start counter value, current value = ${count}`
        },
        reset() {
            count = 0
            return `Reset counter, current value = ${count}`
        }
    }
}

console.log('Task3')
const counterWithStartValue = makeCounter1(3)
console.log(counterWithStartValue.increase())
console.log(counterWithStartValue.increase())
console.log(counterWithStartValue.decrease())
console.log(counterWithStartValue.decrease())
console.log(counterWithStartValue.reset())
console.log(counterWithStartValue.increase())
console.log(counterWithStartValue.increase())
console.log(counterWithStartValue.decrease())
console.log(counterWithStartValue.set(6))
console.log(counterWithStartValue.increase())
console.log(counterWithStartValue.increase())
console.log(counterWithStartValue.increase())

console.log('Task3 end')


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

console.log('*Task 5*')
//LearnJS task_1 recursion
//@ts-ignore
function sumTo(n: number) {
    if (n === 1) {
        return 1
    }
    return sumTo(n - 1) + n
}

//LearnJS task_1 loop
function sumToLoop(n: number) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i
    }
    return result
}

//LearnJS task_1 Progression
function sumToProgression(n: number) {
    return n * (n + 1) / 2;
}

console.log('*Task 5.1 end*')
//recursion log
console.log((sumTo(100))); // 5050)
//loop log
console.log((sumToLoop(100))); // 5050)
//Progression
console.log((sumToProgression(100))); // 5050)
console.log('*Task 5.1 end*')

//LearnJS task_2 recursion
//@ts-ignore
function factorial(n: number) {
    if (n === 1) {
        return 1;
    }
    return factorial(n - 1) * n
}
console.log('*Task 5.2 end*')
console.log(factorial(10)) //3628800
console.log('*Task 5.2 end*')

console.log('*Task 5 end*')
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};