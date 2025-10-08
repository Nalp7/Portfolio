export function About() {
  return (
    <div
      id="about"
      className="scroll-m-36 flex flex-col w-full justify-between md:flex-row text-light-blue md:text-xl font-light mt-[10vh] mb-[10vh] md:mb-[10vh] md:mt-[25vh]"
    >
      <h2 className="md:mr-10 text-4xl md:text-5xl md:text-end mb-5 font-bold font-mono text-light-purple">
        about <br />
        me
      </h2>
      <p>
        I am <span className="font-mono font-semibold">Justus Grothe</span> from{" "}
        <span className="font-mono font-semibold">Germany</span>.
        <br />
        Currently, I am an apprentice in{" "}
        <span className="font-mono font-semibold">Software Engineering </span>
        at <span className="font-mono font-semibold">Nordwest Handel AG</span>
        .
        <br />
        <br />
        My journey began with video games, sparking a{" "}
        <span className="font-mono font-semibold">passion</span> that now drives
        me to create <span className="font-mono font-semibold">practical</span>{" "}
        applications across both{" "}
        <span className="font-mono font-semibold">front-end</span> and{" "}
        <span className="font-mono font-semibold">back-end</span> development in
        various fields.
      </p>
    </div>
  );
}
