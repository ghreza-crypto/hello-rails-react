// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import Greeting from "./components/Greeting.js"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));