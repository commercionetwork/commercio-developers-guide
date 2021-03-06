module.exports = {
  title: "Commercio Developers Guide",
  description: "Guide to Commercio Developers",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "commercionetwork/commercio-developers-guide",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    lastUpdated: true,
    nav: [{
      text: "Home",
      link: "/"
    }, {
      text: "Commercio.network",
      link: "https://commercio.network"
    }],
    sidebarDepth: 2,
    sidebar: [{
        title: "1. Fundamentals",
        collapsable: true,
        children: [
          ["1-fundamentals/1.1-chapter", "1.1 The Documents Blockchain"],
          ["1-fundamentals/1.2-chapter", "1.2 What is a Blockchain?"],
          ["1-fundamentals/1.3-chapter", "1.3 Full node Vs Validator Node"],
          ["1-fundamentals/1.4-chapter", "1.4 Consensus  mechanisms"],
          ["1-fundamentals/1.5-chapter", "1.5 Immutable Trasactions"],
          ["1-fundamentals/1.6-chapter", "1.6 Block Finality and Block Intervals"],
          ["1-fundamentals/1.7-chapter", "1.7 Consortium Governace"],
          ["1-fundamentals/1.8-chapter", "1.8 eIDAS Compliance"],
          ["1-fundamentals/1.9-chapter", "1.9 The Commercio Token (COM)"],
          ["1-fundamentals/1.10-chapter", "1.10 Stable Chain e Stable Coin"],
          ["1-fundamentals/1.11-chapter", "1.11 Token issuance"],
          ["1-fundamentals/1.12-chapter", "1.12 Test-net Vs Main-net"],
        ]
      },
      {
        title: "2. Commercio Account",
        collapsable: true,
        children: [
          ["2-commercio-account/2.1-chapter", "2.1 The seed of freedom"],
          ["2-commercio-account/2.2-chapter", "2.2 Generate an HD Wallet"],
          ["2-commercio-account/2.3-chapter", "2.3 Backup the seed phrase mnemonic"],
          ["2-commercio-account/2.4-chapter", "2.4 Restore your wallet from mnemonic"],
          ["2-commercio-account/2.5-chapter", "2.5 Get mnemonic from secure storage and derive the wallet"],
          ["2-commercio-account/2.6-chapter", "2.6 Share your QR Code"],
          ["2-commercio-account/2.7-chapter", "2.7 Request invite and free Tokens from a Faucet"],
          ["2-commercio-account/2.8-chapter", "2.8 Check an account balance"],
          ["2-commercio-account/2.9-chapter", "2.9 Send a Token to another address"],
          ["2-commercio-account/2.10-chapter", "2.10 Generate many addresses with a single mnemonic"],
        ]
      },
      {
        title: "3. Commercio ID",
        collapsable: true,
        children: [
          ["3-commercio-id/3.1-chapter", "3.1 DID, DDO and VC Primer"],
          ["3-commercio-id/3.2-chapter", "3.2 Pairwise Did Primer"],
          ["3-commercio-id/3.3-chapter", "3.3 Create a Ddo"],
          ["3-commercio-id/3.4-chapter", "3.4 Request Powerup"],
        ]
      },
      {
        title: "4. Commercio Docs",
        collapsable: true,
        children: [
          ["4-commercio-docs/4.1-chapter", "4.1 Cerified Delivery: a trusted services pillar"],
          ["4-commercio-docs/4.2-chapter", "4.2 shareDoc(1->1. 1->n, plain/encrypted)"],
          ["4-commercio-docs/4.3-chapter", "4.3 sendReceipt(1->1)"],
          ["4-commercio-docs/4.4-chapter", "4.4 documentList(sent/received)"],
          ["4-commercio-docs/4.5-chapter", "4.5 receiptList(sent/received)"],
        ]
      },
      {
        title: "5. Commercio Sign",
        collapsable: true,
        children: [
          ["5-commercio-sign/5.1-chapter", "5.1 Electronic signatures Primer"],
          ["5-commercio-sign/5.2-chapter", "5.2 Simple Electronic Signature with a Self Signed Certificate in your DDO"],
          ["5-commercio-sign/5.3-chapter", "5.3 Prepare Document to be Signed"],
          ["5-commercio-sign/5.4-chapter", "5.4 PAdES Signature API"],
          ["5-commercio-sign/5.5-chapter", "5.5 XAdES Signature API"],
        ]
      },
      {
        title: "6. Commercio Mint",
        collapsable: true,
        children: [
          ["6-commercio-mint/6.1-chapter", "6.1 Algortimic Stable coins: The CDP"],
          ["6-commercio-mint/6.2-chapter", "6.2 Opening a Collateral Debt Position: mint CCC"],
          ["6-commercio-mint/6.3-chapter", "6.3 Closing a Collateral Debt Position: Burning CCC"],
          ["6-commercio-mint/6.4-chapter", "6.4 Check an account CCC balance"],
          ["6-commercio-mint/6.5-chapter", "6.5 Send a Credit (CCC) to another address"],
        ]
      },
      {
        title: "7. Commercio KYC",
        collapsable: true,
        children: [
          ["7-commercio-kyc/7.1-chapter", "7.1 Creating a network of Trusted Companies"],
          ["7-commercio-kyc/7.2-chapter", "7.2 Mint 25 CCC to purchase a Bronze membership"],
          ["7-commercio-kyc/7.3-chapter", "7.3 Buy a membership with Cash Coins"],
          ["7-commercio-kyc/7.4-chapter", "7.4 Invite a Member"],
        ]
      },
    ],
  }
};