(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{556:function(a,s,t){"use strict";t.r(s);var e=t(25),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"字符串的新增方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串的新增方法"}},[a._v("#")]),a._v(" 字符串的新增方法")]),a._v(" "),t("h2",{attrs:{id:"静态方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[a._v("#")]),a._v(" 静态方法")]),a._v(" "),t("h3",{attrs:{id:"_1-fromcodepoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-fromcodepoint"}},[a._v("#")]),a._v(" 1. fromCodePoint")]),a._v(" "),t("p",[a._v("ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。在作用上，正好与下面的codePointAt()方法相反。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("String.fromCodePoint(0x20BB7)\n// \"𠮷\"\nString.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\\uD83D\\uDE80y'\n// true\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-raw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-raw"}},[a._v("#")]),a._v(" 2. raw")]),a._v(" "),t("p",[a._v("ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('String.raw`Hi\\n${2+3}!`;\n// 返回 "Hi\\\\n5!"\n\nString.raw`Hi\\u000A!`;\n// 返回 "Hi\\\\u000A!"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"实例方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[a._v("#")]),a._v(" 实例方法")]),a._v(" "),t("h3",{attrs:{id:"_1-codepointat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-codepointat"}},[a._v("#")]),a._v(" 1. codePointAt")]),a._v(" "),t("p",[a._v("ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let s = '𠮷a';\n\ns.codePointAt(0) // 134071\ns.codePointAt(1) // 57271\n\ns.codePointAt(2) // 97\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("codePointAt()方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString()方法转换一下。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('let s = \'𠮷a\';\n\ns.codePointAt(0).toString(16) // "20bb7"\ns.codePointAt(2).toString(16) // "61"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-normalize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-normalize"}},[a._v("#")]),a._v(" 2. normalize")]),a._v(" "),t("p",[a._v("ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'\\u01D1'.normalize() === '\\u004F\\u030C'.normalize()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-includes、startswith、endswith"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-includes、startswith、endswith"}},[a._v("#")]),a._v(" 3. includes、startsWith、endsWith")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let s = 'Hello world!';\n\ns.startsWith('Hello') // true\ns.endsWith('!') // true\ns.includes('o') // true\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("这三个方法都支持第二个参数，表示开始搜索的位置。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let s = 'Hello world!';\n\ns.startsWith('world', 6) // true\ns.endsWith('Hello', 5) // true\ns.includes('Hello', 6) // false\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"_4-repeat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-repeat"}},[a._v("#")]),a._v(" 4. repeat")]),a._v(" "),t("p",[a._v("repeat方法返回一个新字符串，表示将原字符串重复n次。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'x'.repeat(3) // \"xxx\"\n'hello'.repeat(2) // \"hellohello\"\n'na'.repeat(0) // \"\"\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("参数如果是小数，会被取整。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'na'.repeat(2.9) // \"nana\"\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果repeat的参数是负数或者Infinity，会报错。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'na'.repeat(Infinity)\n// RangeError\n'na'.repeat(-1)\n// RangeError\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_5-padstart、padend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-padstart、padend"}},[a._v("#")]),a._v(" 5. padStart、padEnd")]),a._v(" "),t("p",[a._v("ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'x'.padStart(5, 'ab') // 'ababx'\n'x'.padStart(4, 'ab') // 'abax'\n\n'x'.padEnd(5, 'ab') // 'xabab'\n'x'.padEnd(4, 'ab') // 'xaba'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'xxx'.padStart(2, 'ab') // 'xxx'\n'xxx'.padEnd(2, 'ab') // 'xxx'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'abc'.padStart(10, '0123456789')\n// '0123456abc'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("如果省略第二个参数，默认使用空格补全长度。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'x'.padStart(4) // '   x'\n'x'.padEnd(4) // 'x   '\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'1'.padStart(10, '0') // \"0000000001\"\n'12'.padStart(10, '0') // \"0000000012\"\n'123456'.padStart(10, '0') // \"0000123456\"\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("另一个用途是提示字符串格式。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-MM-12\"\n'09-12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-09-12\"\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"_6-trimstart、trimend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-trimstart、trimend"}},[a._v("#")]),a._v(" 6. trimStart、trimEnd")]),a._v(" "),t("p",[a._v("ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。")]),a._v(" "),t("div",{staticClass:"language-str line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('const s = \'  abc  \';\n\ns.trim() // "abc"\ns.trimStart() // "abc  "\ns.trimEnd() // "  abc"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("上面代码中，trimStart()只消除头部的空格，保留尾部的空格。trimEnd()也是类似行为。")]),a._v(" "),t("p",[a._v("除了空格键，这两个方法对字符串头部（或尾部）的 tab 键、换行符等不可见的空白符号也有效。")]),a._v(" "),t("p",[a._v("浏览器还部署了额外的两个方法，trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名。")])])}),[],!1,null,null,null);s.default=n.exports}}]);