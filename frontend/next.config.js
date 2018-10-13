const assetPrefix = process.env.ENV_GH_PAGES ? '/styled-starter' : '';

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/page2': { page: '/page2' },
      '/design': { page: '/design' },
      '/components': { page: '/components' }
    };
  },
  assetPrefix: assetPrefix
};
