(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(a,s,t){"use strict";t.r(s);var e=t(43),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"generate-many-addresses-with-a-single-mnemonic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-many-addresses-with-a-single-mnemonic"}},[a._v("#")]),a._v(" Generate many addresses with a single mnemonic")]),a._v(" "),t("p",[a._v("HD wallets are generated with mnemonic phrase for readability and better accessibility purposes.  Creating a mnemonic phrase can give you control of many accounts, all accessible with that same phrase.")]),a._v(" "),t("p",[a._v("A mnemonic phrase generates addresses by taking the phrase and combining it with a piece of information called a “derivation path”. Together, they create an infinite number of accounts, using complex cryptography."),t("br"),a._v("\nTo derive literally means to obtain something from a specified source.\nIn the crypto world context it means to obtain (a function or equation) from another by a sequence of logical steps, for example by differentiation.\nSo, how a derivation path looks like? Well like this...")]),a._v(" "),t("div",{staticClass:"language-dart line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dart"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"m/44'/118'/0'/0/0\"")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Each of the numbers in that sequence play a part and each changes what the private key, public key, and address would be. The most important takeaway is that if you want the next address from a phrase, you just increase the last number by one:")]),a._v(" "),t("div",{staticClass:"language-dart line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dart"}},[t("code",[a._v("Address #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"m/44'/118'/0'/0/0\"")]),a._v("\nAddress #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"m/44'/118'/0'/0/1\"")]),a._v("\nAddress #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"m/44'/118'/0'/0/2\"")]),a._v("\n…"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\nAddress #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("99")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"m/44'/118'/0'/0/98\"")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("Yes, as a programmer you should know we always start from 0 not 1.")]),a._v(" "),t("p",[a._v("You can generate a new wallet with your mnemonic by setting a different "),t("em",[a._v("derivation path")]),a._v(" from the default one.")]),a._v(" "),t("h2",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[a._v("#")]),a._v(" Use cases")]),a._v(" "),t("p",[a._v("Create a dedicated address derived from the same seed to pairwise every single person we interact with.")]),a._v(" "),t("h2",{attrs:{id:"tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[a._v("#")]),a._v(" Tools")]),a._v(" "),t("p",[a._v("The "),t("em",[a._v("Sacco")]),a._v(" library, our own open source tool to sign and send transactions to any Cosmos SDK based blockchain, including Commercio.network.")]),a._v(" "),t("h2",{attrs:{id:"functions-and-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functions-and-apis"}},[a._v("#")]),a._v(" Functions and APIs")]),a._v(" "),t("ul",[t("li",[a._v("Wallet "),t("em",[a._v("derive")]),a._v(".")])]),a._v(" "),t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[a._v("#")]),a._v(" Background")]),a._v(" "),t("p",[a._v("From Wikipedia:")]),a._v(" "),t("blockquote",[t("p",[a._v("A cryptocurrency wallet is a device, physical medium, program or a service which stores the public and private keys and can be used to track ownership, receive or spend cryptocurrencies.")])]),a._v(" "),t("h2",{attrs:{id:"step-by-step-sequence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-sequence"}},[a._v("#")]),a._v(" Step by step sequence")]),a._v(" "),t("ol",[t("li",[a._v("Call the wallet "),t("em",[a._v("derive")]),a._v(" function setting the optional parameter "),t("strong",[a._v("lastDerivationPathSegment")]),a._v(";")]),a._v(" "),t("li",[a._v("Finally, the result is a new address.")])]),a._v(" "),t("h2",{attrs:{id:"code-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-examples"}},[a._v("#")]),a._v(" Code Examples")]),a._v(" "),t("p",[a._v("Here's an example of the implementation in all the available languages.")]),a._v(" "),t("h3",{attrs:{id:"dart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[a._v("#")]),a._v(" "),t("em",[a._v("Dart")])]),a._v(" "),t("div",{staticClass:"language-dart line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dart"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" mnemonicString "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'final random flame cinnamon grunt hazard easily mutual resist pond solution define knife female tongue crime atom jaguar alert library best forum lesson rigid'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" mnemonic "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mnemonicString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" networkInfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("NetworkInfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bech32Hrp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'did:com:'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" lcdUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://localhost:1317'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" wallet "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Wallet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("derive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  mnemonic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  networkInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  lastDerivationPathSegment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" address "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" wallet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bech32Address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("h3",{attrs:{id:"kotlin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[a._v("#")]),a._v(" "),t("em",[a._v("Kotlin")])]),a._v(" "),t("div",{staticClass:"language-kotlin line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-kotlin"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" mnemonicString "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"final random flame cinnamon grunt hazard easily mutual resist pond solution define knife female tongue crime atom jaguar alert library best forum lesson rigid"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" mnemonic "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("listOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mnemonicString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" networkInfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("NetworkInfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bech32Hrp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"did:com:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" lcdUrl "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost:1317"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" wallet "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Wallet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("derive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mnemonic "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mnemonic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" networkInfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" networkInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" lastDerivationPathSegment "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" address "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" wallet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bech32Address\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);