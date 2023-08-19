import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  // const getQuote = () => {
  //   axios
  //     .get("https://api.quotable.io/random")
  //     .then((res) => {
  //       // console.log(res.data.content);
  //       setQuote(res.data.content);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  async function getQuote() {
    try {
      let res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data.content);
    } catch (error) {
      console.error(`ERROR: ${error}`);
    }
  }
  return (
    <div className="App flex justify-center flex-col">
      <button
        onClick={getQuote}
        className="border-2 rounded-lg border-neutral-500 bg-slate-500 text-white p-2"
      >
        Get Quote
      </button>
      {quote && <p className="text-center text-2xl">{quote}</p>}
    </div>
  );
}

export default App;
