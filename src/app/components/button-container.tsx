import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function CustomButton({
  text,
  showRightIcon,
  showLeftIcon,
}: {
  text: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
}) {
  return (
    <button className="flex items-center gap-2 bg-primary py-2 px-4 w-full rounded-full">
      {showRightIcon && (
        <span className="inline-block bg-black !text-white  rounded-full p-2">
          <HiArrowRight />
        </span>
      )}
      <span className="text-black ">{text}</span>
      {showLeftIcon && (
        <span className="inline-block bg-black !text-white  rounded-full p-2">
          <HiArrowRight />
        </span>
      )}
      {/* <HiArrowLeft /> */}
    </button>
  );
}

export default CustomButton;
