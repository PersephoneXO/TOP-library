//DOM Elements
const addBookDialog=document.querySelector('#add-book-dialog');
const openModal=document.querySelector('.open-modal');
const closeModal=document.querySelector('#cancel-button');
const addBookButton=document.querySelector('#add-book-button');
const addBookForm=document.querySelector('.add-book-form');
const bookContainer=document.querySelector('.book-container');



//Open modal on + button click
openModal.addEventListener('click',(e)=>{
    addBookDialog.showModal();
});

//close modal on x button
closeModal.addEventListener('click',(e)=>{
    addBookDialog.close();
});

//get id from parent div on deleteBook click
bookContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-book-button')){
        let parentId=e.target.parentElement.id;
        let parentBookContainer=document.getElementById(parentId);
        myLibrary.splice(Number(parentId),1);
        parentBookContainer.remove();
        displayBooks();
    }
});



//add book to myLibrary array if requirements are met
addBookButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let newTitle=document.querySelector('#title').value;
    let newAuthor=document.querySelector('#author').value;
    let newNumPages=document.querySelector('#numPages').value;
    let newReadStatus=document.querySelector('#read-status').value;
    addBookToLibrary(newTitle,newAuthor,newNumPages,newReadStatus);
    addBookDialog.close();
    addBookForm.reset();
    displayBooks();
});


//library array that contains all books added by the user
const myLibrary=[];


//Book object constructor
function Book(title, author, numPages, readStatus){
    this.title=title;
    this.author=author;
    this.numPages=numPages;
    this.readStatus=readStatus;
}


//add each book to library
function addBookToLibrary(title,author,numPages,readStatus){
    let newBook=new Book(title,author,numPages,readStatus);
    myLibrary.push(newBook);
}


//display all books in myLibrary as a card
function displayBooks(){
    bookContainer.innerHTML="";

    //loop through all books in the array
    for(let i=0;i<myLibrary.length;i++){
        let bookCard=document.createElement('div');
        bookCard.classList.add('bookCard');
        bookCard.id=i;
        bookCard.appendChild(getTitle(myLibrary[i].title));
        bookCard.appendChild(getAuthor(myLibrary[i].author));
        bookCard.appendChild(getNumPages(myLibrary[i].numPages));
        bookCard.appendChild(getReadStatus(myLibrary[i].readStatus));
        bookCard.appendChild(createDeleteBookButton());
        bookContainer.appendChild(bookCard);
    }
    return bookContainer;
};


//helper functions for displayBooks()
function getTitle(title){
    const titleP=document.createElement('p');
    titleP.textContent=title;
    titleP.classList.add('card-title');
    return titleP;
}

function getAuthor(author){
    const authorP=document.createElement('p');
    authorP.textContent=author;
    authorP.classList.add('card-author');
    return authorP;
}

function getNumPages(numPages){
    const numPagesP=document.createElement('p');
    numPagesP.textContent=numPages;
    numPagesP.classList.add('card-num-pages');
    return numPagesP;
}

function getReadStatus(readStatus){
    const readStatusP=document.createElement('p');
    readStatusP.textContent=readStatus;
    readStatusP.classList.add('card-read-status');
    return readStatusP;
}

function createDeleteBookButton(){
    const deleteBookButton=document.createElement('button');
    deleteBookButton.textContent='x';
    deleteBookButton.classList.add('delete-book-button');
    return deleteBookButton;
}
