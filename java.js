//letters

let letters="abcdefghijklmnopqrstuvwxyz"

//get array from letters
let lettersArray=Array.from(letters)

//select letters container
let lettersContainer=document.querySelector(".letters")

//generate letters forLoop
lettersArray.forEach(letter =>{

    //create span
    let span=document.createElement("span")

    //create letter text
    let theLetter=document.createTextNode(letter)

    //append text to span
    span.appendChild(theLetter)

    //add class to span
    span.className="letter-box"

    //append span to container
    lettersContainer.appendChild(span)
})

//object of words +categories
 let words={
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "interstellar", "whiplash", "Memento", "Coco", "Up"],
    people: ["albert einstein","mohamed", "ali", "shika", "loza", "essam"],
    countries: ["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"]
}

//get random property
let allKeys=Object.keys(words);

let randomPropNumber=Math.floor(Math.random() * allKeys.length )

let randomPropName=allKeys[randomPropNumber]

let randomPropValue=words[randomPropName]

let randomValueNumber=Math.floor(Math.random() * randomPropValue.length)

let randomValueName=randomPropValue[randomValueNumber] 

//set category info
document.querySelector(".category span").innerHTML=randomPropName

//select letters guess element
let letterContainer=document.querySelector(".letters-guess")

//convert chosen  word to array
let letterAndSpaceArray=Array.from(randomValueName)

//create spans on word
letterAndSpaceArray.forEach(latter =>{
    //create empty span
    let emptySpan=document.createElement("span")

    //if letter is space
    if(latter ==" "){

        //add class name to the span
        emptySpan.className='with-span'
    }

    //append span to the letter guess
   letterContainer.appendChild(emptySpan)
})

//select guess span
let guessSpan=document.querySelectorAll(".letters-guess span")

//let wrong Attempts
let wrongAttempts=0;

//set the draw element;
let theDraw=document.querySelector(".hangman-draw")

//handel clicking on letters
document.addEventListener("click",function(e){
     //set the chose status
    let theStatus=false

if(e.target.className==="letter-box"){

e.target.classList.add("clicked")
//get  clicked letter 
let clickedLetter = e.target.innerHTML.toLowerCase();

//the chosen word
let chosenWord=Array.from(randomValueName.toLowerCase())



chosenWord.forEach((wordLetter , wordIndex) =>  {

if(clickedLetter == wordLetter){

    theStatus =true;

   //loop on all guess span
   guessSpan.forEach((span,spanIndex)=>{

    if(wordIndex === spanIndex){
        span.innerHTML=clickedLetter;
       
    }
   
    
   })

}
});

//if letter is wrong
if(theStatus !== true){
    wrongAttempts++;

    //add class wrong on the draw element
    theDraw.classList.add(`wrong-${wrongAttempts}`)

    //play filed sound
    document.querySelector(".filed").play();

    if(wrongAttempts === 8){
        endGame();
        lettersContainer.classList.add("finished")
    }
    
}





else{
    //play success sound

    document.querySelector(".success").play();
}
}
})



function endGame (){

let div=document.createElement("div")

let textDiv=document.createTextNode(`Game Over ,TheWord IS ${randomValueName}`)

div.appendChild(textDiv)

div.className="popup"

document.body.appendChild(div)

}



function complete(){
    let div=document.createElement("div")

let textDiv=document.createTextNode("Congratulation You Won")

div.appendChild(textDiv)

div.className="popup"

document.body.appendChild(div)
}
