function Airport(capacity = 20) {
  this.capacity = capacity;
  this.landedPlanes = [];
};

Airport.prototype.land = function (plane) {
    this.landedPlanes.push(plane);
    plane.landed();
};

Airport.prototype.takeOff = function (plane) {
    var leavingPlane = this.landedPlanes.indexOf(plane);
    this.landedPlanes.splice(leavingPlane, 1);
    plane.takenOff();
};
