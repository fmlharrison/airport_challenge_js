describe ("Airport", function(){
  var airport;


  beforeEach(function(){
      airport = new Airport();
  });

  describe ("airport capacity", function() {
    it ("airport has default capacity", function(){
      expect(airport.capacity).toEqual(20)
    });
  });

});
