//DOM elements
const bookContainer=document.querySelector('.book-container');
const openModal=document.querySelector('.add-book-button');
const closeModal=document.querySelector('#cancel-button');
const modal=document.querySelector('.modal-container');
const addBook=document.querySelector('#add-book-final');
const addBookDialog=document.querySelector('#add-book-dialog');
const addBookForm=document.querySelector('.add-book-form')

//open add book modal
openModal.addEventListener('click',()=>{
    addBookDialog.showModal();
});

//close the add book modal
closeModal.addEventListener('click',()=>{
    modal.classList.remove('active');
});


//array that contains all books
const myLibrary=[];

/*Book Constructor*/
function Book(title,author,numPages,readStatus){
    this.title=title;
    this.author=author;
    this.numPages=numPages;
    this.readStatus=readStatus;
}


//take user input and store new book info
function newBookInfo(){
    addBookForm.addEventListener('submit',(e)=>{
        e.preventDefault();

    })
}


function addBookToLibrary(){
    bookContainer.innerHTML='';
    for(let i=0;i<myLibrary.length;i++){
        //displayBook function
    }
}
