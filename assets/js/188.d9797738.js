(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{504:function(s,a,n){"use strict";n.r(a);var e=n(17),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"数据类型的转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型的转换"}},[s._v("#")]),s._v(" 数据类型的转换")]),s._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[s._v("JavaScript的数据类型是一种弱类型，往往会在某些情况下出现互相转换的情况。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'4' - '3' // 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"强制转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#强制转换"}},[s._v("#")]),s._v(" 强制转换")]),s._v(" "),n("h3",{attrs:{id:"_1-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-number"}},[s._v("#")]),s._v(" 1. Number()")]),s._v(" "),n("p",[s._v("原始类型值的转换规则如下。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 数值：转换后还是原来的值\nNumber(324) // 324\n\n// 字符串：如果可以被解析为数值，则转换为相应的数值\nNumber('324') // 324\n\n// 字符串：如果不可以被解析为数值，返回 NaN\nNumber('324abc') // NaN\n\n// 空字符串转为0\nNumber('') // 0\n\n// 布尔值：true 转成 1，false 转成 0\nNumber(true) // 1\nNumber(false) // 0\n\n// undefined：转成 NaN\nNumber(undefined) // NaN\n\n// null：转成0\nNumber(null) // 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("Number函数将字符串转为数值，要比parseInt函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为NaN。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("parseInt('42 cats') // 42\nNumber('42 cats') // NaN\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("另外，parseInt和Number函数都会自动过滤一个字符串前导和后缀的空格。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("parseInt('\\t\\v\\r12.34\\n') // 12\nNumber('\\t\\v\\r12.34\\n') // 12.34\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Number({a: 1}) // NaN\nNumber([1, 2, 3]) // NaN\nNumber([5]) // 5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-string"}},[s._v("#")]),s._v(" 2. String()")]),s._v(" "),n("p",[s._v("原始类型值")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('String(123) // "123"\nString(\'abc\') // "abc"\nString(true) // "true"\nString(undefined) // "undefined"\nString(null) // "null"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('String({a: 1}) // "[object Object]"\nString([1, 2, 3]) // "1,2,3"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('String({a: 1})\n// "[object Object]"\n\n// 等同于\nString({a: 1}.toString())\n// "[object Object]"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_3-boolean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-boolean"}},[s._v("#")]),s._v(" 3. Boolean()")]),s._v(" "),n("p",[s._v("它的转换规则相对简单：除了以下五个值的转换结果为false，其他的值全部为true。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Boolean(undefined) // false\nBoolean(null) // false\nBoolean(0) // false\nBoolean(NaN) // false\nBoolean('') // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("所有对象（包括空对象）的转换结果都是true。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Boolean({}) // true\nBoolean([]) // true\nBoolean(new Boolean(false)) // true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"自动转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动转换"}},[s._v("#")]),s._v(" 自动转换")]),s._v(" "),n("h3",{attrs:{id:"_1-自动转换为布尔值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-自动转换为布尔值"}},[s._v("#")]),s._v(" 1. 自动转换为布尔值")]),s._v(" "),n("p",[s._v("除了以下五个值，其他都是自动转为true。")]),s._v(" "),n("ul",[n("li",[s._v("undefined")]),s._v(" "),n("li",[s._v("null")]),s._v(" "),n("li",[s._v("+0或-0")]),s._v(" "),n("li",[s._v("NaN")]),s._v(" "),n("li",[s._v("''（空字符串）")])]),s._v(" "),n("p",[s._v("下面两种写法，有时也用于将一个表达式转为布尔值。它们内部调用的也是Boolean函数。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 写法一\nexpression ? true : false\n\n// 写法二\n!! expression\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_2-自动转换为字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动转换为字符串"}},[s._v("#")]),s._v(" 2. 自动转换为字符串")]),s._v(" "),n("p",[s._v("字符串的自动转换，主要发生在字符串的加法运算时。当一个值为字符串，另一个值为非字符串，则后者转为字符串。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'5' + 1 // '51'\n'5' + true // \"5true\"\n'5' + false // \"5false\"\n'5' + {} // \"5[object Object]\"\n'5' + [] // \"5\"\n'5' + function (){} // \"5function (){}\"\n'5' + undefined // \"5undefined\"\n'5' + null // \"5null\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_3-自动转化为数值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-自动转化为数值"}},[s._v("#")]),s._v(" 3. 自动转化为数值")]),s._v(" "),n("p",[s._v("除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'5' - '2' // 3\n'5' * '2' // 10\ntrue - 1  // 0\nfalse - 1 // -1\n'1' - 1   // 0\n'5' * []    // 0\nfalse / '5' // 0\n'abc' - 1   // NaN\nnull + 1 // 1\nundefined + 1 // NaN\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("一元运算符也会把运算子转成数值。")]),s._v(" "),n("div",{staticClass:"language-zh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+'abc' // NaN\n-'abc' // NaN\n+true // 1\n-false // 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);