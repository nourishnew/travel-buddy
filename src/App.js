import htn_pyramids from './htn_pyramids.jpg'
import lake from './htn_moraine_lake.jpg'
import temple from './htn_senso_ji_temple.jpeg'
import GIC from './GIC.png'
import GIC1 from './GIC1.png'
import GIC2 from './GIC2.png'
import React from 'react';
import Sidebar from './sidebar';
import SearchBar from './searchbar';
import './App.css';


const App = () => {
  return (
    <div className="App">
      {/* cool functions!! */}
	  <Sidebar />
      
	<body>
		
		<div class='combined-container'>
		<div class="center-box">
		<h1 class="main-title">Welcome Noma-d</h1>

		<h2>The world's landmarks at YOUR fingertips, your uploaded pictures are compiled with LLM's to produce thought-provoking captions and journals!</h2>

		<button class = "mainbutton">Login</button>
		<button class = "mainbutton">Sign Up</button>
		</div>

		<div class="main-img-group">
		<div>
		<img class="main-img" src={temple} alt='awesome temple'></img>
		<h3>"A tranquil oasis in the heart of bustling Tokyo, perfect for quiet moments together."</h3>
		</div>
		
		<div>
		<img class="main-img" src={htn_pyramids} alt='pyramids with a sphinx'></img>
		<h3>"A dream fulfilled: Giza's Pyramids, where history whispers in every stone."</h3>
		</div>
		
		<div>
		<img class="main-img" src={lake} alt='beautiful lake'></img>
		<h3> "A rendezvous with the Rockies at Moraine Lake, where every view is a masterpiece."</h3>
		</div>
		<SearchBar />
		{/* Some text under here */}
		</div>
		</div>

		<div class="values-block">

		<h1 class="values-title">Our Values</h1>

		<div class="secondary-img-group">
		<img class="secondary-img" src={GIC2} alt='generate/inspire/connect'></img>
		<img class="secondary-img" src={GIC} alt='generate/inspire/connect'></img>
		<img class="secondary-img"src={GIC1} alt='generate/inspire/connect'></img>

		</div>

		</div>

	</body>
	  


    </div>
  );
}

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
