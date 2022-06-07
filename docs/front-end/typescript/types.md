# Types

## string/number/boolean
```ts
// -------------------------- 原始类型 --------------------
// 布尔值
const isDone:boolean = false;

// 数字
const decLiteral:number = 6
const hexLiteral:number = 0xf00d
const binaryLiteral:number = 0b1010
const octalLiteral:number = 0o744

// 字符串
const player:string = 'bob'
console.log(player) // bob

// --- 模版字符串 ----
const singer:string = `${player}`;
const age:number = 37
const sentence:string = `${player} is ${age} years old`;
```
## Array

```ts
const ages:number[] = [10,20,30]
const players: string[] = ['kyrie', 'lebron', 'durant']
```
## any
```ts
// using any disables all further type checking.
const object:any = {firstName: 'kyrie', lastName:'irving'}
console.log(object.firstName)
console.log(object.age)
object.say()

/*
when you do not specify a type,and TypeScript can not infer it from context
the compiler will typically default to any
*/
```
## Function
```ts
/*
TypeScript allows you to specify the types of both the input and output values 
of functions.
*/
function greet(message: string) {
  return `Hello, ${message}`
}
greet('World')

function plus(a: number, b: number): number {
  return a + b
}
plus(1, 2)

// Anonymous function
const names = ['Alice', 'Bob', 'Eve'];
names.forEach(function(s) {
  console.log(s.toUpperCase())
})

// Object Types
function print(point: {x: number, y:number}) {
  console.log(point.x, point.y)
}
print({x:1, y:2})

// optional properties
function fullName(player:{firstName:string, lastName:string, age?:number}):string{
  console.log(player.age?.toString()) // modern javascript syntax
  // console.log(player.age.toString()) // Error
  if(player.age !== undefined) {
    player.age.toString()
  }
  return `${player.firstName} - ${player.lastName}`
}
fullName({
  firstName: 'kyrie',
  lastName: 'irving'
})
```

## Union Types

```ts
function printId(id: number | string) {
  console.log(id.toString())  // common methods
  // narrow
  if(typeof id === 'string') {
    console.log(id.toUpperCase())
  }else{
    console.log(id)
  }
}
printId(123)
printId('123')
/*
TypeScript will only allow an operation if it is valid for every member of the union.
For example, if you have the union string|number, you can not use methods 
that are only available on string
*/

function welcomePeople(peoples: string[] | string) {
  if(Array.isArray(peoples)) {
    console.log(`Hello, ${peoples.join(' and ')}`)
  } else {
    console.log(`Hello, ${peoples}`)
  }
}

/*
Sometimes you will have a union where all the members have something in common. 
For example, both arrays and string have a slice method. If every member in a 
union has a property in common, you can use that property without narrowing
*/
function say(x: string[] | string) {
  return x.slice(0, 3)
}
```
## Type Aliases
```ts
/*
It's common to want to use the same type more than once and refer to it by 
a single name
*/
type Players = {
  firstName: string;
  lastName: string;
}
function getFullName(p: Players) {
  console.log(p.firstName + '-' + p.lastName)
}

/*
You can actually use a type alias to give a name to any type at all, 
not just an object type
*/
type ID = number | string;

// ----------- interface -----------
/* An interface declaration is another way to name an object type */
interface People {
  name: string
  age: number
  sex: string
}
function introduce(p: People): void {
  console.log(`My name is ${p.name}, and I am ${p.age} years old`)
}
introduce({
  name: 'wade',
  age: 39,
  sex: 'male'
})


/*
The key distinction between Type aliases and interface is that a type cannot 
be re-opened to add new properties vs an interface which is always extendable.
*/

interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}

type CellPhone = {
  name: string
}
type IPhone = CellPhone & {
  color: string
}

/*
A type cannot be changed after being created.
*/
```
## Type Assertions
```ts
/*
Sometimes you will have information about tye type of a value that TypeScript 
can not know about.
*/
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const input = <HTMLInputElement>document.getElementById('input')
```

## Literal Types

```ts
let secret: 'hello' = 'hello'
secret = 'hello'
// secret = 'world' // Error

/*
By combining literals into unions, you can express a much more useful concept 
for example, functions that only accept a certain set of known values.
*/
function compare(a: string, b: string): -1 | 0 | 1 {
  return a == b ? 0 : a > b ? 1 : -1
}
```

## Literal interface
```ts
function fetch(data: {
  url: string,
  method: 'GET' | 'POST'
}) { }

const request = {
  url: 'https://www.baidu.com/api/',
  method: 'GET'
}
fetch({
  url: request.url,
  method: request.method
})
/*
Argument of type 'string' is not assignable to parameter of type 'GET' | 'POST'
*/
const request = {
  url: 'https://www.baidu.com/api/',
  method: 'GET'
} as const
fetch({
  url: request.method,
  method: request.method
})

/*
as const suffix acts like const but for the type system, ensuing that all properties 
are assigned the literal type instead of a more general version like string or number
*/
```
  non-null assertion operator
