import { div } from "framer-motion/client";

export function Popup({ togglePopup, content }) {
  return (
    <div
      id="popup"
      className="flex flex-col bg-dark-gray rounded-2xl drop-shadow-sm drop-shadow-light-purple p-6"
    >
      <button onClick={() => togglePopup(null)}>
        <div className="absolute top-1 right-4 text-3xl text-light-blue font-bold cursor-pointer hover:text-light-purple">
          ╳
        </div>
      </button>
      <div>{content}</div>
    </div>
  );
}
