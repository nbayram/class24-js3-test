// VERSION 2

// 1.
// Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
// - Takes as an argument the following array of objects:
const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
  }
];
// - Iterates over the array and outputs the details of each item nto the DOM.
// - Displays the items inside an unordered list (created programmatically using JavaScript)

function getBooksInfo(booksArray) {
  booksArray.forEach(book => {
    const list = document.createElement('ul');
    document.body.appendChild(list);

    Object.entries(book).forEach(([key, value]) => {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      if (key === 'coverURL') {
        listItem.innerHTML = `<img style='width:150px' src='${value}'>`;
      } else {
        listItem.textContent = value;
      }
    })

    // let listItem = document.createElement('li');
    // list.appendChild(listItem);
    // listItem.textContent = book.bookName;

    // listItem = document.createElement('li');
    // list.appendChild(listItem);
    // listItem.textContent = book.author;

    // listItem = document.createElement('li');
    // list.appendChild(listItem);
    // const img = document.createElement('img');
    // list.appendChild(img);
    // img.src = book.coverURL;
    // img.style.width = '150px';
  });
}

getBooksInfo(books);


// 2.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users/1
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript) 

// function renderData(url) {
//   fetch(url)
//     .then(data => data.json())
//     .then(response => {

//       const list = document.createElement('ul');
//       document.body.appendChild(list);

//       const keysOfResponse = ['name', 'email', 'address'];
//       keysOfResponse.forEach((element) => {
//         let listItem = document.createElement('li');
//         list.appendChild(listItem);
//         if (element === 'address') {
//           listItem.textContent = response[element].city;
//         } else {
//           listItem.textContent = response[element];
//         }
//       });

//   let listItem = document.createElement('li');
//   list.appendChild(listItem);
//   listItem.textContent = response.name;


//   listItem = document.createElement('li');
//   list.appendChild(listItem);
//   listItem.textContent = response.email;

//   listItem = document.createElement('li');
//   list.appendChild(listItem);
//   listItem.textContent = response.address.city;
//     })
// }

// renderData('https://jsonplaceholder.typicode.com/users/1');


// 3.
// Write a function that:
// - Takes in an array of country names
// - Returns the country with the longest name. 
// - Uses the following array as an argument: 
// const countries = ["The Netherlands", "Syria", "Turkey", "Mexico", "United States"]

// function getLongestNameOfCountry(arrayOfCountries) {
//   const longestCountry = arrayOfCountries.reduce((firstCountry, nextCountry) => firstCountry.length > nextCountry.length ? firstCountry : nextCountry);
//   console.log(longestCountry);
// }

// getLongestNameOfCountry(countries);