import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideBar from "./components/SideBar/SideBar";
import IntroSection from "./components/IntroSection/IntroSection";
import InstructionSection from "./components/InstructionSection/InstructionSection";
import AiForm from "./components/AiForm/AiForm";

export default function Home() {
  return (
    <main>
      <header className="header-width">
        <NavigationBar/>
      </header>
      <section className="margin-auto max-width py-1">
        <IntroSection/>
      </section>
      <section className="margin-auto max-width">
        <InstructionSection/>
      </section>
      <section className="margin-auto max-width">
        <AiForm/>
      </section>
    </main>
  );
}
