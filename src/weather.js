function Weather() {

}

Weather.prototype.isStormy = function () {
  return Math.random(10) >= 0.8;
};
