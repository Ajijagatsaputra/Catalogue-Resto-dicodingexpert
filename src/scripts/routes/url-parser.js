const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const urlSplitter = this._urlSplitter(url);
    return this._urlCombiner(urlSplitter);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(urlSplitter) {
    return (
      (urlSplitter.resource ? `/${urlSplitter.resource}` : '/')
            + (urlSplitter.id ? '/:id' : '')
            + (urlSplitter.verb ? `/${urlSplitter.verb}` : '')
    );
  },
};

export default UrlParser;
