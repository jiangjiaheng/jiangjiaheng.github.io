(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{528:function(e,t,s){"use strict";s.r(t);var a=s(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"触摸事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触摸事件"}},[e._v("#")]),e._v(" 触摸事件")]),e._v(" "),s("h2",{attrs:{id:"触摸操作概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触摸操作概述"}},[e._v("#")]),e._v(" 触摸操作概述")]),e._v(" "),s("p",[e._v("浏览器的触摸 API 由三个部分组成。")]),e._v(" "),s("ul",[s("li",[e._v("Touch：一个触摸点")]),e._v(" "),s("li",[e._v("TouchList：多个触摸点的集合")]),e._v(" "),s("li",[e._v("TouchEvent：触摸引发的事件实例")])]),e._v(" "),s("p",[e._v("Touch接口的实例对象用来表示触摸点（一根手指或者一根触摸笔），包括位置、大小、形状、压力、目标元素等属性。有时，触摸动作由多个触摸点（多根手指）组成，多个触摸点的集合由TouchList接口的实例对象表示。TouchEvent接口的实例对象代表由触摸引发的事件，只有触摸屏才会引发这一类事件。")]),e._v(" "),s("p",[e._v("很多时候，触摸事件和鼠标事件同时触发，即使这个时候并没有用到鼠标。这是为了让那些只定义鼠标事件、没有定义触摸事件的代码，在触摸屏的情况下仍然能用。如果想避免这种情况，可以用event.preventDefault方法阻止发出鼠标事件。")]),e._v(" "),s("h2",{attrs:{id:"touch-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#touch-接口"}},[e._v("#")]),e._v(" Touch 接口")]),e._v(" "),s("h3",{attrs:{id:"_1-touch-接口概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-touch-接口概述"}},[e._v("#")]),e._v(" 1. Touch 接口概述")]),e._v(" "),s("p",[e._v("Touch 接口代表单个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。")]),e._v(" "),s("p",[e._v("浏览器原生提供Touch构造函数，用来生成Touch实例。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var touch = new Touch(touchOptions);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Touch构造函数接受一个配置对象作为参数，它有以下属性。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("identifier")]),e._v("：必需，类型为整数，表示触摸点的唯一 ID。")]),e._v(" "),s("li",[s("code",[e._v("target")]),e._v("：必需，类型为元素节点，表示触摸点开始时所在的网页元素。")]),e._v(" "),s("li",[s("code",[e._v("clientX")]),e._v("：可选，类型为数值，表示触摸点相对于浏览器窗口左上角的水平距离，默认为0。")]),e._v(" "),s("li",[s("code",[e._v("clientY")]),e._v("：可选，类型为数值，表示触摸点相对于浏览器窗口左上角的垂直距离，默认为0。")]),e._v(" "),s("li",[s("code",[e._v("screenX")]),e._v("：可选，类型为数值，表示触摸点相对于屏幕左上角的水平距离，默认为0。")]),e._v(" "),s("li",[s("code",[e._v("screenY")]),e._v("：可选，类型为数值，表示触摸点相对于屏幕左上角的垂直距离，默认为0。")]),e._v(" "),s("li",[s("code",[e._v("pageX")]),e._v("：可选，类型为数值，表示触摸点相对于网页左上角的水平位置（即包括页面的滚动距离），默认为0。")]),e._v(" "),s("li",[s("code",[e._v("pageY")]),e._v("：可选，类型为数值，表示触摸点相对于网页左上角的垂直位置（即包括页面的滚动距离），默认为0。")]),e._v(" "),s("li",[s("code",[e._v("radiusX")]),e._v("：可选，类型为数值，表示触摸点周围受到影响的椭圆范围的 X 轴半径，默认为0。")]),e._v(" "),s("li",[s("code",[e._v("radiusY")]),e._v("：可选：类型为数值，表示触摸点周围受到影响的椭圆范围的 Y 轴半径，默认为0。")]),e._v(" "),s("li",[s("code",[e._v("rotationAngle")]),e._v("：可选，类型为数值，表示触摸区域的椭圆的旋转角度，单位为度数，在0到90度之间，默认值为0。")]),e._v(" "),s("li",[s("code",[e._v("force")]),e._v("：可选，类型为数值，范围在0到1之间，表示触摸压力。0代表没有压力，1代表硬件所能识别的最大压力，默认为0。")])]),e._v(" "),s("h3",{attrs:{id:"_2-touch-接口的实例属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-touch-接口的实例属性"}},[e._v("#")]),e._v(" 2. Touch 接口的实例属性")]),e._v(" "),s("h4",{attrs:{id:"_1-touch-identifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-touch-identifier"}},[e._v("#")]),e._v(" （1）Touch.identifier")]),e._v(" "),s("p",[e._v("Touch.identifier属性返回一个整数，表示触摸点的唯一 ID。这个值在整个触摸过程保持不变，直到触摸事件结束。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("someElement.addEventListener('touchmove', function (e) {\n  for (var i = 0; i < e.changedTouches.length; i++) {\n    console.log(e.changedTouches[i].identifier);\n  }\n}, false);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"_2-touch-screenx-touch-screeny-touch-clientx-touch-clienty-pagex-pagey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-touch-screenx-touch-screeny-touch-clientx-touch-clienty-pagex-pagey"}},[e._v("#")]),e._v(" （2）Touch.screenX，Touch.screenY，Touch.clientX，Touch.clientY，pageX，pageY")]),e._v(" "),s("p",[e._v("Touch.screenX属性和Touch.screenY属性，分别表示触摸点相对于屏幕左上角的横坐标和纵坐标，与页面是否滚动无关。")]),e._v(" "),s("p",[e._v("Touch.clientX属性和Touch.clientY属性，分别表示触摸点相对于浏览器视口左上角的横坐标和纵坐标，与页面是否滚动无关。")]),e._v(" "),s("p",[e._v("Touch.pageX属性和Touch.pageY属性，分别表示触摸点相对于当前页面左上角的横坐标和纵坐标，包含了页面滚动带来的位移。")]),e._v(" "),s("h4",{attrs:{id:"_3-touch-radiusx-touch-radiusy-touch-rotationangle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-touch-radiusx-touch-radiusy-touch-rotationangle"}},[e._v("#")]),e._v(" （3）Touch.radiusX，Touch.radiusY，Touch.rotationAngle")]),e._v(" "),s("p",[e._v("Touch.radiusX属性和Touch.radiusY属性，分别返回触摸点周围受到影响的椭圆范围的 X 轴半径和 Y 轴半径，单位为像素。乘以 2 就可以得到触摸范围的宽度和高度。")]),e._v(" "),s("p",[e._v("Touch.rotationAngle属性表示触摸区域的椭圆的旋转角度，单位为度数，在0到90度之间。")]),e._v(" "),s("p",[e._v("上面这三个属性共同定义了用户与屏幕接触的区域，对于描述手指这一类非精确的触摸，很有帮助。指尖接触屏幕，触摸范围会形成一个椭圆，这三个属性就用来描述这个椭圆区域。")]),e._v(" "),s("p",[e._v("下面是一个示例。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("div.addEventListener('touchstart', rotate);\ndiv.addEventListener('touchmove', rotate);\ndiv.addEventListener('touchend', rotate);\n\nfunction rotate(e) {\n  var touch = e.changedTouches.item(0);\n  e.preventDefault();\n\n  src.style.width = touch.radiusX * 2 + 'px';\n  src.style.height = touch.radiusY * 2 + 'px';\n  src.style.transform = 'rotate(' + touch.rotationAngle + 'deg)';\n};\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("h4",{attrs:{id:"_4-touch-force"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-touch-force"}},[e._v("#")]),e._v(" （4）Touch.force")]),e._v(" "),s("p",[e._v("Touch.force属性返回一个0到1之间的数值，表示触摸压力。0代表没有压力，1代表硬件所能识别的最大压力。")]),e._v(" "),s("p",[e._v("（5）Touch.target")]),e._v(" "),s("p",[e._v("Touch.target属性返回一个元素节点，代表触摸发生时所在的那个元素节点。即使触摸点已经离开了这个节点，该属性依然不变。")]),e._v(" "),s("h2",{attrs:{id:"touchlist-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#touchlist-接口"}},[e._v("#")]),e._v(" TouchList 接口")]),e._v(" "),s("p",[e._v("TouchList接口表示一组触摸点的集合。它的实例是一个类似数组的对象，成员是Touch的实例对象，表示所有触摸点。用户用三根手指触摸，产生的TouchList实例就会包含三个成员，每根手指的触摸点对应一个Touch实例对象。")]),e._v(" "),s("p",[e._v("它的实例主要通过触摸事件的TouchEvent.touches、TouchEvent.changedTouches、TouchEvent.targetTouches这几个属性获取。")]),e._v(" "),s("p",[e._v("它的实例属性和实例方法只有两个。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("TouchList.length")]),e._v("：数值，表示成员数量（即触摸点的数量）。")]),e._v(" "),s("li",[s("code",[e._v("TouchList.item()")]),e._v("：返回指定位置的成员，它的参数是该成员的位置编号（从零开始）。")])]),e._v(" "),s("h2",{attrs:{id:"touchevent-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#touchevent-接口"}},[e._v("#")]),e._v(" TouchEvent 接口")]),e._v(" "),s("h3",{attrs:{id:"_1-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[e._v("#")]),e._v(" 1. 概述")]),e._v(" "),s("p",[e._v("TouchEvent 接口继承了 Event 接口，表示由触摸引发的事件实例，通常来自触摸屏或轨迹板。除了被继承的属性以外，它还有一些自己的属性。")]),e._v(" "),s("p",[e._v("浏览器原生提供TouchEvent()构造函数，用来生成触摸事件的实例。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("new TouchEvent(type, options)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("TouchEvent()构造函数可以接受两个参数，第一个参数是字符串，表示事件类型；第二个参数是事件的配置对象，该参数是可选的，对象的所有属性也是可选的。除了Event接口的配置属性，该接口还有一些自己的配置属性。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("touches")]),e._v("：TouchList实例，代表所有的当前处于活跃状态的触摸点，默认值是一个空数组[]。")]),e._v(" "),s("li",[s("code",[e._v("targetTouches")]),e._v("：TouchList实例，代表所有处在触摸的目标元素节点内部、且仍然处于活动状态的触摸点，默认值是一个空数组[]。")]),e._v(" "),s("li",[s("code",[e._v("changedTouches")]),e._v("：TouchList实例，代表本次触摸事件的相关触摸点，默认值是一个空数组[]。")]),e._v(" "),s("li",[s("code",[e._v("ctrlKey")]),e._v("：布尔值，表示 Ctrl 键是否同时按下，默认值为false。")]),e._v(" "),s("li",[s("code",[e._v("shiftKey")]),e._v("：布尔值，表示 Shift 键是否同时按下，默认值为false。")]),e._v(" "),s("li",[s("code",[e._v("altKey")]),e._v("：布尔值，表示 Alt 键是否同时按下，默认值为false。")]),e._v(" "),s("li",[s("code",[e._v("metaKey")]),e._v("：布尔值，表示 Meta 键（或 Windows 键）是否同时按下，默认值为false。")])]),e._v(" "),s("h3",{attrs:{id:"_2-实例属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实例属性"}},[e._v("#")]),e._v(" 2. 实例属性")]),e._v(" "),s("p",[e._v("TouchEvent 接口的实例具有Event实例的所有属性和方法，此外还有一些它自己的实例属性，这些属性全部都是只读。")]),e._v(" "),s("h4",{attrs:{id:"_1-touchevent-altkey-touchevent-ctrlkey-touchevent-shiftkey-touchevent-metakey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-touchevent-altkey-touchevent-ctrlkey-touchevent-shiftkey-touchevent-metakey"}},[e._v("#")]),e._v(" （1）TouchEvent.altKey，TouchEvent.ctrlKey，TouchEvent.shiftKey，TouchEvent.metaKey")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("TouchEvent.altKey")]),e._v("：布尔值，表示触摸时是否按下了 Alt 键。")]),e._v(" "),s("li",[s("code",[e._v("TouchEvent.ctrlKey")]),e._v("：布尔值，表示触摸时是否按下了 Ctrl 键。")]),e._v(" "),s("li",[s("code",[e._v("TouchEvent.shiftKey")]),e._v("：布尔值：表示触摸时是否按下了 Shift 键。")]),e._v(" "),s("li",[s("code",[e._v("TouchEvent.metaKey")]),e._v("：布尔值，表示触摸时是否按下了 Meta 键（或 Windows 键）。")])]),e._v(" "),s("p",[e._v("下面是一个示例。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("someElement.addEventListener('touchstart', function (e) {\n  console.log('altKey = ' + e.altKey);\n  console.log('ctrlKey = ' + e.ctrlKey);\n  console.log('metaKey = ' + e.metaKey);\n  console.log('shiftKey = ' + e.shiftKey);\n}, false);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h4",{attrs:{id:"_2-touchevent-changedtouches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-touchevent-changedtouches"}},[e._v("#")]),e._v(" （2）TouchEvent.changedTouches")]),e._v(" "),s("p",[e._v("TouchEvent.changedTouches属性返回一个TouchList实例，成员是一组Touch实例对象，表示本次触摸事件的相关触摸点。")]),e._v(" "),s("p",[e._v("对于不同的时间，该属性的含义有所不同。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("touchstart")]),e._v("事件：被激活的触摸点")]),e._v(" "),s("li",[s("code",[e._v("touchmove")]),e._v("事件：发生变化的触摸点")]),e._v(" "),s("li",[s("code",[e._v("touchend")]),e._v("事件：消失的触摸点（即不再被触碰的点）")])]),e._v(" "),s("p",[e._v("下面是一个示例。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("someElement.addEventListener('touchmove', function (e) {\n  for (var i = 0; i < e.changedTouches.length; i++) {\n    console.log(e.changedTouches[i].identifier);\n  }\n}, false);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"_3-touchevent-touches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-touchevent-touches"}},[e._v("#")]),e._v(" （3）TouchEvent.touches")]),e._v(" "),s("p",[e._v("TouchEvent.touches属性返回一个TouchList实例，成员是所有仍然处于活动状态（即触摸中）的触摸点。一般来说，一个手指就是一个触摸点。")]),e._v(" "),s("p",[e._v("下面是一个示例。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("someElement.addEventListener('touchstart', function (e) {\n  switch (e.touches.length) {\n    // 一根手指触摸\n    case 1: handle_one_touch(e); break;\n    // 两根手指触摸\n    case 2: handle_two_touches(e); break;\n    // 三根手指触摸\n    case 3: handle_three_touches(e); break;\n    // 其他情况\n    default: console.log('Not supported'); break;\n  }\n}, false);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("h4",{attrs:{id:"_4-touchevent-targettouches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-touchevent-targettouches"}},[e._v("#")]),e._v(" （4）TouchEvent.targetTouches")]),e._v(" "),s("p",[e._v("TouchEvent.targetTouches属性返回一个TouchList实例，成员是触摸事件的目标元素节点内部、所有仍然处于活动状态（即触摸中）的触摸点。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function touches_in_target(ev) {\n  return (ev.touches.length === ev.targetTouches.length ? true : false);\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("上面代码用来判断，是否所有触摸点都在目标元素内。")]),e._v(" "),s("h2",{attrs:{id:"触摸事件的种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触摸事件的种类"}},[e._v("#")]),e._v(" 触摸事件的种类")]),e._v(" "),s("p",[e._v("触摸引发的事件，有以下几种。可以通过TouchEvent.type属性，查看到底发生的是哪一种事件。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("touchstart")]),e._v("：用户开始触摸时触发，它的target属性返回发生触摸的元素节点。")]),e._v(" "),s("li",[s("code",[e._v("touchend")]),e._v("：用户不再接触触摸屏时（或者移出屏幕边缘时）触发，它的target属性与touchstart事件一致的，就是开始触摸时所在的元素节点。它的changedTouches属性返回一个TouchList实例，包含所有不再触摸的触摸点（即Touch实例对象）。")]),e._v(" "),s("li",[s("code",[e._v("touchmove")]),e._v("：用户移动触摸点时触发，它的target属性与touchstart事件一致。如果触摸的半径、角度、力度发生变化，也会触发该事件。")]),e._v(" "),s("li",[s("code",[e._v("touchcancel")]),e._v("：触摸点取消时触发，比如在触摸区域跳出一个模态窗口（modal window）、触摸点离开了文档区域（进入浏览器菜单栏）、用户的触摸点太多，超过了支持的上限（自动取消早先的触摸点）。")])]),e._v(" "),s("p",[e._v("下面是一个例子。")]),e._v(" "),s("div",{staticClass:"language-event line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var el = document.getElementsByTagName('canvas')[0];\nel.addEventListener('touchstart', handleStart, false);\nel.addEventListener('touchmove', handleMove, false);\n\nfunction handleStart(evt) {\n  evt.preventDefault();\n  var touches = evt.changedTouches;\n  for (var i = 0; i < touches.length; i++) {\n    console.log(touches[i].pageX, touches[i].pageY);\n  }\n}\n\nfunction handleMove(evt) {\n  evt.preventDefault();\n  var touches = evt.changedTouches;\n  for (var i = 0; i < touches.length; i++) {\n    var touch = touches[i];\n    console.log(touch.pageX, touch.pageY);\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);