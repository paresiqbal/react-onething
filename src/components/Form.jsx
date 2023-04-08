// library
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Form({ input, handleChange, handleSubmit }) {
  return (
    <div>
      <h1 className="text-3xl sm:text-6xl font-bold text-center pb-5">
        What is your "One Thing" ?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex ring-4 rounded-md ring-slate-200  dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800"
      >
        <input
          type="text"
          placeholder="Enter One Thing"
          maxLength="64"
          value={input}
          onInput={handleChange}
          className="bg-inherit rounded-md font-sans text-slate-800  py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
        />
        <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600">
          <ArrowRightCircleIcon width={40} className="pointer-events-none" />
        </button>
      </form>
    </div>
  );
}
