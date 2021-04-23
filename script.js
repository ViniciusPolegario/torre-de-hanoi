/* adicionar blocos e hastes */
const EASY = document.getElementById("easy")
const MEDIUM = document.getElementById("medium")
const HARD = document.getElementById("hard")


let COUNT = 0
let selectBlock;


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
    
    selectBlock = undefined;

    COUNT = 0;
}

const start = (nivel) => {
    
    reset()
    
    const victoryScreen = document.getElementById("victory")
    victoryScreen.classList.add("hidden")
   
    createBlocks(nivel)
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
        COUNT++;
    }
        
    return selectBlock;
}

START_CONTAINER.addEventListener('click',() =>{

    const haste1 = document.getElementById("haste1");

    
    if (selectBlock !== undefined){
        selectBlock = mudarBloco(selectBlock, haste1);
    }
    else if (haste1.lastElementChild !== null ){
        selectBlock = haste1.lastElementChild;
        selectBlock.classList.add("selectBlock");
    }
    
});

OFFSET_CONTAINER.addEventListener('click',() =>{

    const haste2 = document.getElementById("haste2");
    
    if(selectBlock !== undefined){
        selectBlock =  mudarBloco(selectBlock, haste2);
    }

    else if(haste2.lastElementChild !== null ){
        selectBlock = haste2.lastElementChild;
        selectBlock.classList.add("selectBlock");
    }

});

END_CONTAINER.addEventListener('click',() =>{
    
    const haste3 = document.getElementById("haste3");

    if(selectBlock !== undefined){
        selectBlock = mudarBloco(selectBlock, haste3);
    }
    else if(haste3.lastElementChild !== null ){
        selectBlock = haste3.lastElementChild;
        selectBlock.classList.add("selectBlock");
    }

    winningCondition();
});
