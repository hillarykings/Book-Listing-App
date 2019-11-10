// let titles = document.querySelectorAll('.title');

// Array.from(titles).forEach(function(items){
// console.log(items);
// })

// const wrap = document.querySelector('#wrapper');
// console.log(wrap) 

// let books = document.querySelector('#book-list li .name');

// console.log(books)

// let booksAll = document.querySelectorAll('#book-list li .name');

// for(let i = 0; i < booksAll.length; i++) {
//     console.log(booksAll[i])
// }

//  Array.from(booksAll).forEach(bookss => {
//      console.log(bookss)
//  })
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', addNewBook)
// //Add new book

// function addNewBook(e) {
//     e.preventDefault;

//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(newBook));
//     list.appendChild(li);

// }


const list = document.querySelector('#book-list ul');
let btn = document.querySelector('#btn');  
btn.addEventListener('click', addNewBook)

//Add new books

function addNewBook(e) {
    e.preventDefault();

     //Get input Value
     let newBook = document.querySelector('#add-book-input').value;

     //create new li element
     let li = document.createElement('li');
     let span = document.createElement('span');
     li.appendChild(span);
 
     //Add Class
    //  span.className = "name"; This one way to add class to HTML element
        span.classList.add('name'); /*This is another and the best way to add class*/
     
     //Add TextNode with input value
    //  span.appendChild(document.createTextNode(newBook));
    span.textContent = newBook;

      //Create delete button element
    let deleteBtn = document.createElement('span');

    //Addd classes to delete button
    // deleteBtn.className = 'delete'; This one way to add class to HTML element
    deleteBtn.classList.add('delete') /*This is another and the best way to add class*/

    //Append textNode
   // deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.textContent = 'delete';
    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to itemList
    list.appendChild(li);
}



// Delete btn click event

list.addEventListener('click', function(e){
    if(e.target.className == 'delete') {
       if(confirm('Are you sure')) {
        const li = e.target.parentElement;
        list.removeChild(li);
       }
    }
})

//Hide Books

const hide = document.querySelector('#hide');

hide.addEventListener('change', hideBox);

function hideBox(e) {
    if (hide.checked) {
        list.style.display = "none";
    } else {
        list.style.display = 'block';
    }
}

//Search Filter Books

const searchBar = document.forms['search-books'].querySelector('input');


searchBar.addEventListener('keyup', searchBooks);

function searchBooks(e) {
    const searchTerm = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(book => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(searchTerm) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
}

// function search(e) {
//     const searchTerm = e.target.value.toLowerCase();
//     const book = list.getElementsByTagName('li');
//     Array.from(book).forEach(bok => {
//         let title = bok.firstElementChild.textContent;
//         if(title.toLowerCase().indexOf(searchTerm) != -1){
//             bok.style.display = 'block';
//         } else {
//             bok.style.display = 'none';
//         }
//     })

// }









