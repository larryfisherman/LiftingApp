import image1 from "../images/workout-image1.jpg";
import image2 from "../images/workout-image2.jpg";
import image3 from "../images/workout-image3.jpg";
import image4 from "../images/workout-image4.jpg";
import image5 from "../images/workout-image5.jpg";
import image6 from "../images/workout-image6.jpg";

function workoutImage() {
  const images = [image1, image2, image3, image4, image5, image6];

  const imageIndex = Math.floor(Math.random() * images.length);
  let returnImage = images[imageIndex];

  return returnImage;
}

export default workoutImage;
