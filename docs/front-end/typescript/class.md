# Class

```ts
class Animal {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
const animal = new Animal(1, 3)
console.log(animal.x, animal.y) // 1 3
```
## readonly

```ts
// ----- readonly -----
class Greeter {
  readonly name: string = 'world'
  constructor(otherName?: string) {
    if(otherName !== undefined) {
      this.name = otherName
    }
  }
}
const g1 = new Greeter('hello')  // hello
const g2 = new Greeter()         // world
console.log(g1.name, g2.name)
// g.name = '123'  // error
```
## constructor
```ts
class ColorPoint {
  x: number;
  y: number;
  constructor(x:number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }
}
const c1 = new ColorPoint(1, 3)
const c2 = new ColorPoint(1, 4)
console.log(c1.x, c1.y, c2.x, c2.y)
```
## methods

```ts
class Scaler {
  x: number = 10;
  y: number = 10;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  scale(s: number): void {
    this.x *= s
    this.y *= s
  }
}
const scaler = new Scaler(1, 3)
scaler.scale(3)
console.log(scaler) // { x: 3, y: 9 }


// ---------- getters/ setters ----------
class GetLength {
  private _length: number = 0
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value
  }
}
const l = new GetLength()
console.log(l.length) // 0
l.length = 10
console.log(l.length) // 10

/*
1. if get exist but no set, the property is automatically readonly
2. if the type of setter parameter is not specified, it is inferred from the return 
type of the getter
3. getters and setters must have the same member visibility
*/
```
## implements

```ts
interface Sayable {
  say(): void
}
class Singer implements Sayable {
  say() {
    console.log('lala')
  }
}

interface Run {
  run(): void
}
interface Walk {
  walk(): void
}
class People implements Run, Walk {
  run() {
    console.log('run')
  }
  walk() {
    console.log('walk')
  }
}
```
## extends

```ts
class Dog {
  move() {
    console.log('move...')
  }
}
class Lee extends Dog {
  woof(times: number) {
    for(let i = 0; i < times; i++) {
      console.log('woof!')
    }
  }
}
const lee = new Lee()
lee.move()    // move...
lee.woof(2)   // woof! woof!


class Base {
  greet() {
    console.log('Hello, world!')
  }
}
class Derived extends Base {
  greet(name?: string) { // 函数名称和参数相同
    if (name === undefined) {
      super.greet()
    } else {
      console.log(`Hello, ${name.toUpperCase()}`)
    }
  }
}
const derived = new Derived()
derived.greet('jack')   // Hello, JACK
derived.greet()         // Hello, world!



// ----------- Initialization Order -------
class BaseClass {
  name: string = 'base';
  constructor() {
    console.log(this.name)
  }
}
class BaseDerived extends BaseClass {
  name: string = 'derived';
}
const base_derived = new BaseDerived() // base
```
## member visibility

1. public

```ts
/*
You can use TypeScript to control whether certain methods or properties are visible 
to code outside the class.
*/
class GreeterClass {
// the default visibility of class member is public. A public member can be accessed anywhere.
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public greet() {
    console.log(`Hello, ${this.name}`)
  }
}
const greeter1 = new GreeterClass('kyrie')
greeter1.greet()  // hello, kyrie
/*
Because public is already the default visibility modifier, you do not ever need to write it on
a class member, but might choose to do so for style/readability reasons.
*/
```


2. protected
```ts
/*
protected members are only visible to subclassed of the class they're declared in.
*/
class Reader {
  public greet() {
    console.log(`Hello, ${this.getName()}`)
  }
  protected getName() {
    return 'Irving'
  }
}
class SubReader extends Reader {
  protected name: string;
  constructor(name: string) {
    super()
    this.name = name
  }
  public hello() {
    console.log(`Hello, ${this.getName()}`)
    console.log(`Hello, ${super.getName()}`)
    console.log(this.name)  // james
  }
}
const reader = new SubReader('james')
reader.greet()  // Hello, Irving
reader.hello()  // Hello, Irving
console.log(reader['name']) // james
// reader.getName() 只能在类 或者 子类内部访问
// console.log(reader.name)  // 报错
```

3. privated
```ts
/*
private is like protected, but doesn't allow access to the member even from subclassed.
*/
class Phone {
  private price: number;
  constructor(price: number) {
    this.price = price;
  }
  getPrice(): number {
    return this.price
  }
}
const phone = new Phone(5999)
// console.log(phone.price)    报错
console.log(phone.getPrice())  // 5999

/*
Like other aspects of TypeScript's type system, private and protected are only enforced during
type checking.

This means that JavaScript runtime constructs like in or simple property lookup can 
still access a private or protected member.
*/
```
## static 
```ts
class MyClass {
  static x: number = 0;
  static print() {
    console.log(MyClass.x)
  }
  // static name: string  报错
  /*
  Static property 'name' conflicts with built-in property 'Function.name' of constructor 
  function 'MyClass'
  */
}
// static members are also inherited
class SubClass extends MyClass {
}
console.log(MyClass.x)    // 0
MyClass.print()           // 0
console.log(SubClass.x)   // 0
SubClass.print()          // 0

/*
It is generally not safe/possible to overwrite properties from the Function prototype.
Function properties like name,length and call are not valid to define as static members.
*/
```
## abstract
```ts
/*
An abstract method or abstract field is one that has not had an implementation provided. 
These members must exist inside an abstract class, which cannot be directly instantiated.
*/
interface MouseEventProps {
  click(): void
  dblclick (): void
  mouseover(): void
  mouseout():  void
}
abstract class MouseEvent implements MouseEventProps {
  abstract click(): void
  abstract dblclick (): void
  mouseover() {}
  mouseout() {}
}

class MouseEventAdapter extends MouseEvent {
  click() {
  }
  dblclick() {
  }
}

class GreeterName {
  constructor(public name: string) {
    this.name = name
  }
  print() {
    return this.name
  }
}

function greet(ctor: new () => GreeterName) {
  const instance = new ctor()
  console.log(instance.print())
}
// greet(GreeterName)
```
## Generic Class
```ts
// -------- Generic classes -------
class Box<Type> {
  contents: Type
  constructor(value: Type) {
    this.contents = value
  }
}
const box_string = new Box('123')
const box_number = new Box(123)

/*
The static members of a generic class can never refer to the class's type parameters.
*/

// ---------- this ad runtime in classes ----------
class Monkey {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  getName(): string {
    return this.name
  }
  get_name = () => {
    return this.name
  }
}
const monkey = new Monkey('monkey')
const dog = {
  name: 'hello',
  getName: monkey.getName,
  get_name: monkey.get_name
}
console.log(dog.getName(), dog.get_name())  // hello  monkey
```
## this
```ts
/* ------ this parameters ------- */
/*
In a method or function definition, an initial parameter named this has special meaning in
TypeScript, these parameters are erased during compilation
*/

class Player {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  get_name(this: Player): string {
    return this.name
  }
}
const player = new Player('kyrie')
console.log(player.get_name()) // kyrie
const get_name = player.get_name
// console.log(get_name())  error


// --------- parameter properties ---------
class Params {
  constructor(
    public readonly x:number,
    protected y: number,
    private z: number
  ) {

  }
}
const params = new Params(1, 2, 3)
console.log(params.x)
```
