const newUl = document.getElementById('new-book');
const helloThereBtn = document.getElementById('addBook');
const lel = document.getElementById('addBookStorage');
const formExampleDiv = document.getElementById('form-example');
const formElement = document.createElement('form');


let myLibrary = [
    '11/22/63 by Stephen King',
    'Fahrenheit 451 by Ray Bradbury',
    'One Piece by Eiichiro Oda'
];

function Book() {
    // the constructor...
}

if (formElement.style.display)

    helloThereBtn.addEventListener('click', (e) => {
        e.preventDefault()
        formElement.style.display = 'block';
        helloThereBtn.textContent = 'Back';
    })

function createFormContent(labelTextContent, labelValue, inputValue) {

    const divElement = document.createElement('div');
    divElement.className = 'form-content';

    const labelElement = document.createElement('label');
    labelElement.textContent = labelTextContent;
    labelElement.setAttribute('for', labelValue);

    const inputElement = document.createElement('input');
    inputElement.setAttribute('name', inputValue);

    divElement.append(labelElement);
    divElement.append(inputElement);

    return divElement;

}


function addBookToLibrary() {
    // formElement ? onclick() : onclick()
}

addBookToLibrary()

function renderForm() {


    formElement.style.display = 'none';

    formElement.append(createFormContent('Title: ', 'title', 'title'));
    formElement.append(createFormContent('Author: ', 'author', 'author'));
    formElement.append(createFormContent('Pages: ', 'pages', 'pages'));
    formElement.append(createFormContent('Read: ', 'read', 'read'));

    formExampleDiv.insertBefore(formElement, formExampleDiv.firstChild);


}

renderForm()


function renderingBooks() {
    myLibrary.forEach(book => {
        const liElement = document.createElement('li');
        liElement.textContent = book;
        newUl.append(liElement);
    });
}

renderingBooks();