```ts
// Non-null Assertion Operator
function m1(book?: string | null) {
  // book: string | undefined | null
  console.log(book?.toString())
  console.log(book!.toString())
}
```
## Symbol

```ts
const symbol: Symbol = Symbol.for('hello')
const symbol: Symbol = Symbol('world')
```

## Enums

```ts
/*
Enums allow a developer to define a set of named constants.
*/
// ---------- numeric enums -----------
enum Direction {
  LEFT,
  RIGHT,
  UP,
  DOWN
}
function respond(recipinet: string, message: Direction): void {
  console.log(recipinet, message)
}
respond('hello', Direction.DOWN)  // 3


enum Color {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow'
}

function getColor(message: string) {
  console.log(Color, message)
}
getColor(Color.BLUE)
getColor(Color.RED)
getColor(Color.RED)
/*
{ RED: 'red', BLUE: 'blue', YELLOW: 'yellow' } blue
{ RED: 'red', BLUE: 'blue', YELLOW: 'yellow' } red
{ RED: 'red', BLUE: 'blue', YELLOW: 'yellow' } red
*/


// computed and constant numbers
enum FileAccess {
  None,
  Read = 1 << 2,
  Write = 1 << 1,
  ReadWrite = Read | Write,
  G = '123'.length
}

console.log(FileAccess.None, FileAccess.Read, FileAccess.Write, FileAccess.ReadWrite, FileAccess.G)
// 0 4 2 6 3


// -------- union enums and enum member -------
enum ShapeKind {
  Circle,
  Square
}
interface Circle {
  kind: ShapeKind.Circle
  radius: number
}
interface Square {
  kind: ShapeKind.Square,
  sideLength: number
}

const circle: Circle = {
  kind: ShapeKind.Circle,
  radius: 100
}
const square: Square = {
  kind: ShapeKind.Square,
  sideLength: 200
}

console.log(circle, square) // { kind: 0, radius: 100 } { kind: 1, sideLength: 200 }

// ------- string enums ------
enum Message {
  Success = 'Success',
  Warn = 'Warn',
  Error = 'Error'
}
// string enums do not have auto-incrementing behavior.


// ----------- Enums at runtime --------
enum E {
  X,
  Y,
  Z
}
console.log('e:', E)
/*
{ '0': 'X', '1': 'Y', '2': 'Z', X: 0, Y: 1, Z: 2 }
*/

// ----------- Enums at compile time ----------
/*
Even though Enums are real objects that exist at runtime, the keyof keyword works differently you might
expect for typical objects. Instead, use keyof typeof to get a Type that represents all Enum keys
as strings
*/
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG
}
type LogLevelStrings = keyof typeof LogLevel
// type LogLevelStrings = "ERROR" | "WARN" | "INFO" | "DEBUG"

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key]
  if(num <= LogLevel.WARN) {
    console.log("Log level key is:", key);  // 'ERROR'
    console.log("Log level value is:", num);  // 0
    console.log("Log level message is:", message);
  }
}
printImportant('ERROR', 'This is a message')

// Keep in mind that string enum members do not get a reverse mapping generated at all.
enum Size_1 {
  Big = 'big',
  Small = 'small',
  Middle = 'middle'
}
enum Size_2 {
  Big,
  Small,
  Middle
}
console.log('size:' ,Size_1, Size_2)  // { Big: 'big', Small: 'small', Middle: 'middle' }
/*
{
  '0': 'Big',
  '1': 'Small',
  '2': 'Middle',
  Big: 0,
  Small: 1,
  Middle: 2
}
*/

// --------- const enum Enum ---------
/*
Const enum members are inlined at use sites.They are completely removed during compilation.
*/
const enum Follow {
  Up,
  Down,
  Left,
  Right
}
const directions = [Follow.Down, Follow.Left, Follow.Right, Follow.Up]
console.log(directions)
/* [ 1, 2, 3, 0 ] */


const enum Code {
  SUCCESS_CODE = 0,
  ERROR_CODE = 100 * 2,
  WARNING_CODE = SUCCESS_CODE * 3
}
const codes = [Code.ERROR_CODE, Code.SUCCESS_CODE, Code.WARNING_CODE]
console.log(codes)  // [ 200, 0, 0 ]

const enum BackCode {
  SUCCESS_CODE = 'success',
  ERROR_CODE = 'error',
  WARNING_CODE = 'warning'
}
const back_codes = [BackCode.ERROR_CODE, BackCode.SUCCESS_CODE, BackCode.WARNING_CODE]
console.log(back_codes) // [ 'error', 'success', 'warning' ]


// ----------- object vs enum
const enum EDirection {
  Up,
  Down,
  Left,
  Right
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
} as const

console.log('oDirection', ODirection) // { Up: 0, Down: 1, Left: 2, Right: 3 }
```
