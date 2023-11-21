const urlCombiner = (splitedUrl) => (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
  + (splitedUrl.id ? '/:id' : '')
  + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');

export default urlCombiner;
