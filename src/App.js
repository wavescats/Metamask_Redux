import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import WalletConnect from "./components/WalletConnect";
import WalletAddress from "./components/WalletAddress";
import WalletAddress2 from "./components/WalletAddress2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WalletConnect />} />
          <Route path="/address" element={<WalletAddress />} />
          <Route path="/address2" element={<WalletAddress2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
