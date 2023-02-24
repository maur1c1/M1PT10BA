const handlerResponse = (response)=>{

    const [usersList] = $("#usersList");
    
    console.log(response);

    response.forEach((user) => {
        console.log(user);

        const newLi = document.createElement('li');
        newLi.innerText = user.name;

        usersList.appendChild(newLi);
    });
}

const [loaduser] = $("#loaduser"); //[<button></button>]

let showList = () =>{
    $.get("https://jsonplaceholder.typicode.com/users",handlerResponse )
}
loaduser.addEventListener('click', showList);



        