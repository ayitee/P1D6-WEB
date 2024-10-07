function addCarToAgent(Agent, brand, model, color, power) {
  if (!brand || !model || !color || !power) {
    console.error('ERREUR MON POTE');
    return null;
  }
  Agent.car = {
    brand,
    model,
    color,
    power
  };
  return Agent;
} 
// Checks if all of the required car information is provided.
// Logs an error message and returns null if any information is missing.
// Creates a car object with the provided brand, model, color, and power.
// Assigns the car object to the agent's car property.
// Returns the updated agent object.
