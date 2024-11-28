module.exports = function calculateNumber(type, a, b) {
  const aa = Math.round(a);
  const bb = Math.round(b);
  if (type === 'SUM')
    return aa + bb;
  else if (type === 'SUBTRACT')
    return bb - aa;
  else if (type === 'DIVIDE'){
	if (bb === 0)
      return 'Error';
    return aa / bb;
  }
}
  