(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{518:function(e,n,s){"use strict";s.r(n);var t=s(25),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"event对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event对象"}},[e._v("#")]),e._v(" Event对象")]),e._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),s("p",[e._v("事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个Event对象，所有的事件都是这个对象的实例，或者说继承了Event.prototype对象。")]),e._v(" "),s("p",[e._v("Event对象本身就是一个构造函数，可以用来生成新的实例。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("event = new Event(type, options);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Event构造函数接受两个参数。第一个参数type是字符串，表示事件的名称；第二个参数options是一个对象，表示事件对象的配置。该对象主要有下面两个属性。")]),e._v(" "),s("ul",[s("li",[e._v("bubbles：布尔值，可选，默认为false，表示事件对象是否冒泡。")]),e._v(" "),s("li",[e._v("cancelable：布尔值，可选，默认为false，表示事件是否可以被取消，即能否用Event.preventDefault()取消这个事件。一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。")])]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var ev = new Event(\n  'look',\n  {\n    'bubbles': true,\n    'cancelable': false\n  }\n);\ndocument.dispatchEvent(ev);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("上面代码新建一个look事件实例，然后使用dispatchEvent方法触发该事件。")]),e._v(" "),s("p",[e._v("注意，如果不是显式指定bubbles属性为true，生成的事件就只能在“捕获阶段”触发监听函数。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码为\n// <div><p>Hello</p></div>\nvar div = document.querySelector('div');\nvar p = document.querySelector('p');\n\nfunction callback(event) {\n  var tag = event.currentTarget.tagName;\n  console.log('Tag: ' + tag); // 没有任何输出\n}\n\ndiv.addEventListener('click', callback, false);\n\nvar click = new Event('click');\np.dispatchEvent(click);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("上面代码中，p元素发出一个click事件，该事件默认不会冒泡。div.addEventListener方法指定在冒泡阶段监听，因此监听函数不会触发。如果写成div.addEventListener('click', callback, true)，那么在“捕获阶段”可以监听到这个事件。")]),e._v(" "),s("p",[e._v("另一方面，如果这个事件在div元素上触发。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("div.dispatchEvent(click);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("那么，不管div元素是在冒泡阶段监听，还是在捕获阶段监听，都会触发监听函数。因为这时div元素是事件的目标，不存在是否冒泡的问题，div元素总是会接收到事件，因此导致监听函数生效。")]),e._v(" "),s("h2",{attrs:{id:"实例属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例属性"}},[e._v("#")]),e._v(" 实例属性")]),e._v(" "),s("h3",{attrs:{id:"_1-event-bubbles-event-eventphase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-event-bubbles-event-eventphase"}},[e._v("#")]),e._v(" 1. Event.bubbles，Event.eventPhase")]),e._v(" "),s("p",[e._v("Event.bubbles属性返回一个布尔值，表示当前事件是否会冒泡。该属性为只读属性，一般用来了解 Event 实例是否可以冒泡。前面说过，除非显式声明，Event构造函数生成的事件，默认是不冒泡的。")]),e._v(" "),s("p",[e._v("Event.eventPhase属性返回一个整数常量，表示事件目前所处的阶段。该属性只读。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var phase = event.eventPhase;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Event.eventPhase的返回值有四种可能。")]),e._v(" "),s("ul",[s("li",[e._v("0，事件目前没有发生。")]),e._v(" "),s("li",[e._v("1，事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中。")]),e._v(" "),s("li",[e._v("2，事件到达目标节点，即Event.target属性指向的那个节点。")]),e._v(" "),s("li",[e._v("3，事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中。")])]),e._v(" "),s("h3",{attrs:{id:"_2-event-cancelable-event-cancelbubble-event-defaultprevented"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-event-cancelable-event-cancelbubble-event-defaultprevented"}},[e._v("#")]),e._v(" 2. Event.cancelable，Event.cancelBubble，event.defaultPrevented")]),e._v(" "),s("p",[e._v("Event.cancelable属性返回一个布尔值，表示事件是否可以取消。该属性为只读属性，一般用来了解 Event 实例的特性。")]),e._v(" "),s("p",[e._v("大多数浏览器的原生事件是可以取消的。比如，取消click事件，点击链接将无效。但是除非显式声明，Event构造函数生成的事件，默认是不可以取消的。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var evt = new Event('foo');\nevt.cancelable  // false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("当Event.cancelable属性为true时，调用Event.preventDefault()就可以取消这个事件，阻止浏览器对该事件的默认行为。")]),e._v(" "),s("p",[e._v("如果事件不能取消，调用Event.preventDefault()会没有任何效果。所以使用这个方法之前，最好用Event.cancelable属性判断一下是否可以取消。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function preventEvent(event) {\n  if (event.cancelable) {\n    event.preventDefault();\n  } else {\n    console.warn('This event couldn\\'t be canceled.');\n    console.dir(event);\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("Event.cancelBubble属性是一个布尔值，如果设为true，相当于执行Event.stopPropagation()，可以阻止事件的传播。")]),e._v(" "),s("p",[e._v("Event.defaultPrevented属性返回一个布尔值，表示该事件是否调用过Event.preventDefault方法。该属性只读。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("if (event.defaultPrevented) {\n  console.log('该事件已经取消了');\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"_3-event-currenttarget-event-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-event-currenttarget-event-target"}},[e._v("#")]),e._v(" 3. Event.currentTarget，Event.target")]),e._v(" "),s("p",[e._v("事件发生以后，会经过捕获和冒泡两个阶段，依次通过多个 DOM 节点。因此，任意时点都有两个与事件相关的节点，一个是事件的原始触发节点（Event.target），另一个是事件当前正在通过的节点（Event.currentTarget）。前者通常是后者的后代节点。")]),e._v(" "),s("p",[e._v("Event.currentTarget属性返回事件当前所在的节点，即事件当前正在通过的节点，也就是当前正在执行的监听函数所在的那个节点。随着事件的传播，这个属性的值会变。")]),e._v(" "),s("p",[e._v("Event.target属性返回原始触发事件的那个节点，即事件最初发生的节点。这个属性不会随着事件的传播而改变。")]),e._v(" "),s("p",[e._v("事件传播过程中，不同节点的监听函数内部的Event.target与Event.currentTarget属性的值是不一样的。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码为\n// <p id=\"para\">Hello <em>World</em></p>\nfunction hide(e) {\n  // 不管点击 Hello 或 World，总是返回 true\n  console.log(this === e.currentTarget);\n\n  // 点击 Hello，返回 true\n  // 点击 World，返回 false\n  console.log(this === e.target);\n}\n\ndocument.getElementById('para').addEventListener('click', hide, false);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("上面代码中，"),s("code",[e._v("<em>")]),e._v("是"),s("code",[e._v("<p>")]),e._v("的子节点，点击"),s("code",[e._v("<em>")]),e._v("或者点击"),s("code",[e._v("<p>")]),e._v("，都会导致监听函数执行。这时，e.target总是指向原始点击位置的那个节点，而e.currentTarget指向事件传播过程中正在经过的那个节点。由于监听函数只有事件经过时才会触发，所以e.currentTarget总是等同于监听函数内部的this。")]),e._v(" "),s("h3",{attrs:{id:"_4-event-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-event-type"}},[e._v("#")]),e._v(" 4. Event.type")]),e._v(" "),s("p",[e._v("Event.type属性返回一个字符串，表示事件类型。事件的类型是在生成事件的时候指定的。该属性只读。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var evt = new Event('foo');\nevt.type // \"foo\"\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"_5-event-timestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-event-timestamp"}},[e._v("#")]),e._v(" 5. Event.timeStamp")]),e._v(" "),s("p",[e._v("Event.timeStamp属性返回一个毫秒时间戳，表示事件发生的时间。它是相对于网页加载成功开始计算的。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var evt = new Event('foo');\nevt.timeStamp // 3683.6999999995896\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("它的返回值有可能是整数，也有可能是小数（高精度时间戳），取决于浏览器的设置。")]),e._v(" "),s("p",[e._v("下面是一个计算鼠标移动速度的例子，显示每秒移动的像素数量。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var previousX;\nvar previousY;\nvar previousT;\n\nwindow.addEventListener('mousemove', function(event) {\n  if (\n    previousX !== undefined &&\n    previousY !== undefined &&\n    previousT !== undefined\n  ) {\n    var deltaX = event.screenX - previousX;\n    var deltaY = event.screenY - previousY;\n    var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));\n\n    var deltaT = event.timeStamp - previousT;\n    console.log(deltaD / deltaT * 1000);\n  }\n\n  previousX = event.screenX;\n  previousY = event.screenY;\n  previousT = event.timeStamp;\n});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])]),s("h3",{attrs:{id:"_6-event-istrusted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-event-istrusted"}},[e._v("#")]),e._v(" 6. Event.isTrusted")]),e._v(" "),s("p",[e._v("Event.isTrusted属性返回一个布尔值，表示该事件是否由真实的用户行为产生。比如，用户点击链接会产生一个click事件，该事件是用户产生的；Event构造函数生成的事件，则是脚本产生的。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var evt = new Event('foo');\nevt.isTrusted // false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("上面代码中，evt对象是脚本产生的，所以isTrusted属性返回false。")]),e._v(" "),s("h3",{attrs:{id:"_7-event-detail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-event-detail"}},[e._v("#")]),e._v(" 7. Event.detail")]),e._v(" "),s("p",[e._v("Event.detail属性只有浏览器的 UI （用户界面）事件才具有。该属性返回一个数值，表示事件的某种信息。具体含义与事件类型相关。比如，对于click和dblclick事件，Event.detail是鼠标按下的次数（1表示单击，2表示双击，3表示三击）；对于鼠标滚轮事件，Event.detail是滚轮正向滚动的距离，负值就是负向滚动的距离，返回值总是3的倍数。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码如下\n// <p>Hello</p>\nfunction giveDetails(e) {\n  console.log(e.detail);\n}\n\ndocument.querySelector('p').onclick = giveDetails;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h2",{attrs:{id:"实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[e._v("#")]),e._v(" 实例方法")]),e._v(" "),s("h3",{attrs:{id:"_1-event-preventdefault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-event-preventdefault"}},[e._v("#")]),e._v(" 1. Event.preventDefault()")]),e._v(" "),s("p",[e._v("Event.preventDefault方法取消浏览器对当前事件的默认行为。比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了；再比如，按一下空格键，页面向下滚动一段距离，使用这个方法以后也不会滚动了。该方法生效的前提是，事件对象的cancelable属性为true，如果为false，调用该方法没有任何效果。")]),e._v(" "),s("p",[e._v("注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。如果要阻止传播，可以使用stopPropagation()或stopImmediatePropagation()方法。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码为\n// <input type=\"checkbox\" id=\"my-checkbox\" />\nvar cb = document.getElementById('my-checkbox');\n\ncb.addEventListener(\n  'click',\n  function (e){ e.preventDefault(); },\n  false\n);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("上面代码中，浏览器的默认行为是单击会选中单选框，取消这个行为，就导致无法选中单选框。")]),e._v(" "),s("p",[e._v("利用这个方法，可以为文本输入框设置校验条件。如果用户的输入不符合条件，就无法将字符输入文本框。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码为\n// <input type=\"text\" id=\"my-input\" />\nvar input = document.getElementById('my-input');\ninput.addEventListener('keypress', checkName, false);\n\nfunction checkName(e) {\n  if (e.charCode < 97 || e.charCode > 122) {\n    e.preventDefault();\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("上面代码为文本框的keypress事件设定监听函数后，将只能输入小写字母，否则输入事件的默认行为（写入文本框）将被取消，导致不能向文本框输入内容。")]),e._v(" "),s("h3",{attrs:{id:"_2-event-stoppropagation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-event-stoppropagation"}},[e._v("#")]),e._v(" 2. Event.stopPropagation()")]),e._v(" "),s("p",[e._v("stopPropagation方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function stopEvent(e) {\n  e.stopPropagation();\n}\n\nel.addEventListener('click', stopEvent, false);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("上面代码中，click事件将不会进一步冒泡到el节点的父节点。")]),e._v(" "),s("h3",{attrs:{id:"_3-event-stopimmediatepropagation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-event-stopimmediatepropagation"}},[e._v("#")]),e._v(" 3. Event.stopImmediatePropagation()")]),e._v(" "),s("p",[e._v("Event.stopImmediatePropagation方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。也就是说，该方法阻止事件的传播，比Event.stopPropagation()更彻底。")]),e._v(" "),s("p",[e._v("如果同一个节点对于同一个事件指定了多个监听函数，这些函数会根据添加的顺序依次调用。只要其中有一个监听函数调用了Event.stopImmediatePropagation方法，其他的监听函数就不会再执行了。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function l1(e){\n  e.stopImmediatePropagation();\n}\n\nfunction l2(e){\n  console.log('hello world');\n}\n\nel.addEventListener('click', l1, false);\nel.addEventListener('click', l2, false);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("上面代码在el节点上，为click事件添加了两个监听函数l1和l2。由于l1调用了event.stopImmediatePropagation方法，所以l2不会被调用。")]),e._v(" "),s("h3",{attrs:{id:"_4-event-composedpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-event-composedpath"}},[e._v("#")]),e._v(" 4. Event.composedPath()")]),e._v(" "),s("p",[e._v("Event.composedPath()返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码如下\n// <div>\n//   <p>Hello</p>\n// </div>\nvar div = document.querySelector('div');\nvar p = document.querySelector('p');\n\ndiv.addEventListener('click', function (e) {\n  console.log(e.composedPath());\n}, false);\n// [p, div, body, html, document, Window]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("上面代码中，click事件的最底层节点是p，向上依次是div、body、html、document、Window。")])])}),[],!1,null,null,null);n.default=a.exports}}]);