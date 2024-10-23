import Login from "./Login";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const User = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    const image = user ? user.photoURL : "/userImage.png";
    const name = user ? user.displayName : "Name User";

    return (
        <div className="right-side">
            <h1><i className="fa-solid fa-cat"></i>QuickChat</h1>
            <article className="card-user">
                <img src={image} alt="user photo" referrerPolicy="no-referrer" />
                <p>{name}</p>
                {user ? <LogOut /> : <Login />}
            </article>
        </div>
    );
}

export default User;