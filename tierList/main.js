let boxes = document.querySelectorAll(".item");
let dropZones = document.querySelectorAll('.drop-zone');
let unranked = document.querySelector('#unranked-drop-zone')


let draggedItem;

boxes.forEach(setUpItem);
dropZones.forEach(setUpDropZone);


function setUpItem (item){
    item.addEventListener('dragstart', onDragItem);
    item.addEventListener("dblclick", onDblClick)
}

function onDragItem(e){
    draggedItem = e.target;
}

function onDblClick(){
    if(this.parentNode != unranked){
        unranked.appendChild(this)
    }
}

function setUpDropZone(dropZone){
    dropZone.addEventListener('drop', onDropOverDropZone);
    dropZone.addEventListener('dragover', function(e){
        e.preventDefault()
    })
}

function onDropOverDropZone(){
    if(this != draggedItem.parentNode){
        this.appendChild(draggedItem);
    }
}