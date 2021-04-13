'use strict';

let sectionElement = document.getElementById('images');
let leftImageElement = document.getElementById('leftimg');
let middleImageElement = document.getElementById('middleimg');
let rightImageElement = document.getElementById('rightimg');



let maxAttempts = 10;

let voterAttempts = 0;


let leftIndex;
let middleIndex;
let rghitIndex;

let namesArr=[];
let votesArr=[];
let shownArr=[];
let imagesGroup = [];


//let imgShowArr = [];

//imgShowArr[0] = document.getElementById('leftimg');
//imgShowArr[1] = document.getElementById('middleimg');
//imgShowArr[2] = document.getElementById('rightimg');



function Mallitems(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.appear = 0;
    Mallitems.allProducts.push(this);
    namesArr.push(this.name);

}
Mallitems.allProducts = [];



new Mallitems('bag', 'img/bag.jpg');
new Mallitems('banana', 'img/banana.jpg');
new Mallitems('bathroom', 'img/bathroom.jpg');
new Mallitems('boots', 'img/boots.jpg');
new Mallitems('breakfast', 'img/breakfast.jpg');
new Mallitems('bubblegum', 'img/bubblegum.jpg');
new Mallitems('chair', 'img/chair.jpg');
new Mallitems('cthulhu', 'img/cthulhu.jpg');
new Mallitems('dog-duck', 'img/dog-duck.jpg');
new Mallitems('dragon', 'img/dragon.jpg');
new Mallitems('pen', 'img/pen.jpg');
new Mallitems('pet-sweep', 'img/pet-sweep.jpg');
new Mallitems('scissors', 'img/scissors.jpg');
new Mallitems('shark', 'img/shark.jpg');
new Mallitems('sweep', 'img/sweep.png');
new Mallitems('tauntaun', 'img/tauntaun.jpg');
new Mallitems('unicorn', 'img/unicorn.jpg');
new Mallitems('usb', 'img/usb.gif');
new Mallitems('water-can', 'img/water-can.jpg');
new Mallitems('wine-glass', 'img/wine-glass.jpg');

console.log(Mallitems.allProducts);

function generatRandomind() {
    return Math.floor(Math.random() * Mallitems.allProducts.length);
}

function renderItems() {

    leftIndex = generatRandomind();
    middleIndex = generatRandomind();
    rghitIndex = generatRandomind();

    while (leftIndex === middleIndex || leftIndex === rghitIndex || rghitIndex === middleIndex|| imagesGroup.includes(leftIndex) || imagesGroup.includes(middleIndex) || imagesGroup.includes(rghitIndex))  {
        middleIndex = generatRandomind();
        rghitIndex = generatRandomind();
    }
    //console.log(allProducts[leftIndex].source);
    // console.log(allProducts[middleIndex].source);
    //console.log(allProducts[rghitIndex].source);
    imagesGroup = [];

    leftImageElement.src = Mallitems.allProducts[leftIndex].source;
    Mallitems.allProducts[leftIndex].appear++;
    // imgShowArr[0].alt = allProducts[leftIndex].name;

    middleImageElement.src = Mallitems.allProducts[middleIndex].source;
    Mallitems.allProducts[rghitIndex].appear++;
    // imgShowArr[1].alt = allProducts[middleIndex].name;

    rightImageElement.src = Mallitems.allProducts[rghitIndex].source;
    Mallitems.allProducts[middleIndex].appear++;
    // imgShowArr[2].alt = allProducts[rghitIndex].name;
    imagesGroup.push(leftIndex);
    imagesGroup.push(middleIndex);
    imagesGroup.push(rghitIndex);
    console.log(imagesGroup);



}


renderItems();

sectionElement.addEventListener('click', handleClick);

function handleClick(event) {
    console.log(event.target.id);

    voterAttempts++;
    console.log(voterAttempts);

    if (voterAttempts <= maxAttempts) {
        if (event.target.id === 'middleimg') {

            Mallitems.allProducts[middleIndex].votes++;
            //Mallitems.allProducts[leftIndex].appear++;
            //Mallitems.allProducts[rghitIndex].appear++;

        }

        else if (event.target.id === 'leftimg') {
            console.log(rghitIndex);


            Mallitems.allProducts[leftIndex].votes++;
            // Mallitems.allProducts[middleIndex].appear++;
            //Mallitems.allProducts[rghitIndex].appear++;
        }
        else if (event.target.id === 'rightimg') {

            Mallitems.allProducts[rghitIndex].votes++;
            // Mallitems.allProducts[middleIndex].appear++;
            // Mallitems.allProducts[leftIndex].appear++;
        } else {

            voterAttempts--;
        }

        renderItems();
    }
    else {
        let resultList = document.getElementById('voote-result');
        resultList.addEventListener('click', vooterclickbotton);

        images.removeEventListener('click', handleClick);
    }
}
function vooterclickbotton() {
    let vooteResult = document.getElementById('result-list');

    let busmallItems;

    for (let j = 0; j < Mallitems.allProducts.length; j++) {
        votesArr.push(Mallitems.allProducts[j].votes);
        shownArr.push(Mallitems.allProducts[j].appear);

        busmallItems = document.createElement('li');
        vooteResult.appendChild(busmallItems);
        busmallItems.textContent = `${Mallitems.allProducts[j].name} take ${Mallitems.allProducts[j].votes} votes and shown for ${Mallitems.allProducts[j].appear} times`;

    }
    //resultList.textContent = busmallItems;
    chart()

    resultList.removeEventListener('click', vooterclickbotton);
}





function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    
    let chart= new Chart(ctx,{
     
        // what type is the chart
     type: 'bar',
  
    
     //  the data for showing
     data:{
      
        //  for the names
        labels: namesArr,
        
        datasets: [
          {
          label: 'busmall votes',
          data: votesArr,
          backgroundColor: [
            'rgb(251, 93, 76)',
          ],
    
          borderWidth: 1
        },
  
        {
          label: 'busmall shown',
          data: shownArr,
          backgroundColor: [
            'black',
          ],
    
          borderWidth: 1
        }
        
      ]
      },
      options: {}
    });
    
  }