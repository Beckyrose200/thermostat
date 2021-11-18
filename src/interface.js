document.addEventListener("DOMContentLoaded", () => {
  thermostat = new Thermostat();

  const UPDATE_TEMP_DISPLAY = function() {
    document.getElementById('temperature_display').innerText = thermostat.temperature()
    document.getElementById('energy-usage').innerText = thermostat.usage()
    const COLOR_TABLE = { 'low-usage':'green', 'medium-usage':'orange', 'high-usage':'red' }
    document.getElementById('energy-usage').style.background = COLOR_TABLE[thermostat.usage()]
  }

  UPDATE_TEMP_DISPLAY()
  document.getElementById('psm_on').style.background = 'blue'
  document.getElementById('psm_off').style.background = 'grey'

  document.getElementById('temperature_up').addEventListener('click',function() {
    thermostat.temperatureUp(1)
    UPDATE_TEMP_DISPLAY()
  })

  document.getElementById('temperature_down').addEventListener('click',function() {
    thermostat.temperatureDown(1)
    UPDATE_TEMP_DISPLAY()
  })
  
  document.getElementById('psm_on').addEventListener('click',function() {
    thermostat.powerSavingModeOn()
    document.getElementById('psm_on').style.background = 'blue'
    document.getElementById('psm_off').style.background = 'grey'
  })

  document.getElementById('psm_off').addEventListener('click',function() {
    thermostat.powerSavingModeOff()
    document.getElementById('psm_on').style.background = 'grey'
    document.getElementById('psm_off').style.background = 'blue'
  })

  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.getElementById('weather').innerText = data.main.temp
  });
})



