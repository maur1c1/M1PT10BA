import { Link, NavLink } from "react-router-dom";

const Home = () =>{

    return(
        <>
            <h1>Este es el componente Home 🏡</h1>
            <button>
                <Link to='/about'>ABOUT</Link>
            </button>
            <button>
            <NavLink to='/profile' style={({isActive}) => isActive ? {backgroundColor: 'black'} : {backgroundColor: 'yellow'}}>Profile</NavLink>
            </button>
        </>
        
    );
}

export default Home;