describe ('Thermostat',function(){
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });

    it('Starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20)
    });

    it('increase the temperature up', function(){
      expect(thermostat.temperatureUp(5)).toEqual(25)
    });

    it('decrease the temperature', function(){
      expect(thermostat.temperatureDown(10)).toEqual(10)
    });

    it('has a minimum temp of 10', function(){
      expect(thermostat.minTemp).toEqual(10)
    });

    it('doesnt allow the temp to go below the minimum', function(){
      expect(thermostat.temperatureDown(20)).toEqual(10)
    });
});


