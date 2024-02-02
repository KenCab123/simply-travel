const URL = import.meta.env.VITE_BASE_API_URL;
const token = import.meta.env.VITE_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY

// const url = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/?destination=LED&origin=MOW';

export const getDestinations = () => {
    return fetch(`${URL}`).then((response) => response.json());
}

export const getCheapestFlight = (url) => {
    console.log(url)
    const options = {
        method: 'GET',
        headers: {
            'X-Access-Token': token,
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
        }
    };
    return fetch(url, options).then((response) => response.json())
}