(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{490:function(t,v,e){"use strict";e.r(v);var a=e(25),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("h2",{attrs:{id:"dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),e("p",[t._v("DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。")]),t._v(" "),e("p",[t._v("浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。")]),t._v(" "),e("p",[t._v("DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。")]),t._v(" "),e("h2",{attrs:{id:"节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[t._v("#")]),t._v(" 节点")]),t._v(" "),e("p",[t._v("DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。")]),t._v(" "),e("p",[t._v("节点的类型有七种。")]),t._v(" "),e("ul",[e("li",[t._v("Document：整个文档树的顶层节点")]),t._v(" "),e("li",[t._v("DocumentType：doctype标签（比如"),e("code",[t._v("<!DOCTYPE html>")]),t._v("）")]),t._v(" "),e("li",[t._v("Element：网页的各种HTML标签（比如"),e("code",[t._v("<body>")]),t._v("、"),e("code",[t._v("<a>")]),t._v("等）")]),t._v(" "),e("li",[t._v('Attribute：网页元素的属性（比如class="right"）')]),t._v(" "),e("li",[t._v("Text：标签之间或标签包含的文本")]),t._v(" "),e("li",[t._v("Comment：注释")]),t._v(" "),e("li",[t._v("DocumentFragment：文档的片段")])]),t._v(" "),e("p",[t._v("浏览器提供一个原生的节点对象Node，上面这七种节点都继承了Node，因此具有一些共同的属性和方法。")]),t._v(" "),e("h2",{attrs:{id:"节点树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点树"}},[t._v("#")]),t._v(" 节点树")]),t._v(" "),e("p",[t._v("一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，倒过来就像一棵树。")]),t._v(" "),e("p",[t._v("浏览器原生提供document节点，代表整个文档。")]),t._v(" "),e("div",{staticClass:"language-dom line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("document\n// 整个文档树\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("文档的第一层有两个节点，第一个是文档类型节点（"),e("code",[t._v("<!doctype html>")]),t._v("），第二个是 HTML 网页的顶层容器标签"),e("code",[t._v("<html>")]),t._v("。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。")]),t._v(" "),e("p",[t._v("除了根节点，其他节点都有三种层级关系。")]),t._v(" "),e("ul",[e("li",[t._v("父节点关系（parentNode）：直接的那个上级节点")]),t._v(" "),e("li",[t._v("子节点关系（childNodes）：直接的下级节点")]),t._v(" "),e("li",[t._v("同级节点关系（sibling）：拥有同一个父节点的节点")])]),t._v(" "),e("p",[t._v("DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括firstChild（第一个子节点）和lastChild（最后一个子节点）等属性，同级节点接口包括nextSibling（紧邻在后的那个同级节点）和previousSibling（紧邻在前的那个同级节点）属性。")])])}),[],!1,null,null,null);v.default=_.exports}}]);