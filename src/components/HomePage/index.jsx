import Logo from "../../assets/Nu Kenzie.svg";
import ImageGroup from "../../assets/Group262.svg";
export function HomePage({ setPage }) {
  return (
    <main className="container--page">
      <div className="content--info--page">
        <img src={Logo} alt="" />
        <h1>Centralize o controle das suas financias</h1>
        <span>de forma rápida e segura</span>
        <div className="container--button">
          <button type="button" onClick={setPage}>
            Iniciar
          </button>
        </div>
      </div>
      <div className="container--image">
        <img src={ImageGroup} alt="" />
      </div>
    </main>
  );
}
