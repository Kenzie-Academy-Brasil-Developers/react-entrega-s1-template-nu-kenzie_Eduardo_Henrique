export function HomePage({ setPage }) {
  return (
    <main className="container--page">
      <div className="content--info--page">
        <img src="../src/assets/Nu Kenzie.svg" alt="" />
        <h1>Centralize o controle das suas financias</h1>
        <span>de forma rápida e segura</span>
        <div className="container--button">
          <button type="button" onClick={setPage}>
            Iniciar
          </button>
        </div>
      </div>
      <div className="container--image">
        <img src="../src/assets/group262.svg" alt="" />
      </div>
    </main>
  );
}
