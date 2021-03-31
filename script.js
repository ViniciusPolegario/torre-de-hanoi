
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const gameArea = document.getElementById("game");
const victoryScreen = document.getElementById("victory");
let oldWidth = window.innerWidth;
let count = 0;
let reduceWith = 0;
let selectBlock;

const createDivs = (target) =>{
    const divStart = document.createElement('div');
    divStart.id = "start";
    divStart.className = "container-block";
    target.appendChild(divStart);
    
    const divOffSet = document.createElement('div');
    divOffSet.id = "offSet";
    divOffSet.className = "container-block";

    target.appendChild(divOffSet);

    const divEnd = document.createElement('div');
    divEnd.id = "end";
    divEnd.className = "container-block";

    target.appendChild(divEnd);
}

const createHastes = (num) =>{
    const haste = document.createElement("div")
    if(num === 1){
        
        haste.className = "hastes";
        haste.id = "haste1";
    }
    else if(num === 2){
        
        haste.className = "hastes";
        haste.id = "haste2";
    }
    else if(num === 3){
        
        haste.className = "hastes";
        haste.id = "haste3";
    }
    
    
    return haste;
}

const insertHastes = () => {
  
    const start = document.getElementById("start");
    start.appendChild(createHastes(1));

    const offSet = document.getElementById("offSet");
    offSet.appendChild(createHastes(2));

    const end = document.getElementById("end");
    end.appendChild(createHastes(3));

}

createDivs(gameArea);
insertHastes();

const createBlocks = (widthBlock, heightBlock, id) => {
    const randomColor = Math.floor(Math.random()* 16777215 ).toString(16);
    const block = document.createElement("div");
    block.className = "block";
    block.id = `block${id}`;
    block.style.background = `#${randomColor}`;
    block.style.width = widthBlock;    
    block.style.height = heightBlock;
    return block;
}

const insertBlocks = (level, target) =>{
    let numberOfBlocks = 0 
    let width = 0
    let height = 0  
    

    if(level === "easy"){
        numberOfBlocks = 2
        width = 60
        height = 45
        reduceWith = 16

    }else if(level === "medium"){
        numberOfBlocks = 4
        width = 70
        height = 22.5
        reduceWith = 14 

    }else{
        numberOfBlocks = 6
        width = 80
        height = 15 
        reduceWith = 11
    }

    if(window.innerWidth >= 768){
        width *= 2
        reduceWith *= 2
    }
    let num = numberOfBlocks;
    for(let block = 0; block < numberOfBlocks; block++){
     
        target.appendChild(createBlocks(`${width}px`,`${height}px`, num));
        width -= reduceWith;
        num--;
    }

}


const reset = () =>{
    const blocks = document.getElementsByClassName("block")
   
    while(blocks.length > 0){
        blocks[0].remove();
    }

    count = 0;
}

const start = (nivel) => {
    reset();
    victoryScreen.classList.add("hidden");
    const hasteStart  = document.querySelector("div#start div.hastes");
    insertBlocks(nivel, hasteStart);

}
start("easy");
easy.addEventListener('click',() => {

    start("easy");
    selectBlock = undefined;
})

medium.addEventListener('click',() =>{

    start("medium");
    selectBlock = undefined;
})

hard.addEventListener('click',() =>{
    start("hard");
    selectBlock = undefined;
})

const winningCondition = () =>{

    const totalBlocks = document.getElementsByClassName("block").length;
    const blocksInEnd = haste3.childElementCount;
    const movements = document.getElementById("movements");

    if(totalBlocks === blocksInEnd){
        victoryScreen.classList.remove("hidden");
        movements.innerText = count;
    }
}

const haste1 = document.getElementById("haste1");
const haste2 = document.getElementById("haste2");
const haste3 = document.getElementById("haste3");
const start1 = document.getElementById("start");
const offSet = document.getElementById("offSet");
const end = document.getElementById("end");

const mudarBloco = (selectBlock, haste) => {

    const lastBloco = haste.lastElementChild;

    if (lastBloco === selectBlock ){
        selectBlock.classList.remove("selectBlock")
        haste.appendChild(selectBlock);
        selectBlock = undefined;
    }
    else if(lastBloco === null || lastBloco.clientWidth > selectBlock.clientWidth ){
        selectBlock.classList.remove("selectBlock")
        haste.appendChild(selectBlock);
        selectBlock = undefined;
        count++;
    }
        
    return selectBlock;

}

start1.addEventListener('click',() =>{
    
    if (selectBlock !== undefined){
        selectBlock = mudarBloco(selectBlock, haste1);
    }
    else if (haste1.lastElementChild !== null ){
        selectBlock = haste1.lastElementChild;
        selectBlock.classList.add("selectBlock");
    }
    
});

offSet.addEventListener('click',() =>{
    
    if(selectBlock !== undefined){
        selectBlock =  mudarBloco(selectBlock, haste2);
    }

    else if(haste2.lastElementChild !== null ){
        selectBlock = haste2.lastElementChild;
        selectBlock.classList.add("selectBlock");
    }

});

end.addEventListener('click',() =>{
    
    if(selectBlock !== undefined){
        selectBlock = mudarBloco(selectBlock, haste3);
    }
    else if(haste3.lastElementChild !== null ){
        selectBlock = haste3.lastElementChild;
        selectBlock.classList.add("selectBlock");
    }

    winningCondition();

});

const resizeBlocks = () =>{

    const blocks = document.getElementsByClassName("block");
    
    if(window.innerWidth > 768 && oldWidth <= 768){
        for(let block = 0; block < blocks.length; block++){
            let width = blocks[block].style.width.replace("px","")
           
                 blocks[block].style.width = `${Number(width) * 2}px`;

         
        }
        oldWidth = window.innerWidth;

    }

    if(window.innerWidth < 768 && oldWidth >= 768){
        for(let block = 0; block < blocks.length; block++){

            let width = blocks[block].style.width.replace("px","")
            blocks[block].style.width = `${Number(width) / 2}px`;
        }

        oldWidth = window.innerWidth

    }
}

window.addEventListener('resize', resizeBlocks);
