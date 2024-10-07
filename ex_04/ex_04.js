function updateLicensePlates(agent, plates) {
  if (!agent.car) {
    console.error('The agent does not have a car property');
    return null;
  }
  agent.car.licensePlates = plates;
  return agent;
} 
// Checks if the agent has a car property.
// Logs an error message and returns null if the car property is missing.
// Updates the licensePlates property of the car with the provided plates.
// Returns the updated agent object.

function showLicensePlates(agent) {
  if (!agent.car || !agent.car.licensePlates) {
    console.error('The agent does not have any license plates');
    return;
  }
  const ul = document.createElement('ul');
  agent.car.licensePlates.forEach(plate => {
    const li = document.createElement('li');
    li.textContent = plate;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
} 
// Checks if the agent has a car and license plates.
// Logs an error message and exits if there are no license plates.
// Creates a new unordered list element for displaying license plates.
// Iterates through the license plates and adds each as a list item.
// Appends the list of license plates to the document body.​
