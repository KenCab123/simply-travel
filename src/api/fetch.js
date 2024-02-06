const URL = import.meta.env.VITE_BASE_API_URL;
const token = import.meta.env.VITE_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY

// const url = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/?destination=LED&origin=MOW';

export const getDestinations = () => {
    return fetch(`${URL}`).then((response) => response.json());
}

export const getCheapestFlight = (url) => {
    const options = {
        method: 'GET',
        headers: {
            'X-Access-Token': token,
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
        }
    };
    return fetch(url, options) .then(response => {

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
}

export const getAirlineNames = () => {
    const options = {
        method: 'GET',
        url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airlines.json',
        headers: {
          'X-Access-Token': '1007c3b2956c6bb6d7d10b91b86c7c17',
          'X-RapidAPI-Key': '78ce0a311dmshfe195ee1b56e4aep1fecb0jsne84f5de91d91',
          'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
        }
      };
      return fetch(options.url, options).then((response) => response.json())
      
}

export const getNearestAirport = (ip) => {
    const url = `http://www.travelpayouts.com/whereami?locale=en&ip=${ip}`

    return fetch(url).then(response => response.json())
}