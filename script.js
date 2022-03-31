// creates a given number of divs and appends them to the parent div class 'container'. Adds id to each, in ascending numerical order
makeDivsGrid = (divNum) => {
    for ( let i = 1; i < divNum; i++) {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('id', 'grid' + i);  
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
     let idName = array.pop();
     idName.classList.add('active');
     document.querySelector('.container').classList.remove('active');

}

// make new function that clears grid and creates a prompt asking user for new grid dimensions (how many per side, not changing container size)


// takes user input number and uses it to find dimensions that will be applied to the divs in new grid so they conform to dimensions of parent container

function calcGrid(numPerSide) {
    let divHeight = 736 / numPerSide
    
    //use divHeight value to set width and height of divs
}
  







function clearGrid() {

}







makeDivsGrid(257);
