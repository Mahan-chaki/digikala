import { BrowserRouter } from "react-router-dom";
// import Layout from "./layout/Layout";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />

      {/* <Layout> */}
      <Router />
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
