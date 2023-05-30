import { createSignal } from "solid-js"
const [characters, setCharacters] = createSignal("")

function App() {
  return (
    <main class="max-w-lg font-sans mx-auto">
      <h1 class="text-5xl text-center font-semibold">Unique Hanzi Count</h1>
      <textarea
        value={characters()}
        onInput={(e) => setCharacters(e.target.value)}
        class="h-40 resize-none p-2 w-full rounded-md border border-slate-300 shadow-md"
      />
      <Results characters={characters} />
    </main>
  )
}

function Results({ characters }) {
  const resultsArray = () => countCharacters(characters())
  return (
    <>
      <h2>Unique count: {resultsArray().length}</h2>
      <ul class="list-none h-40 text-slate-800">
        <For each={resultsArray()}>
          {(result) => (
            <li class="">
              {result.char}: {result.count}
            </li>
          )}
        </For>
      </ul>
    </>
  )
}

function countCharacters(characters) {
  console.log("HERE")
  let results = {}
  for (let char of characters.split("")) {
    char in results ? (results[char] += 1) : (results[char] = 0)
  }

  return Object.entries(results).map(([k, v]) => ({ char: k, count: v }))
}

export default App
