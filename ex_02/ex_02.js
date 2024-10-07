function addCar(agentString, car) {
  const agent = JSON.parse(agentString);
  agent.car = car;
  return agent;
} 
// Parses the agentString JSON into an object.
// Assigns the provided car to the agent object.
// Returns the updated agent object with the new car property.
