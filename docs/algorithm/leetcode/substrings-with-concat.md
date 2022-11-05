# 串联所有单词的子串

  给定一个字符串 **s** 和一个字符串数组 **words**。**words**中所有字符串长度相同。**s** 中的 串联子串 是一个包含 **words** 中所有字符串以
  任意顺序排列连接起来的子串。

```js
s = "barfoothefoobarman", words = ["foo","bar"]
// 除数 [0,9]
// "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
// "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。


s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// s 中没有子串长度为 16 并且等于 words的任何顺序排列的连接, 所以返回一个空数组。
```