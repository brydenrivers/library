// LIBRARY
//books
theHobbit= new book('The Hobbit', 'JRR Toilken','Read',0,'theHobbit');
theLordRings= new book('The Lord of the Rings', 'JRR Toilken','Read',1, 'theLordRings');
animalFarm= new book('Animal Farm', 'Geroge Orwell','Not Read',2,'animalFarm');
const container = document.querySelector('.container');

let myLibrary = [theHobbit, theLordRings, animalFarm];
let booksAdded = []

function book(title, author, read, index, id){
    this.title=title
    this.author=author
    this.read=read
    this.index=index
    this.id=id
    this.changeRead=function(){
        if(this.read=='Read'){
            this.read='Not Read'
            console.log(this.read)
        }
        else{
            console.log(this.read+ ' before2')
            this.read='Read'
            console.log('readread not')
            console.log(this.read + ' after2' )
        }
    }

    // this.info= function(){

    // }
}

function addBookToLibrary(){
    console.log('entered')

    const bookTitle = document.getElementById('title')
    const bookAuthor = document.getElementById('Author')
    const bookRead = document.getElementById('form')
    const index=myLibrary.length;
    const id=bookTitle.value.replace(/ /g, '');

    myLibrary.push( new book(bookTitle.value, bookAuthor.value, bookRead.elements['Read'].value, index, id))

    libraryIter(myLibrary[myLibrary.length-1], myLibrary.length-1)
    // const btnRemove = document.querySelectorAll('.removeBook');
    // btnRemove.forEach(button => button.addEventListener('click', removeBookCard))
}

function libraryIter(books, index){
    // if(booksAdded.includes(books.id)){
    //     console.log(booksAdded+' and '+books.id)
    //     return
    // }
    // else{
        booksAdded.push(books.id)
        const book = document.createElement('div');
        book.classList.add('bookCard');
        book.classList.add(books.id);
        book.textContent = 'Book Name';
        book.setAttribute('id', books.id);
        container.appendChild(book);
        const bookTitle = document.createElement('h3')
        bookTitle.textContent = books.title;
        console.log(books.title)
        book.appendChild(bookTitle);
        const bookAuthor = document.createElement('p')
        bookAuthor.textContent = 'Author: '+books.author;
        book.appendChild(bookAuthor);

        const bookRead = document.createElement('p')
        bookRead.textContent = 'Read: '+books.read;
        book.appendChild(bookRead);
        const changeRead = document.createElement('button')
        changeRead.textContent = 'Change Read Status';
        changeRead.classList.add(books.id);
        changeRead.addEventListener('click', readStatus)

        book.appendChild(changeRead);


        const removeBook = document.createElement('button')
        removeBook.textContent = 'Remove Book';
        removeBook.setAttribute('id', index);
        removeBook.classList.add('removeBook');
        console.log(myLibrary.length)
        //line bellow adds an event listener to the remove book button
        removeBook.addEventListener('click', removeBookCard)
        book.appendChild(removeBook);

    // }

}
function readStatus(read){
    console.log(read)
    let classes = read.target.classList

    myLibrary.forEach(item => {if(classes.contains(item.id)){
        console.log(item)
        item.changeRead()
        let bookClass=item.id
        let newReadStatus = document.getElementById(bookClass).childNodes
        console.log(item.id)
        console.log(bookClass)
        newReadStatus[3].textContent='Read: '+item.read

    }})


}

function displayBooks(library){
    library.forEach(libraryIter);
}

function removeBookCard(item){
    //quicks in whe ''remove button is clicked, it removes all books cards, then it removes from the library the book object that corresponds with the clicked button. Then it calls up the display books function to add all remaning book cars
    console.log('we entered')


    let delBook = document.getElementById(booksAdded[item.target.id])
    for(let i=0;i<myLibrary.length;i++){
        delBook = document.getElementById(myLibrary[i].id)
        console.log(myLibrary[i].id+' aqui')
        console.log(delBook)

        delBook.remove()

    }

    myLibrary.splice(item.target.id,1)
    booksAdded.splice(item.target.id,1)
    console.table(myLibrary)
    console.table(booksAdded)
    console.log(delBook)
    console.table()
    displayBooks(myLibrary)
    // const btnRemove = document.querySelectorAll('.removeBook');
    // btnRemove.forEach(button => button.addEventListener('click', removeBookCard))
}

displayBooks(myLibrary)
const newBook = document.getElementById('newBook')
console.log(newBook)
newBook.addEventListener('click', addBookToLibrary)

// const btnRemove = document.querySelectorAll('.removeBook');
// btnRemove.forEach(button => button.addEventListener('click', removeBookCard))



