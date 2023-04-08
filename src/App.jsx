// react
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        <h1 className="text-3xl sm:text-6xl font-bold text-center">
          What is your "One Thing" ?
        </h1>
        <div>
          <Form
            input={input}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
