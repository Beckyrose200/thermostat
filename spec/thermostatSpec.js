describe ('Thermostat',function(){
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });

    it('Starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20)
    });

    it('increase the temperature up', function(){
      thermostat.temperatureUp(5)
      expect(thermostat.temperature()).toEqual(25)
    });

    it('decrease the temperature', function(){
      thermostat.temperatureDown(10)
      expect(thermostat.temperature()).toEqual(10)
    });

    it('doesnt allow the temp to go below the minimum', function(){
      thermostat.temperatureDown(20)
      expect(thermostat.temperature()).toEqual(10)
    });

    it('on power saving mode, max temp 25 deg', function(){
      thermostat.powerSavingModeOn()
      thermostat.temperatureUp(10)
      expect(thermostat.temperature()).toEqual(25)
    });

    it('on power saving mode off, max temp 32 deg', function(){
      thermostat.powerSavingModeOff()
      thermostat.temperatureUp(15)
      expect(thermostat.temperature()).toEqual(32)
    });

    it('power saving mode is on by default', function(){
      expect(thermostat.MaxTemp).toEqual(25)
    });

    it('reset the temperature', function(){
      thermostat.temperatureUp(5)
      thermostat.reset()
      expect(thermostat.temperature()).toEqual(20)
    });

    it('medium usage', function(){
      expect(thermostat.usage()).toEqual('medium-usage')
    });

    it('low usage', function(){
      thermostat.temperatureDown(5)
      expect(thermostat.usage()).toEqual('low-usage')
    });
    
    it('high usage', function(){
      thermostat.powerSavingModeOff()
      thermostat.temperatureUp(6)
      expect(thermostat.usage()).toEqual('high-usage')
    });
});


