import { createSignal } from "solid-js"
const [characters, setCharacters] = createSignal("")

function App() {
  return (
    <main class="flex mt-20 flex-col items-center md:max-w-md font-sans mx-auto">
      <h1 class="text-5xl text-center font-semibold">Unique Hanzi Count</h1>
      <textarea
        value={characters()}
        onInput={(e) => setCharacters(e.target.value)}
        class="h-40 mt-10 focus:ring-4 ring-offset-1  focus:ring-indigo-300 focus:ring-2 resize-none max-w-xs md:max-w-md flex shrink p-2 mx-auto w-full rounded-md border border-slate-300 inner-shadow"
      />
      <Results characters={characters} />
    </main>
  )
}

function Results({ characters }) {
  const resultsArray = () => countCharacters(characters())
  return (
    <div class="w-full max-w-xs md:max-w-md">
      <div class="mt-6">
        <h2 class="uppercase tracking-wider text-slate-800/80 text-xs">Unique count</h2>
        <span class="mt-3 text-5xl font-bold">{resultsArray().length}</span>
      </div>
      <div class="mt-6">
        <h2 class="uppercase tracking-wider text-slate-800/80 text-xs">Characters</h2>
        <ul class="list-none mt-1 mx-0 px-0 h-40 text-slate-800">
          <For each={resultsArray()}>{(result) => <CharacterBadge {...result} />}</For>
        </ul>
      </div>
    </div>
  )
}

function CharacterBadge({ char, count }) {
  return (
    <li class="bg-indigo-50 border-indigo-300 border mr-2 my-1 px-2 py-1 rounded-full inline-flex">
      <span class="pr-3 leading-6 whitespace-nowrap whitespace-pre border-r border-r-indigo-200">
        {char}
      </span>
      <code class="pl-3">{count}</code>
    </li>
  )
}

function countCharacters(characters) {
  let results = {}
  for (let char of characters.split("")) {
    char in results ? (results[char] += 1) : (results[char] = 1)
  }

  return Object.entries(results)
    .map(([k, v]) => ({ char: k, count: v }))
    .sort((a, b) => a.count < b.count)
}

export default App
