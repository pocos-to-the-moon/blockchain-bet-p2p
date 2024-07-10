import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className=" bg-slate-900">
      <div className="flex justify-between p-4 lg:p-5 max-w-screen-xl mx-auto">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
