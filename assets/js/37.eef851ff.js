(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{237:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-4-documentlist-sent-received"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-documentlist-sent-received"}},[t._v("#")]),t._v(" 4.4 documentList(sent/received)")]),t._v(" "),a("h2",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")]),t._v(" "),a("p",[t._v("Get the sent document's list of an acccount.")]),t._v(" "),a("p",[t._v("Get the received document's list of an acccount.")]),t._v(" "),a("h2",{attrs:{id:"tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),a("p",[t._v("The CommercioSDK, our own open source tool to format transactions to Commercio.network")]),t._v(" "),a("h2",{attrs:{id:"functions-and-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-and-apis"}},[t._v("#")]),t._v(" Functions and APIs")]),t._v(" "),a("ul",[a("li",[t._v("Network "),a("em",[t._v("queryChain")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"step-by-step-sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-sequence"}},[t._v("#")]),t._v(" Step by step sequence")]),t._v(" "),a("ol",[a("li",[t._v("Generate the wallet;")]),t._v(" "),a("li",[t._v("Execute the Network "),a("em",[t._v("queryChain")]),t._v(" function to get the sent document's list;")]),t._v(" "),a("li",[t._v("Execute the Network "),a("em",[t._v("queryChain")]),t._v(" function to get the received document's list.")])]),t._v(" "),a("h2",{attrs:{id:"code-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-examples"}},[t._v("#")]),t._v(" Code Examples")]),t._v(" "),a("p",[t._v("Here's an example of the implemetation in all the available languages.")]),t._v(" "),a("h3",{attrs:{id:"dart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[t._v("#")]),t._v(" Dart")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" sentDocsURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${wallet.networkInfo.lcdUrl}/docs/${wallet.bech32Address}/sent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" sentDocs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryChain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sentDocsURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" receivedDocsURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${wallet.networkInfo.lcdUrl}/docs/${wallet.bech32Address}/received'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" receivedDocs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryChain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("receivedDocsURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"kotlin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[t._v("#")]),t._v(" Kotlin")]),t._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sentDocsURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lcdUrl"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v("/docs/"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('/sent"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sentDocs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryChain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Objects"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sentDocsURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" receivedDocsURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lcdUrl"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v("/docs/"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('/received"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" receivedDocs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryChain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Objects"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" receivedDocsURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[t._v("#")]),t._v(" C#")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sentDocsURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{wallet.networkInfo.lcdUrl}/docs/{wallet.bech32Address}/sent"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sentDocs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryChain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sentDocsURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" receivedDocsURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{wallet.networkInfo.lcdUrl}/docs/{wallet.bech32Address}/received"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" receivedDocs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryChain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("receivedDocsURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);