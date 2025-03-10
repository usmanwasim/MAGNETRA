import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/Home/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
