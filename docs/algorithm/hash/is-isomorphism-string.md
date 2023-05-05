# 同构字符串

  给定两个字符串 *s* 和 *t*, 判断它们是否是同构的。
  如果字符串 *s* 中的字符 可以按某种映射关系替换得到 *t*, 那么这两个字符串时同构的。 每个出现的字符都应该映射到另一个字符, 同时不改变字符的顺序。不同字符
  不能映射到同一个字符上,相同字符只能映射到同一个字符上, 字符可以映射到自己本身。

```js
const s = 'egg', t = 'add'
// true

const s = 'foo', t = 'bar'
// false

const s = 'paper', t = 'title'
// true
```

**解法一**

  使用两个map 存储每个字符串中 每个字符出现的下标, 然后对比两个map结构中 下标是否相同。 比如字符串 **aabb** 对应的map结构为
  {a: [0, 1], b: [2, 3]}, 字符串 **ccdd** 的map结构为 {c: [0, 1], d: [2, 3]}, 可以理解为字符 **a** 通过某种方式映射到**c**, 而字符**b**
  通过某种关系映射到**d**, 且它们出现的位置相同, 所以认为这两个字符串是同构的。

```ts
const is_isomorphic_string = (s: string, t: string):boolean => {
  if (s.length !== t.length) return false
  const get_map = (s: string): Map<string, number[]> => {
    const map: Map<string, number[]> = new Map()
    for (let i = 0, length = s.length; i < length; i++) {
      if (!map.has(s.charAt(i))) {
        map.set(s.charAt(i), [i])
      } else {
        const v = map.get(s.charAt(i))
        v.push(i)
        map.set(s.charAt(i), v)
      }
    }
    return map
  }
  const map1 = Array.from(get_map(s).values())
  const map2 = Array.from(get_map(t).values())
  for (let i = 0, length = map1.length; i < length; i++) {
    const item1 = map1[i]
    const item2 = map2[i]
    if (item1.join() !== item2.join()) return false
  }
  return true
}
```

**解法二**

  在评论区看到的一种解法 比较简单明了。同样使用两个 Map 结构存储 每个字符出现的下标(即使覆盖了也不影响), 每次存储前比较 两个字符串**s** 和 **t** 对应位置下标的字符 索引值是否相同, 如果不同, 直接返回false, 否则存储这个字符 以及它的下标。

```ts
const is_isomorphic_string = (s: string, t: string):boolean => {
  if (s.length !== t.length) return false
  const map1: Map<string,number> = new Map()
  const map2: Map<string, number> = new Map()
  for (let i = 0, length = s.length; i < length; i++) {
    const c1 = s.charAt(i)
    const c2 = t.charAt(i)
    if (map1.get(c1) !== map2.get(c2)) return false
    map1.set(c1, i)
    map2.set(c2, i)
  }
  return true
}
```