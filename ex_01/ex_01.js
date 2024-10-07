window.addEventListener('load', () => {
  function displayAgentInfo(agent) {
    const { firstName, lastName, code, age } = agent;
    const infoText = `My name is ${lastName}, ${firstName} ${lastName}! I'm the agent ${code} and I'm ${age} years old.`;
    document.querySelector('#container p').textContent = infoText;
  }

  const agent = {
    firstName: "James",
    lastName: "Bond",
    code: "008",
    age: 57
  };

  displayAgentInfo(agent);
});

// The `window.addEventListener('load', ...)` ensures the script runs after the page fully loads.
// The `displayAgentInfo` function is defined to handle the agent's data.
// The agent's properties (firstName, lastName, code, age) are extracted using destructuring.
// A string containing the agent's details is created and stored in `infoText`.
// The text content of the paragraph in the #container element is updated with `infoText`.
// The `agent` object is created with predefined data for James Bond.
// `displayAgentInfo(agent)` is called to display the agent's information on the page.
