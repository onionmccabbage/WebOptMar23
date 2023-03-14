import './App.css';

function App() {
  return (
    <div className="App">
      {/* use semantic tags for acccessibility */}
      <article>
        <header></header>
        <nav></nav>
        <section>
          <aside>
            {/* add the profile tag... */}
            <profile>
            <h3>Sample React App</h3>
            </profile>
          </aside>
        </section>
        <footer></footer>
      </article>
    </div>
  );
}

export default App;
