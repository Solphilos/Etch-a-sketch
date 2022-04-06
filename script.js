

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
    div.style.border = '1px solid grey';
    container.style.border = '2px solid grey'
   }
addListen();

}
 
addListen = () => document.querySelector('.container').addEventListener('mouseover', getIdName);


addListen2 = () => document.querySelector('.container').addEventListener('mouseover', erase);


addListen3 = () => document.querySelector('.container').addEventListener('mouseover', randomColor);



// when mouse pointer enters element: get nodelist, convert nodelist to array, select last item in array and use to add new class to that element. 

function getIdName() {
 let name = document.querySelectorAll(':hover')
 let array = Array.from(name);
 let idName = array.pop()
 //idName.classList.add('active');
 idName.style.backgroundColor = "lime"
 //document.querySelector('.container').classList.remove('active');
 document.querySelector('.container').style.backgroundColor = "white";
 

}



function newGrid() {
    replaceGrid();
    document.querySelector('.container').removeEventListener('mouseover', randomColor);
       window.answer = prompt('Enter number of rows per side') 
           
        if (window.answer < 100 && answer > 0) {
            makeDivsGrid(answer);
         }
        else if (window.answer >= 100) {
            alert('Please enter a number less than 99')
        }
        else if (window.answer < 1) {
            makeDivsGrid(16);
        }
        
       
       
        document.querySelector('.container').removeEventListener('mouseover', erase);
}



function erase() {  
    document.querySelector('.container').removeEventListener('mouseover', randomColor);  // mouseover event removes event listener responsible for adding "active" class to div elements
    let name = document.querySelectorAll(':hover')
    let array = Array.from(name);
    let idName = array.pop()
    idName.classList.remove('active');
    document.querySelector('.container').removeEventListener('mouseover', getIdName)
    addListen2()
    idName.style.backgroundColor = "white"
    
}




function clearGrid() {
    document.querySelector('.container').removeEventListener('mouseover', randomColor);
    let name = document.querySelectorAll('div.container div')  // returns divs inside div class container, loops through each removing "active" class
    for (let i = 0; i < name.length; i++) {
   /// name[i].classList.remove('active');

    name[i].remove();
    }
     if (window.answer > 0){
      makeDivsGrid(window.answer)
    }
    else {
        makeDivsGrid(16)
    }
}


function replaceGrid(){
    let name = document.querySelectorAll('div.container div')  // returns divs inside div class container, loops through each and removes them
    for (let i = 0; i < name.length; i++) {
    name[i].remove();
}
}


draw = () => {
    document.querySelector('.container').removeEventListener('mouseover', erase);
     addListen();
}



// generate random number between 0-255, three times. Place the three returned values into an array and assign as color values

function randomColor() {   
    document.querySelector('.container').removeEventListener('mouseover', getIdName)
    document.querySelector('.container').removeEventListener('mouseover', erase)
    addListen3()
    const array = [];                 
     for (let i = 0; i < 3; i++) {
    let numb = Math.floor(Math.random() * 256)
    array.push(numb);
}
    let string = array.toString();
    let name = document.querySelectorAll(':hover')
    let anotherArray = Array.from(name);
    let t = anotherArray.pop();
    t.style.backgroundColor = `rgb(${string})`;   
    document.querySelector('.container').style.backgroundColor = "white";
    document.getElementById('randomColor').style.backgroundColor = "white";

     
}










makeDivsGrid(16);
