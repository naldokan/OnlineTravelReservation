const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

const headers = {
    'Accept': 'application/json'
};

export const getFlights = (payload) =>
    fetch(`${api}/listings/getFlights`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res  ;
    }).catch(error => {
        console.log("This is error");
        return error;
    });
