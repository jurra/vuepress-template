module.exports = {
  title: 'Open Hardware tractor implements',
  dest: 'public',
  base: '/grapples-doc/',
  theme: 'vuepress-theme-gocommons',

  themeConfig: {
    projectLogo: "/logo.png",
    projectTitle: "Open Hardware Tractor Implements",
    // displayAllHeaders: false,
    // activeHeaderLinks: false, // Default: true

    nav: [
      { text: 'Intro', link: '/' },
      { text: 'Build one', link: '/build/Build' },
      { text: 'Support us', link: '/contribute/Contribute' },
      { text: 'Contact', link: '/Contact' },
    ],

    sidebar: {
      '/contribute/':[
        // '',
        ['Contribute','Why is it important'],
        ['donate','Back the project'],
        ['Needs', 'Which are your needs']
        // ['for-devs','For developers']
      ],

      '/build/':[
        'Build',
        ['source','Source']
      ],

      '/':[
        ['','Readme']
        // '/contribute/donate.md'
      ]
    }
  }
};
