/* adicionar blocos e hastes */
const easy = document.getElementById("easy")
const medium = document.getElementById("medium")
const hard = document.getElementById("hard")
const gameArea = document.getElementById("game")
const victoryScreen = document.getElementById("victory")
let count = 0


const createDivs = (target) =>{
    const divStart = document.createElement('div')
    divStart.id = "start"
    divStart.className = "container-block"
    target.appendChild(divStart)
    
    const divOffSet = document.createElement('div')
    divOffSet.id = "offSet"
    divOffSet.className = "container-block"

    target.appendChild(divOffSet)

    const divEnd = document.createElement('div')
    divEnd.id = "end"
    divEnd.className = "container-block"

    target.appendChild(divEnd)
}

const createHastes = (num) =>{
    const haste = document.createElement("div")
    if(num === 1){
        
        haste.className = "hastes"
        haste.id = "haste1"
    }
    else if(num === 2){
        
        haste.className = "hastes"
        haste.id = "haste2"
    }
    else if(num === 3){
        
        haste.className = "hastes"
        haste.id = "haste3"
    }
    
    
    return haste;
}

const insertHastes = () => {
  
    const start = document.getElementById("start")
    start.appendChild(createHastes(1))

    const offSet = document.getElementById("offSet")
    offSet.appendChild(createHastes(2))

    const end = document.getElementById("end")
    end.appendChild(createHastes(3))

}

createDivs(gameArea)
insertHastes()

const createBlocks = (widthBlock, heightBlock, id) => {
    const randomColor = Math.floor(Math.random()* 16777215 ).toString(16);
    const block = document.createElement("div")
    block.className = "block"
    block.id = `block${id}`
    block.style.background = `#${randomColor}`
    block.style.width = widthBlock    
    block.style.height = heightBlock    
    return block
}

const insertBlocks = (level, target) =>{
    let numberOfBlocks = 0 
    let width = 0
    let height = 0  
    let reduceWith = 0

    if(level === "easy"){
        numberOfBlocks = 2
        width = 60
        height = 36 
        reduceWith = 16

    }else if(level === "medium"){
        numberOfBlocks = 4
        width = 70
        height = 20
        reduceWith = 14 

    }else{
        numberOfBlocks = 6
        width = 80
        height = 12 
        reduceWith = 11
    }
    let num = numberOfBlocks;
    for(let block = 0; block < numberOfBlocks; block++){
     
        target.appendChild(createBlocks(`${width}px`,`${height}px`, num))
        width -= reduceWith
        num--;
    }

}


const reset = () =>{
    const blocks = document.getElementsByClassName("block")
    // const hastes = document.getElementsByClassName("hastes")
    // const containerBlock = document.getElementsByClassName("container-block")
   
    while(blocks.length > 0){
        blocks[0].remove()
    }

    // while(hastes.length > 0){
    //     hastes[0].remove()
    // }

    // while(containerBlock.length > 0){
    //     containerBlock[0].remove()
    // }
    count = 0;
}

const start = (nivel) => {
    reset()
    victoryScreen.classList.add("hidden")
    const hasteStart  = document.querySelector("div#start div.hastes")
    insertBlocks(nivel, hasteStart)

    a = true;
}
start("easy");
easy.addEventListener('click',() => {
    start("easy")
    
})

medium.addEventListener('click',() =>{
    start("medium")
})

hard.addEventListener('click',() =>{
    start("hard")

})
/* adicionar blocos e hastes */

/* condição de vitoria */
const winningCondition = () =>{
    const totalBlocks = document.getElementsByClassName("block").length
    const blocksInEnd = haste3.childElementCount
    const movements = document.getElementById("movements")
    if(totalBlocks === blocksInEnd){
        victoryScreen.classList.remove("hidden")
        movements.innerText = count
    }
    
}
/* condição de vitoria */

/* mover blocos */

const haste1 = document.getElementById("haste1");
const haste2 = document.getElementById("haste2");
const haste3 = document.getElementById("haste3");
const start1 = document.getElementById("start");
const offSet = document.getElementById("offSet");
const end = document.getElementById("end");
let selectBlock;


const mudarBloco = (selectBlock, haste) => {

        let lastBloco = haste.lastElementChild;
        if(lastBloco === null || lastBloco.clientWidth > selectBlock.clientWidth ){
            haste.appendChild(selectBlock);
            selectBlock = undefined;
            count++;
        }
        
    return selectBlock;
}
start1.addEventListener('click',() =>{
    
    if (selectBlock !== undefined){
        selectBlock = mudarBloco(selectBlock, haste1);
        console.log(count)
    }
    else if (haste1.lastElementChild !== null ){
        selectBlock = haste1.lastElementChild;
    }
    
    
});
offSet.addEventListener('click',() =>{
    
    if(selectBlock !== undefined){
        selectBlock =  mudarBloco(selectBlock, haste2);
        console.log(count)
    }

    else if(haste2.lastElementChild !== null ){
        selectBlock = haste2.lastElementChild;
    }

    
});
end.addEventListener('click',() =>{
    
    if(selectBlock !== undefined){
        selectBlock = mudarBloco(selectBlock, haste3);
        console.log(count)
    }
    else if(haste3.lastElementChild !== null ){
        selectBlock = haste3.lastElementChild;
    }

    winningCondition();
});


/* mover blocos */
