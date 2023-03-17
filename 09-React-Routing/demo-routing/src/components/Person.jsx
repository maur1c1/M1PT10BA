import { useEffect } from "react";
import { useState } from "react";

const Person = () =>{

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
            setUsers(data)
        })
    }, []);

    return (
        <div>
            <h1>Cohorte: PT11b</h1>
            <label>Instructor: Maurizio 💖</label>
            <p>Alumnos: Los mejores de Henry 😎</p>
            <hr/>

            <h2>Users:</h2>
            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Person;


