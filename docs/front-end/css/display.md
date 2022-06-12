# display

  display 属性设置一个元素应该如何显示.

1. display-outside(外部值)
2. display-inside(内部值)
3. display-listitem(列表值)
4. display-internal(属性值)
5. display-box(显示值)
6. display-legacy(混合值)
7. global(全局值)

:::tip
隐藏一个元素可以通过 display:none(不会占据之前的空间,仍会影响布局), 或者把visibility设置为 hidden(会占据之前一样的空间)。
:::

  外部值就是定义自身元素的外部表现, 而不影响内部的子元素。
    display-outside: block / inline

  外部值: 定义子元素布局的。
    display-inside: flex / grid / table

  列表值: ul / ol

  混合值: inline-block / inline-table / inline-flex / inline-grid

  全局值:
  inherit: 继承父元素的属性
  initial: 初始值
  unset:  混合了inherit 和 initial, 如果该属性可以继承, 则等同于inherit,否则等同于 initial
