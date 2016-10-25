function Plane() {
  this.flying = true
};

Plane.prototype.landed = function () {
  this.flying = false;
};

Plane.prototype.takenOff = function () {
  this.flying = true;
};
