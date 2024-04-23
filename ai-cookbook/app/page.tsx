import IntroSection from "./components/IntroSection/IntroSection";
import InstructionSection from "./components/InstructionSection/InstructionSection";
import AiSection from "./components/AiSection/AiSection";
import SignUpForm from "./components/Authentication/SignUpForm";
import InstructionSection1 from "./components/InstructionSection/InstructionSection1";

export default function Home() {

  return (
    <main>
      <div className="grid-col-1 gap-1 max-width margin-auto">
        <section >
          <IntroSection/>
        </section>
        <section>
          <InstructionSection/>
        </section>
        <section >
          <AiSection/>
        </section>
        <section>
          <SignUpForm/>
        </section>
      </div>
    </main>
  );
}
