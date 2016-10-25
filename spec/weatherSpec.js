describe("Weather", function() {
  var weather;

  beforeEach(function (){
    weather = new Weather();
  });

  describe("is it stormy?", function () {
    it("returns when it is stormy",function() {
      spyOn(Math, 'random').and.returnValue(0.8);
      console.log(Math.random());
      expect(weather.isStormy()).toBeTruthy();
    });

    it("returns when it is sunny",function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      console.log(Math.random());
      expect(weather.isStormy()).toBeFalsy();
    });
  });

});
