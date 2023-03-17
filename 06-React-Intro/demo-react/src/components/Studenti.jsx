const Studenti = (props) => {

    const  { alunno, hola } = props;
    return (
        <>
            {
                alunno.map((elem)=>{
                    return (
                            <>
                            <h3>{hola}</h3>
                            <p>{elem.name}</p>
                             <span>{elem.age}</span>
                             </>)
                             
                })
            }

        </>
    )

}

export default Studenti;