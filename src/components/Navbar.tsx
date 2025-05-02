export default function Navbar(){
  return(
    <nav id="nav"
      className="mt-2 max-w-[1220px] m-auto fixed bg-transparent rounded-full backdrop-blur-md overflow-hidden z-50">
      <div id="navbar" className="flex justify-end text-xs text-white sm:text-base">
        <a className="p-3 duration-500 nav-link" href="#home">Inicio</a>
        <a className="p-3 duration-500 nav-link" href="#about">Sobre</a>
        <a className="p-3 duration-500 nav-link" href="#timeline">Timeline</a>
        <a className="p-3 duration-500 nav-link" href="#projects">Projetos</a>
        <a className="p-3 duration-500 nav-link" href="#contact">Contato</a>
      </div>
    </nav>
  );
}