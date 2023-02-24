const [boton] = $("#boton");
const [search] = $("#search");
const [deletBtn] = $("#delete");
let [lista] = $("#lista");
const url = "http://localhost:5000/amigos";

const listFriends = (response)=>{
     lista.innerHTML="";
    response.forEach((user) => {
        const newLis = document.createElement('li');
        newLis.innerText = user.name;  //`Name: ${user.name} Id: ${user.id}`
        lista.appendChild(newLis);
     });
   
}

let showFriends = ()=>{
    //lista.innerHTML = "";
    $.get(url, listFriends);
}

let searchFriend = ()=>{
    const [input] = $("#input");
    const id = input.value;
    input.value = "";
    console.log(id);
    $.get(`${url}/${id}`, (response)=>{
        //console.log(response);
     const [amigo] = $("#amigo"); // sin destructuring $("#amigo")[0] va que va
    amigo.innerText =response.name;
    })
}

let deleteFriend = ()=>{
    const [inputDelete] = $("#inputDelete");
    const idD = inputDelete.value;
    inputDelete.value = "";

    $.ajax({
        url: `${url}/${idD}`,
        type: 'DELETE',
        success: (result)=> listFriends(result)
    });
}

boton.addEventListener('click', showFriends);
search.addEventListener('click', searchFriend);
deletBtn.addEventListener('click', deleteFriend);
