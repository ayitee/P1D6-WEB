document.getElementById('search-button').addEventListener('click', function() {
    const key = document.getElementById('search-key').value;
    const value = document.getElementById('search-value').value.trim().toLowerCase();

    if (value === "") {
        alert("Please enter a value to search.");
        return;
    }

    // Sample agent array, replace with real data
    const agents = [
        {
            firstName: 'James',
            lastName: 'Bond',
            age: 57,
            code: '007',
            car: {
                brand: 'Aston Martin',
                model: 'DB5',
                color: 'grey',
                licensePlates: ['BMT 216A']
            }
        },
        {
            firstName: 'Ethan',
            lastName: 'Hunt',
            age: 50,
            code: '001',
            car: {
                brand: 'BMW',
                model: 'i8',
                color: 'black',
                licensePlates: ['ETH 300']
            }
        }
    ];

    const matchingCars = searchCars(agents, key, value);
    displayResults(matchingCars);
});
// Adds a click event listener to the search button.
// Retrieves the search key and value from the input fields.
// Alerts the user if the search value is empty.
// Defines a sample agents array with agent and car data.

function searchCars(agents, key, value) {
    return agents
        .filter(agent => agent.car && agent.car[key] && agent.car[key].toLowerCase() === value)
        .map(agent => agent.car);
} 
// Filters the agents array for those with a car matching the specified key and value.
// Ensures case-insensitive matching by converting the value to lowercase.
// Returns an array of matching car objects.

function displayResults(cars) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    if (cars.length === 0) {
        resultsList.innerHTML = '<li>No cars found matching your criteria.</li>';
    } else {
        cars.forEach(car => {
            const listItem = document.createElement('li');
            listItem.textContent = `Brand: ${car.brand}, Model: ${car.model}, Color: ${car.color}`;
            resultsList.appendChild(listItem);
        });
    }
} 
// Clears the results list before displaying new results.
// Checks if there are no matching cars and displays a message if so.
// Iterates through the array of matching cars and creates list items for each.
// Appends the list items to the results list in the document.
