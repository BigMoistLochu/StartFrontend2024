console.log("hey");

document.getElementById('fetch-button').addEventListener('click', () => {
    fetch('http://localhost:8080/hello')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});