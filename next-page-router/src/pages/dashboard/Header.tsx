import Link from 'next/link';
import { useRouter } from 'next/navigation'


const Header = () => {
  const router = useRouter()


  async function LogOut() {
    localStorage.removeItem("token");
    alert("You have been logged out")
    // console.log(localStorage.getItem("token"));
    router.push('/Link ccounts/login')
  }
  return (
    <nav >
      <ul className="list-none">
        <li><Link href="/dashboard/home">Home</Link ></li>
        <li><Link href="/pokemon/search">Search Pokemon</Link ></li>
        <li><Link href="/pokemon/favorite">My Favorite Pokemon</Link ></li>
        <li><Link href="/pokemon/pokemonlist">Pokemon List</Link ></li>
        <button className="absolute right-0 h-16 w-16" onClick={LogOut}>Log Out</button>
      </ul>
      

    </nav>
  );
};

export default Header;