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
          ["1-fundamentals/1.1-chapter", "1.1 What is a Blockchain"],
          ["1-fundamentals/1.2-chapter", "1.2 The Documents Blockchain"],
          ["1-fundamentals/1.3-chapter", "1.3 Full node Vs Validator Node"],
          ["1-fundamentals/1.4-chapter", "1.4 Consensus  mechanisms"],
          ["1-fundamentals/1.5-chapter", "1.5 Immutable Trasactions"],
          ["1-fundamentals/1.6-chapter", "1.6 Block Finality and Block Intervals"],
          ["1-fundamentals/1.7-chapter", "1.7 Consortium Governace"],
          ["1-fundamentals/1.8-chapter", "1.8 eIDAS Compliance"],
          ["1-fundamentals/1.9-chapter", "1.9 Commercio Token"],
          ["1-fundamentals/1.10-chapter", "1.10 Stable Chain e Stable Coin"],
          ["1-fundamentals/1.11-chapter", "1.11 Token issuance"],
          ["1-fundamentals/1.12-chapter", "1.12 Test-net Vs Main-net"],
        ]
      },
      {
        title: "2. Commercio Auth",
        collapsable: true,
        children: [
          ["2-commercio-auth/2.1-chapter", "2.1 The seed of freedom"],
          ["2-commercio-auth/2.2-chapter", "2.2 Generate an HD Wallet"],
          ["2-commercio-auth/2.3-chapter", "2.3 Import a HD Wallet"],
          ["2-commercio-auth/2.4-chapter", "2.4 Receive Token to a QR code of Your Address"],
          ["2-commercio-auth/2.5-chapter", "2.5 Request Token from a Faucet"],
          ["2-commercio-auth/2.6-chapter", "2.6 Check an account Balance"],
          ["2-commercio-auth/2.7-chapter", "2.7 Send a Token to another QR code of the address"],
          ["2-commercio-auth/2.8-chapter", "2.8 Stake your Token to become a Validator"],
          ["2-commercio-auth/2.9-chapter", "2.9 Unbound  your Token to end being  a Validator"],
        ]
      },
      {
        title: "3. Commercio ID",
        collapsable: true,
        children: [
          ["3-commercio-id/3.1-chapter", "3.1 DID, DDO and VC Primer"],
          ["3-commercio-id/3.2-chapter", "3.2 Pairwise Did Primer"],
          ["3-commercio-id/3.3-chapter", "3.3 Create a Ddo"],
          ["3-commercio-id/3.4-chapter", "3.4 Request Deposit"],
          ["3-commercio-id/3.5-chapter", "3.5 Request Powerup"],
          ["3-commercio-id/3.6-chapter", "3.6 Create Connection Invitation"],
          ["3-commercio-id/3.7-chapter", "3.7 Accept Connection Invitation"],
          ["3-commercio-id/3.8-chapter", "3.8 Browse Verifiable Credential Offers"],
          ["3-commercio-id/3.9-chapter", "3.9 Request a Verifiable Credential"],
          ["3-commercio-id/3.10-chapter", "3.10 Accept Verifiable credential "],
        ]
      },
      {
        title: "4. Commercio Docs",
        collapsable: true,
        children: [
          ["4-commercio-docs/4.1-chapter", "4.1 Cerified Delivery: a trusted services pillar"],
        ]
      },
      {
        title: "5. Commercio Sign",
        collapsable: true,
        children: [
          ["5-commercio-sign/5.1-chapter", "5.1 eSignature primer: 3 levels of trust"],
        ]
      },
      {
        title: "6. Commercio Mint",
        collapsable: true,
        children: [
          ["6-commercio-mint/6.1-chapter", "6.1 Algortimic Stable coins: The CDP"],
        ]
      },
      {
        title: "7. Membership",
        collapsable: true,
        children: [
          ["7-membership/7.1-chapter", "7.1 KYC and AML primer"],
        ]
      },
    ],
  }
};