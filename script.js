const rowColumn = document.querySelector('input');
const grid = document.querySelector('.grid');
const gridRelayToUser = document.querySelector('span');
const button = document.querySelector('button');

rowColumn.addEventListener('change', setNewGrid)
button.addEventListener('click', clear)
grid.addEventListener('mousedown', addHover)
grid.addEventListener('mouseup', removeHover)


function addHover(event){
    if(event.button === 0){
        document.querySelectorAll('.child').forEach((box) => box.addEventListener('mouseover', changeColorCallback))
    }
}

function changeColorCallback(event){
    event.target.style.background = 'black';
}

function removeHover(event){
    if(event.button === 0){    
        document.querySelectorAll('.child').forEach((box) => {
            box.removeEventListener('mouseover', changeColorCallback)
        })
    }
}

function setNewGrid(){
    const rowColumn = document.querySelector('input');
    gridRelayToUser.innerText = `Picked grid size: ${rowColumn.value}`
    deleteGrid()
    createGrid(rowColumn.value)
}

function createGrid(xY){
    for(let i = 0; i<xY; i++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
            for(let j = 0; j<xY; j++){
                const newColumn = document.createElement('div');
                newColumn.classList.add('child');
                newRow.appendChild(newColumn);
            }
        grid.appendChild(newRow);
    }
}

function deleteGrid(){
    document.querySelectorAll('.row').forEach((row) => {
        row.remove();
    })
}


function clear(){
    const previousValue = document.querySelector('input').value;
    deleteGrid()
    createGrid(previousValue)
}



createGrid(14)

