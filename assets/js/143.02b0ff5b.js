(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{458:function(e,s,t){"use strict";t.r(s);var n=t(17),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nodelist-接口-htmlcollection-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-接口-htmlcollection-接口"}},[e._v("#")]),e._v(" NodeList 接口，HTMLCollection 接口")]),e._v(" "),t("h2",{attrs:{id:"nodelist-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-接口"}},[e._v("#")]),e._v(" NodeList 接口")]),e._v(" "),t("h3",{attrs:{id:"_1-nodelist概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-nodelist概述"}},[e._v("#")]),e._v(" 1. NodeList概述")]),e._v(" "),t("p",[e._v("NodeList实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到NodeList实例。")]),e._v(" "),t("ul",[t("li",[e._v("Node.childNodes")]),e._v(" "),t("li",[e._v("document.querySelectorAll()等节点搜索方法")])]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.body.childNodes instanceof NodeList // true\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("NodeList实例很像数组，可以使用length属性和forEach方法。但是，它不是数组，不能使用pop或push之类数组特有的方法。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var children = document.body.childNodes;\n\nArray.isArray(children) // false\n\nchildren.length // 34\nchildren.forEach(console.log)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("如果NodeList实例要使用数组方法，可以将其转为真正的数组。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var children = document.body.childNodes;\nvar nodeArr = Array.prototype.slice.call(children);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("除了使用forEach方法遍历 NodeList 实例，还可以使用for循环。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var children = document.body.childNodes;\n\nfor (var i = 0; i < children.length; i++) {\n  var item = children[i];\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("注意，NodeList 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例。目前，只有Node.childNodes返回的是一个动态集合，其他的 NodeList 都是静态集合。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var children = document.body.childNodes;\nchildren.length // 18\ndocument.body.appendChild(document.createElement('p'));\nchildren.length // 19\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-nodelist-prototype-length"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-nodelist-prototype-length"}},[e._v("#")]),e._v(" 2. NodeList.prototype.length")]),e._v(" "),t("p",[e._v("length属性返回 NodeList 实例包含的节点数量。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.querySelectorAll('xxx').length\n// 0\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h3",{attrs:{id:"_3-nodelist-prototype-foreach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-nodelist-prototype-foreach"}},[e._v("#")]),e._v(" 3. NodeList.prototype.forEach()")]),e._v(" "),t("p",[e._v("forEach方法用于遍历 NodeList 的所有成员。它接受一个回调函数作为参数，每一轮遍历就执行一次这个回调函数，用法与数组实例的forEach方法完全一致。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var children = document.body.childNodes;\nchildren.forEach(function f(item, i, list) {\n  // ...\n}, this);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"_4-nodelist-prototype-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-nodelist-prototype-item"}},[e._v("#")]),e._v(" 4. NodeList.prototype.item()")]),e._v(" "),t("p",[e._v("item方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.body.childNodes.item(0)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("上面代码中，item(0)返回第一个成员。")]),e._v(" "),t("p",[e._v("所有类似数组的对象，都可以使用方括号运算符取出成员。一般情况下，都是使用方括号运算符，而不使用item方法。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.body.childNodes[0]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_5-nodelist-prototype-keys-nodelist-prototype-values-nodelist-prototype-entries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-nodelist-prototype-keys-nodelist-prototype-values-nodelist-prototype-entries"}},[e._v("#")]),e._v(" 5. NodeList.prototype.keys()，NodeList.prototype.values()，NodeList.prototype.entries()")]),e._v(" "),t("p",[e._v("这三个方法都返回一个 ES6 的遍历器对象，可以通过for...of循环遍历获取每一个成员的信息。区别在于，keys()返回键名的遍历器，values()返回键值的遍历器，entries()返回的遍历器同时包含键名和键值的信息。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var children = document.body.childNodes;\n\nfor (var key of children.keys()) {\n  console.log(key);\n}\n// 0\n// 1\n// 2\n// ...\n\nfor (var value of children.values()) {\n  console.log(value);\n}\n// #text\n// <script>\n// ...\n\nfor (var entry of children.entries()) {\n  console.log(entry);\n}\n// Array [ 0, #text ]\n// Array [ 1, <script> ]\n// ...\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br")])]),t("h2",{attrs:{id:"htmlcollection-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#htmlcollection-接口"}},[e._v("#")]),e._v(" HTMLCollection 接口")]),e._v(" "),t("h3",{attrs:{id:"_1-htmlcollection概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-htmlcollection概述"}},[e._v("#")]),e._v(" 1. HTMLCollection概述")]),e._v(" "),t("p",[e._v("HTMLCollection是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与NodeList接口不同，HTMLCollection没有forEach方法，只能使用for循环遍历。")]),e._v(" "),t("p",[e._v("返回HTMLCollection实例的，主要是一些Document对象的集合属性，比如document.links、document.forms、document.images等。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.links instanceof HTMLCollection // true\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("HTMLCollection实例都是动态集合，节点的变化会实时反映在集合中。")]),e._v(" "),t("p",[e._v("如果元素节点有id或name属性，那么HTMLCollection实例上面，可以使用id属性或name属性引用该节点元素。如果没有对应的节点，则返回null。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// HTML 代码如下\n// <img id="pic" src="http://example.com/foo.jpg">\n\nvar pic = document.getElementById(\'pic\');\ndocument.images.pic === pic // true\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("上面代码中，document.images是一个HTMLCollection实例，可以通过"),t("code",[e._v("<img>")]),e._v("元素的id属性值，从HTMLCollection实例上取到这个元素。")]),e._v(" "),t("h3",{attrs:{id:"_2-htmlcollection-prototype-length"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-htmlcollection-prototype-length"}},[e._v("#")]),e._v(" 2. HTMLCollection.prototype.length")]),e._v(" "),t("p",[e._v("length属性返回HTMLCollection实例包含的成员数量。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.links.length // 18\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-htmlcollection-prototype-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-htmlcollection-prototype-item"}},[e._v("#")]),e._v(" 3. HTMLCollection.prototype.item()")]),e._v(" "),t("p",[e._v("item方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var c = document.images;\nvar img0 = c.item(0);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h3",{attrs:{id:"_4-htmlcollection-prototype-nameditem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-htmlcollection-prototype-nameditem"}},[e._v("#")]),e._v(" 4. HTMLCollection.prototype.namedItem()")]),e._v(" "),t("p",[e._v("namedItem方法的参数是一个字符串，表示id属性或name属性的值，返回对应的元素节点。如果没有对应的节点，则返回null。")]),e._v(" "),t("div",{staticClass:"language-node line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// HTML 代码如下\n// <img id=\"pic\" src=\"http://example.com/foo.jpg\">\n\nvar pic = document.getElementById('pic');\ndocument.images.namedItem('pic') === pic // true\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);