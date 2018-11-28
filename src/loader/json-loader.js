module.exports = function (source) {
  let title = source.replace(/[0-9]/g, '')
  return title;
}
