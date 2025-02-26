(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{552:function(s,n,a){"use strict";a.r(n);var e=a(17),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"let命令与const命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let命令与const命令"}},[s._v("#")]),s._v(" let命令与const命令")]),s._v(" "),a("h2",{attrs:{id:"let命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let命令"}},[s._v("#")]),s._v(" let命令")]),s._v(" "),a("h3",{attrs:{id:"_1-基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本用法"}},[s._v("#")]),s._v(" 1. 基本用法")]),s._v(" "),a("p",[s._v("ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{\n  let a = 10;\n  var b = 1;\n}\n\na // ReferenceError: a is not defined.\nb // 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("for循环的计数器，就很合适使用let命令。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for (let i = 0; i < 10; i++) {\n  // ...\n}\n\nconsole.log(i);\n// ReferenceError: i is not defined\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("下面的代码如果使用var，最后输出的是10。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var a = [];\nfor (var i = 0; i < 10; i++) {\n  a[i] = function () {\n    console.log(i);\n  };\n}\na[6](); // 10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var a = [];\nfor (let i = 0; i < 10; i++) {\n  a[i] = function () {\n    console.log(i);\n  };\n}\na[6](); // 6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for (let i = 0; i < 3; i++) {\n  let i = 'abc';\n  console.log(i);\n}\n// abc\n// abc\n// abc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-不存在遍历提升与暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-不存在遍历提升与暂时性死区"}},[s._v("#")]),s._v(" 2. 不存在遍历提升与暂时性死区")]),s._v(" "),a("p",[s._v("var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// var 的情况\nconsole.log(foo); // 输出undefined\nvar foo = 2;\n\n// let 的情况\nconsole.log(bar); // 报错ReferenceError\nlet bar = 2;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var tmp = 123;\n\nif (true) {\n  tmp = 'abc'; // ReferenceError\n  let tmp;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("if (true) {\n  // TDZ开始\n  tmp = 'abc'; // ReferenceError\n  console.log(tmp); // ReferenceError\n\n  let tmp; // TDZ结束\n  console.log(tmp); // undefined\n\n  tmp = 123;\n  console.log(tmp); // 123\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("有些“死区”比较隐蔽，不太容易发现。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function bar(x = y, y = 2) {\n  return [x, y];\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("另外，下面的代码也会报错，与var的行为不同。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 不报错\nvar x = x;\n\n// 报错\nlet x = x;\n// ReferenceError: x is not defined\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_3-不允许重复声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-不允许重复声明"}},[s._v("#")]),s._v(" 3. 不允许重复声明")]),s._v(" "),a("p",[s._v("let不允许在相同作用域内，重复声明同一个变量。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 报错\nfunction func() {\n  let a = 10;\n  var a = 1;\n}\n\n// 报错\nfunction func() {\n  let a = 10;\n  let a = 1;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("因此，不能在函数内部重新声明参数。")]),s._v(" "),a("div",{staticClass:"language-let line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function func(arg) {\n  let arg;\n}\nfunc() // 报错\n\nfunction func(arg) {\n  {\n    let arg;\n  }\n}\nfunc() // 不报错\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"const命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const命令"}},[s._v("#")]),s._v(" const命令")]),s._v(" "),a("h3",{attrs:{id:"_1-基本使用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本使用法"}},[s._v("#")]),s._v(" 1. 基本使用法")]),s._v(" "),a("p",[s._v("const声明一个只读的常量。一旦声明，常量的值就不能改变。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const PI = 3.1415;\nPI // 3.1415\n\nPI = 3;\n// TypeError: Assignment to constant variable.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const foo;\n// SyntaxError: Missing initializer in const declaration\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-与let一样的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-与let一样的用法"}},[s._v("#")]),s._v(" 2. 与let一样的用法")]),s._v(" "),a("p",[s._v("const的作用域与let命令相同：只在声明所在的块级作用域内有效。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("if (true) {\n  const MAX = 5;\n}\n\nMAX // Uncaught ReferenceError: MAX is not defined\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("if (true) {\n  console.log(MAX); // ReferenceError\n  const MAX = 5;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("const声明的常量，也与let一样不可重复声明。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var message = "Hello!";\nlet age = 25;\n\n// 以下两行都会报错\nconst message = "Goodbye!";\nconst age = 30;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_3-本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-本质"}},[s._v("#")]),s._v(" 3. 本质")]),s._v(" "),a("p",[s._v("const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const foo = {};\n\n// 为 foo 添加一个属性，可以成功\nfoo.prop = 123;\nfoo.prop // 123\n\n// 将 foo 指向另一个对象，就会报错\nfoo = {}; // TypeError: "foo" is read-only\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("下面是另一个例子。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const a = [];\na.push('Hello'); // 可执行\na.length = 0;    // 可执行\na = ['Dave'];    // 报错\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果真的想将对象冻结，应该使用Object.freeze方法。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const foo = Object.freeze({});\n\n// 常规模式时，下面一行不起作用；\n// 严格模式时，该行会报错\nfoo.prop = 123;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。")]),s._v(" "),a("div",{staticClass:"language-const line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var constantize = (obj) => {\n  Object.freeze(obj);\n  Object.keys(obj).forEach( (key, i) => {\n    if ( typeof obj[key] === 'object' ) {\n      constantize( obj[key] );\n    }\n  });\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);