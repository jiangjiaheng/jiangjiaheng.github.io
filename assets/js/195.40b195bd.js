(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{553:function(s,a,n){"use strict";n.r(a);var e=n(25),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"字符串的扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串的扩展"}},[s._v("#")]),s._v(" 字符串的扩展")]),s._v(" "),n("h2",{attrs:{id:"unicode表示法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unicode表示法"}},[s._v("#")]),s._v(" Unicode表示法")]),s._v(" "),n("p",[s._v("ES6 加强了对 Unicode 的支持，允许采用\\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"\\u0061"\n// "a"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("但是，这种表示法只限于码点在\\u0000~\\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"\\uD842\\uDFB7"\n// "𠮷"\n\n"\\u20BB7"\n// " 7"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"\\u{20BB7}"\n// "𠮷"\n\n"\\u{41}\\u{42}\\u{43}"\n// "ABC"\n\nlet hello = 123;\nhell\\u{6F} // 123\n\n\'\\u{1F680}\' === \'\\uD83D\\uDE80\'\n// true\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"遍历器接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#遍历器接口"}},[s._v("#")]),s._v(" 遍历器接口")]),s._v(" "),n("p",[s._v("ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('for (let codePoint of \'foo\') {\n  console.log(codePoint)\n}\n// "f"\n// "o"\n// "o"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let text = String.fromCodePoint(0x20BB7);\n\nfor (let i = 0; i < text.length; i++) {\n  console.log(text[i]);\n}\n// " "\n// " "\n\nfor (let i of text) {\n  console.log(i);\n}\n// "𠮷"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"模板字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串"}},[s._v("#")]),s._v(" 模板字符串")]),s._v(" "),n("p",[s._v("模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 普通字符串\n`In JavaScript \'\\n\' is a line-feed.`\n\n// 多行字符串\n`In JavaScript this is\n not legal.`\n\nconsole.log(`string text line 1\nstring text line 2`);\n\n// 字符串中嵌入变量\nlet name = "Bob", time = "today";\n`Hello ${name}, how are you ${time}?`\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("如果需要引用模板字符串本身，在需要时执行，可以写成函数。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let func = (name) => `Hello ${name}!`;\nfunc('Jack') // \"Hello Jack!\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"标签模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标签模板"}},[s._v("#")]),s._v(" 标签模板")]),s._v(" "),n("p",[s._v("模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("alert`123`\n// 等同于\nalert(123)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("但是，如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。")]),s._v(" "),n("div",{staticClass:"language-str line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let a = 5;\nlet b = 10;\n\ntag`Hello ${ a + b } world ${ a * b }`;\n// 等同于\ntag(['Hello ', ' world ', ''], 15, 50);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);