const fs = require('fs');
const fetch = require('node-fetch'); // Corrected require syntax for node-fetch v2

const carMakes = [
  { make: "Tesla", models: ["Model S", "Model 3", "Model X", "Model Y"] },
  { make: "Ford", models: ["Mustang GT", "Explorer", "F-150", "Edge"] },
  { make: "BMW", models: ["X5", "3 Series", "5 Series", "X3"] },
  { make: "Toyota", models: ["Camry", "Corolla", "RAV4", "Highlander"] },
  { make: "Honda", models: ["Civic", "Accord", "CR-V", "Pilot"] }
];

const conditions = ["New", "Used", "Certified Pre-Owned"];
const features = [
  "Bluetooth", "Sunroof", "Leather Seats", "Apple CarPlay", "Android Auto", "Heated Seats",
  "Backup Camera", "Navigation", "Panoramic Sunroof", "Sports Suspension"
];

const UNSPLASH_ACCESS_KEY = '798ccQ84LFderDLlTjE9bXfUPRmnmu0TRdOjRKFcD4s';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function fetchImage(make, model) {
  const query = `${make} ${model}`;
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  const data = await response.json();
  return data.results.length > 0 ? data.results[0].urls.small : "https://via.placeholder.com/300x200?text=Image+Not+Found";
}

async function generateCarData(numCars) {
  const cars = [];
  for (let i = 1; i <= numCars; i++) {
    const carMake = getRandomElement(carMakes);
    const year = 2020 + Math.floor(Math.random() * 5);
    const mileage = `${Math.floor(Math.random() * 50000) + 5000} miles`;
    const price = `$${(20000 + Math.floor(Math.random() * 80000)).toLocaleString()}`;
    const engine = Math.random() > 0.5 ? "V6" : "Electric";
    const transmission = Math.random() > 0.5 ? "Automatic" : "Manual";
    const carFeatures = Array.from({ length: 3 }, () => getRandomElement(features));
    const model = getRandomElement(carMake.models);

    const imageUrl = await fetchImage(carMake.make, model);

    cars.push({
      itemNumber: i,
      make: carMake.make,
      model: model,
      year: year,
      price: price,
      mileage: mileage,
      engine: engine,
      transmission: transmission,
      features: carFeatures,
      imageUrl: imageUrl,
      condition: getRandomElement(conditions)
    });
  }
  return cars;
}

async function writeCarData() {
  const carData = await generateCarData(100);
  fs.writeFileSync(
    './src/assets/carData.json',
    JSON.stringify(carData, null, 2),
    'utf-8'
  );
  console.log('Generated 100 cars with real images and updated carData.json successfully!');
}

writeCarData();
