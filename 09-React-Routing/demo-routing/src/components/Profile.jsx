import {Link, Outlet, useParams} from 'react-router-dom';

const Profile = ()=>{
    const params = useParams();
    console.log(params);
    return (
        <div>
        <h1>Este es el perfil di Maurizio 🚀</h1>
        <h2>Cohorte: PT-11b</h2>

        <button>
            <Link to='person'>Person</Link>
        </button>

        <button>
            <Link to=''>Back</Link>
        </button>

        <button>
            <Link to="/">Home</Link>
        </button>

        <Outlet />
        
        </div>
    );
}
export default Profile;