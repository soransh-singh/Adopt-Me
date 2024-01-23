import ReactDOM from "react-dom/client"
// import Pet from "./Pet";
import SearchParams from "./SearchParams"
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      <div>
        {/* <Pet animal="Dog" breed="Havanese" name="Luna" />
        <Pet animal="Cat" breed="Mixed" name="Doink" />
        <Pet animal="Dog" breed="German Shephard" name="Rocky" /> */}
      </div>
    </div>
  )
}
const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)
root.render(<App />)
