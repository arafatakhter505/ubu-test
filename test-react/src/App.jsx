import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [msg, setMsg] = useState("hello");

  return (
    <div>
      <Header />
      <h2 className="bg-red-200">This our new bangladesh</h2>
      <Footer />
    </div>
  );
};

export default App;
