void setup() {zszs
  
  Serial.begin(9600);
}

void loop() {
 
  int adcValue = analogRead(THERMISTOR_PIN);
  float voltage = adcValue * (5.0 / 1023.0);  
  float resistance = SERIES_RESISTOR * (5.0 / voltage - 1);
  float temperatureKelvin = 1.0 / (1.0 / T0 + (1.0 / B_COEFFICIENT) * log(resistance / R0));
  float temperatureCelsius = temperatureKelvin - 273.15;
  
  Serial.print("Temperature: ");
  Serial.print(temperatureCelsius);
  Serial.println(" °C");
  
  delay(1000);
}
