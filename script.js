/* adicionar blocos e hastes */
const easy = document.getElementById("easy")
const medium = document.getElementById("medium")
const hard = document.getElementById("hard")
const gameArea = document.getElementById("game")
const victoryScreen = document.getElementById("victory")
let oldWidth = window.innerWidth
let count = 0
let reduceWith = 0
let selectBlock;

const BLOCK_EASY = {
    width: 60,
    height: 45,
    reduceWith: 16,
    totalBlocks: 2
}
const BLOCK_MEDIUM = {
    width: 70,
    height: 22.5,
    reduceWith: 14, 
    totalBlocks: 4,
}

const BLOCK_HARD = {
    width : 80,
    height : 15, 
    reduceWith : 11,
    totalBlocks : 6,
}

const createContainerOfHaste = (id,target) =>{
    const divContainer = document.createElement('div')
    divContainer.className = "container-block"
    divContainer.id = id
    target.appendChild(divContainer)
    
}

const createHastes = (hasteId, targetContainerId) =>{
    const haste = document.createElement("div")
    haste.className = "hastes"
    haste.id = hasteId
    insertHastesInContainer(targetContainerId, haste)
}

const insertHastesInContainer = (targetContainerId, haste) => {
  
    const hasteElement = document.getElementById(targetContainerId)
    hasteElement.appendChild(haste)
}

createContainerOfHaste("start", gameArea)
createContainerOfHaste("offSet", gameArea)
createContainerOfHaste("end", gameArea)

createHastes("haste1", "start")
createHastes("haste2", "offSet")
createHastes("haste3", "end")



const createBlocks = (level) => {
    let blockDimensions
    
    if(level === "easy"){
        blockDimensions = BLOCK_EASY
    }else if(level === "medium"){
        blockDimensions = BLOCK_MEDIUM
    }else{
        blockDimensions = BLOCK_HARD
    }

    let widthBlock = blockDimensions.width

    for(let block = 0; block < blockDimensions.totalBlocks; block++){

        const randomColor = Math.floor(Math.random()* 16777215 ).toString(16);

        const block = document.createElement("div")
        block.style.width = `${widthBlock}px`
        block.style.height =  `${blockDimensions.height}px`
        block.style.background = `#${randomColor}`
        block.className = "block"
        
        insertBlocks(block)

        widthBlock -= blockDimensions.reduceWith
    }
}

const insertBlocks = (block) =>{
    const hasteStart = document.getElementById("haste1")
   
    hasteStart.appendChild(block)
}


const reset = () =>{
    const blocks = document.getElementsByClassName("block")
    while(blocks.length > 0){
        blocks[0].remove()
    }
    
    selectBlock = undefined;
    count = 0;
}

const start = (nivel) => {
    
    reset()
    
    victoryScreen.classList.add("hidden")
   
    createBlocks(nivel)
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

/* mover blocos */
const resizeBlocks = () =>{
    const blocks = document.getElementsByClassName("block")
    
    if(window.innerWidth > 768 && oldWidth <= 768){
        for(let block = 0; block < blocks.length; block++){
            let width = blocks[block].style.width.replace("px","")
           
                 blocks[block].style.width = `${Number(width) * 2}px`        
        }
        oldWidth = window.innerWidth

    }

    if(window.innerWidth < 768 && oldWidth >= 768){
        for(let block = 0; block < blocks.length; block++){
            let width = blocks[block].style.width.replace("px","")
            console.log(width)
            
                blocks[block].style.width = `${Number(width) / 2}px`
            
        }

             oldWidth = window.innerWidth
    }
}

window.addEventListener('resize', resizeBlocks)
