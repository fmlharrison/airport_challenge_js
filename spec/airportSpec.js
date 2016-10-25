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
      expect(airport.landedPlanes).toEqual([plane])
    });
  });
});
