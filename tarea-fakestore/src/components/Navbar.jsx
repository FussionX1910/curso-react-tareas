import { Link } from "react-router-dom";
import { useTotalContext } from "../context/TotalContext";

const Navbar = () => {

    const { totalProducts } = useTotalContext();

  return (
    <nav className="bg-emerald-950 p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4 relative">
        <Link to="/"><h1 className="text-xl"><img className="h-24 max-w-full" src="https://cdn-icons-png.flaticon.com/512/2981/2981313.png"></img>Fake Amazon</h1></Link>
        <Link to="/cart">
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='cart-icon'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
            </svg>
            <div className='cart-counter'>
                <span>{totalProducts}</span>
            </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
