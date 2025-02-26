(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{477:function(s,e,n){"use strict";n.r(e);var a=n(17),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"属性描述对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性描述对象"}},[s._v("#")]),s._v(" 属性描述对象")]),s._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[s._v("JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n  value: undefined,\n  writable: true,\n  enumerable: true,\n  configurable: true,\n  get: undefined,\n  set: undefined\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("以上都是默认值")]),s._v(" "),n("h3",{attrs:{id:"_1-元属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-元属性"}},[s._v("#")]),s._v(" 1. 元属性")]),s._v(" "),n("ul",[n("li",[s._v("value属性是目标属性的值。")])]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {};\nobj.p = 123;\n\nObject.getOwnPropertyDescriptor(obj, 'p').value\n// 123\n\nObject.defineProperty(obj, 'p', { value: 246 });\nobj.p // 246\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("writable属性是一个布尔值，决定了目标属性的值（value）是否可以被改变。")])]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {};\n\nObject.defineProperty(obj, 'a', {\n  value: 37,\n  writable: false\n});\n\nobj.a // 37\nobj.a = 25;\nobj.a // 37\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("如果原型对象的某个属性的writable为false，那么子对象将无法自定义这个属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var proto = Object.defineProperty({}, 'foo', {\n  value: 'a',\n  writable: false\n});\n\nvar obj = Object.create(proto);\n\nobj.foo = 'b';\nobj.foo // 'a'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("但是，有一个规避方法，就是通过覆盖属性描述对象，绕过这个限制。原因是这种情况下，原型链会被完全忽视。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var proto = Object.defineProperty({}, 'foo', {\n  value: 'a',\n  writable: false\n});\n\nvar obj = Object.create(proto);\n\nObject.defineProperty(obj, 'foo', {\n  value: 'b'\n});\nobj.foo // \"b\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("一个属性的enumerable为false，下面三个操作不会取到该属性。")])]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {};\n\nObject.defineProperty(obj, 'x', {\n  value: 123,\n  enumerable: false\n});\n\nobj.x // 123\n\nfor (var key in obj) {\n  console.log(key);\n}\n// undefined\n\nObject.keys(obj)  // []\nJSON.stringify(obj) // \"{}\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("configurable为false时，value、writable、enumerable和configurable都不能被修改了。")])]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = Object.defineProperty({}, 'p', {\n  value: 1,\n  writable: false,\n  enumerable: false,\n  configurable: false\n});\n\nObject.defineProperty(obj, 'p', {value: 2})\n// TypeError: Cannot redefine property: p\n\nObject.defineProperty(obj, 'p', {writable: true})\n// TypeError: Cannot redefine property: p\n\nObject.defineProperty(obj, 'p', {enumerable: true})\n// TypeError: Cannot redefine property: p\n\nObject.defineProperty(obj, 'p', {configurable: true})\n// TypeError: Cannot redefine property: p\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("可配置性决定了目标属性是否可以被删除（delete）。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = Object.defineProperties({}, {\n  p1: { value: 1, configurable: true },\n  p2: { value: 2, configurable: false }\n});\n\ndelete obj.p1 // true\ndelete obj.p2 // false\n\nobj.p1 // undefined\nobj.p2 // 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_2-存取器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-存取器"}},[s._v("#")]),s._v(" 2. 存取器")]),s._v(" "),n("p",[s._v("除了直接定义以外，属性还可以用存取器（accessor）定义。其中，存值函数称为setter，使用属性描述对象的set属性；取值函数称为getter，使用属性描述对象的get属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = Object.defineProperty({}, 'p', {\n  get: function () {\n    return 'getter';\n  },\n  set: function (value) {\n    console.log('setter: ' + value);\n  }\n});\n\nobj.p // \"getter\"\nobj.p = 123 // \"setter: 123\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("JavaScript 还提供了存取器的另一种写法。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {\n  get p() {\n    return 'getter';\n  },\n  set p(value) {\n    console.log('setter: ' + value);\n  }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("注意，一旦定义了取值函数get（或存值函数set），就不能将writable属性设为true，或者同时定义value属性，否则会报错。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {};\n\nObject.defineProperty(obj, 'p', {\n  value: 123,\n  get: function() { return 456; }\n});\n// TypeError: Invalid property.\n// A property cannot both have accessors and be writable or have a value\n\nObject.defineProperty(obj, 'p', {\n  writable: true,\n  get: function() { return 456; }\n});\n// TypeError: Invalid property descriptor.\n// Cannot both specify accessors and a value or writable attribute\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"获取属性描述对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取属性描述对象"}},[s._v("#")]),s._v(" 获取属性描述对象")]),s._v(" "),n("p",[s._v("Object.getOwnPropertyDescriptor()方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = { p: 'a' };\n\nObject.getOwnPropertyDescriptor(obj, 'p')\n// Object { value: \"a\",\n//   writable: true,\n//   enumerable: true,\n//   configurable: true\n// }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("注意，Object.getOwnPropertyDescriptor()方法只能用于对象自身的属性，不能用于继承的属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = { p: 'a' };\n\nObject.getOwnPropertyDescriptor(obj, 'toString')\n// undefined\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"属性的获取与遍历"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性的获取与遍历"}},[s._v("#")]),s._v(" 属性的获取与遍历")]),s._v(" "),n("h3",{attrs:{id:"_1-object-getownpropertynames"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-object-getownpropertynames"}},[s._v("#")]),s._v(" 1. Object.getOwnPropertyNames")]),s._v(" "),n("p",[s._v("Object.getOwnPropertyNames方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var obj = Object.defineProperties({}, {\n  p1: { value: 1, enumerable: true },\n  p2: { value: 2, enumerable: false }\n});\n\nObject.getOwnPropertyNames(obj)\n// ["p1", "p2"]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_2-object-keys"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-object-keys"}},[s._v("#")]),s._v(" 2. Object.keys")]),s._v(" "),n("p",[s._v("Object.keys只返回对象自身的可遍历属性的全部属性名。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Object.keys([]) // []\nObject.getOwnPropertyNames([]) // [ 'length' ]\n\nObject.keys(Object.prototype) // []\nObject.getOwnPropertyNames(Object.prototype)\n// ['hasOwnProperty',\n//  'valueOf',\n//  'constructor',\n//  'toLocaleString',\n//  'isPrototypeOf',\n//  'propertyIsEnumerable',\n//  'toString']\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_3-propertyisenumerable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-propertyisenumerable"}},[s._v("#")]),s._v(" 3. propertyIsEnumerable")]),s._v(" "),n("p",[s._v("实例对象的propertyIsEnumerable()方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回false。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {};\nobj.p = 123;\n\nobj.propertyIsEnumerable('p') // true\nobj.propertyIsEnumerable('toString') // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("注意，for...in循环包括继承的属性，Object.keys方法不包括继承的属性。如果需要获取对象自身的所有属性，不管是否可遍历，可以使用Object.getOwnPropertyNames方法。")]),s._v(" "),n("h2",{attrs:{id:"定义属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义属性"}},[s._v("#")]),s._v(" 定义属性")]),s._v(" "),n("p",[s._v("Object.defineProperty()方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象，它的用法如下。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Object.defineProperty(object, propertyName, attributesObject)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("举例来说，定义obj.p可以写成下面这样。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = Object.defineProperty({}, 'p', {\n  value: 123,\n  writable: false,\n  enumerable: true,\n  configurable: false\n});\n\nobj.p // 123\n\nobj.p = 246;\nobj.p // 123\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("如果一次性定义或修改多个属性，可以使用Object.defineProperties()方法。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var obj = Object.defineProperties({}, {\n  p1: { value: 123, enumerable: true },\n  p2: { value: \'abc\', enumerable: true },\n  p3: { get: function () { return this.p1 + this.p2 },\n    enumerable:true,\n    configurable:true\n  }\n});\n\nobj.p1 // 123\nobj.p2 // "abc"\nobj.p3 // "123abc"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("Object.defineProperty()和Object.defineProperties()参数里面的属性描述对象，writable、configurable、enumerable这三个属性的默认值都为false。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {};\nObject.defineProperty(obj, 'foo', {});\nObject.getOwnPropertyDescriptor(obj, 'foo')\n// {\n//   value: undefined,\n//   writable: false,\n//   enumerable: false,\n//   configurable: false\n// }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"对象拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象拷贝"}},[s._v("#")]),s._v(" 对象拷贝")]),s._v(" "),n("p",[s._v("我们可以通过Object.defineProperty方法来拷贝属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var extend = function (to, from) {\n  for (var property in from) {\n    if (!from.hasOwnProperty(property)) continue;\n    Object.defineProperty(\n      to,\n      property,\n      Object.getOwnPropertyDescriptor(from, property)\n    );\n  }\n\n  return to;\n}\n\nextend({}, { get a(){ return 1 } })\n// { get a(){ return 1 } })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"控制对象状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制对象状态"}},[s._v("#")]),s._v(" 控制对象状态")]),s._v(" "),n("h3",{attrs:{id:"_1-extensions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-extensions"}},[s._v("#")]),s._v(" 1. extensions")]),s._v(" "),n("p",[s._v("Object.preventExtensions方法可以使得一个对象无法再添加新的属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = new Object();\nObject.preventExtensions(obj);\n\nObject.defineProperty(obj, 'p', {\n  value: 'hello'\n});\n// TypeError: Cannot define property:p, object is not extensible.\n\nobj.p = 1;\nobj.p // undefined\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("Object.isExtensible方法用于检查一个对象是否使用了Object.preventExtensions方法。也就是说，检查是否可以为一个对象添加属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = new Object();\n\nObject.isExtensible(obj) // true\nObject.preventExtensions(obj);\nObject.isExtensible(obj) // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_2-seal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-seal"}},[s._v("#")]),s._v(" 2. seal")]),s._v(" "),n("p",[s._v("Object.seal方法使得一个对象既无法添加新属性，也无法删除旧属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = { p: 'hello' };\nObject.seal(obj);\n\ndelete obj.p;\nobj.p // \"hello\"\n\nobj.x = 'world';\nobj.x // undefined\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("Object.seal实质是把属性描述对象的configurable属性设为false，因此属性描述对象不再能改变了。")]),s._v(" "),n("p",[s._v("Object.seal只是禁止新增或删除属性，并不影响修改某个属性的值。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = { p: 'a' };\nObject.seal(obj);\nobj.p = 'b';\nobj.p // 'b'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Object.isSealed方法用于检查一个对象是否使用了Object.seal方法。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = { p: 'a' };\n\nObject.seal(obj);\nObject.isSealed(obj) // true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这时，Object.isExtensible方法也返回false。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = { p: 'a' };\n\nObject.seal(obj);\nObject.isExtensible(obj) // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_3-freeze"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-freeze"}},[s._v("#")]),s._v(" 3. freeze")]),s._v(" "),n("p",[s._v("Object.freeze方法可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {\n  p: 'hello'\n};\n\nObject.freeze(obj);\n\nobj.p = 'world';\nobj.p // \"hello\"\n\nobj.t = 'hello';\nobj.t // undefined\n\ndelete obj.p // false\nobj.p // \"hello\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("Object.isFrozen方法用于检查一个对象是否使用了Object.freeze方法。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {\n  p: 'hello'\n};\n\nObject.freeze(obj);\nObject.isFrozen(obj) // true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("使用Object.freeze方法以后，Object.isSealed将会返回true，Object.isExtensible返回false。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {\n  p: 'hello'\n};\n\nObject.freeze(obj);\n\nObject.isSealed(obj) // true\nObject.isExtensible(obj) // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("Object.isFrozen的一个用途是，确认某个对象没有被冻结后，再对它的属性赋值。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {\n  p: 'hello'\n};\n\nObject.freeze(obj);\n\nif (!Object.isFrozen(obj)) {\n  obj.p = 'world';\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_4-局限性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-局限性"}},[s._v("#")]),s._v(" 4. 局限性")]),s._v(" "),n("p",[s._v("上面的三个方法锁定对象的可写性有一个漏洞：可以通过改变原型对象，来为对象增加属性。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = new Object();\nObject.preventExtensions(obj);\n\nvar proto = Object.getPrototypeOf(obj);\nproto.t = 'hello';\nobj.t\n// hello\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("一种解决方案是，把obj的原型也冻结住。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = new Object();\nObject.preventExtensions(obj);\n\nvar proto = Object.getPrototypeOf(obj);\nObject.preventExtensions(proto);\n\nproto.t = 'hello';\nobj.t // undefined\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("另外一个局限是，如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容。")]),s._v(" "),n("div",{staticClass:"language-ob line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var obj = {\n  foo: 1,\n  bar: ['a', 'b']\n};\nObject.freeze(obj);\n\nobj.bar.push('c');\nobj.bar // [\"a\", \"b\", \"c\"]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);