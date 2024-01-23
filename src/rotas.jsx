import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Historico from "./pages/historico";

function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/historico" element={<Historico />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Rotas;
