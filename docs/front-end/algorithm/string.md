# 字符串

## 判断字符串括号匹配

```ts
//   (a[b{c}]) 左右括号是匹配的, (a{b[c)d]}) 是不匹配的
// 利用 栈的思想, 匹配的话就出栈。
const leftSymbols:string = '([{';
const rightSymbols:string = ')]}';

// 判断是否是左右括号匹配
function is_equal(s1: string, s2: string):boolean {
  return (s1 === '{' && s2 === '}') 
        || (s1 === '(' && s2 === ')') 
        || (s1 === '[' && s2 === ']')
}

function fn(str: string) : boolean {
  const array:string [] = []
  for(const s of str) {
    if(!leftSymbols.includes(s) && !rightSymbols.includes(s)) continue
    if(leftSymbols.includes(s)) {
      array.push(s)
    }else{ // 出现右边括号,判断最后一个进栈的括号和右括号是否匹配,匹配则pop出来
      if(is_equal(array[array.length-1],s)) {
        array.pop()
      }else{
        return false
      }
    }
  }
  return array.length === 0
}
// 测试
const string1 = '(a{b[c]})',
      string2 = '{a[b(c])}',
      string3 = '[a{b(]c)}]';

console.log('f1', foo(string1)) // true
console.log('f2', foo(string2)) // false
console.log('f3', foo(string3)) // false
```
## 连续出现最长的字符

```ts
const string = 'aaabcbddeedssssdddddddddd';

function getMaxCharLength(str: string): CharProps {
  const length = str.length;
  if(length === 0) {
    return {
      char:'',
      length: 0
    }
  }
  const res: CharProps = {
    char: '',
    length: 0
  }
  for(let i = 0; i < length; i++) {
    let pointerLength = 0
    for(let j = i; j < length; j++) {
      if(str[i] === str[j]) {
        pointerLength += 1
      }
      // 记录当后一个字母与前一个字母不想等, 或者 已经遍历结束了
      /*
      注意第二种情况, 如果没有 j === length - 1,当最后一段字符是连续最长的, 
      此时不会满足 str[i] !== str[j]
      */
      if(str[i] !== str[j] || j === length - 1) {
        if(pointerLength > res.length) {
          res.length = pointerLength
          res.char = str[i]
        }
        if(i < length - 1) {
          i = j - 1;
        }
        break;
      }
    }
  }
  return res
}
// 测试
console.log(getMaxCharLength(string)) // { char: 'd', length: 10 }


// 利用双指针, i一直向下遍历, 如果str[i] !== str[j]的时候, 此时让j 追上 i的位置
function getMaxCharLength( str: string): CharProps {
  const length = str.length;
  const res: CharProps = {
    char: '',
    length: 0
  }
  if(length === 0) return res
  let j = 0
  let pointerLength = 0
  for(let i = 0; i < length; i++) {
    if(str[i] === str[j]) {
      pointerLength += 1
    }
    if(str[i] !== str[j] || i === length -1) {
      if(pointerLength > res.length) {
        res.length = pointerLength
        res.char = str[j]
      }
      pointerLength = 0
      if(i < length - 1) {
        j = i
        i--
      }
    }
  }
  return res
}

console.log(getMaxCharLength(string))
// { char: 'd', length: 10 }
```
## 回文数字

  求出指定范围内所有的回文数字
```ts
// ----- 将数字转化为字符串, 然后与将字符串转变为数组 再反转后 转化为字符串相比 -----
function reverseNumber(n: number) :number[] {
  if(n === 0) return []
  const result:number[] = []
  for(let i = 1; i <= n; i++) {
    console.log(n.toString().split('').reverse().join(''))
    if(i.toString() === i.toString().split('').reverse().join('')){
      result.push(i)
    }
  }
  return result
}

console.log(reverseNumber(100))
/*
[
  1,  2,  3,  4,  5,  6,
   7,  8,  9, 11, 22, 33, 44,
  55, 66, 77, 88, 99
]
*/

// ----- 依次判断字符首位对应位置的字符是否相等 -------
function reverseNumber(n: number): number [] {
  if(n === 0) return []
  const result: number[] = []
  for(let i = 1; i <= n; i++) {
    let start = 0, end = i.toString().length - 1;
    let flag = true
    while(start < end) {
      if(i.toString()[start] === i.toString()[end]) {
        start+=1;
        end -= 1
      }else{
        flag = false
        break;
      }
    }
    if(flag) {
      result.push(i)
    }
  }
  return result
}
console.log(reverseNumber(100))
/*
[
 1,  2,  3,  4,  5,  6,
7,  8,  9, 11, 22, 33, 44,
55, 66, 77, 88, 99
]
*/

// ------ 不再利用字符串转换,直接求一个数的反转数 -------
function reverseNumber(n: number): number [] {
  if(n === 0) return []
  const result: number[] = []
  for(let i = 1; i <= n; i++) {
    // 直接求一个数的反转数
    let x = i // 当前数字
    let rev = 0 // 反转数字
    while(x > 0) {
      rev = rev * 10 + x % 10
      x = Math.floor(x / 10)
    }
    if(rev === i) {
      result.push(i)
    }
  }
  return result
}
console.log(reverseNumber(100))
/*
[
1,  2,  3,  4,  5,  6,  7,
8,  9, 11, 22, 33, 44, 55,
66, 77, 88, 99
]*/
```
## 字母大小写转换

  将一段字符串中的大写字母转换为小写字母, 将小写字母转换为大写字母, 其余字符不变。

```js
// ---- 利用正则表达式 -------
function letterSwitch(str: string): string {
  const length = str.length;
  if(length === 0) return ''
  let result = '';
  const reg1 = /[a-z]/,
        reg2 = /[A-Z]/;
  for(const item of str) {
    if(reg1.test(item)) {
      result += item.toUpperCase()
    }else if(reg2.test(item)) {
      result += item.toLowerCase()
    }else{
      result += item
    }
  }
  return result
}

const string = 'AccxD2@xYz'
console.log(letterSwitch(string)) // aCCXd2@XyZ


// ----- 利用ASCII编码 --------
// 大写字母在ASCII编码对照表里 10进制 范围是 65 - 90, 小写字母范围是 97 - 122
function letterSwitch(str: string): string {
  const length = str.length;
  if(length === 0) return ''
  let result = '';
  for(const item of str) {
    const code = item.charCodeAt(0)
    if(code >= 65 && code <= 90) {
      result += item.toLowerCase()
    }else if(code >= 97 && code <= 122) {
      result += item.toUpperCase()
    }else{
      result += item
    }
  }
  return result
}
console.log(letterSwitch(string)) // aCCXd2@XyZ
```
## 重复子字符串

  判断一个字符串是否 由 n个重复的子字符串组成。
```ts
function check(str: string) {
  const reg = /^(\w+)\1+$/
  return reg.test(str)
}

console.log(check('abcabc'))  // true
console.log(check('abcdabc')) // false
console.log(check('abcabcd')) // false
console.log(check('aabaab'))  // true
console.log(check('abaaabaa'))  // true
```
  
