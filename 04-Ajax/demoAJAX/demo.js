//'https://jsonplaceholder.typicode.com/users'

const responseHandler = (response) => {


    const [userList] = $('#userList')
     
    response.forEach(user => {

        const newLi = document.createElement('li')
        newLi.innerText = user.name;
        userList.appendChild(newLi);
        
    });
}

const [loadUsers] = $('#loadUsers')

const fetchUsers = ()=>{
    $.get('https://jsonplaceholder.typicode.com/users', responseHandler)
}


loadUsers.addEventListener('click', fetchUsers)
