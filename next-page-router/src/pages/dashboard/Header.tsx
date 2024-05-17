import { useNavigate } from "react-router-dom";


const Header = () => {
  const Navigate = useNavigate();


  async function LogOut() {
    localStorage.removeItem("token");
    alert("You have been logged out")
    // console.log(localStorage.getItem("token"));
    Navigate('/')
  }
  return (
    <nav >
      <ul className="list-none">
        <li><a href="/dashboard">Home</a></li>
        <li><a href="/search">Search Pokemon</a></li>
        <li><a href="/favorite">My Favorite Pokemon</a></li>
        <li><a href="/allPokemon">Pokemon List</a></li>
        <button className="absolute right-0 h-16 w-16" onClick={LogOut}>Log Out</button>
      </ul>
      

    </nav>
  );
};

export default Header;