const tempSlider = document.getElementById('temp-slider');
const tempValue = document.getElementById('temp-value');
const activateButton = document.getElementById('activate-suit');
const status = document.getElementById('status');
const suitStatus = document.getElementById('suit-status');

tempSlider.addEventListener('input', () => {
  tempValue.textContent = tempSlider.value;
});

activateButton.addEventListener('click', () => {
  const currentTemp = tempSlider.value;
  if (currentTemp < 20) {
    suitStatus.textContent = 'Inactive (Temperature too low)';
    suitStatus.style.color = '#dc3545'; 
  } else if (currentTemp > 35) {
    suitStatus.textContent = 'Inactive (Temperature too high)';
    suitStatus.style.color = '#dc3545'; 
  } else {
    suitStatus.textContent = 'Active';
    suitStatus.style.color = '#28a745'; 
  }
  let batteryLevel = 100;
const batteryLevelElement = document.getElementById('battery-level');
const batteryTextElement = document.getElementById('battery-text');

function updateBatteryIndicator() {
    batteryLevelElement.style.width = batteryLevel + '%';

   
    if (batteryLevel > 50) {
        batteryLevelElement.style.backgroundColor = 'green';
    } else if (batteryLevel > 20) {
        batteryLevelElement.style.backgroundColor = 'orange';
    } else {
        batteryLevelElement.style.backgroundColor = 'red';
    }

    batteryTextElement.textContent = `Battery Level: ${batteryLevel}%`;

    // Show warning if battery is low
    if (batteryLevel <= 20) {
        alert('Warning: Battery level is low!');
    }
}

function simulateBatteryUsage() {
    if (batteryLevel > 0) {
        batteryLevel -= 10; // Simulate battery usage
        updateBatteryIndicator();
    } else {
        alert('Battery is fully drained!');
    }
}
updateBatteryIndicator();
});