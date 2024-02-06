import styles from "./App.module.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
