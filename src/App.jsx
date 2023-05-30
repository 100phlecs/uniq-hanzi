import logo from "./logo.svg"

function App() {
  return (
    <div class={"bg-red-300"}>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={"text-blue-300"}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
