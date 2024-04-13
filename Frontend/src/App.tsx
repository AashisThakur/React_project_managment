import { useRoutes } from "react-router"
import routes from "./routes";
import Navbar from "./components/Navbar";


function App() {
  const element = useRoutes(routes);

  return (
    <>
      <Navbar />
      {element}
    </>
  )
}

export default App
