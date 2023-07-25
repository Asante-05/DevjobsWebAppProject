import data from '../data.json'

const storedData = JSON.parse(localStorage.getItem('jsonData'));

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
export function printd() {
    console.log(storedData)
}
export function getElementbyID (id) {    return (JSON.parse(localStorage.getItem(id)))
}
