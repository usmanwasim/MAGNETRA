import { createContext, useState, useContext } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/Home/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TronProvider } from "./TronConfig";
import { Routes, Route } from "react-router";
import AirDrop from "./components/AirDrop";

const TronConetxt = createContext({});

export const useTronContext = () => useContext(TronConetxt);

export function App() {
  const [isTrx, setIsTrx] = useState(false);
  const tronValue = { isTrx, setIsTrx };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        s
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <TronProvider>
        <TronConetxt.Provider value={tronValue}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HomePage />
                  <Footer />
                </>
              }
            />
            <Route path="/airdrop" element={<AirDrop />} />
          </Routes>
        </TronConetxt.Provider>
      </TronProvider>
    </>
  );
}

export default App;
