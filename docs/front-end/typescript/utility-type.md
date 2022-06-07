# Utility Types

## Partial
```ts
/*
Partial<Type>
Construcs a type with all properties of Type set to optional.
*/
interface Todo {
  title: string
  completed: boolean
  date: string
}

type PartialTodo = Partial<Todo>
/*
type PartialTodo = {
  title?: string | undefined;
  completed?: boolean | undefined;
  date?: string | undefined;
}
*/
```
## Required
```ts
/*
Required<Type>
Constructs a type consisting of all properties of Type set to required
*/
interface Person {
  firstName?: string
  lastName?: string
  age?: number
}
type RequiredPerson = Required<Person>
/*
type RequiredPerson = {
  firstName: string;
  lastName: string;
  age: number;
}
*/
```
## Readonly
```ts
/*
Readonly<Type>
Constructs a type with all properties of Type set to readonly.
*/
interface People {
  name: string
  age: number
  adult: boolean
}
type ReadonlyPeople = Readonly<People>
/*
type ReadonlyPeople = {
  readonly name: string;
  readonly age: number;
  readonly adult: boolean;
}
*/
```
## Record
```ts
/*
Record<Keys, Type>
Constructs an object type whose property keys are Keys and whose property values are Type.
*/
interface Player {
  firstName: string
  lastName: string
  age: number
}
const players : Record<string, Player> = {
  lebron: {
    firstName: 'lebron',
    lastName: 'james',
    age: 37
  },
  irving: {
    firstName: 'kyrie',
    lastName: 'irving',
    age: 30
  }
}
```
## Pick
```ts
/*
Pick<Type, Kyes>
Constructs a type by picking the set of properties Keys from Type
*/

interface TodoProps {
  text: string
  id: number
  completed: boolean
}
type PickTodoProps = Pick<TodoProps, 'text' | 'id'>
/*
type PickTodoProps = {
  text: string;
  id: number;
}
*/
```
## Omit
```ts
/*
Omit<Type, Kyes>
Constructs a type by picking all properties from Type and then removing Kyes
*/
type OmitTodoProps = Omit<TodoProps, 'text'>
/*
type OmitTodoProps = {
  id: number;
  completed: boolean;
}
*/
```
## Exclude
```ts
/*
Exclude<UnionType, ExcludeMembers>
排除联合类型中的某个类型
*/
type Direction = 'Left' | 'Right' | 'Top' | 'Bottom';
type ExcludeDirection = Exclude<Direction, 'Left'>
// "Right" | "Top" | "Bottom"

type T1 = Exclude<string | number | (() => void), Function>
// string | number
```
## Extract
```ts
/*
Extract<Type, Union>
从一个联合类型中提取指定的类型
*/
type T2 = Extract<Direction, 'Top'>
// Top

type T3 = Extract<string | number | (() => void), Function>
// () => void
```
## Parameters
```ts
// Parameters<Type>
/*
Constructs a tuple type from the types used in the parameters of a function type Type.
*/
type Fn = (a: number, b: number) => number
type SumParameterUnion = Parameters<Fn>
/* [a: number, b: number] */
type GenericTuple = Parameters<<T>(arg: T) => T>
/*[arg: unknown]*/

function combine(a: string, b: string): string {
  return a + b
}
type CombineTuple = Parameters<typeof combine>
/* [a: string, b: string] */
```
## ConstructorParameters
```ts
// ----- ConstructorParameters<Type> -----------
class Player {
  public firstName: string
  public lastName: string
  public age: number
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
}
type ConstructorUnion = ConstructorParameters<typeof Player>
/* [firstName: string, lastName: string, age: number] */
```
## ReturnType
```ts
//------ ReturnType ------
/*
Constructs a type consisting of the return type of function Type
*/
type R1 = ReturnType<() => string>
/*type R1 = string */
type R2 = ReturnType<() => ({a: number, b: number})>
/*
type R2 = {
  a: number;
  b: number;
}
*/
type R3 = ReturnType<typeof combine>
// string
```