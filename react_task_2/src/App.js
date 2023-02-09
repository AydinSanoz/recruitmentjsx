import "./App.css";

// Insert n squares inside each other dynamically and aligned them

function App() {
	function boxesN(n) {
		const liste = [];
		for (let i = 0; i < n; i++) {
			console.log(i);
			liste.push(
				<div className="box" id={"box" + `${i}`} key={i}>
					{" "}
					{i}
				</div>
			);
		}
		return liste;
	}

	return <div className="container">{boxesN(4)}</div>;
}

export default App;
