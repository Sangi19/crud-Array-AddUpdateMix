const fruitList=["apple", "orange", "mango"]
let currentIndex=-1

const displayUlElement=document.getElementById('displayUlElement')
const fruitInputElement=document.getElementById('fruitInputElement')

function showAllFruitElements(){
    displayUlElement.innerHTML="";
    fruitList.map((item,index)=> showFruitElement(item,index))
}
showAllFruitElements()

function showFruitElement(item,index){
    const liElement=document.createElement('li')
    liElement.innerHTML=item

    const editbtnElement=document.createElement('button')
    editbtnElement.innerHTML="Edit"
    editbtnElement.onclick=()=>editFruitElement(item,index)
    
    const delbtnElement=document.createElement('button')
    delbtnElement.innerHTML="Delete"
    delbtnElement.onclick=()=>delFruitElement(item,index)

    liElement.appendChild(editbtnElement)
    liElement.appendChild(delbtnElement)
    displayUlElement.appendChild(liElement)
}

function addFruitElement(){
    if(currentIndex===-1){
        fruitList.push(fruitInputElement.value)
        showAllFruitElements()
    } else {
        fruitList[currentIndex]=fruitInputElement.value
        showAllFruitElements()
    }
}

function editFruitElement(item,index){
    fruitInputElement.value=fruitList[index]
    currentIndex=index
}

function delFruitElement(item,index){
    fruitList.splice(index,1)
    showAllFruitElements()
    fruitInputElement.value=""
}