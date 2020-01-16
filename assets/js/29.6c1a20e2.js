(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{229:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3-commercioid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-commercioid"}},[t._v("#")]),t._v(" 3. CommercioID")]),t._v(" "),s("h2",{attrs:{id:"_3-3-create-a-ddo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-create-a-ddo"}},[t._v("#")]),t._v(" 3.3 Create a Ddo")]),t._v(" "),s("h3",{attrs:{id:"use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")]),t._v(" "),s("p",[t._v("Perform a transaction to set the specified DidDocument as being associated with the address present inside the specified wallet.")]),t._v(" "),s("h3",{attrs:{id:"tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),s("p",[t._v("The CommercioSDK, our own open source tool to format transactions to Commercio.network")]),t._v(" "),s("h3",{attrs:{id:"functions-and-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions-and-apis"}},[t._v("#")]),t._v(" Functions and APIs")]),t._v(" "),s("ul",[s("li",[t._v("DidDocumentHelper "),s("em",[t._v("fromWallet")]),t._v(";")]),t._v(" "),s("li",[t._v("IdHelper "),s("em",[t._v("setDidDocument")]),t._v(";")]),t._v(" "),s("li",[t._v("KeysHelper "),s("em",[t._v("generateRsaKeyPair")]),t._v(";")]),t._v(" "),s("li",[t._v("KeysHelper "),s("em",[t._v("generateEcKeyPair")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"background"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),s("p",[t._v("From Wikipedia:")]),t._v(" "),s("blockquote",[s("p",[t._v("RSA (Rivest–Shamir–Adleman) is one of the first public-key cryptosystems and is widely used for secure data transmission.")])]),t._v(" "),s("blockquote",[s("p",[t._v("Elliptic-curve cryptography (ECC) is an approach to public-key cryptography based on the algebraic structure of elliptic curves over finite fields. ECC requires smaller keys compared to non-EC cryptography (based on plain Galois fields) to provide equivalent security.")])]),t._v(" "),s("h3",{attrs:{id:"step-by-step-sequence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-sequence"}},[t._v("#")]),t._v(" Step by step sequence")]),t._v(" "),s("ol",[s("li",[t._v("Generate the RSA key;")]),t._v(" "),s("li",[t._v("Generate the EC key;")]),t._v(" "),s("li",[t._v("Call the DidDocumentHelper "),s("em",[t._v("fromWallet")]),t._v(" function to create the Did Document;")]),t._v(" "),s("li",[t._v("Finally, execute IdHelper "),s("em",[t._v("setDidDocument")]),t._v(" function to set the Did Document.")])]),t._v(" "),s("h3",{attrs:{id:"code-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-examples"}},[t._v("#")]),t._v(" Code Examples")]),t._v(" "),s("p",[t._v("Here's an example of the implemetation in all the available languages.")]),t._v(" "),s("h4",{attrs:{id:"dart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[t._v("#")]),t._v(" Dart")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" rsaKeyPair "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" KeysHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateRsaKeyPair")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" ecKeyPair "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" KeysHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateEcKeyPair")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" didDocument "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  DidDocumentHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromWallet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rsaKeyPair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ecKeyPair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" IdHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDidDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("didDocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h4",{attrs:{id:"kotlin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[t._v("#")]),t._v(" Kotlin")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" rsaKeyPair "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" KeysHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateRsaKeyPair")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" ecKeyPair "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" KeysHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateEcKeyPair")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" didDocument "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DidDocumentHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromWallet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rsaKeyPair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("public"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ecKeyPair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("public"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IdHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDidDocument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("didDocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);