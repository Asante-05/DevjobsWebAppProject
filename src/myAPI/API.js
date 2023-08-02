import data from '../data.json'

const myLocalStorage = JSON.parse(localStorage.getItem('jsonData')) || data;



export function storeData() {
    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            localStorage.setItem('jsonData', JSON.stringify(jsonData));
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
