import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Navbar = () => {
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  }

  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <Link to="/"><h1 className="text-xl"><img className="h-24 max-w-full" src="https://i.pinimg.com/originals/2c/e0/79/2ce079260cd5708deeb3d117e589881c.png"></img>Fake Discord</h1></Link>
        {!user ? <Link to="/login">Iniciar sesión</Link> : 
          <div className="flex gap-2 items-center">
            <span>{user.email}</span>
            <button className="text-red-500 underline p-2 rounded-md hover:text-red-600" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        
        }
      </div>
    </nav>
  );
};

export default Navbar;
