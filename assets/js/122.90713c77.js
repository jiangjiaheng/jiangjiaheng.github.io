(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{439:function(e,a,s){"use strict";s.r(a);var n=s(17),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"arraybuffer-对象-blob-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arraybuffer-对象-blob-对象"}},[e._v("#")]),e._v(" ArrayBuffer 对象，Blob 对象")]),e._v(" "),s("h2",{attrs:{id:"arraybuffer-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arraybuffer-对象"}},[e._v("#")]),e._v(" ArrayBuffer 对象")]),e._v(" "),s("p",[e._v("ArrayBuffer 对象表示一段二进制数据，用来模拟内存里面的数据。通过这个对象，JavaScript 可以读写二进制数据。这个对象可以看作内存数据的表达。")]),e._v(" "),s("p",[e._v("这个对象是 ES6 才写入标准的，普通的网页编程用不到它，为了教程体系的完整，下面只提供一个简略的介绍，详细介绍请看《ES6 标准入门》里面的章节。")]),e._v(" "),s("p",[e._v("浏览器原生提供ArrayBuffer()构造函数，用来生成实例。它接受一个整数作为参数，表示这段二进制数据占用多少个字节。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var buffer = new ArrayBuffer(8);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面代码中，实例对象buffer占用8个字节。")]),e._v(" "),s("p",[e._v("ArrayBuffer 对象有实例属性byteLength，表示当前实例占用的内存长度（单位字节）。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var buffer = new ArrayBuffer(8);\nbuffer.byteLength // 8\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("ArrayBuffer 对象有实例方法slice()，用来复制一部分内存。它接受两个整数参数，分别表示复制的开始位置（从0开始）和结束位置（复制时不包括结束位置），如果省略第二个参数，则表示一直复制到结束。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var buf1 = new ArrayBuffer(8);\nvar buf2 = buf1.slice(0);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("上面代码表示复制原来的实例。")]),e._v(" "),s("h2",{attrs:{id:"blob-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blob-对象"}},[e._v("#")]),e._v(" Blob 对象")]),e._v(" "),s("h3",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[e._v("#")]),e._v(" 1. 简介")]),e._v(" "),s("p",[e._v("Blob 对象表示一个二进制文件的数据内容，比如一个图片文件的内容就可以通过 Blob 对象读写。它通常用来读写文件，它的名字是 Binary Large Object （二进制大型对象）的缩写。它与 ArrayBuffer 的区别在于，它用于操作二进制文件，而 ArrayBuffer 用于操作内存。")]),e._v(" "),s("p",[e._v("浏览器原生提供Blob()构造函数，用来生成实例对象。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("new Blob(array [, options])\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Blob构造函数接受两个参数。第一个参数是数组，成员是字符串或二进制对象，表示新生成的Blob实例对象的内容；第二个参数是可选的，是一个配置对象，目前只有一个属性type，它的值是一个字符串，表示数据的 MIME 类型，默认是空字符串。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var htmlFragment = ['<a id=\"a\"><b id=\"b\">hey!</b></a>'];\nvar myBlob = new Blob(htmlFragment, {type : 'text/html'});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("上面代码中，实例对象myBlob包含的是字符串。生成实例的时候，数据类型指定为text/html。")]),e._v(" "),s("p",[e._v("下面是另一个例子，Blob 保存 JSON 数据。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var obj = { hello: 'world' };\nvar blob = new Blob([ JSON.stringify(obj) ], {type : 'application/json'});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-实例属性和实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实例属性和实例方法"}},[e._v("#")]),e._v(" 2. 实例属性和实例方法")]),e._v(" "),s("p",[e._v("Blob具有两个实例属性size和type，分别返回数据的大小和类型。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('var htmlFragment = [\'<a id="a"><b id="b">hey!</b></a>\'];\nvar myBlob = new Blob(htmlFragment, {type : \'text/html\'});\n\nmyBlob.size // 32\nmyBlob.type // "text/html"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Blob具有一个实例方法slice，用来拷贝原来的数据，返回的也是一个Blob实例。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("myBlob.slice(start，end, contentType)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("slice方法有三个参数，都是可选的。它们依次是起始的字节位置（默认为0）、结束的字节位置（默认为size属性的值，该位置本身将不包含在拷贝的数据之中）、新实例的数据类型（默认为空字符串）。")]),e._v(" "),s("p",[e._v("获取文件信息\n文件选择器"),s("code",[e._v('<input type="file">')]),e._v("用来让用户选取文件。出于安全考虑，浏览器不允许脚本自行设置这个控件的value属性，即文件必须是用户手动选取的，不能是脚本指定的。一旦用户选好了文件，脚本就可以读取这个文件。")]),e._v(" "),s("p",[e._v("文件选择器返回一个 FileList 对象，该对象是一个类似数组的成员，每个成员都是一个 File 实例对象。File 实例对象是一个特殊的 Blob 实例，增加了name和lastModifiedDate属性。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// HTML 代码如下\n// <input type="file" accept="image/*" multiple onchange="fileinfo(this.files)"/>\n\nfunction fileinfo(files) {\n  for (var i = 0; i < files.length; i++) {\n    var f = files[i];\n    console.log(\n      f.name, // 文件名，不含路径\n      f.size, // 文件大小，Blob 实例属性\n      f.type, // 文件类型，Blob 实例属性\n      f.lastModifiedDate // 文件的最后修改时间\n    );\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("除了文件选择器，拖放 API 的dataTransfer.files返回的也是一个FileList 对象，它的成员因此也是 File 实例对象。")]),e._v(" "),s("h3",{attrs:{id:"_4-下载文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-下载文件"}},[e._v("#")]),e._v(" 4. 下载文件")]),e._v(" "),s("p",[e._v("AJAX 请求时，如果指定responseType属性为blob，下载下来的就是一个 Blob 对象。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function getBlob(url, callback) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', url);\n  xhr.responseType = 'blob';\n  xhr.onload = function () {\n    callback(xhr.response);\n  }\n  xhr.send(null);\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("上面代码中，xhr.response拿到的就是一个 Blob 对象。")]),e._v(" "),s("h3",{attrs:{id:"_5-生成-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-生成-url"}},[e._v("#")]),e._v(" 5. 生成 URL")]),e._v(" "),s("p",[e._v("浏览器允许使用URL.createObjectURL()方法，针对 Blob 对象生成一个临时 URL，以便于某些 API 使用。这个 URL 以"),s("code",[e._v("blob://")]),e._v("开头，表明对应一个 Blob 对象，协议头后面是一个识别符，用来唯一对应内存里面的 Blob 对象。这一点与"),s("code",[e._v("data://URL")]),e._v("（URL 包含实际数据）和"),s("code",[e._v("file://URL")]),e._v("（本地文件系统里面的文件）都不一样。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var droptarget = document.getElementById('droptarget');\n\ndroptarget.ondrop = function (e) {\n  var files = e.dataTransfer.files;\n  for (var i = 0; i < files.length; i++) {\n    var type = files[i].type;\n    if (type.substring(0,6) !== 'image/')\n      continue;\n    var img = document.createElement('img');\n    img.src = URL.createObjectURL(files[i]);\n    img.onload = function () {\n      this.width = 100;\n      document.body.appendChild(this);\n      URL.revokeObjectURL(this.src);\n    }\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("p",[e._v("上面代码通过为拖放的图片文件生成一个 URL，产生它们的缩略图，从而使得用户可以预览选择的文件。")]),e._v(" "),s("p",[e._v("浏览器处理 Blob URL 就跟普通的 URL 一样，如果 Blob 对象不存在，返回404状态码；如果跨域请求，返回403状态码。Blob URL 只对 GET 请求有效，如果请求成功，返回200状态码。由于 Blob URL 就是普通 URL，因此可以下载。")]),e._v(" "),s("h3",{attrs:{id:"_6-读取文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-读取文件"}},[e._v("#")]),e._v(" 6. 读取文件")]),e._v(" "),s("p",[e._v("取得 Blob 对象以后，可以通过FileReader对象，读取 Blob 对象的内容，即文件内容。")]),e._v(" "),s("p",[e._v("FileReader 对象提供四个方法，处理 Blob 对象。Blob 对象作为参数传入这些方法，然后以指定的格式返回。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("FileReader.readAsText()")]),e._v("：返回文本，需要指定文本编码，默认为 UTF-8。")]),e._v(" "),s("li",[s("code",[e._v("FileReader.readAsArrayBuffer()")]),e._v("：返回 ArrayBuffer 对象。")]),e._v(" "),s("li",[s("code",[e._v("FileReader.readAsDataURL()")]),e._v("：返回 Data URL。")]),e._v(" "),s("li",[s("code",[e._v("FileReader.readAsBinaryString()")]),e._v("：返回原始的二进制字符串。")])]),e._v(" "),s("p",[e._v("下面是FileReader.readAsText()方法的例子，用来读取文本文件。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码如下\n// <input type=’file' onchange='readfile(this.files[0])'></input>\n// <pre id='output'></pre>\nfunction readfile(f) {\n  var reader = new FileReader();\n  reader.readAsText(f);\n  reader.onload = function () {\n    var text = reader.result;\n    var out = document.getElementById('output');\n    out.innerHTML = '';\n    out.appendChild(document.createTextNode(text));\n  }\n  reader.onerror = function(e) {\n    console.log('Error', e);\n  };\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("p",[e._v("上面代码中，通过指定 FileReader 实例对象的onload监听函数，在实例的result属性上拿到文件内容。")]),e._v(" "),s("p",[e._v("下面是FileReader.readAsArrayBuffer()方法的例子，用于读取二进制文件。")]),e._v(" "),s("div",{staticClass:"language-array line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// HTML 代码如下\n// <input type=\"file\" onchange=\"typefile(this.files[0])\"></input>\nfunction typefile(file) {\n  // 文件开头的四个字节，生成一个 Blob 对象\n  var slice = file.slice(0, 4);\n  var reader = new FileReader();\n  // 读取这四个字节\n  reader.readAsArrayBuffer(slice);\n  reader.onload = function (e) {\n    var buffer = reader.result;\n    // 将这四个字节的内容，视作一个32位整数\n    var view = new DataView(buffer);\n    var magic = view.getUint32(0, false);\n    // 根据文件的前四个字节，判断它的类型\n    switch(magic) {\n      case 0x89504E47: file.verified_type = 'image/png'; break;\n      case 0x47494638: file.verified_type = 'image/gif'; break;\n      case 0x25504446: file.verified_type = 'application/pdf'; break;\n      case 0x504b0304: file.verified_type = 'application/zip'; break;\n    }\n    console.log(file.name, file.verified_type);\n  };\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);