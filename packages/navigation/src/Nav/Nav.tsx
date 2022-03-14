import {navigateToUrl} from "single-spa"
const Nav: React.FC = () => {
  return (
      <nav className="flex list-none top-[88px] gap-10 bg-slate-800 w-full p-3">
          <li className="font-bold text-gray-300 hover:text-cyan-400 cursor-pointer" onClick={()=>navigateToUrl('/')}>Home</li>
          <li className="font-bold text-gray-300 hover:text-cyan-400 cursor-pointer" onClick={()=>navigateToUrl('/about')}>About</li>
          
          
      </nav>
  );
}

export default Nav;