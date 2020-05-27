let count = Number(window.localStorage.getItem("count"))

if(!count){
    window.localStorage.setItem("counnt","0")
}

function createNote(noteContent,noteTitle){
    document.getElementById("no-notes").classList.add("hidden")

    let li = document.createElement("li")
    let a = document.createElement("a")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let xbutton = document.createElement("Button")

    xbutton.classList.add("delete")
 
    let xText = document.createTextNode("X")
    let h2TN = document.createTextNode(noteTitle)
    let pTN = document.createTextNode(noteContent)

    h2.appendChild(h2TN)
    xbutton.appendChild(xText)
    p.appendChild(pTN)

    a.appendChild(h2)
    a.appendChild(xbutton)
    a.appendChild(p)
    a.setAttribute("href","#")

    li.appendChild(a)

    document.getElementById("notes").appendChild(li)
}

function createNoteFromInput(e){
    e.preventDefault()

    let noteTitle=document.getElementById("new-note-header").value
    let noteContent=document.getElementById("new-note-content").value

    document.getElementById("new-note-header").value=""
    document.getElementById("new-note-content").value=""

    count+=1
    window.localStorage.setItem('count', count)
    
    while(window.localStorage.getItem(noteTitle)){
        noteTitle += "-1"
    }

    window.localStorage.setItem(noteTitle,noteContent)

    createNote(noteContent,noteTitle)
    console.log(noteTitle,noteContent)
}
 
function removeItem(e){
    if (e.target.classList.contains('delete')){
        console.log("clicked")
        if(confirm('Are You Sure to delete??')){
            let li = e.target.parentElement.parentElement
            let ul = document.getElementById('notes')
            ul.removeChild(li)
        }
    }
    count -=1
    window.localStorage.setItem('count',count)

    window.localStorage.removeItem(e.target.previousElementSibling.innerText)
    
    if (count<1){
        document.getElementById("no-notes").className=""
    }
}   

for (i = 0; i < count + 1; i++){
    let noteTitle=window.localStorage.key(i);
    let noteContent=window.localStorage.getItem(noteTitle)
     
    if(noteTitle!=="count" && noteTitle){
        createNote(noteTitle,noteContent)
    }
}
document.getElementById('notes').addEventListener('click', removeItem)

document.getElementById('input').addEventListener('submit', createNoteFromInput,false)