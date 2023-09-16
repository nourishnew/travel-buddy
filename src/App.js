import React from 'react';
import Sidebar from './sidebar';
import SearchBar from './searchbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <SearchBar />
      {/* Your main content goes here */}
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
