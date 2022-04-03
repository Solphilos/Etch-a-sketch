// creates a given number of divs and appends them to the parent div class 'container'. Adds id to each, in ascending numerical order
makeDivsGrid = (divNum) => {
        let numbAtSides = divNum * divNum + 1;
        let divHeight = 736 / divNum - 2;
      
     for ( let i = 1; i < numbAtSides; i++) {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('id', 'grid' + i); 
        div.style.height = `${divHeight}px`;     
        div.style.width = `${divHeight}px`;
        div.style.border = '1px solid #0000FF';
       }
    addListen();
    
}
     
   
function addListen() {
    document.querySelector('.container').addEventListener('mouseover', getIdName);
}

  // when mouse pointer enters element: get nodelist, convert nodelist to array, select last item in array and use to add new class to that element. 

function getIdName() {
     let name = document.querySelectorAll(':hover')
     let array = Array.from(name);
     let idName = array.pop()
     idName.classList.add('active');
     document.querySelector('.container').classList.remove('active');

}


function newGrid() {
    replaceGrid();
    let answer = prompt('Enter number of rows per side')     // find out why this makes a new grid instead of replacing the old one
    if (answer < 100) {
        makeDivsGrid(answer);
    }
   else if (answer >= 100) {
       alert('Please enter a number less than 99')
   }
   document.querySelector('.container').removeEventListener('mouseover', erase);
}





function addListen2() {
    document.querySelector('.container').addEventListener('mouseover', erase);
}



function erase() {                                     // mouseover event removes event listener responsible for adding "active" class to div elements
    let name = document.querySelectorAll(':hover')
     let array = Array.from(name);
     let idName = array.pop()
     idName.classList.remove('active');
     document.querySelector('.container').removeEventListener('mouseover', getIdName)
     addListen2()
}




function clearGrid() {
   let name = document.querySelectorAll('div.container div')  // returns divs inside div class container, loops through each removing "active" class
   for (let i = 0; i < name.length; i++) {
    name[i].classList.remove('active');
   }
}





function replaceGrid(){
    let name = document.querySelectorAll('div.container div')  // returns divs inside div class container, loops through each....
    for (let i = 0; i < name.length; i++) {
        name[i].remove();
 }
}


makeDivsGrid(16);




