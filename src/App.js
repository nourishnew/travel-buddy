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
      <SearchBar />
      
	<body>
		<div class="center-box">
		<h1 class="main-title">WELCOME!</h1>

		<h2>The world's landmarks at your fingertips, compiled with LLM's to produce thought-provoking captions and journals!</h2>

		<button>Login</button>
		<button>Sign Up</button>
		</div>

		<div>
		<img class="main-img" src={htn_pyramids} alt='pyramids with a sphinx'></img>
		<img class="main-img" src={lake} alt='beautiful lake'></img>
		<img class="main-img" src={temple} alt='awesome temple'></img>

		{/* Some text under here */}
		</div>


		<div>
		<img class="secondary-img" src={GIC} alt='generate/inspire/connect'></img>
		<img class="secondary-img"src={GIC1} alt='generate/inspire/connect'></img>
		<img class="secondary-img" src={GIC2} alt='generate/inspire/connect'></img>


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
