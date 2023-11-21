const urlSplitter = (url) => {
  const urlsSplits = url.split('/');
  return {
    resource: urlsSplits[1] || null,
    id: urlsSplits[2] || null,
    verb: urlsSplits[3] || null,
  };
};

export default urlSplitter;
