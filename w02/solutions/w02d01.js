// hiro
function versionComp (x, y) {
  numberX = x.split(".")
  numberY = y.split(".")
  for(let i = 0; i < numberX.length; i++) {
    if(parseInt(numberX[i]) > parseInt(numberY[i])) {
      return x;
    } else if(parseInt(numberY[i]) > parseInt(numberX[i])) {
      return y;
    }
  }
}
