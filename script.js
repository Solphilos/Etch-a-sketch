// creates 256 divs and appends them to the parent div class 'container'. Adds id to each, numbered 1-256.
makeDivs = () => {
    for ( let i = 1; i < 257; i++) {
        const container = document.querySelector('#container');
        const div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('id', 'grid' + i);  
    }
    addListen();
}
     
//////////////////////////////////////////////////////////////////////////////////////////////
   //  adds event listener to container

function addListen() {
    document.querySelector('#container').addEventListener('mouseover', getIdName);
}

  // when mouseover event enters element, identify id name ('grid1', 'grid2', etc.)

function getIdName() {
     let name = document.querySelectorAll(':hover')
     let array = Array.from(name);
     let idName = array.pop();
     console.log(idName)

}




// run functions
makeDivs();
