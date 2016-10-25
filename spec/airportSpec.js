describe ("Airport", function(){
  var airport;


  beforeEach(function(){
      airport = new Airport();
  });

  describe ("airport capacity", function() {
    it ("airport has default capacity", function(){
      expect(airport.capacity).toEqual(20)
    });
    it ("user can set airport capacity", function() {
      airportNew = new Airport(50);
      expect(airportNew.capacity).toEqual(50)
    });
  });

  describe ("landing plane", function() {
    it("land the plane", function() {
      plane = new Plane();
      airport.land(plane);
      expect(airport.landedPlanes).toEqual([plane]);
      expect(plane.flying).toBeFalsy();
    });
  });

  describe ("taking off plane", function() {
    it("take off the plane", function() {
      plane = new Plane();
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.landedPlanes.includes(plane)).toBeFalsy;
      expect(plane.flying).toBeTruthy();
    });
  });

  describe("plan cannot land", function () {
    it("can't land if the airport is full", function () {
      fullAirport = new Airport(1);
      plane1 = new Plane();
      plane2 = new Plane();
      fullAirport.land(plane1);
      expect(function () {
        fullAirport.land(plane2);}).toThrow("The airport is full, the plane can't land");
    });
  });

  describe("plane cannot take off", function () {
    it("the plane is not in the airport", function () {
      plane = new Plane();
      expect(function () {
        airport.takeOff(plane);}).toThrow("This plane is not in the airport")
    });
  });
});
