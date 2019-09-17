import React from "react";
// import posed from 'react-pose';

const Blobs = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="801.222"
        height="855.615"
        viewBox="0 0 801.222 855.615"
        className="blobs-background"
      >
        <g transform="translate(-737.179 -19.288)">
          <path
            className="blob-0"
            fill="#982062"
            d="M185.264,101.848c15.784,27.833,39.656,51.8-3.905,111.321s-81.327,90.7-97.915,61.508S19.857,259,28.552,215.787s50.495-85.466,89.673-113.951S169.481,74.015,185.264,101.848Z"
            transform="matrix(0.122, 0.993, -0.993, 0.122, 1017.468, -17.833)"
          />
          <path
            className="blob-1"
            fill="#33a9ac"
            d="M557.208,322.187c72.346,143.989,244.22,154.083,124.167,255.175S294.843,780.422,77,726.553-2.915,294.065,21.532,186.958,134.889,21.364,391.99,1.406,484.862,178.2,557.208,322.187Z"
            transform="matrix(-1, 0.017, -0.017, -1, 1494.415, 824.906)"
          />
          <path
            className="blob-2"
            fill="#ffa646"
            d="M184.972,129.781c34.946,23.6-8.146,43.534-4.258,84.167s41.7,54.534,19.81,78.364-59.763,26.259-107.351,16.958-93.208,19.039-83-54.161S-2.77,150.86,40.93,119.528,150.026,106.176,184.972,129.781Z"
            transform="matrix(0.174, -0.985, 0.985, 0.174, 993.008, 828.917)"
          />
        </g>
      </svg>
    </>
  );
};
export default Blobs;

// const Blob = posed.svg({

// });

// const Blobs = ({ blobs }) => {
//   <PoseGroup>
//     {blobs.map((blob) => <Blob key={blob.id} />)}
//   </PoseGroup>
// }

// class Blobs extends React.PureComponent {
//   render() {
//     return (
//       <Blobs className="blobs-background">
//         <Blob className="blob" />
//         <Blob className="blob" />
//         <Blob className="blob" />
//         <Blob className="blob" />
//       </Blobs>
//     );
//   }
// }
