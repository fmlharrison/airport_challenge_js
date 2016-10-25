function Airport(capacity = 20) {
  this.capacity = capacity;
  this.landedPlanes = [];
};

Airport.prototype.land = function (plane) {
  if (this.isFull() === true) {
    throw ("The airport is full, the plane can't land");
  }
  this.landedPlanes.push(plane);
  plane.landed();
};

Airport.prototype.takeOff = function (plane) {
  if (!this.landedPlanes.includes(plane)) {
    throw ("This plane is not in the airport")
  }
  var leavingPlane = this.landedPlanes.indexOf(plane);
  this.landedPlanes.splice(leavingPlane, 1);
  plane.takenOff();
};

Airport.prototype.isFull = function () {
  return this.landedPlanes.length >= this.capacity
};
