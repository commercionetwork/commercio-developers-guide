(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{224:function(e,t,i){"use strict";i.r(t);var n=i(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_3-1-did-ddo-and-vc-primer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-did-ddo-and-vc-primer"}},[e._v("#")]),e._v(" 3.1 DID, DDO and VC Primer")]),e._v(" "),i("p",[e._v("Commercio.network mission is to bring the Blockchain technology to give companies the freedom to have their own sovereign identity. We follow a principle that states that an individual (or a company or a car) should own and control their identity without the intervening administrative authorities. Self Sovereign Identity allows anyone to interact with each other in the digital world in the same way, with the same freedom and trust as they do in the real world.")]),e._v(" "),i("p",[e._v("The Self Sovereign Identity should be a basic human right.")]),e._v(" "),i("p",[e._v("From the Sovrin FAQ")]),e._v(" "),i("p",[i("em",[e._v("Everyone has different relationships or unique sets of identifying information. This information could be things like date of birth, citizenship, university degrees or business licenses. In the physical world, this is represented in the form of cards and certificates that are kept by the identity holder in the wallet or in a safe place such as a safe-deposit box and is presented when the person needs to prove his or her identity or something about his or her identity.")])]),e._v(" "),i("p",[i("em",[e._v("Self-identity (SSI) brings the same freedoms and personal autonomy on the Internet into a secure and reliable identity management system. SSI means that the individual (or organization) manages the elements that make up his or her identity and controls access to those credentials digitally. In the case of SSI, the power to control personal data lies with the individual and not with an administrative third party granting or tracing access to these credentials.")]),e._v("\n_\nThe SSI identity system gives you the ability to use your digital wallet and authenticate your identity using the credentials issued to you. You no longer have to surrender control of your personal information to dozens of databases every time you want to access new goods and services, with the risk that your identity will be stolen by hackers._")]),e._v(" "),i("p",[i("em",[e._v("This is called a self-sovereign identity because each person is now in control of his or her own identity: it is his or her own sovereign nation. People can control their own information and relationships. A person's digital existence is now independent of any organization: no one can take away their identity.")])]),e._v(" "),i("h2",{attrs:{id:"did"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#did"}},[e._v("#")]),e._v(" DID")]),e._v(" "),i("p",[e._v("DID: Decentralized Identifier (ref: "),i("a",{attrs:{href:"https://w3c-ccg.github.io/did-spec/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://w3c-ccg.github.io/did-spec/"),i("OutboundLink")],1),e._v(")")]),e._v(" "),i("ul",[i("li",[e._v("Identifies a person, object, entity etc.")]),e._v(" "),i("li",[e._v("Has a method (i.e. reference to «how interpreting the DID).")]),e._v(" "),i("li",[e._v("It’s decentralized on a blockchain.")])]),e._v(" "),i("h2",{attrs:{id:"ddo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ddo"}},[e._v("#")]),e._v(" DDO")]),e._v(" "),i("p",[e._v("DDO: Did Document (ref: "),i("a",{attrs:{href:"https://w3c-ccg.github.io/did-spec/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://w3c-ccg.github.io/did-spec/"),i("OutboundLink")],1),e._v(")")]),e._v(" "),i("ul",[i("li",[e._v("It is univocally associated to the DID. It contains, at least, cryptographic material and – possibly – endpoint to check revocation or to gather VCs.")]),e._v(" "),i("li",[e._v("It should be «resolvable», i.e. given a DID, via the DID method, I can retrieve the associated DDO.")]),e._v(" "),i("li",[e._v("It is recommended to store it on the blockchain")])]),e._v(" "),i("h2",{attrs:{id:"important-facts-about-did-and-ddo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#important-facts-about-did-and-ddo"}},[e._v("#")]),e._v(" Important facts about DID and DDO")]),e._v(" "),i("ul",[i("li",[e._v("Neither the DID, nor the DDO give any information about the DID subject.")]),e._v(" "),i("li",[e._v("One person, object or entity, can control any number of DIDs and DDOs")]),e._v(" "),i("li",[e._v("DIDs and DDOs can be public (i.e. written on the blockchain) or private / pairwise, and live locally.")])]),e._v(" "),i("h2",{attrs:{id:"vc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vc"}},[e._v("#")]),e._v(" VC")]),e._v(" "),i("p",[e._v("VC: Verifiable Credential (ref: "),i("a",{attrs:{href:"https://www.w3.org/TR/vc-data-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.w3.org/TR/vc-data-model/"),i("OutboundLink")],1),e._v(")")]),e._v(" "),i("ul",[i("li",[e._v("A Verifiable credential is a set of attributes, that a subject issue for itself or for another subject.")]),e._v(" "),i("li",[e._v("It may include cryptographic proof (i.e. signature) of these attributes.")]),e._v(" "),i("li",[e._v("It should NOT be public, in order to avoid privacy issues")])]),e._v(" "),i("h2",{attrs:{id:"did-in-commercio-network"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#did-in-commercio-network"}},[e._v("#")]),e._v(" DID in Commercio.network")]),e._v(" "),i("p",[e._v("Commercio.network DID scheme consists of the following parts:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("url scheme identifier: did")])]),e._v(" "),i("li",[i("p",[e._v("identifier for the DID method: com")])]),e._v(" "),i("li",[i("p",[e._v("Method-specific identifier: <commercio**.**network address>, which conforms to the cosmos.network address scheme")])]),e._v(" "),i("li",[i("p",[e._v("An example of commercio.network DID is the following:")]),e._v(" "),i("p",[i("code",[e._v("did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvn")])])])]),e._v(" "),i("h2",{attrs:{id:"ddo-in-commercio-network"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ddo-in-commercio-network"}},[e._v("#")]),e._v(" DDO in Commercio.network")]),e._v(" "),i("div",{staticClass:"language-{ line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('\n"@context": "https://www.w3.org/2019/did/v1",\n"id": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",\n"publicKey": [{\n          "id":"did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1",\n          "type": "RsaVerificationKey2018",\n          "controller": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc ",\n          "publicKeyPem": "-----BEGIN PUBLIC KEY---\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSH\nQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/\nAr8wqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----r"\n                    },{\n                    "id": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2", +\n                    "type": "Secp256k1VerificationKey2018",\n                    "controller": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc ",\n                    "publicKeyHex":"02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71"\n          }],\n          "authentication": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1",\n          "proof": {\n"type": "LinkedDataSignature2015",\n"created": "2016-02-08T16:02:20Z",\n"creator": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1",\n"signatureValue": "QNB13Y7Q9...1tzjn4w=="\n\n    }\n\n}\n')])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br"),i("span",{staticClass:"line-number"},[e._v("2")]),i("br"),i("span",{staticClass:"line-number"},[e._v("3")]),i("br"),i("span",{staticClass:"line-number"},[e._v("4")]),i("br"),i("span",{staticClass:"line-number"},[e._v("5")]),i("br"),i("span",{staticClass:"line-number"},[e._v("6")]),i("br"),i("span",{staticClass:"line-number"},[e._v("7")]),i("br"),i("span",{staticClass:"line-number"},[e._v("8")]),i("br"),i("span",{staticClass:"line-number"},[e._v("9")]),i("br"),i("span",{staticClass:"line-number"},[e._v("10")]),i("br"),i("span",{staticClass:"line-number"},[e._v("11")]),i("br"),i("span",{staticClass:"line-number"},[e._v("12")]),i("br"),i("span",{staticClass:"line-number"},[e._v("13")]),i("br"),i("span",{staticClass:"line-number"},[e._v("14")]),i("br"),i("span",{staticClass:"line-number"},[e._v("15")]),i("br"),i("span",{staticClass:"line-number"},[e._v("16")]),i("br"),i("span",{staticClass:"line-number"},[e._v("17")]),i("br"),i("span",{staticClass:"line-number"},[e._v("18")]),i("br"),i("span",{staticClass:"line-number"},[e._v("19")]),i("br"),i("span",{staticClass:"line-number"},[e._v("20")]),i("br"),i("span",{staticClass:"line-number"},[e._v("21")]),i("br"),i("span",{staticClass:"line-number"},[e._v("22")]),i("br"),i("span",{staticClass:"line-number"},[e._v("23")]),i("br"),i("span",{staticClass:"line-number"},[e._v("24")]),i("br"),i("span",{staticClass:"line-number"},[e._v("25")]),i("br"),i("span",{staticClass:"line-number"},[e._v("26")]),i("br"),i("span",{staticClass:"line-number"},[e._v("27")]),i("br")])]),i("h2",{attrs:{id:"commercio-network-trust-scheme"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commercio-network-trust-scheme"}},[e._v("#")]),e._v(" Commercio.network Trust Scheme")]),e._v(" "),i("p",[e._v("CommercioID, implemented on Commercio.network, provide the following trust scheme:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Government")]),e._v(": it is the Root of truth in commercio.network, and it has it’s DID, DDO and VC public on the Genesis Block. Government issue VC credential for TSP")]),e._v(" "),i("li",[i("strong",[e._v("TSP")]),e._v(": are the entities (Consortium Companies) that provide trust services, i.e. verifies identity of persons and companies and issues VCs for them.")]),e._v(" "),i("li",[i("strong",[e._v("Company")]),e._v(", Sign transaction with its own verification key (included in the DDO), satisfying a chain of trust that goes up until the government DID and provide, if required, all the properties included in its verifiable credential, including the proof signed by the company.")]),e._v(" "),i("li",[i("strong",[e._v("Person")]),e._v(", Sign transaction with its own verification key (included in the DDO), satisfying a chain of trust that goes up until the government DID and provide, if required, all the properties included in its verifiable credential, including the proof signed by the person.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);