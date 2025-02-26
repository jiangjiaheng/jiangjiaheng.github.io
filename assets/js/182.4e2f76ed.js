(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{499:function(e,s,n){"use strict";n.r(s);var t=n(17),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"鼠标事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#鼠标事件"}},[e._v("#")]),e._v(" 鼠标事件")]),e._v(" "),n("h2",{attrs:{id:"鼠标事件的种类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#鼠标事件的种类"}},[e._v("#")]),e._v(" 鼠标事件的种类")]),e._v(" "),n("p",[e._v("鼠标事件指与鼠标相关的事件，继承了MouseEvent接口。具体的事件主要有以下一些。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("click")]),e._v("：按下鼠标（通常是按下主按钮）时触发。")]),e._v(" "),n("li",[n("code",[e._v("dblclick")]),e._v("：在同一个元素上双击鼠标时触发。")]),e._v(" "),n("li",[n("code",[e._v("mousedown")]),e._v("：按下鼠标键时触发。")]),e._v(" "),n("li",[n("code",[e._v("mouseup")]),e._v("：释放按下的鼠标键时触发。")]),e._v(" "),n("li",[n("code",[e._v("mousemove")]),e._v("：当鼠标在一个节点内部移动时触发。当鼠标持续移动时，该事件会连续触发。为了避免性能问题，建议对该事件的监听函数做一些限定，比如限定一段时间内只能运行一次。")]),e._v(" "),n("li",[n("code",[e._v("mouseenter")]),e._v("：鼠标进入一个节点时触发，进入子节点不会触发这个事件（详见后文）。")]),e._v(" "),n("li",[n("code",[e._v("mouseover")]),e._v("：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件（详见后文）。")]),e._v(" "),n("li",[n("code",[e._v("mouseout")]),e._v("：鼠标离开一个节点时触发，离开父节点也会触发这个事件（详见后文）。")]),e._v(" "),n("li",[n("code",[e._v("mouseleave")]),e._v("：鼠标离开一个节点时触发，离开父节点不会触发这个事件（详见后文）。")]),e._v(" "),n("li",[n("code",[e._v("contextmenu")]),e._v("：按下鼠标右键时（上下文菜单出现前）触发，或者按下“上下文菜单键”时触发。")]),e._v(" "),n("li",[n("code",[e._v("wheel")]),e._v("：滚动鼠标的滚轮时触发，该事件继承的是WheelEvent接口。\nclick事件指的是，用户在同一个位置先完成mousedown动作，再完成mouseup动作。因此，触发顺序是，mousedown首先触发，mouseup接着触发，click最后触发。")])]),e._v(" "),n("p",[e._v("dblclick事件则会在mousedown、mouseup、click之后触发。")]),e._v(" "),n("p",[e._v("mouseover事件和mouseenter事件，都是鼠标进入一个节点时触发。两者的区别是，mouseenter事件只触发一次，而只要鼠标在节点内部移动，mouseover事件会在子节点上触发多次。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/* HTML 代码如下\n <ul>\n   <li>item 1</li>\n   <li>item 2</li>\n  <li>item 3</li>\n </ul>\n*/\n\nvar ul = document.querySelector('ul');\n\n// 进入 ul 节点以后，mouseenter 事件只会触发一次\n// 以后只要鼠标在节点内移动，都不会再触发这个事件\n// event.target 是 ul 节点\nul.addEventListener('mouseenter', function (event) {\n  event.target.style.color = 'purple';\n  setTimeout(function () {\n    event.target.style.color = '';\n  }, 500);\n}, false);\n\n// 进入 ul 节点以后，只要在子节点上移动，mouseover 事件会触发多次\n// event.target 是 li 节点\nul.addEventListener('mouseover', function (event) {\n  event.target.style.color = 'orange';\n  setTimeout(function () {\n    event.target.style.color = '';\n  }, 500);\n}, false);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br")])]),n("p",[e._v("上面代码中，在父节点内部进入子节点，不会触发mouseenter事件，但是会触发mouseover事件。")]),e._v(" "),n("p",[e._v("mouseout事件和mouseleave事件，都是鼠标离开一个节点时触发。两者的区别是，在父元素内部离开一个子元素时，mouseleave事件不会触发，而mouseout事件会触发。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/* HTML 代码如下\n <ul>\n   <li>item 1</li>\n   <li>item 2</li>\n  <li>item 3</li>\n </ul>\n*/\n\nvar ul = document.querySelector('ul');\n\n// 先进入 ul 节点，然后在节点内部移动，不会触发 mouseleave 事件\n// 只有离开 ul 节点时，触发一次 mouseleave\n// event.target 是 ul 节点\nul.addEventListener('mouseleave', function (event) {\n  event.target.style.color = 'purple';\n  setTimeout(function () {\n    event.target.style.color = '';\n  }, 500);\n}, false);\n\n// 先进入 ul 节点，然后在节点内部移动，mouseout 事件会触发多次\n// event.target 是 li 节点\nul.addEventListener('mouseout', function (event) {\n  event.target.style.color = 'orange';\n  setTimeout(function () {\n    event.target.style.color = '';\n  }, 500);\n}, false);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br")])]),n("p",[e._v("上面代码中，在父节点内部离开子节点，不会触发mouseleave事件，但是会触发mouseout事件。")]),e._v(" "),n("h2",{attrs:{id:"mouseevent-接口概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mouseevent-接口概述"}},[e._v("#")]),e._v(" MouseEvent 接口概述")]),e._v(" "),n("p",[e._v("MouseEvent接口代表了鼠标相关的事件，单击（click）、双击（dblclick）、松开鼠标键（mouseup）、按下鼠标键（mousedown）等动作，所产生的事件对象都是MouseEvent实例。此外，滚轮事件和拖拉事件也是MouseEvent实例。")]),e._v(" "),n("p",[e._v("MouseEvent接口继承了Event接口，所以拥有Event的所有属性和方法。它还有自己的属性和方法。")]),e._v(" "),n("p",[e._v("浏览器原生提供一个MouseEvent构造函数，用于新建一个MouseEvent实例。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var event = new MouseEvent(type, options);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("MouseEvent构造函数接受两个参数。第一个参数是字符串，表示事件名称；第二个参数是一个事件配置对象，该参数可选。除了Event接口的实例配置属性，该对象可以配置以下属性，所有属性都是可选的。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("screenX")]),e._v("：数值，鼠标相对于屏幕的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。")]),e._v(" "),n("li",[n("code",[e._v("screenY")]),e._v("：数值，鼠标相对于屏幕的垂直位置（单位像素），其他与screenX相同。")]),e._v(" "),n("li",[n("code",[e._v("clientX")]),e._v("：数值，鼠标相对于程序窗口的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。")]),e._v(" "),n("li",[n("code",[e._v("clientY")]),e._v("：数值，鼠标相对于程序窗口的垂直位置（单位像素），其他与clientX相同。")]),e._v(" "),n("li",[n("code",[e._v("ctrlKey")]),e._v("：布尔值，是否同时按下了 Ctrl 键，默认值为false。")]),e._v(" "),n("li",[n("code",[e._v("shiftKey")]),e._v("：布尔值，是否同时按下了 Shift 键，默认值为false。")]),e._v(" "),n("li",[n("code",[e._v("altKey")]),e._v("：布尔值，是否同时按下 Alt 键，默认值为false。")]),e._v(" "),n("li",[n("code",[e._v("metaKey")]),e._v("：布尔值，是否同时按下 Meta 键，默认值为false。")]),e._v(" "),n("li",[n("code",[e._v("button")]),e._v("：数值，表示按下了哪一个鼠标按键，默认值为0，表示按下主键（通常是鼠标的左键）或者当前事件没有定义这个属性；1表示按下辅助键（通常是鼠标的中间键），2表示按下次要键（通常是鼠标的右键）。")]),e._v(" "),n("li",[n("code",[e._v("buttons")]),e._v("：数值，表示按下了鼠标的哪些键，是一个三个比特位的二进制值，默认为0（没有按下任何键）。1（二进制001）表示按下主键（通常是左键），2（二进制010）表示按下次要键（通常是右键），4（二进制100）表示按下辅助键（通常是中间键）。因此，如果返回3（二进制011）就表示同时按下了左键和右键。")]),e._v(" "),n("li",[n("code",[e._v("relatedTarget")]),e._v("：节点对象，表示事件的相关节点，默认为null。mouseenter和mouseover事件时，表示鼠标刚刚离开的那个元素节点；mouseout和mouseleave事件时，表示鼠标正在进入的那个元素节点。")])]),e._v(" "),n("p",[e._v("下面是一个例子。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function simulateClick() {\n  var event = new MouseEvent('click', {\n    'bubbles': true,\n    'cancelable': true\n  });\n  var cb = document.getElementById('checkbox');\n  cb.dispatchEvent(event);\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("上面代码生成一个鼠标点击事件，并触发该事件。")]),e._v(" "),n("h2",{attrs:{id:"mouseevent-接口的实例属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mouseevent-接口的实例属性"}},[e._v("#")]),e._v(" MouseEvent 接口的实例属性")]),e._v(" "),n("h3",{attrs:{id:"_1-mouseevent-altkey-mouseevent-ctrlkey-mouseevent-metakey-mouseevent-shiftkey"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-mouseevent-altkey-mouseevent-ctrlkey-mouseevent-metakey-mouseevent-shiftkey"}},[e._v("#")]),e._v(" 1. MouseEvent.altKey，MouseEvent.ctrlKey，MouseEvent.metaKey，MouseEvent.shiftKey")]),e._v(" "),n("p",[e._v("MouseEvent.altKey、MouseEvent.ctrlKey、MouseEvent.metaKey、MouseEvent.shiftKey这四个属性都返回一个布尔值，表示事件发生时，是否按下对应的键。它们都是只读属性。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("altKey")]),e._v("属性：Alt 键")]),e._v(" "),n("li",[n("code",[e._v("ctrlKey")]),e._v("属性：Ctrl 键")]),e._v(" "),n("li",[n("code",[e._v("metaKey")]),e._v("属性：Meta 键（Mac 键盘是一个四瓣的小花，Windows 键盘是 Windows 键）")]),e._v(" "),n("li",[n("code",[e._v("shiftKey")]),e._v("属性：Shift 键")])]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// HTML 代码如下\n// <body onclick=\"showKey(event)\">\nfunction showKey(e) {\n  console.log('ALT key pressed: ' + e.altKey);\n  console.log('CTRL key pressed: ' + e.ctrlKey);\n  console.log('META key pressed: ' + e.metaKey);\n  console.log('SHIFT key pressed: ' + e.shiftKey);\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("上面代码中，点击网页会输出是否同时按下对应的键。")]),e._v(" "),n("h3",{attrs:{id:"_3-mouseevent-button-mouseevent-buttons"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-mouseevent-button-mouseevent-buttons"}},[e._v("#")]),e._v(" 3. MouseEvent.button，MouseEvent.buttons")]),e._v(" "),n("p",[e._v("MouseEvent.button属性返回一个数值，表示事件发生时按下了鼠标的哪个键。该属性只读。")]),e._v(" "),n("ul",[n("li",[e._v("0：按下主键（通常是左键），或者该事件没有初始化这个属性（比如mousemove事件）。")]),e._v(" "),n("li",[e._v("1：按下辅助键（通常是中键或者滚轮键）。")]),e._v(" "),n("li",[e._v("2：按下次键（通常是右键）。")])]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// HTML 代码为\n// <button onmouseup=\"whichButton(event)\">点击</button>\nvar whichButton = function (e) {\n  switch (e.button) {\n    case 0:\n      console.log('Left button clicked.');\n      break;\n    case 1:\n      console.log('Middle button clicked.');\n      break;\n    case 2:\n      console.log('Right button clicked.');\n      break;\n    default:\n      console.log('Unexpected code: ' + e.button);\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br")])]),n("p",[e._v("MouseEvent.buttons属性返回一个三个比特位的值，表示同时按下了哪些键。它用来处理同时按下多个鼠标键的情况。该属性只读。")]),e._v(" "),n("ul",[n("li",[e._v("1：二进制为001（十进制的1），表示按下左键。")]),e._v(" "),n("li",[e._v("2：二进制为010（十进制的2），表示按下右键。")]),e._v(" "),n("li",[e._v("4：二进制为100（十进制的4），表示按下中键或滚轮键。")])]),e._v(" "),n("p",[e._v("同时按下多个键的时候，每个按下的键对应的比特位都会有值。比如，同时按下左键和右键，会返回3（二进制为011）。")]),e._v(" "),n("h3",{attrs:{id:"_3-mouseevent-clientx-mouseevent-clienty"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-mouseevent-clientx-mouseevent-clienty"}},[e._v("#")]),e._v(" 3. MouseEvent.clientX，MouseEvent.clientY")]),e._v(" "),n("p",[e._v("MouseEvent.clientX属性返回鼠标位置相对于浏览器窗口左上角的水平坐标（单位像素），MouseEvent.clientY属性返回垂直坐标。这两个属性都是只读属性。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// HTML 代码为\n// <body onmousedown=\"showCoords(event)\">\nfunction showCoords(evt){\n  console.log(\n    'clientX value: ' + evt.clientX + '\\n' +\n    'clientY value: ' + evt.clientY + '\\n'\n  );\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("这两个属性还分别有一个别名MouseEvent.x和MouseEvent.y。")]),e._v(" "),n("h3",{attrs:{id:"_4-mouseevent-movementx-mouseevent-movementy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-mouseevent-movementx-mouseevent-movementy"}},[e._v("#")]),e._v(" 4. MouseEvent.movementX，MouseEvent.movementY")]),e._v(" "),n("p",[e._v("MouseEvent.movementX属性返回当前位置与上一个mousemove事件之间的水平距离（单位像素）。数值上，它等于下面的计算公式。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("currentEvent.movementX = currentEvent.screenX - previousEvent.screenX\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("MouseEvent.movementY属性返回当前位置与上一个mousemove事件之间的垂直距离（单位像素）。数值上，它等于下面的计算公式。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("currentEvent.movementY = currentEvent.screenY - previousEvent.screenY。\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("这两个属性都是只读属性。")]),e._v(" "),n("h3",{attrs:{id:"_5-mouseevent-screenx-mouseevent-screeny"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-mouseevent-screenx-mouseevent-screeny"}},[e._v("#")]),e._v(" 5. MouseEvent.screenX，MouseEvent.screenY")]),e._v(" "),n("p",[e._v("MouseEvent.screenX属性返回鼠标位置相对于屏幕左上角的水平坐标（单位像素），MouseEvent.screenY属性返回垂直坐标。这两个属性都是只读属性。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// HTML 代码如下\n// <body onmousedown=\"showCoords(event)\">\nfunction showCoords(evt) {\n  console.log(\n    'screenX value: ' + evt.screenX + '\\n',\n    'screenY value: ' + evt.screenY + '\\n'\n  );\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("h3",{attrs:{id:"_6-mouseevent-offsetx-mouseevent-offsety"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-mouseevent-offsetx-mouseevent-offsety"}},[e._v("#")]),e._v(" 6. MouseEvent.offsetX，MouseEvent.offsetY")]),e._v(" "),n("p",[e._v("MouseEvent.offsetX属性返回鼠标位置与目标节点左侧的padding边缘的水平距离（单位像素），MouseEvent.offsetY属性返回与目标节点上方的padding边缘的垂直距离。这两个属性都是只读属性。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/* HTML 代码如下\n  <style>\n    p {\n      width: 100px;\n      height: 100px;\n      padding: 100px;\n    }\n  </style>\n  <p>Hello</p>\n*/\nvar p = document.querySelector('p');\np.addEventListener(\n  'click',\n  function (e) {\n    console.log(e.offsetX);\n    console.log(e.offsetY);\n  },\n  false\n);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br")])]),n("p",[e._v("上面代码中，鼠标如果在p元素的中心位置点击，会返回150 150。因此中心位置距离左侧和上方的padding边缘，等于padding的宽度（100像素）加上元素内容区域一半的宽度（50像素）。")]),e._v(" "),n("h3",{attrs:{id:"_7-mouseevent-pagex-mouseevent-pagey"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-mouseevent-pagex-mouseevent-pagey"}},[e._v("#")]),e._v(" 7. MouseEvent.pageX，MouseEvent.pageY")]),e._v(" "),n("p",[e._v("MouseEvent.pageX属性返回鼠标位置与文档左侧边缘的距离（单位像素），MouseEvent.pageY属性返回与文档上侧边缘的距离（单位像素）。它们的返回值都包括文档不可见的部分。这两个属性都是只读。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/* HTML 代码如下\n  <style>\n    body {\n      height: 2000px;\n    }\n  </style>\n*/\ndocument.body.addEventListener(\n  'click',\n  function (e) {\n    console.log(e.pageX);\n    console.log(e.pageY);\n  },\n  false\n);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("p",[e._v("上面代码中，页面高度为2000像素，会产生垂直滚动条。滚动到页面底部，点击鼠标输出的pageY值会接近2000。")]),e._v(" "),n("h3",{attrs:{id:"_8-mouseevent-relatedtarget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-mouseevent-relatedtarget"}},[e._v("#")]),e._v(" 8. MouseEvent.relatedTarget")]),e._v(" "),n("p",[e._v("MouseEvent.relatedTarget属性返回事件的相关节点。对于那些没有相关节点的事件，该属性返回null。该属性只读。")]),e._v(" "),n("p",[e._v("下表列出不同事件的target属性值和relatedTarget属性值义。")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("事件名称")]),e._v(" "),n("th",[e._v("target 属性")]),e._v(" "),n("th",[e._v("relatedTarget 属性")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("focusin")]),e._v(" "),n("td",[e._v("接受焦点的节点")]),e._v(" "),n("td",[e._v("丧失焦点的节点")])]),e._v(" "),n("tr",[n("td",[e._v("focusout")]),e._v(" "),n("td",[e._v("丧失焦点的节点")]),e._v(" "),n("td",[e._v("接受焦点的节点")])]),e._v(" "),n("tr",[n("td",[e._v("mouseenter")]),e._v(" "),n("td",[e._v("将要进入的节点")]),e._v(" "),n("td",[e._v("将要离开的节点")])]),e._v(" "),n("tr",[n("td",[e._v("mouseleave")]),e._v(" "),n("td",[e._v("将要离开的节点")]),e._v(" "),n("td",[e._v("将要进入的节点")])]),e._v(" "),n("tr",[n("td",[e._v("mouseout")]),e._v(" "),n("td",[e._v("将要离开的节点")]),e._v(" "),n("td",[e._v("将要进入的节点")])]),e._v(" "),n("tr",[n("td",[e._v("mouseover")]),e._v(" "),n("td",[e._v("将要进入的节点")]),e._v(" "),n("td",[e._v("将要离开的节点")])]),e._v(" "),n("tr",[n("td",[e._v("dragenter")]),e._v(" "),n("td",[e._v("将要进入的节点")]),e._v(" "),n("td",[e._v("将要离开的节点")])]),e._v(" "),n("tr",[n("td",[e._v("dragexit")]),e._v(" "),n("td",[e._v("将要离开的节点")]),e._v(" "),n("td",[e._v("将要进入的节点")])])])]),e._v(" "),n("p",[e._v("下面是一个例子。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/*\n  HTML 代码如下\n  <div id=\"outer\" style=\"height:50px;width:50px;border-width:1px solid black;\">\n    <div id=\"inner\" style=\"height:25px;width:25px;border:1px solid black;\"></div>\n  </div>\n*/\n\nvar inner = document.getElementById('inner');\ninner.addEventListener('mouseover', function (event) {\n  console.log('进入' + event.target.id + ' 离开' + event.relatedTarget.id);\n}, false);\ninner.addEventListener('mouseenter', function (event) {\n  console.log('进入' + event.target.id + ' 离开' + event.relatedTarget.id);\n});\ninner.addEventListener('mouseout', function () {\n  console.log('离开' + event.target.id + ' 进入' + event.relatedTarget.id);\n});\ninner.addEventListener(\"mouseleave\", function (){\n  console.log('离开' + event.target.id + ' 进入' + event.relatedTarget.id);\n});\n\n// 鼠标从 outer 进入inner，输出\n// 进入inner 离开outer\n// 进入inner 离开outer\n\n// 鼠标从 inner进入 outer，输出\n// 离开inner 进入outer\n// 离开inner 进入outer\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br")])]),n("h2",{attrs:{id:"mouseevent-接口的实例方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mouseevent-接口的实例方法"}},[e._v("#")]),e._v(" MouseEvent 接口的实例方法")]),e._v(" "),n("h3",{attrs:{id:"_1-mouseevent-getmodifierstate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-mouseevent-getmodifierstate"}},[e._v("#")]),e._v(" 1. MouseEvent.getModifierState()")]),e._v(" "),n("p",[e._v("MouseEvent.getModifierState方法返回一个布尔值，表示有没有按下特定的功能键。它的参数是一个表示功能键的字符串。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("document.addEventListener('click', function (e) {\n  console.log(e.getModifierState('CapsLock'));\n}, false);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("上面的代码可以了解用户是否按下了大写键。")]),e._v(" "),n("h2",{attrs:{id:"wheelevent-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wheelevent-接口"}},[e._v("#")]),e._v(" WheelEvent 接口")]),e._v(" "),n("h3",{attrs:{id:"_1-概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[e._v("#")]),e._v(" 1. 概述")]),e._v(" "),n("p",[e._v("WheelEvent 接口继承了 MouseEvent 实例，代表鼠标滚轮事件的实例对象。目前，鼠标滚轮相关的事件只有一个wheel事件，用户滚动鼠标的滚轮，就生成这个事件的实例。")]),e._v(" "),n("p",[e._v("浏览器原生提供WheelEvent()构造函数，用来生成WheelEvent实例。")]),e._v(" "),n("div",{staticClass:"language-event line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var wheelEvent = new WheelEvent(type, options);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("WheelEvent()构造函数可以接受两个参数，第一个是字符串，表示事件类型，对于滚轮事件来说，这个值目前只能是wheel。第二个参数是事件的配置对象。该对象的属性除了Event、UIEvent的配置属性以外，还可以接受以下几个属性，所有属性都是可选的。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("deltaX")]),e._v("：数值，表示滚轮的水平滚动量，默认值是 0.0。")]),e._v(" "),n("li",[n("code",[e._v("deltaY")]),e._v("：数值，表示滚轮的垂直滚动量，默认值是 0.0。")]),e._v(" "),n("li",[n("code",[e._v("deltaZ")]),e._v("：数值，表示滚轮的 Z 轴滚动量，默认值是 0.0。")]),e._v(" "),n("li",[n("code",[e._v("deltaMode")]),e._v("：数值，表示相关的滚动事件的单位，适用于上面三个属性。0表示滚动单位为像素，1表示单位为行，2表示单位为页，默认为0。")])]),e._v(" "),n("h3",{attrs:{id:"_2-实例属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-实例属性"}},[e._v("#")]),e._v(" 2. 实例属性")]),e._v(" "),n("p",[e._v("WheelEvent事件实例除了具有Event和MouseEvent的实例属性和实例方法，还有一些自己的实例属性，但是没有自己的实例方法。")]),e._v(" "),n("p",[e._v("下面的属性都是只读属性。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("WheelEvent.deltaX")]),e._v("：数值，表示滚轮的水平滚动量。")]),e._v(" "),n("li",[n("code",[e._v("WheelEvent.deltaY")]),e._v("：数值，表示滚轮的垂直滚动量。")]),e._v(" "),n("li",[n("code",[e._v("WheelEvent.deltaZ")]),e._v("：数值，表示滚轮的 Z 轴滚动量。")]),e._v(" "),n("li",[n("code",[e._v("WheelEvent.deltaMode")]),e._v("：数值，表示上面三个属性的单位，0是像素，1是行，2是页。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);