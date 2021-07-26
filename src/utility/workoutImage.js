function workoutImage() {
  const images = [
    {
      img1: "./images/workout-image1.jpg",
    },
    {
      img2: "./images/workout-image2.jpg",
    },
    {
      img3: "./images/workout-image3.jpg",
    },
  ];

  let returnImage = null;

  const imageDraw = () => {
    const imageIndex = Math.floor(Math.random() * images.length);
    let returnImage = images[imageIndex];
    return returnImage;
  };

  return returnImage;
}

export default workoutImage;
