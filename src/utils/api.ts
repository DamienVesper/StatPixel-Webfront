
/**
 * The API URL to be used.
 */
const apiURL = `https://api.statpixel.net`;

/**
 * Send a GET request to the API.
 * @param endpoint A string representation of the endpoint to get the response from.
 * @returns An HTTP response pertaining to the request sent.
 */
const fetchAPI = async (endpoint: string) => await fetch(apiURL + endpoint);

/**
 * Send a POST request to the API with a payload.
 * @param endpoint A string representation of the endpoint to send the payload to.
 * @param data The payload being sent to the URI.
 * @returns An HTTP response pertaining to the request sent.
 */
const sendAPI = async (endpoint: string, data: any) => await fetch(apiURL + endpoint, {
    method: `GET`,
    body: data,
    headers: {
        [`Content-Type`]: `x-www-form-urlencoded`
    }
});

export {
    fetchAPI,
    sendAPI
};
