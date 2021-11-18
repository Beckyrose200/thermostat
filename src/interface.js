document.addEventListener("DOMContentLoaded", () => {
  thermostat = new Thermostat();

  const UPDATE_TEMP_DISPLAY = function() {
    document.getElementById('temperature_display').innerText = thermostat.temperature()
  }

  UPDATE_TEMP_DISPLAY()

  document.getElementById('temperature_up').addEventListener('click',function() {
    thermostat.temperatureUp(1)
    UPDATE_TEMP_DISPLAY()
  })

  document.getElementById('temperature_down').addEventListener('click',function() {
    thermostat.temperatureDown(1)
    UPDATE_TEMP_DISPLAY()
  })


})



