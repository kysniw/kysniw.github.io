import styles from "./App.module.css";

import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

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
