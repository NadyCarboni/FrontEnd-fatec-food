import React, { useEffect, useState } from "react";

import AppRoutes from "./AppRoutes";
import Loading from "./Pages/Home/Loading/Loading";
import "./Reset.css";
import "./Util.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return <div>{loading ? <Loading /> : <AppRoutes />}</div>;
}

export default App;
