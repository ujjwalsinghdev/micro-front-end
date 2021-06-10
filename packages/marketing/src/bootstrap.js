// console.log("hiii")
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//Mount funtion
const mount = (el) => {
  ReactDOM.render(<App></App>, el)
}

//dev mode

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root")
  if (devRoot) {
    mount(devRoot)
  }
}

//runnig through container
export { mount }
