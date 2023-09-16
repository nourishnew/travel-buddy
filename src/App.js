import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
	function sendRequest() {
		axios
			.post(
				"https://us-central1-aiplatform.googleapis.com/v1/projects/imagetotextvertex/locations/us-central1/publishers/google/models/imagetext:predict",
				{
					instances: [
						{
							image: {
								bytesBase64Encoded: "B64_IMAGE",
							},
						},
					],
					parameters: {
						sampleCount: 10,
						language: "en",
					},
				}
			)
			.then((response) => {
				console.log(response);
			});
	}

	function imageUploaded() {
		let file = document.querySelector("input[type=file]")["files"][0];
		let base64String = "";
		let reader = new FileReader();
		console.log("next");

		reader.onload = function () {
			base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
			console.log(base64String);
		};
		reader.readAsDataURL(file);
  }
  
	return (
		<div className="App">
			<header className="App-header">
				<input type="file" name="" id="fileId" onchange="imageUploaded()" />
				<button onclick="displayString()">Display String</button>

				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<button onClick={() => sendRequest()}> send</button>
		</div>
	);
}

export default App;
