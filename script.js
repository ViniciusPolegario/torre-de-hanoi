/* adicionar blocos e hastes */
const EASY = document.getElementById("easy")
const MEDIUM = document.getElementById("medium")
const HARD = document.getElementById("hard")


let COUNT = 0
let SELECT_BLOCK;


const createDiv = (id, className) => {
    const div = document.createElement('div')
    div.setAttribute('class', className)
    div.setAttribute('id', id)

    return div
}

const renderElement = (element, targetId) => {
    const target = document.getElementById(targetId)

    target.appendChild(element)
}

const createGameArea = () => {
    const divStart = createDiv("start", "container-block")
    const divOffSet = createDiv("offSet", "container-block")
    const divEnd = createDiv("end", "container-block")

    renderElement(divStart,'game')
    renderElement(divOffSet,'game')
    renderElement(divEnd,'game')

    const hasteStart = createDiv("haste1", "hastes")
    const hasteOffSet = createDiv("haste2", "hastes")
    const hasteEnd = createDiv("haste3", "hastes")
 
    renderElement(hasteStart,'start')
    renderElement(hasteOffSet,'offSet')
    renderElement(hasteEnd,'end')
}


createGameArea()

const createBlocks = (level) => {

    let totalBlocks = 2

    if(level === "medium"){
        totalBlocks = 4
    } else if (level === "hard"){
        totalBlocks = 6
    }
    
    for(let block = 0; block < totalBlocks; block++){      

        const divBlock = document.createElement("div")
        divBlock.setAttribute("id", `block-${level}-${block}`)
        divBlock.setAttribute("class","block")
        
        insertBlocks(divBlock)
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
    
    SELECT_BLOCK = undefined;

    COUNT = 0;
}

const start = (level) => {
    
    reset()
    
    const victoryScreen = document.getElementById("victory")
    victoryScreen.classList.add("hidden")
   
    createBlocks(level)
}

start("easy");

EASY.addEventListener('click',() => {
    start("easy")   
})

MEDIUM.addEventListener('click',() =>{
    start("medium")  
})

HARD.addEventListener('click',() =>{
    start("hard")  
})

const winningCondition = () =>{
    const totalBlocks = document.getElementsByClassName("block").length
    const blocksInEnd = haste3.childElementCount
    const movements = document.getElementById("movements")
    const victoryScreen = document.getElementById("victory")


    if(totalBlocks === blocksInEnd){
        victoryScreen.classList.remove("hidden")
        movements.innerText = COUNT
    }
    
}

const START_CONTAINER = document.getElementById("start");
const OFFSET_CONTAINER = document.getElementById("offSet");
const END_CONTAINER = document.getElementById("end");



const changeBlock = (selectBlock, haste) => {
    
    const lastBlock = haste.lastElementChild;

    if (lastBlock === selectBlock ){
        selectBlock.classList.remove("selectBlock")
        haste.appendChild(selectBlock);
        selectBlock = undefined;
    }
    else if(lastBlock === null || lastBlock.clientWidth > selectBlock.clientWidth ){
        selectBlock.classList.remove("selectBlock")
        haste.appendChild(selectBlock);
        selectBlock = undefined;
        COUNT++;
    }
        
    return selectBlock;
}

const validateSelectedBlock = (haste) => {

    if ( SELECT_BLOCK !== undefined){
        SELECT_BLOCK = changeBlock(SELECT_BLOCK, haste);
    }
    else if (haste.lastElementChild !== null ){
        SELECT_BLOCK = haste.lastElementChild;
        SELECT_BLOCK.classList.add("selectBlock");
    }
}

START_CONTAINER.addEventListener('click',() =>{

    const haste1 = document.getElementById("haste1");
    validateSelectedBlock(haste1)   
});

OFFSET_CONTAINER.addEventListener('click',() =>{

    const haste2 = document.getElementById("haste2");    
    validateSelectedBlock(haste2)
});

END_CONTAINER.addEventListener('click',() =>{
    
    const haste3 = document.getElementById("haste3");
    validateSelectedBlock(haste3)
    winningCondition();
});
