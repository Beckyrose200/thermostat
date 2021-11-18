class Thermostat {
  constructor(temp) {
    this.startTemp = 20; 
    this.minTemp = 10;
    this.currentTemp = 20; 
    this.powerSavingModeOn();
  }

  temperature(){
    return this.currentTemp;
  }

  temperatureUp(number){
    if ((this.currentTemp + number) > this.MaxTemp){
     this.currentTemp = this.MaxTemp
    } else {
        this.currentTemp += number;
    }
  }

  temperatureDown(number) { 
    if ((this.currentTemp - number) < this.minTemp){
      this.currentTemp = this.minTemp;
    } else {
        this.currentTemp -= number;
    }
  }

  powerSavingModeOn(){
    this.MaxTemp = 25;
  }

  powerSavingModeOff(){
    this.MaxTemp = 32;
  }

  reset(){
    this.currentTemp = this.startTemp;
  }

  usage(){
    if (this.currentTemp < 18 ) {
      return 'low-usage'
    } else if (this.currentTemp <= 25){
        return 'medium-usage';
    } else {
        return 'high-usage';
    }
  }
}
