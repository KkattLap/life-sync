import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

function App({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
