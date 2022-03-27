
makeDivs = () => {
    for ( let i = 0; i < 256; i++) {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('grid');
    }
}

makeDivs();