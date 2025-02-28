// Declare require for TypeScript
declare const require: any;

// Function to dynamically import all images from a folder
const importAll = (r: any) => r.keys().map(r);

// Import all images from Kolhapur Lokmat Marathon folder
const kolhapurLokmatMarathon = importAll(
  require.context("../assets/Marathons/KolhapurLokmat2024", false, /\.(jpg|png)$/)
);

const sangliMarathon = importAll(
    require.context("../assets/Marathons/SangliMarathon2024", false, /\.(jpg|png)$/)
)


export const marathonImages = {
  sangliMarathon,
  kolhapurLokmatMarathon, // Automatically loads all images in the folder
};
