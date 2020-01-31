(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-7-send-a-token-to-another-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-send-a-token-to-another-address"}},[t._v("#")]),t._v(" 2.7 Send a Token to another address")]),t._v(" "),a("h2",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")]),t._v(" "),a("p",[t._v("Send a token to another account")]),t._v(" "),a("h2",{attrs:{id:"tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),a("p",[t._v("The CommercioSDK, our own open source tool to format transactions to Commercio.network")]),t._v(" "),a("h2",{attrs:{id:"functions-and-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-and-apis"}},[t._v("#")]),t._v(" Functions and APIs")]),t._v(" "),a("ul",[a("li",[t._v("TxHelper "),a("em",[t._v("createSignAndSendTx")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"step-by-step-sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-sequence"}},[t._v("#")]),t._v(" Step by step sequence")]),t._v(" "),a("ol",[a("li",[t._v("Generate the sender wallet;")]),t._v(" "),a("li",[t._v("Generate the recipient wallet;")]),t._v(" "),a("li",[t._v("Set up the gas;")]),t._v(" "),a("li",[t._v("Set up the amounts list;")]),t._v(" "),a("li",[t._v("Set up the messages list;")]),t._v(" "),a("li",[t._v("Finally, execute the TxHelper "),a("em",[t._v("createSignAndSendTx")]),t._v(" function to send the token.")])]),t._v(" "),a("h2",{attrs:{id:"code-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-examples"}},[t._v("#")]),t._v(" Code Examples")]),t._v(" "),a("p",[t._v("Here's an example of the implementation in all the available languages.")]),t._v(" "),a("h3",{attrs:{id:"dart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[t._v("#")]),t._v(" Dart")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" recipientWallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recipientMnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" gas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdCoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("denom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ucommercio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" msgs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgSend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fromAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    toAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" recipientWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" TxHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSignAndSendTx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h3",{attrs:{id:"kotlin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[t._v("#")]),t._v(" Kotlin")]),t._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" recipientWallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" recipientMnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" gas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdCoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ucommercio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" msgs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgSend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fromAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    toAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" recipientWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TxHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSignAndSendTx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  msgs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  fee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    gas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h3",{attrs:{id:"c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[t._v("#")]),t._v(" C#")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" senderWallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("senderMnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" recipientWallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("derive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recipientMnemonic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StdCoin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StdCoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\namount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdCoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("denom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ucommercio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" msgs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StdMsg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmsgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgSend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   fromAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" senderWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   toAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" recipientWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bech32Address\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TxHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSignAndSendTx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n msgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n senderWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" commercio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sacco"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" amount\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);