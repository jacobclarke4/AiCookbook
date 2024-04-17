import NavigationBar from "./components/NavigationBar/NavigationBar";
import IntroSection from "./components/IntroSection/IntroSection";
import InstructionSection from "./components/InstructionSection/InstructionSection";
import AiSection from "./components/AiSection/AiSection";

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
      </div>

    </main>
  );
}
