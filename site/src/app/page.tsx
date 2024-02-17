import styles from "./page.module.css";
import { User } from "verdaccio_sample";
import  sampleCase from "verdaccio_sample";

export default function Home() {
  const Me: User =
  {
    name: 'Bruno',
    birth: new Date("07-23-1995 20:51:48")
  }

  return (
    <main className={styles.main}>
      <p>{Me.name} {Me.birth.toString()}</p>
      <p>Hook result: {sampleCase.clearCase()}</p>
    </main>
  );
}
