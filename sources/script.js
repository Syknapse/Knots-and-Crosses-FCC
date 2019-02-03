const cells = document.querySelectorAll('[data-select="play-area"]')

cells.forEach( cell => {
    cell.addEventListener( 'click', event => {
        console.log('event: ', event)
    })
})