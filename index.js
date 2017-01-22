var validAmpSpec = new Float32Array([
  0.19665084779262543
]);

var numerator = 0;
var denominator = 0;
for (var i = 0; i < validAmpSpec.length; i++) {
  numerator += Math.log(validAmpSpec[i]);
  denominator += validAmpSpec[i];
}

console.log(Math.exp(numerator / validAmpSpec.length) *
    validAmpSpec.length / denominator);
