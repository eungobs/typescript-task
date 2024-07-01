// TrafficLight Enum and Robot Simulation

enum TrafficLight {
  Red = "RED",
  Yellow = "YELLOW",
  Green = "GREEN",
}

function changeTrafficLight() {
  let currentLight: TrafficLight = TrafficLight.Red;

  setInterval(() => {
    switch (currentLight) {
      case TrafficLight.Red:
        console.log("Light is now", currentLight);
        currentLight = TrafficLight.Green;
        break;
      case TrafficLight.Yellow:
        console.log("Light is now", currentLight);
        currentLight = TrafficLight.Red;
        break;
      case TrafficLight.Green:
        console.log("Light is now", currentLight);
        currentLight = TrafficLight.Yellow;
        break;
    }
  }, 10000); // Change light every 10 seconds
}

// Start the simulation
changeTrafficLight();
