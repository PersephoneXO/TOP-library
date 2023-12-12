const myLibrary=[];

/*Book Constructor*/
function Book(title,author,numPages,readStatus){
    this.title=title;
    this.author=author;
    this.numPages=numPages;
    this.readStatus=readStatus;

    this.info=function(){
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${readStatus}`;
    }
}

const cardContainer=document.getElementById("bookcards-container");
let bookCount=0;
function createBookCard(myLibrary){
    for(let i=bookCount;i<myLibrary.lenght;i++){
        let newCard=document.createElement("p")
    }
}


function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}
