import data from '../data.json'

const myLocalStorage = JSON.parse(localStorage.getItem('jsonData'));

export function storeData() {

    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            // Loop through the JSON data and store each object using its 'id' as the key
            localStorage.setItem('jsonData', JSON.stringify(jsonData));
            console.log('Data stored in local storage.');
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

export function printStored() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));

    }
}

export function getItemByID (id) {
    return myLocalStorage[id]
}


export function extractIdFromLocation (location) {
    const { pathname } = location;
    const pathParts = pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    return id;
  };
