describe ('Thermostat',function(){
  
  describe ('Thermostat',function(){
    it('Starts at 20 degrees', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperature()).toEqual(20)
    });
  }); 

  describe ('Thermostat',function(){
    it('increase the temperature up', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperatureUp(5)).toEqual(25)
    });
  }); 

});


