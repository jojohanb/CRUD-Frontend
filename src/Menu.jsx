import { IconHome, IconSearch, IconCalendar } from "@tabler/icons-react"; // Importando os ícones
import { NavLink } from "react-router-dom"; // Importando o NavLink para navegação

// Função que define os estilos dos links, destacando os ativos
export function Menu() {
  const getEstilo = (props) => {
    let estilo = `flex items-center gap-3 px-3 py-2 w-full text-sm text-white hover:bg-zinc-900`;
    let ativo = "border-r-4 border-solid border-slate-800"; // Borda para o link ativo
    return props.isActive ? estilo + ativo : estilo; // Verifica se o link está ativo
  };

  return (
    <div className="flex bg-indigo-900 w-60 h-screen flex-col">
      <header className="flex justify-center p-3 border-b border-violet-950 gap-1">
        <IconHome className="text-white" />
        <span className="font-bold text-white">Navegação</span>
      </header>

      <nav className="flex flex-col">
        {/* Link para Início (Agendamentos) */}
        <NavLink to="/" className={getEstilo}>
          <IconCalendar />
          Início (Agendamentos)
        </NavLink>

        {/* Link para Buscas (Dentistas) */}
        <NavLink to="/buscas" className={getEstilo}>
          <IconSearch />
          Buscas (Dentistas)
        </NavLink>
      </nav>

      <footer className="absolute bottom-0 p-3 text-sm">
        <span className="text-white">Desenvolvimento Web 2</span>
      </footer>
    </div>
  );
}
