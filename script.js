// creates 256 divs and appends them to the parent div class 'container'
makeDivs = () => {
    for ( let i = 0; i < 256; i++) {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('grid');
    }
}


// make function that makes hover color remain active when mouse leaves the element

function leaveActive() {
  const click = document.getElementsByClassName('.grid').addEventListener('click');
  



    
}









makeDivs();


