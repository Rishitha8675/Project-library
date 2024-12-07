let myLibrary=[];

function Book(book_name,author,size,cost,yearofpublication){
    this.title=book_name;
    this.author=author;
    this.pages=size;
    this.cost=cost;
    this.yop=yearofpublication;
}

function addBookToLibrary(book_name,author,size,cost,yearofpublication){
        const NewBook = new Book(book_name,author,size,cost,yearofpublication);
        myLibrary.push(NewBook);

}

function display(){
    for(let i=0;i<myLibrary.length;i++){
        console.log(myLibrary[i]);
    }
}

