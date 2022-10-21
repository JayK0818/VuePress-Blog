# 最长回文子串

  给定一个字符串 **s**, 找到s中最长的回文子串。

**解法一**

```ts
const longest_palindrome = (s: string): string => {
  const length = s.length;
  if (length <= 1) return s
  let max = 0
  let string = ''
  const is_reverse_string = (string: string): boolean => {
    const array:string[] = []
    string.split('').forEach(s => {
      array.push(s)
    })
    return string === array.reverse().join('')
  }
  for (let i = 0, length = s.length; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      const substring = s.slice(i, j)
      if (is_reverse_string(substring)) {
        if (substring.length > max) {
          max = substring.length
          string = substring
        }
      }
    }
  }
  return string
}
/*这个算法测试的时候 挂在了 "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmj
tstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrg
okpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykp
piyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqah
iouhnecjwysmtarjjdjqdrkljawzasriouuiqk
cwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrym
zojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbok
ofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwti
uoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaue
ljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjco
yoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqq
xoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsi
dakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcd
oawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"*/

// 执行时间太长
```

**解法二**

  使用一次for循环, 将某个字符串从中心向四周扩散,直到字符串两头的字符不相等为止(此时为当前字符串从中心扩散时的最大回文字符串), 再进行比较保存。
```ts
const longest_palindrome = (s: string): string => {
  let max = ''
  const reverse_string = (start: number, end: number) => {
    while(start >=0 && s.charAt(start) === s.charAt(end) && end < s.length) {
      start -= 1
      end += 1
    }
    const substring = s.slice(start + 1, end)
    if (substring.length > max.length) max = substring
  }
  for (let i = 0, length = s.length; i < length; i++) {
/*
回文字符串分为奇数和偶数长度, 如果是奇数长度, 以当前位置的字符串为中心, 偶数长度的话 
以当前字符串和下一个字符串为中心
*/
    reverse_string(i, i+1)
    reverse_string(i, i)
  }
  return max
}
```