// react
import { useState } from "react";

// components
import Form from "./components/Form";
import OneThing from "./components/OneThing";

// library
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

// get randome message after handleCompletedThing
const getSuccessMessage = () => {
  const messagess = ["Nice", "Good job", "Good Game"];

  return messagess[Math.floor(Math.random() * messagess.length)];
};

function App() {
  const [input, setInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  // handle the submiting form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check value before inputing
    if (input === "") {
      alert("What is your One Thing !");

      return;
    }

    // remove ui after submit form
    setIsCompleted(false);
  };

  // handle the input value
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // handle the completed value "mark Done"
  const handleCompletedThing = async (e) => {
    // disabeling so it's not always clicked
    e.target.setAttribute("disabled", true);
    setInput(getSuccessMessage());

    // adding confetti
    await jsConfetti.addConfetti({
      emojis: ["🎉", "🚀", "🎈", "🤩"],
    });
    e.target.removeAttribute("disabled");
    setInput("");
    setIsCompleted(true);
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <>
            <Form
              input={input}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleCompletedThing={handleCompletedThing}
            />
          </>
        )}

        {/* Change ui after inputing value */}
        {!isCompleted && (
          <OneThing input={input} handleCompletedThing={handleCompletedThing} />
        )}
      </div>
    </main>
  );
}

export default App;
