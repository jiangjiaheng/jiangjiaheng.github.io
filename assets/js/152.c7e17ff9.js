(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{511:function(a,s,n){"use strict";n.r(s);var e=n(25),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),n("h2",{attrs:{id:"数组的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组的定义"}},[a._v("#")]),a._v(" 数组的定义")]),a._v(" "),n("p",[a._v("数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = ['a', 'b', 'c'];\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("任何类型的数据，都可以放入数组。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = [\n  {a: 1},\n  [1, 2, 3],\n  function() {return true;}\n];\n\narr[0] // Object {a: 1}\narr[1] // [1, 2, 3]\narr[2] // function (){return true;}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("如果数组的元素还是数组，就形成了多维数组。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [[1, 2], [3, 4]];\na[0][1] // 2\na[1][1] // 4\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("h2",{attrs:{id:"数组的本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组的本质"}},[a._v("#")]),a._v(" 数组的本质")]),a._v(" "),n("p",[a._v("本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('typeof [1, 2, 3] // "object"\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = ['a', 'b', 'c'];\n\nObject.keys(arr)\n// [\"0\", \"1\", \"2\"]\n\narr['0'] // 'a'\narr[0] // 'a'\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h2",{attrs:{id:"数组的length属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组的length属性"}},[a._v("#")]),a._v(" 数组的length属性")]),a._v(" "),n("h3",{attrs:{id:"_1-可读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-可读"}},[a._v("#")]),a._v(" 1.可读")]),a._v(" "),n("p",[a._v("数组的length属性，返回数组的成员数量。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("['a', 'b', 'c'].length // 3\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-动态变化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-动态变化"}},[a._v("#")]),a._v(" 2. 动态变化")]),a._v(" "),n("p",[a._v("只要是数组，就一定有length属性。该属性是一个动态的值，等于键名中的最大整数加上1。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = ['a', 'b'];\narr.length // 2\n\narr[2] = 'c';\narr.length // 3\n\narr[9] = 'd';\narr.length // 10\n\narr[1000] = 'e';\narr.length // 1001\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br")])]),n("p",[a._v("length能动态变化的根本在于数组本身是动态变化的。")]),a._v(" "),n("h3",{attrs:{id:"_3-可写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-可写"}},[a._v("#")]),a._v(" 3. 可写")]),a._v(" "),n("p",[a._v("length属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到length设置的值。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = [ 'a', 'b', 'c' ];\narr.length // 3\n\narr.length = 2;\narr // [\"a\", \"b\"]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("清空数组的一个有效方法，就是将length属性设为0。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = [ 'a', 'b', 'c' ];\n\narr.length = 0;\narr // []\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("如果人为设置length大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = ['a'];\n\na.length = 3;\na[1] // undefined\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("h3",{attrs:{id:"_4-length只表示数组元素的个数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-length只表示数组元素的个数"}},[a._v("#")]),a._v(" 4. length只表示数组元素的个数")]),a._v(" "),n("p",[a._v("值得注意的是，由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响length属性的值。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [];\n\na['p'] = 'abc';\na.length // 0\n\na[2.1] = 'abc';\na.length // 0\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h2",{attrs:{id:"遍历数组的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#遍历数组的方法"}},[a._v("#")]),a._v(" 遍历数组的方法")]),a._v(" "),n("h3",{attrs:{id:"_1-in"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-in"}},[a._v("#")]),a._v(" 1. in")]),a._v(" "),n("p",[a._v("检查某个键名是否存在的运算符in，适用于对象，也适用于数组。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = [ 'a', 'b', 'c' ];\n2 in arr  // true\n'2' in arr // true\n4 in arr // false\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("注意，如果数组的某个位置是空位，in运算符返回false。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = [];\narr[100] = 'a';\n\n100 in arr // true\n1 in arr // false\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h3",{attrs:{id:"_2-for"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-for"}},[a._v("#")]),a._v(" 2. for")]),a._v(" "),n("p",[a._v("for...in循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [1, 2, 3];\n\nfor (var i in a) {\n  console.log(a[i]);\n}\n// 1\n// 2\n// 3\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("p",[a._v("但是，for...in不仅会遍历数组所有的数字键，还会遍历非数字键。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [1, 2, 3];\na.foo = true;\n\nfor (var key in a) {\n  console.log(key);\n}\n// 0\n// 1\n// 2\n// foo\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("p",[a._v("因此，推荐使用ES6语法中的for...of")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [1, 2, 3];\na.foo = true;\n\nfor (var key of a) {\n  console.log(key);\n}\n// 0\n// 1\n// 2\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("h3",{attrs:{id:"_3-foreach"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-foreach"}},[a._v("#")]),a._v(" 3. forEach")]),a._v(" "),n("p",[a._v("数组的forEach方法，也可以用来遍历数组。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var colors = ['red', 'green', 'blue'];\ncolors.forEach(function (color) {\n  console.log(color);\n});\n// red\n// green\n// blue\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h2",{attrs:{id:"数组的空位与undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组的空位与undefined"}},[a._v("#")]),a._v(" 数组的空位与undefined")]),a._v(" "),n("h3",{attrs:{id:"_1-空位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-空位"}},[a._v("#")]),a._v(" 1. 空位")]),a._v(" "),n("p",[a._v("当数组的某个位置是空元素，即两个逗号之间没有任何值，我们称该数组存在空位（hole）。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [1, , 1];\na.length // 3\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("数组的空位不影响length属性。")]),a._v(" "),n("p",[a._v("数组的空位是可以读取的，返回undefined。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [, , ,];\na[1] // undefined\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [1, 2, 3];\ndelete a[1];\n\na[1] // undefined\na.length // 3\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h3",{attrs:{id:"_2-undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-undefined"}},[a._v("#")]),a._v(" 2. undefined")]),a._v(" "),n("p",[a._v("数组的某个位置是空位，与某个位置是undefined，是不一样的。如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [, , ,];\n\na.forEach(function (x, i) {\n  console.log(i + '. ' + x);\n})\n// 不产生任何输出\n\nfor (var i in a) {\n  console.log(i);\n}\n// 不产生任何输出\n\nObject.keys(a)\n// []\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("p",[a._v("如果某个位置是undefined，遍历的时候就不会被跳过。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var a = [undefined, undefined, undefined];\n\na.forEach(function (x, i) {\n  console.log(i + '. ' + x);\n});\n// 0. undefined\n// 1. undefined\n// 2. undefined\n\nfor (var i in a) {\n  console.log(i);\n}\n// 0\n// 1\n// 2\n\nObject.keys(a)\n// ['0', '1', '2']\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br")])]),n("p",[a._v("这就是说，空位就是数组没有这个元素，所以不会被遍历到，而undefined则表示数组有这个元素，值是undefined，所以遍历不会跳过。")]),a._v(" "),n("h2",{attrs:{id:"类似数组的对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类似数组的对象"}},[a._v("#")]),a._v(" 类似数组的对象")]),a._v(" "),n("h3",{attrs:{id:"_1-定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[a._v("#")]),a._v(" 1. 定义")]),a._v(" "),n("p",[a._v("如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var obj = {\n  0: 'a',\n  1: 'b',\n  2: 'c',\n  length: 3\n};\n\nobj[0] // 'a'\nobj[1] // 'b'\nobj.length // 3\nobj.push('d') // TypeError: obj.push is not a function\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br")])]),n("p",[a._v("“类似数组的对象”的根本特征，就是具有length属性。只要有length属性，就可以认为这个对象类似于数组。但是有一个问题，这种length属性不是动态值，不会随着成员的变化而变化。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var obj = {\n  length: 0\n};\nobj[3] = 'd';\nobj.length // 0\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h3",{attrs:{id:"_2-例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-例子"}},[a._v("#")]),a._v(" 2. 例子")]),a._v(" "),n("p",[a._v("典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// arguments对象\nfunction args() { return arguments }\nvar arrayLike = args('a', 'b');\n\narrayLike[0] // 'a'\narrayLike.length // 2\narrayLike instanceof Array // false\n\n// DOM元素集\nvar elts = document.getElementsByTagName('h3');\nelts.length // 3\nelts instanceof Array // false\n\n// 字符串\n'abc'[1] // 'b'\n'abc'.length // 3\n'abc' instanceof Array // false\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br")])]),n("h3",{attrs:{id:"_3-转换为真正的数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-转换为真正的数组"}},[a._v("#")]),a._v(" 3. 转换为真正的数组")]),a._v(" "),n("p",[a._v("数组的slice方法可以将“类似数组的对象”变成真正的数组。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = Array.prototype.slice.call(arrayLike);\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过call()把数组的方法放到对象上面。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function print(value, index) {\n  console.log(index + ' : ' + value);\n}\n\nArray.prototype.forEach.call(arrayLike, print);\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("在arguments对象上面调用forEach方法。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// forEach 方法\nfunction logArgs() {\n  Array.prototype.forEach.call(arguments, function (elem, i) {\n    console.log(i + '. ' + elem);\n  });\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("字符串也是类似数组的对象，所以也可以用Array.prototype.forEach.call遍历。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Array.prototype.forEach.call('abc', function (chr) {\n  console.log(chr);\n});\n// a\n// b\n// c\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("注意，这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var arr = Array.prototype.slice.call('abc');\narr.forEach(function (chr) {\n  console.log(chr);\n});\n// a\n// b\n// c\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("p",[a._v("在ES6的语法中，推荐使用以下方法进行数组转换。")]),a._v(" "),n("div",{staticClass:"language-array line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Array.from(likeArray);\n\n[...likeArray];\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);