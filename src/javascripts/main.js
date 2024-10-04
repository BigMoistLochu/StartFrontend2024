// Importowanie modułu jsonwebtoken
// const jwt = require('jsonwebtoken');

// console.log(jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"));

// const buttonel = document.getElementById('fetch-button').addEventListener('click', () => {
//     fetch('http://localhost:8080/hello')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// });


function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function processUserInput(callback) {
    const name = "Alice"; // W tym przykładzie po prostu hardcodujemy wartość
    callback(name); // Wywołujemy callback z argumentem
  }
  
  processUserInput(greet); // Wypisze: Hello, Alice!