// array

const inputElement = document.getElementById('title')
const createButton = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = ['note1', 'note2', 'note3']

function render () {
    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }

    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

render()

createButton.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    listElement.insertAdjacentHTML("beforeend", inputElement.value)
    inputElement.value = ''
}

function getNoteTemplate(title) {
    return `<li>
        <span>${title}</span>
        <span>
            <span>&check;</span>
            <span>&times;</span>
        </span>
    </li>`
}

// object

const person = {
    firstName: 'Aida',
    lastName: 'Parks',
    age: 2006,
    languages: ['ru', 'en', 'de'],
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    },
    isProgrammer: true
}