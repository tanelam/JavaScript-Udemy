//Book constructor --> Creating the book object

function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor --> Add, delete, show basically CRUD actions

function UI(){

  //Add book to list
  UI.prototype.addBookToList = function(book){
    const list = document.getElementById("book-list")
    //create table row element
    const row = document.createElement("tr")
    //instert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row)
  }

  UI.prototype.clearFields = function(){
    const title = document.getElementById("title"),
          author = document.getElementById("author"),
          isbn = document.getElementById("isbn");

    title.value = "";
    author.value = "";
    isbn.value = "";
  }

  UI.prototype.showAlert = function(message, className){
    //create a div
    const div = document.createElement("div");
    //add class name
    div.className = `alert ${className}`;
    //create text node for message
    div.appendChild(document.createTextNode(message));
    //insert into the DOM. Get parent
    const container = document.querySelector(".container")
    const form = document.querySelector("#book-form")
    //insert alert/div BEFORE the form
    container.insertBefore(div, form)
    //timeout after 3 sec
    setTimeout(function(){document.querySelector(".alert").remove()}, 2000);
  }

  //delete book
  UI.prototype.deleteBook = function(target){
    if(target.className === "delete"){
      target.parentElement.parentElement.remove();
    }
  }
}

//Event Listeners to add book

document.getElementById("book-form").addEventListener("submit", function(e){
  e.preventDefault();

  //Get form values
  const title = document.getElementById("title").value,
        author =  document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;

  //Instantiating a book
  const book = new Book(title, author, isbn);

  //Instantiating a UI
  const ui = new UI();

  //Validate
  if(title === "" || author === "" || isbn === ""){
    //error alert
    ui.showAlert("Please fill in all fields", "error")
  }else{
    //Add book to list
    ui.addBookToList(book);
    //show alert
    ui.showAlert("Book Added!", "success")
    //Clear form
    ui.clearFields();
  }
})

//event listener for delete
document.getElementById("book-list").addEventListener("click", function(e){
  e.preventDefault();

  const ui = new UI();

  ui.showAlert("Book Removed!", "success");

  ui.deleteBook(e.target);
})
