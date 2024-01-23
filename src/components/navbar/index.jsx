import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

function Navbar() {
	return (
		<div className={styles.navbar}>
			<img src={logo} className={styles.logotipo} alt="Logotipo: Food" />

			<div className={styles.menu}>
				<a href="#">Histórico</a>
				<button className="btn btn-red">
					<img src={bag} className="icon" />
					Sacola
				</button>
			</div>
		</div>
	);
}

export default Navbar;
