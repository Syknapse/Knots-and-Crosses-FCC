const cells = document.querySelectorAll('[data-select="play-area"]')

cells.forEach( cell => {
    cell.addEventListener( 'click', event => {
        markCell(event.currentTarget)
    })
})

function markCell(target) {
    target.classList.add('marked')
    console.log(target)
}