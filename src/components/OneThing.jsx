import CustomButton from "./CustomButton";

export default function OneThing({ input, handleCompletedThing }) {
  return (
    <div>
      <h1 className="text-3xl sm:text-6xl font-bold text-center pb-5">
        {input}
      </h1>
      <CustomButton
        text="Mark Done"
        handleCompletedThing={handleCompletedThing}
      />
    </div>
  );
}
