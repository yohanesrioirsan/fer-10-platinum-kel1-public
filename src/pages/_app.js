// import '@/styles/globals.css'
import { Provider } from "react-redux"
import store from "@/redux/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "@/styles/CardConfirmPayment.css"
import "@/styles/CardConfirmPayment.module.css"
import "@/styles/pages/home.css"
import "@/styles/pages/search.css"


export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
  )
}
