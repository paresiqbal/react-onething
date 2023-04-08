// library
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function CustomButton({ handleCompletedThing, text }) {
  return (
    <div>
      <button
        autoFocus
        onClick={handleCompletedThing}
        className="flex items-center space-x-2 text-2xl bg-teal-600 dark:bg-teal-500 px-6 py-3 rounded-md text-slate-200 focus:outline-none focus-visible:ring-4 ring-teal-600 dark:ring-teal-500 ring-offset-4 ring-offset-slate-200 dark:ring-offset-slate-800 hover:opacity-80 transition-opacity disabled:opacity-50"
      >
        <span className="pointer-events-none">{text}</span>
        <CheckCircleIcon width={30} className="pointer-events-none" />
      </button>
    </div>
  );
}
