let mode =  'time'
const output = document.getElementById('output')
const fullButton = document.getElementById('full')
const dateButton = document.getElementById('date')
const timeButton = document.getElementById('time')

function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}

fullButton.onclick = bindMode('full')

dateButton.onclick = bindMode('date')

timeButton.onclick = bindMode('time')

function update () {
    output.innerText = format(mode)
}

setInterval(update, 1000)
update()

function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now
        default:
            return now.toLocaleTimeString()
    }
}