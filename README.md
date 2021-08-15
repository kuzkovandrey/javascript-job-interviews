# [interview tasks]

### palindrome.js

Дана строка. Нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, false - если нет. 

```javascript
palindrome('racecar') === true
palindrome('table') === false
```

### fizzBuzz.js

Требуется написать функцию, выводящую в консоль числа от 1 до n, где n - это целое число, которая функция принимает в качетсве параметра, с такими условиями:
	- выводит "fizz" вместо чисел, кратных 3;
	- выводит "buzz" вместо чисел, кратных 5;
	- выводит "fizzbuzz" вместо чисел, кратных как 3, так и 5.

```javascript
fizzbuzz(5)
// 1
// 2
// fizz
// 4
// buzz
```

### anagram.js

Нужно написать функцию, которая проверяет, являются ли две строчки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы. Пробелы или знаки препинания в расчет не берутся.

```javascript
anagram('finder', 'Friend')
//true

anagram('hello', 'bye')
//false

```

### findVowels.js

Нужно написать функцию, принимающую строку в качестве агрумента и возвращающую количество глассных, которые содержатся в строке. Глассными являются "a", "e", "i", "o", "u".

```javascript
findVowels('hello')
//2
findVowels('why')
//0

```

### fibonnaci.js

Нужно написать функцию, которая возвращает число, стоящее на n-ой позиции в последовательности Фибоначии.

```javascript
fibonnaci(4) // 2
fibonnaci(7) // 8 
```


### customString.js

Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'.

```javascript
customString('*', '1', 'b', '1c') // '1*b*1c'
```
