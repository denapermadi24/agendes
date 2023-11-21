import urlSplitter from './split-url';
import urlCombiner from './combiner-url';

const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = urlSplitter(url);
    return urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return urlSplitter(url);
  },
};

export default UrlParser;
