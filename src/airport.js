function Airport(capacity = 20) {
  this.capacity = capacity;
  this.landedPlanes = [];
};

Airport.prototype.land = function (plane) {
    this.landedPlanes.push(plane)
};
