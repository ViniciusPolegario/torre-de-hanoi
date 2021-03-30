/* adicionar blocos e hastes */
const easy = document.getElementById("easy")
const medium = document.getElementById("medium")
const hard = document.getElementById("hard")
const gameArea = document.getElementById("game")

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

const createHastes = () =>{
    const haste = document.createElement("div")
    haste.className = "hastes"
    
    return haste
}

const insertHastes = () => {
  
    const start = document.getElementById("start")
    start.appendChild(createHastes())

    const offSet = document.getElementById("offSet")
    offSet.appendChild(createHastes())

    const end = document.getElementById("end")
    end.appendChild(createHastes())

}

const createBlocks = (widthBlock, heightBlock) => {
    const randomColor = Math.floor(Math.random()* 16777215 ).toString(16);
    const block = document.createElement("div")
    block.className = "block"
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
 
    for(let block = 0; block < numberOfBlocks; block++){
        
        target.appendChild(createBlocks(`${width}px`,`${height}px`))
        width -= reduceWith
    }

}


const reset = () =>{
    const blocks = document.getElementsByClassName("block")
    const hastes = document.getElementsByClassName("hastes")
    const containerBlock = document.getElementsByClassName("container-block")
   
    while(blocks.length > 0){
        blocks[0].remove()
    }

    while(hastes.length > 0){
        hastes[0].remove()
    }

    while(containerBlock.length > 0){
        containerBlock[0].remove()
    }

}

const start = (nivel) => {
    reset()

    createDivs(gameArea)
    insertHastes()
    const hasteStart  = document.querySelector("div#start div.hastes")
    insertBlocks(nivel, hasteStart)
}

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

/* mover blocos */

/* mover blocos */

/* condição de vitoria */

/* condição de vitoria */