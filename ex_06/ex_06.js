function searchCars(agents, key, value) {
  return agents.filter(agent => agent.isMatching(key, value)).map(agent => agent.car);
} 
// Filters the agents array based on a matching condition using the isMatching method.
// Maps the filtered agents to return an array of their car objects.

agent.isMatching = function(key, value) {
  return this.car && this.car[key] === value;
}; 
// Defines a method isMatching on the agent object.
// Checks if the agent has a car and if the specified key's value matches the given value.

document.addEventListener('load', () => {
  agent.logInfo();
}); 
// Adds an event listener for the 'load' event on the document.
// Calls the agent's logInfo method when the document has fully loaded.
