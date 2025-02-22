<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thermoregulatory Suit Control</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Thermoregulatory Suit Control</h1>
    <div class="control-panel">
      <div class="temperature-display">
        <label for="temp-slider">Temperature Control:</label>
        <input type="range" id="temp-slider" min="10" max="40" value="25" step="1">
        <p>Current Temperature: <span id="temp-value">25</span>°C</p>
      </div>

      <button id="activate-suit" class="button">Activate Suit</button>
      
      <div id="status" class="status">
        <p>Status: <span id="suit-status">Inactive</span></p>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>


