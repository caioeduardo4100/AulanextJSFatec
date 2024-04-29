import Link from "next/link";
import styles from "./page.module.css";

export default function Produtos() {
    return (
        <div className={styles.container}>
            <h1>Lista de produtos</h1>
            <div>
                Produto: Notebook Gamer
                Modelo: Blade 16 Gaming
                Marca: Razer
                Preço: R$ 37.907,00
            </div>
            <div>
                Produto: Processador
                Modelo: I7-9700
                Marca: Intel
                Preço: R$ 2500,00
            </div>
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    )
}