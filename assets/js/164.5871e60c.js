(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{521:function(n,e,s){"use strict";s.r(e);var a=s(25),t=Object(a.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"事件模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件模型"}},[n._v("#")]),n._v(" 事件模型")]),n._v(" "),s("h2",{attrs:{id:"监听函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听函数"}},[n._v("#")]),n._v(" 监听函数")]),n._v(" "),s("p",[n._v("浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。")]),n._v(" "),s("p",[n._v("JavaScript 有三种方法，可以为事件绑定监听函数。")]),n._v(" "),s("h3",{attrs:{id:"_1-html-的-on-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-html-的-on-属性"}},[n._v("#")]),n._v(" 1. HTML 的 on- 属性")]),n._v(" "),s("p",[n._v("HTML 语言允许在元素的属性中，直接定义某些事件的监听代码。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('<body onload="doSomething()">\n<div onclick="console.log(\'触发事件\')">\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[n._v("上面代码为body节点的load事件、div节点的click事件，指定了监听代码。一旦事件发生，就会执行这段代码。")]),n._v(" "),s("p",[n._v("元素的事件监听属性，都是on加上事件名，比如onload就是on + load，表示load事件的监听代码。")]),n._v(" "),s("p",[n._v("注意，这些属性的值是将会执行的代码，而不是一个函数。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('\x3c!-- 正确 --\x3e\n<body onload="doSomething()">\n\n\x3c!-- 错误 --\x3e\n<body onload="doSomething">\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("一旦指定的事件发生，on-属性的值是原样传入 JavaScript 引擎执行。因此如果要执行函数，不要忘记加上一对圆括号。")]),n._v(" "),s("p",[n._v("使用这个方法指定的监听代码，只会在冒泡阶段触发。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('<div onClick="console.log(2)">\n  <button onClick="console.log(1)">点击</button>\n</div>\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("上面代码中，"),s("code",[n._v("<button>")]),n._v("是"),s("code",[n._v("<div>")]),n._v("的子元素。"),s("code",[n._v("<button>")]),n._v("的click事件，也会触发"),s("code",[n._v("<div>")]),n._v("的click事件。由于on-属性的监听代码，只在冒泡阶段触发，所以点击结果是先输出1，再输出2，即事件从子元素开始冒泡到父元素。")]),n._v(" "),s("p",[n._v("直接设置on-属性，与通过元素节点的setAttribute方法设置on-属性，效果是一样的。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("el.setAttribute('onclick', 'doSomething()');\n// 等同于\n// <Element onclick=\"doSomething()\">\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("h3",{attrs:{id:"_2-元素节点的事件属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-元素节点的事件属性"}},[n._v("#")]),n._v(" 2. 元素节点的事件属性")]),n._v(" "),s("p",[n._v("元素节点对象的事件属性，同样可以指定监听函数。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("window.onload = doSomething;\n\ndiv.onclick = function (event) {\n  console.log('触发事件');\n};\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("使用这个方法指定的监听函数，也是只会在冒泡阶段触发。")]),n._v(" "),s("p",[n._v("注意，这种方法与 HTML 的on-属性的差异是，它的值是函数名（doSomething），而不像后者，必须给出完整的监听代码（doSomething()）。")]),n._v(" "),s("h3",{attrs:{id:"_3-eventtarget-addeventlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-eventtarget-addeventlistener"}},[n._v("#")]),n._v(" 3. EventTarget.addEventListener()")]),n._v(" "),s("p",[n._v("所有 DOM 节点实例都有addEventListener方法，用来为该节点定义事件的监听函数。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("window.addEventListener('load', doSomething, false);\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("addEventListener方法的详细介绍，参见EventTarget章节。")]),n._v(" "),s("h3",{attrs:{id:"_4-小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-小结"}},[n._v("#")]),n._v(" 4. 小结")]),n._v(" "),s("p",[n._v("上面三种方法，第一种“HTML 的 on- 属性”，违反了 HTML 与 JavaScript 代码相分离的原则，将两者写在一起，不利于代码分工，因此不推荐使用。")]),n._v(" "),s("p",[n._v("第二种“元素节点的事件属性”的缺点在于，同一个事件只能定义一个监听函数，也就是说，如果定义两次onclick属性，后一次定义会覆盖前一次。因此，也不推荐使用。")]),n._v(" "),s("p",[n._v("第三种EventTarget.addEventListener是推荐的指定监听函数的方法。它有如下优点：")]),n._v(" "),s("ul",[s("li",[n._v("同一个事件可以添加多个监听函数。")]),n._v(" "),s("li",[n._v("能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。")]),n._v(" "),s("li",[n._v("除了 DOM 节点，其他对象（比如window、XMLHttpRequest等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口。")])]),n._v(" "),s("h2",{attrs:{id:"this-的指向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-的指向"}},[n._v("#")]),n._v(" this 的指向")]),n._v(" "),s("p",[n._v("监听函数内部的this指向触发事件的那个元素节点。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('<button id="btn" onclick="console.log(this.id)">点击</button>\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("执行上面代码，点击后会输出btn。")]),n._v(" "),s("p",[n._v("其他两种监听函数的写法，this的指向也是如此。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// HTML 代码如下\n// <button id=\"btn\">点击</button>\nvar btn = document.getElementById('btn');\n\n// 写法一\nbtn.onclick = function () {\n  console.log(this.id);\n};\n\n// 写法二\nbtn.addEventListener(\n  'click',\n  function (e) {\n    console.log(this.id);\n  },\n  false\n);\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])]),s("p",[n._v("上面两种写法，点击按钮以后也是输出btn。")]),n._v(" "),s("h2",{attrs:{id:"事件的传播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件的传播"}},[n._v("#")]),n._v(" 事件的传播")]),n._v(" "),s("p",[n._v("一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。")]),n._v(" "),s("ul",[s("li",[n._v("第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。")]),n._v(" "),s("li",[n._v("第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。")]),n._v(" "),s("li",[n._v("第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。")])]),n._v(" "),s("p",[n._v("这种三阶段的传播模型，使得同一个事件会在多个节点上触发。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<div>\n  <p>点击</p>\n</div>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("上面代码中，"),s("code",[n._v("<div>")]),n._v("节点之中有一个"),s("code",[n._v("<p>")]),n._v("节点。")]),n._v(" "),s("p",[n._v("如果对这两个节点，都设置click事件的监听函数（每个节点的捕获阶段和冒泡阶段，各设置一个监听函数），共计设置四个监听函数。然后，对"),s("code",[n._v("<p>")]),n._v("点击，click事件会触发四次。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("var phases = {\n  1: 'capture',\n  2: 'target',\n  3: 'bubble'\n};\n\nvar div = document.querySelector('div');\nvar p = document.querySelector('p');\n\ndiv.addEventListener('click', callback, true);\np.addEventListener('click', callback, true);\ndiv.addEventListener('click', callback, false);\np.addEventListener('click', callback, false);\n\nfunction callback(event) {\n  var tag = event.currentTarget.tagName;\n  var phase = phases[event.eventPhase];\n  console.log(\"Tag: '\" + tag + \"'. EventPhase: '\" + phase + \"'\");\n}\n\n// 点击以后的结果\n// Tag: 'DIV'. EventPhase: 'capture'\n// Tag: 'P'. EventPhase: 'target'\n// Tag: 'P'. EventPhase: 'target'\n// Tag: 'DIV'. EventPhase: 'bubble'\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br")])]),s("p",[n._v("上面代码表示，click事件被触发了四次："),s("code",[n._v("<div>")]),n._v("节点的捕获阶段和冒泡阶段各1次，"),s("code",[n._v("<p>")]),n._v("节点的目标阶段触发了2次。")]),n._v(" "),s("ol",[s("li",[n._v("捕获阶段：事件从"),s("code",[n._v("<div>")]),n._v("向"),s("code",[n._v("<p>")]),n._v("传播时，触发"),s("code",[n._v("<div>")]),n._v("的click事件；")]),n._v(" "),s("li",[n._v("目标阶段：事件从"),s("code",[n._v("<div>")]),n._v("到达"),s("code",[n._v("<p>")]),n._v("时，触发"),s("code",[n._v("<p>")]),n._v("的click事件；")]),n._v(" "),s("li",[n._v("冒泡阶段：事件从"),s("code",[n._v("<p>")]),n._v("传回"),s("code",[n._v("<div>")]),n._v("时，再次触发"),s("code",[n._v("<div>")]),n._v("的click事件。")])]),n._v(" "),s("p",[n._v("其中，"),s("code",[n._v("<p>")]),n._v("节点有两个监听函数（addEventListener方法第三个参数的不同，会导致绑定两个监听函数），因此它们都会因为click事件触发一次。所以，"),s("code",[n._v("<p>")]),n._v("会在target阶段有两次输出。")]),n._v(" "),s("p",[n._v("注意，浏览器总是假定click事件的目标节点，就是点击位置嵌套最深的那个节点（本例是"),s("code",[n._v("<div>")]),n._v("节点里面的"),s("code",[n._v("<p>")]),n._v("节点）。所以，"),s("code",[n._v("<p>")]),n._v("节点的捕获阶段和冒泡阶段，都会显示为target阶段。")]),n._v(" "),s("p",[n._v("事件传播的最上层对象是window，接着依次是document，html（document.documentElement）和body（document.body）。也就是说，上例的事件传播顺序，在捕获阶段依次为window、document、html、body、div、p，在冒泡阶段依次为p、div、body、html、document、window。")]),n._v(" "),s("h2",{attrs:{id:"事件的代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件的代理"}},[n._v("#")]),n._v(" 事件的代理")]),n._v(" "),s("p",[n._v("由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("var ul = document.querySelector('ul');\n\nul.addEventListener('click', function (event) {\n  if (event.target.tagName.toLowerCase() === 'li') {\n    // some code\n  }\n});\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[n._v("上面代码中，click事件的监听函数定义在"),s("code",[n._v("<ul>")]),n._v("节点，但是实际上，它处理的是子节点"),s("code",[n._v("<li>")]),n._v("的click事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而不用在每个"),s("code",[n._v("<li>")]),n._v("节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。")]),n._v(" "),s("p",[n._v("如果希望事件到某个节点为止，不再传播，可以使用事件对象的stopPropagation方法。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 事件传播到 p 元素后，就不再向下传播了\np.addEventListener('click', function (event) {\n  event.stopPropagation();\n}, true);\n\n// 事件冒泡到 p 元素后，就不再向上冒泡了\np.addEventListener('click', function (event) {\n  event.stopPropagation();\n}, false);\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br")])]),s("p",[n._v("上面代码中，stopPropagation方法分别在捕获阶段和冒泡阶段，阻止了事件的传播。")]),n._v(" "),s("p",[n._v("但是，stopPropagation方法只会阻止事件的传播，不会阻止该事件触发")]),s("p",[n._v("节点的其他click事件的监听函数。也就是说，不是彻底取消click事件。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("p.addEventListener('click', function (event) {\n  event.stopPropagation();\n  console.log(1);\n});\n\np.addEventListener('click', function(event) {\n  // 会触发\n  console.log(2);\n});\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br")])]),s("p",[n._v("上面代码中，p元素绑定了两个click事件的监听函数。stopPropagation方法只能阻止这个事件的传播，不能取消这个事件，因此，第二个监听函数会触发。输出结果会先是1，然后是2。")]),n._v(" "),s("p",[n._v("如果想要彻底取消该事件，不再触发后面所有click的监听函数，可以使用stopImmediatePropagation方法。")]),n._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("p.addEventListener('click', function (event) {\n  event.stopImmediatePropagation();\n  console.log(1);\n});\n\np.addEventListener('click', function(event) {\n  // 不会被触发\n  console.log(2);\n});\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br")])]),s("p",[n._v("上面代码中，stopImmediatePropagation方法可以彻底取消这个事件，使得后面绑定的所有click监听函数都不再触发。所以，只会输出1，不会输出2。")])])}),[],!1,null,null,null);e.default=t.exports}}]);