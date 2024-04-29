import Link from "next/link";
import styles from "./page.module.css"

export default function Login() {
    return (
        /* Nomeando a classe em NEXTJS*/
        <div className={styles.container}>
            <h1>Login</h1>
            <span>E-mail</span>
            <input />
            <br></br>
            <br></br>
            <span>Senha</span>
            <input />
            <br />
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    )
}