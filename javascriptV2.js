//DOM Elements
const addBookDialog=document.querySelector('#add-book-dialog');
const openModal=document.querySelector('.open-modal');
const closeModal=document.querySelector('#cancel-button');
const addBookButton=document.querySelector('#add-book-button');
const addBookForm=document.querySelector('.add-book-form');




//Open modal on + button click
openModal.addEventListener('click',(e)=>{
    addBookDialog.showModal();
});

//close modal on x button
closeModal.addEventListener('click',(e)=>{
    addBookDialog.close();
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

console.log(myLibrary);