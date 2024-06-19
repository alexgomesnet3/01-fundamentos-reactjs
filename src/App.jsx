import { Header } from "./Components/Header.jsx";
import { Post } from "./Post.jsx";
import "./global.css";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Post author="Alex" content="Primeiro Post publicado" />
      <Post author="Felipe" content="Segundo Post publicado" />
    </>
  );
}

export default App;
