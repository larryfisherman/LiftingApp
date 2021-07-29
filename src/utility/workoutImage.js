function workoutImage() {
  const images = [
    "./images/workout-image1.jpg",
    "./images/workout-image2.jpg",
    "./images/workout-image3.jpg",
    "./images/workout-image4.jpg",
    "./images/workout-image5.jpg",
    "./images/workout-image6.jpg",
  ];

  const imageIndex = Math.floor(Math.random() * images.length);
  let returnImage = images[imageIndex];

  return returnImage;
}

export default workoutImage;
