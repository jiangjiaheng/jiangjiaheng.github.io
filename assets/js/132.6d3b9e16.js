(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{488:function(e,t,a){"use strict";a.r(t);var n=a(25),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"text-节点和-documentfragment-节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-节点和-documentfragment-节点"}},[e._v("#")]),e._v(" Text 节点和 DocumentFragment 节点")]),e._v(" "),a("h2",{attrs:{id:"text-节点的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-节点的概念"}},[e._v("#")]),e._v(" Text 节点的概念")]),e._v(" "),a("p",[e._v("文本节点（Text）代表元素节点（Element）和属性节点（Attribute）的文本内容。如果一个节点只包含一段文本，那么它就有一个文本子节点，代表该节点的文本内容。")]),e._v(" "),a("p",[e._v("通常我们使用父节点的firstChild、nextSibling等属性获取文本节点，或者使用Document节点的createTextNode方法创造一个文本节点。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 获取文本节点\nvar textNode = document.querySelector('p').firstChild;\n\n// 创造文本节点\nvar textNode = document.createTextNode('Hi');\ndocument.querySelector('div').appendChild(textNode);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("浏览器原生提供一个Text构造函数。它返回一个文本节点实例。它的参数就是该文本节点的文本内容。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 空字符串\nvar text1 = new Text();\n\n// 非空字符串\nvar text2 = new Text('This is a text node');\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("注意，由于空格也是一个字符，所以哪怕只有一个空格，也会形成文本节点。比如，"),a("code",[e._v("<p> </p>")]),e._v("包含一个空格，它的子节点就是一个文本节点。")]),e._v(" "),a("p",[e._v("文本节点除了继承Node接口，还继承了CharacterData接口。Node接口的属性和方法请参考《Node 接口》一章，这里不再重复介绍了，以下的属性和方法大部分来自CharacterData接口。")]),e._v(" "),a("h2",{attrs:{id:"text-节点的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-节点的属性"}},[e._v("#")]),e._v(" Text 节点的属性")]),e._v(" "),a("h3",{attrs:{id:"_1-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-data"}},[e._v("#")]),e._v(" 1. data")]),e._v(" "),a("p",[e._v("data属性等同于nodeValue属性，用来设置或读取文本节点的内容。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 读取文本内容\ndocument.querySelector('p').firstChild.data\n// 等同于\ndocument.querySelector('p').firstChild.nodeValue\n\n// 设置文本内容\ndocument.querySelector('p').firstChild.data = 'Hello World';\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-wholetext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-wholetext"}},[e._v("#")]),e._v(" 2. wholeText")]),e._v(" "),a("p",[e._v("wholeText属性将当前文本节点与毗邻的文本节点，作为一个整体返回。大多数情况下，wholeText属性的返回值，与data属性和textContent属性相同。但是，某些特殊情况会有差异。")]),e._v(" "),a("p",[e._v("举例来说，HTML 代码如下。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<p id="para">A <em>B</em> C</p>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这时，文本节点的wholeText属性和data属性，返回值相同。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var el = document.getElementById(\'para\');\nel.firstChild.wholeText // "A "\nel.firstChild.data // "A "\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("但是，一旦移除"),a("code",[e._v("<em>")]),e._v("节点，wholeText属性与data属性就会有差异，因为这时其实"),a("code",[e._v("<p>")]),e._v("节点下面包含了两个毗邻的文本节点。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('el.removeChild(para.childNodes[1]);\nel.firstChild.wholeText // "A C"\nel.firstChild.data // "A "\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-length"}},[e._v("#")]),e._v(" 3. length")]),e._v(" "),a("p",[e._v("length属性返回当前文本节点的文本长度。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(new Text('Hello')).length // 5\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-nextelementsibling-previouselementsibling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-nextelementsibling-previouselementsibling"}},[e._v("#")]),e._v(" 4. nextElementSibling，previousElementSibling")]),e._v(" "),a("p",[e._v("nextElementSibling属性返回紧跟在当前文本节点后面的那个同级元素节点。如果取不到元素节点，则返回null。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// HTML 为\n// <div>Hello <em>World</em></div>\nvar tn = document.querySelector('div').firstChild;\ntn.nextElementSibling\n// <em>World</em>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("previousElementSibling属性返回当前文本节点前面最近的同级元素节点。如果取不到元素节点，则返回null：。")]),e._v(" "),a("h2",{attrs:{id:"text-节点的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-节点的方法"}},[e._v("#")]),e._v(" Text 节点的方法")]),e._v(" "),a("h3",{attrs:{id:"_1-appenddata-deletedata-insertdata-replacedata-substringdata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-appenddata-deletedata-insertdata-replacedata-substringdata"}},[e._v("#")]),e._v(" 1. appendData()，deleteData()，insertData()，replaceData()，subStringData()")]),e._v(" "),a("p",[e._v("以下5个方法都是编辑Text节点文本内容的方法。")]),e._v(" "),a("ul",[a("li",[e._v("appendData()：在Text节点尾部追加字符串。")]),e._v(" "),a("li",[e._v("deleteData()：删除Text节点内部的子字符串，第一个参数为子字符串开始位置，第二个参数为子字符串长度。")]),e._v(" "),a("li",[e._v("insertData()：在Text节点插入字符串，第一个参数为插入位置，第二个参数为插入的子字符串。")]),e._v(" "),a("li",[e._v("replaceData()：用于替换文本，第一个参数为替换开始位置，第二个参数为需要被替换掉的长度，第三个参数为新加入的字符串。")]),e._v(" "),a("li",[e._v("subStringData()：用于获取子字符串，第一个参数为子字符串在Text节点中的开始位置，第二个参数为子字符串长度。")])]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// HTML 代码为\n// <p>Hello World</p>\nvar pElementText = document.querySelector('p').firstChild;\n\npElementText.appendData('!');\n// 页面显示 Hello World!\npElementText.deleteData(7, 5);\n// 页面显示 Hello W\npElementText.insertData(7, 'Hello ');\n// 页面显示 Hello WHello\npElementText.replaceData(7, 5, 'World');\n// 页面显示 Hello WWorld\npElementText.substringData(7, 10);\n// 页面显示不变，返回\"World \"\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("h3",{attrs:{id:"_2-remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-remove"}},[e._v("#")]),e._v(" 2. remove()")]),e._v(" "),a("p",[e._v("remove方法用于移除当前Text节点。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// HTML 代码为\n// <p>Hello World</p>\ndocument.querySelector('p').firstChild.remove()\n// 现在 HTML 代码为\n// <p></p>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-splittext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-splittext"}},[e._v("#")]),e._v(" 3. splitText()")]),e._v(" "),a("p",[e._v("splitText方法将Text节点一分为二，变成两个毗邻的Text节点。它的参数就是分割位置（从零开始），分割到该位置的字符前结束。如果分割位置不存在，将报错。")]),e._v(" "),a("p",[e._v("分割后，该方法返回分割位置后方的字符串，而原Text节点变成只包含分割位置前方的字符串。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// html 代码为 <p id="p">foobar</p>\nvar p = document.getElementById(\'p\');\nvar textnode = p.firstChild;\n\nvar newText = textnode.splitText(3);\nnewText // "bar"\ntextnode // "foo"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("父元素节点的normalize方法可以将毗邻的两个Text节点合并。")]),e._v(" "),a("p",[e._v("接上面的例子，文本节点的splitText方法将一个Text节点分割成两个，父元素的normalize方法可以实现逆操作，将它们合并。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("p.childNodes.length // 2\n\n// 将毗邻的两个 Text 节点合并\np.normalize();\np.childNodes.length // 1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"_4-documentfragment-节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-documentfragment-节点"}},[e._v("#")]),e._v(" 4. DocumentFragment 节点")]),e._v(" "),a("p",[e._v("DocumentFragment节点代表一个文档的片段，本身就是一个完整的 DOM 树形结构。它没有父节点，parentNode返回null，但是可以插入任意数量的子节点。它不属于当前文档，操作DocumentFragment节点，要比直接操作 DOM 树快得多。")]),e._v(" "),a("p",[e._v("它一般用于构建一个 DOM 结构，然后插入当前文档。document.createDocumentFragment方法，以及浏览器原生的DocumentFragment构造函数，可以创建一个空的DocumentFragment节点。然后再使用其他 DOM 方法，向其添加子节点。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var docFrag = document.createDocumentFragment();\n// 等同于\nvar docFrag = new DocumentFragment();\n\nvar li = document.createElement('li');\nli.textContent = 'Hello World';\ndocFrag.appendChild(li);\n\ndocument.querySelector('ul').appendChild(docFrag);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("上面代码创建了一个DocumentFragment节点，然后将一个li节点添加在它里面，最后将DocumentFragment节点移动到原文档。")]),e._v(" "),a("p",[e._v("注意，DocumentFragment节点本身不能被插入当前文档。当它作为appendChild()、insertBefore()、replaceChild()等方法的参数时，是它的所有子节点插入当前文档，而不是它自身。一旦DocumentFragment节点被添加进当前文档，它自身就变成了空节点（textContent属性为空字符串），可以被再次使用。如果想要保存DocumentFragment节点的内容，可以使用cloneNode方法。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("document\n  .querySelector('ul')\n  .appendChild(docFrag.cloneNode(true));\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("上面这样添加DocumentFragment节点进入当前文档，不会清空DocumentFragment节点。")]),e._v(" "),a("p",[e._v("下面是一个例子，使用DocumentFragment反转一个指定节点的所有子节点的顺序。")]),e._v(" "),a("div",{staticClass:"language-dom line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function reverse(n) {\n  var f = document.createDocumentFragment();\n  while(n.lastChild) f.appendChild(n.lastChild);\n  n.appendChild(f);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("DocumentFragment节点对象没有自己的属性和方法，全部继承自Node节点和ParentNode接口。也就是说，DocumentFragment节点比Node节点多出以下四个属性。")]),e._v(" "),a("ul",[a("li",[e._v("children：返回一个动态的HTMLCollection集合对象，包括当前DocumentFragment对象的所有子元素节点。")]),e._v(" "),a("li",[e._v("firstElementChild：返回当前DocumentFragment对象的第一个子元素节点，如果没有则返回null。")]),e._v(" "),a("li",[e._v("lastElementChild：返回当前DocumentFragment对象的最后一个子元素节点，如果没有则返回null。")]),e._v(" "),a("li",[e._v("childElementCount：返回当前DocumentFragment对象的所有子元素数量。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);