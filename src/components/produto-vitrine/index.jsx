import styles from "./produto-vitrine.module.css";
import foto from "../../assets/hamburguer.png";
import bag from "../../assets/bag-black.png";

function ProdutoVitrine() {
	return (
		<div className={`${styles["produto-box"]} text-center`}>
			<img src={foto} alt="Foto" />

			<div>
				<h2>Spicy Burguer</h2>
				<p className={styles["prod-vitrine-descricao"]}>
					Hamburguer de 250g, queijo, tomate, alface e cebola
				</p>
				<p className={styles["prod-vitrine-preco"]}>R$ 18,90</p>
			</div>

			<div>
				<button className="btn btn-cart">
					<img src={bag} className="icon" />
					Adicionar
				</button>
			</div>
		</div>
	);
}

export default ProdutoVitrine;
