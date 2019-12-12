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
      text: 'Home',
      link: '/'
    }, {
      text: "Commercio.network",
      link: "https://commercio.network"
    }],
    sidebar: [
      ["1-fundamentals/", "1. Fundamentals"],
      ["2-commercio-auth/", "2. Commercio Auth"],
      ["3-commercio-id/", "3. Commercio ID"],
      ["4-commercio-docs/", "4. Commercio Docs"],
      ["5-commercio-sign/", "5. Commercio Sign"],
      ["6-commercio-mint/", "6. Commercio Mint"],
      ["7-membership/", "7. Membership"],
    ],
  }
};