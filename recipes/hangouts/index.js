module.exports = (Franz) =>
  class hangouts extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:71.0) Gecko/20100101 Firefox/71.0',
          },
          requestFilters: {
            urls: ['*://*/*'],
          },
        },
      ];
    }
  };
