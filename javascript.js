    function adaugaObiectiv()
    {
        let obiectiv = document.getElementById('obiectiv').value;
        let prioritate = document.getElementById('prioritate').value;
    if(obiectiv.length === 0)
    {
        alert("Introdu date te rog!")
        return;
    }
    else if(parseInt(prioritate.length)=== 0)
    {
        alert("Completeaza prioritatea")
        return;
    }
    else
    {
        document.getElementById('obiectiv').value=""
        document.getElementById('prioritate').value=""
    }
    let li= document.createElement("li")
    let text= document.createTextNode(obiectiv)
    li.appendChild(text);
    li.classList.add("list-group-item")
    let lista;

    switch(parseInt(prioritate))
    {
        case 1: 
            lista = document.getElementById("p1")
            break
        case 2:
            lista = document.getElementById("p2")
            break
        case 3:
            lista = document.getElementById("p3")
            break
        default:
            alert("Introdu ceva normal")
            return;
    }
    li.addEventListener("click",function(){
        li.remove();
    } )
    lista.appendChild(li);
}