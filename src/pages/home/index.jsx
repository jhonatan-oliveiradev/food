import Navbar from "../../components/navbar";
import ProdutoVitrine from "../../components/produto-vitrine";

function Home() {
	return (
		<>
			<Navbar />

			<div className="container">
				<div className="titulo text-center">
					<h1>Nosso Cardápio</h1>
					<p className="subtitulo">
						Clique em adicionar para colocar os produtos na sacola de compras.{" "}
						Se preferir, você pode pedir pelo WhatsApp: (11) 94785-2140.
					</p>
				</div>
			</div>

			<div className="text-center">
				<ProdutoVitrine />
				<ProdutoVitrine />
				<ProdutoVitrine />
				<ProdutoVitrine />
			</div>
		</>
	);
}

export default Home;
