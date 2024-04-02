import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideBar from "./components/SideBar/SideBar";
import IntroSection from "./components/IntroSection/IntroSection";

export default function Home() {
  return (
    <main >
      <NavigationBar/>
      <div className="margin-auto max-width py-5">
        <IntroSection/>
      </div>
    </main>
  );
}
