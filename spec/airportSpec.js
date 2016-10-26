describe ("Airport", function(){
  var airport;
  var plane;
  var plane1;
  var plane2;


  beforeEach(function(){
      stormyWeather = {
        isStormy: function() {
          return true;
        }
      }
      sunnyWeather = {
        isStormy: function () {
          return false;
        }
      }
      sunnyAirport = new Airport(20, sunnyWeather);
      stormyAirport = new Airport(20, stormyWeather);
      fullAirport = new Airport(1, sunnyWeather);
      airport = new Airport();
      plane = new Plane();
      plane1 = new Plane();
      plane2 = new Plane();
  });

  describe ("airport capacity", function() {
    it ("airport has default capacity", function(){
      expect(sunnyAirport.capacity).toEqual(20)
    });
    it ("user can set airport capacity", function() {
      airportNew = new Airport(50);
      expect(airportNew.capacity).toEqual(50)
    });
  });

  describe ("landing plane", function() {
    it("land the plane", function() {
      sunnyAirport.land(plane);
      expect(sunnyAirport.landedPlanes).toEqual([plane]);
      expect(plane.flying).toBeFalsy();
    });
  });

  describe ("taking off plane", function() {
    it("take off the plane", function() {
      sunnyAirport.land(plane);
      sunnyAirport.takeOff(plane);
      expect(sunnyAirport.landedPlanes.includes(plane)).toBeFalsy;
      expect(plane.flying).toBeTruthy();
    });
  });

  describe("plane cannot land", function () {
    it("can't land if the airport is full", function () {
      fullAirport.land(plane1);
      expect(function () {
        fullAirport.land(plane2);}).toThrow("The airport is full, the plane can't land");
    });
  });

  describe("landing in stormy weather", function() {
    it("can't land in stormy weather", function () {
      spyOn(stormyAirport, "isBadWeather").and.returnValue(true);
      expect(function () {
        stormyAirport.land(plane)}).toThrow("Plane cannot land due to stormy weather");
    });
  });

  describe("plane cannot take off", function () {
    it("the plane is not in the airport", function () {
      expect(function () {
        airport.takeOff(plane);}).toThrow("This plane is not in the airport")
    });
  });

  describe("taking off in stormy weather", function () {
    it("the plane can't take off in stormy weather", function () {
      stormyAirport.landedPlanes.push(plane);
      expect(function () {
        stormyAirport.takeOff(plane)}).toThrow("Plane cannot take off due to stormy weather");
    });
  });

  describe("isBadWeather", function () {
    it("should have receiced the message isStormy", function () {
      spyOn(airport.weather, "isStormy");
      airport.isBadWeather();
      expect(airport.weather.isStormy).toHaveBeenCalled();
    });
  });
});
