import NavBar from "./components/nav-bar";
import styles from "@/app/ui/intro.module.css"

export default function Home() {
  return (
    <div className={styles.bgGradient}>
      <main className="">
        <NavBar />
        <div className="">
        </div>
      </main>
      <footer className="">
        Footer
      </footer>
    </div>
  );
}
