import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Hello World</h1>
        <h2>Subtitulo</h2>
        <p>Outro paragrafo de texto</p>
        <br />
        <div>
          <p>Outro paragrafo</p>
        </div>
        <p><Link href={'/login'}>Login</Link></p>
        <p><Link href={'/produtos'}>Produtos</Link></p>

    </main>
  );
}
