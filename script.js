const rowColumn = document.querySelector('input');
const grid = document.querySelector('.grid');
const gridRelayToUser = document.querySelector('span');
const button = document.querySelector('button');
const eachBoxInGrid = document.querySelectorAll('.child');

rowColumn.addEventListener('change', setNewGrid)
button.addEventListener('click', clear)
grid.addEventListener('mousedown', addHover)
grid.addEventListener('mouseup', removeHover)


function addHover(){

}

function removeHover(){

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




