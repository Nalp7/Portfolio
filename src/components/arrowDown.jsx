import down_w from "../assets/icons/down-w.png";

export function ArrowDown({ href }) {
  return (
    <div className="mb-[15vh]">
      <a href={href}>
        <img
          src={down_w}
          alt="down"
          className="m-auto hover:translate-y-2 transition-all duration-300"
        />
      </a>
    </div>
  );
}
