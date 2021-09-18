import React from "react";
import "./App.css";
import ProductDetail from "./containers/ProductDetail";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar />
      <ProductDetail />
    </React.Fragment>
  );
}

export default App;
