import htn_pyramids from "./htn_pyramids.jpg";
import lake from "./htn_moraine_lake.jpg";
import temple from "./htn_senso_ji_temple.jpeg";
import GIC from "./GIC.png";
import GIC1 from "./GIC1.png";
import GIC2 from "./GIC2.png";
import React from "react";
import Sidebar from "./sidebar";
import SearchBar from "./searchbar";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [result, setResult] = useState([]);
	const [selectedFiles, setSelectedFiles] = useState(null);
	const [promptText, setPromptText] = useState("");
	const options = {
		method: "POST",
		url: "https://api.cohere.ai/v1/generate",
		headers: {
			accept: "application/json",
			"content-type": "application/json",
			authorization: "Bearer 9W1JLBzx2A53lRo15r4JDhcSSZzEfwT2KFf6BzEo",
		},
		data: {
			prompt: promptText,
			max_tokens: 1000,
			model: "command-nightly",
		},
	};
	const handleFileInputChange = (e) => {
		setSelectedFiles(e.target.files);
	};
	useEffect(() => {
		if (promptText.length > 5) {
			axios.request(options).then((response) => {
				setResult(response.data.generations[0].text);
			});
		}
	}, [promptText]);

	const handleChange = (e) => {
		setInputText(e.target.value);
	};
	function submit() {
		if (selectedFiles) {
			for (let i = 0; i < selectedFiles.length; i++) {
				const formData = new FormData();
				console.log("converting to base 64");
				console.log(selectedFiles[i]);
				for (let i = 0; i < selectedFiles.length; i++) {
					formData.append("files", selectedFiles[i]);
				}
				//convertToBase64(selectedFiles[i]);
			}
		}
	}

	async function getDescription() {
		await axios.get("http://localhost:5000/description").then((res) => {
			let des = res.data;
			console.log(res);
			let prompt = "Here are the descriptions of the images I visited. ";
			for (let i = 0; i < des.length; i++) {
				prompt += des[i];
				prompt += " ";
			}
			prompt += ".Write a 200 word journal about the places i visited.";
			console.log(prompt);
			setPromptText(prompt);
		});
	}

	function backend() {
		const formData = new FormData();
		if (selectedFiles) {
			for (let i = 0; i < selectedFiles.length; i++) {
				formData.append("files", selectedFiles[i]);
			}
			axios
				.post("http://localhost:5000/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
					},
				})
				.then((res) => {
					console.log(res);
				});
		}
	}

	async function getJournal() {
		await getDescription();
		setResult([]);
		console.log("Getting journal...");
		console.log(promptText);
	}

	return (
		<div className="App">
			{/* cool functions!! */}
			<Sidebar />

			<div className="combined-container">
				<div className="center-box">
					<h1 className="main-title">Welcome Noma-d</h1>

					<h2>
						The world's landmarks at YOUR fingertips, your uploaded pictures are
						compiled with LLM's to produce thought-provoking captions and
						journals!
					</h2>

					<button class="mainbutton">Login</button>
					<button class="mainbutton">Sign Up</button>
				</div>

				<div class="main-img-group">
					<div>
						<img class="main-img" src={temple} alt="awesome temple"></img>
						<h3>
							"A tranquil oasis in the heart of bustling Tokyo, perfect for
							quiet moments together."
						</h3>
					</div>

					<div>
						<img
							class="main-img"
							src={htn_pyramids}
							alt="pyramids with a sphinx"></img>
						<h3>
							"A dream fulfilled: Giza's Pyramids, where history whispers in
							every stone."
						</h3>
					</div>

					<div>
						<img class="main-img" src={lake} alt="beautiful lake"></img>
						<h3>
							{" "}
							"A rendezvous with the Rockies at Moraine Lake, where every view
							is a masterpiece."
						</h3>
					</div>
					{/* Some text under here */}
				</div>
			</div>

			<div class="values-block">
				<h1 class="values-title">Our Values</h1>

				<div class="secondary-img-group">
					<div class="box1">
						<h1>Generate</h1>
						<img
							class="secondary-img"
							src={GIC2}
							alt="generate/inspire/connect"></img>
						<h3>
							Generate context-specific and thrilling captions and journals to
							users' exciting travel photos!
						</h3>
					</div>

					<div>
						<h1>Inspire</h1>
						<img
							class="secondary-img"
							src={GIC}
							alt="generate/inspire/connect"></img>
						<h3>
							Inspire users to visit monuments and landmarks they have dreamt of
							seeing with their own eyes!
						</h3>
					</div>

					<div>
						<h1>Connect</h1>
						<img
							class="secondary-img"
							src={GIC1}
							alt="generate/inspire/connect"></img>
						<h3>Connect users with similar passions and interests together!</h3>
					</div>
				</div>
			</div>
			<div className="flex-column">
				<p>Add a trip here</p>
				<button
					className="mainbutton2"
					onClick={() => {
						backend();
					}}>
					Upload the images of your trip in the chronological order
				</button>
				<input
					className="input"
					type="file"
					multiple
					onChange={handleFileInputChange}
				/>

				<button
					className="mainbutton2"
					onClick={() => {
						getJournal();
					}}>
					Generate the story of your trip
				</button>
			</div>
			<p className="result">{result}</p>
		</div>
	);
};

export default App;

// The following code can be inserted here as a comment:

// function sendRequest() {
//   axios
//     .post(
//       "https://us-central1-aiplatform.googleapis.com/v1/projects/imagetotextvertex/locations/us-central1/publishers/google/models/imagetext:predict",
//       {
//         instances: [
//           {
//             image: {
//               bytesBase64Encoded: "B64_IMAGE",
//             },
//           },
//         ],
//         parameters: {
//           sampleCount: 10,
//           language: "en",
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response);
//     });
// }

// function imageUploaded() {
//   let file = document.querySelector("input[type=file]")["files"][0];
//   let base64String = "";
//   let reader = new FileReader();
//   console.log("next");

//   reader.onload = function () {
//     base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
//     console.log(base64String);
//   };
//   reader.readAsDataURL(file);
// }
