module.exports = function reverse (n) {
  let num = Math.abs(n);
  let nToStr = num.toString().split('').reverse().join('');
  return Number(nToStr);
}
