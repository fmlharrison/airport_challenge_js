describe("Plane", function (){
  var plane;

  beforeEach(function (){
    plane = new Plane();
  });

  
  describe("the plane is created flying", function () {

    it("should be flying when created", function () {
      expect(plane.flying).toBeTruthy();
    });

    it("should not be flying when landed", function () {
      plane.landed();
      expect(plane.flying).toBeFalsy();
    });

    it("should be flying after take off", function () {
      plane.landed();
      plane.takenOff();
      expect(plane.flying).toBeTruthy();
    });
  });
});
