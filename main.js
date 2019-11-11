document.getElementById('btn').addEventListener('click', saveBook, false);


//Save Book
function saveBook(e){

    
    var newBook = document.querySelector('#add-book-input').value;
    

    var bookList = {
        bookName: newBook,
    }


    //Test if books is null
    if(localStorage.getItem('books') === null){
        //initialize array
        var books = [];

        //Add array
        books.push(bookList);

        //Set to localStorage 
        localStorage.setItem('books', JSON.stringify(books));

    } else {
        //Get Books from localStorage 
        var books = JSON.parse(localStorage.getItem('books'));
        //Add books to array
        books.push(bookList);
        //Re-set back to localStorage
        localStorage.setItem('books', JSON.stringify(books))
    }

    fetchBooks();
    
     //prevent form from submitting
     e.preventDefault();
}

//Fetch Books

function fetchBooks(){
     //Get Books from localStorage 
     var books = JSON.parse(localStorage.getItem('books'));
     var bookListe = document.querySelector('#list');

     for(var i = 0; i < books.length; i++){
         var bookName = books[i].bookName;
         
         bookListe.innerHTML += '<li>'+
                                '<small class="name">'+bookName+
                                '</small>'+
                                '<small class="delete">delete</small>'+
                                '</li>';
     }
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