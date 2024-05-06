import Link from "next/link";
import styles from "./page.module.css";

export default function Produtos() {
    return (
        <div className='container'>
            <h1>Lista de produtos</h1>
            <div>
                Produto: Notebook Gamer
                <br></br>
                Modelo: Blade 16 Gaming
                <br></br>
                Marca: Razer
                <br></br>
                Preço: R$ 37.907,00
            </div>
            <div>
                Produto: Processador
                <br></br>
                Modelo: I7-9700
                <br></br>
                Marca: Intel
                <br></br>
                Preço: R$ 2500,00
            </div>
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    )
}