import React from "react";
import "./carousel.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const images = [
  "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3740_.jpg",
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg",
  "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3740_.jpg",
  "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
];

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: images[0],
    };
  }

  previousImage = () => {
    if (this.state.currentImage === images[0]) {
      this.setState({ currentImage: images[3] });
    } else if (this.state.currentImage === images[3]) {
      this.setState({ currentImage: images[2] });
    } else if (this.state.currentImage === images[2]) {
      this.setState({ currentImage: images[1] });
    } else if (this.state.currentImage === images[1]) {
      this.setState({ currentImage: images[0] });
    }
  };

  nextImage = () => {
    if (this.state.currentImage === images[0]) {
      this.setState({ currentImage: images[1] });
    } else if (this.state.currentImage === images[1]) {
      this.setState({ currentImage: images[2] });
    } else if (this.state.currentImage === images[2]) {
      this.setState({ currentImage: images[3] });
    } else if (this.state.currentImage === images[3]) {
      this.setState({ currentImage: images[0] });
    }
  };

  render() {
    return (
      <div className="carousel">
        <button onClick={this.previousImage} className="carousel__button">
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <img className="carousel__image" src={this.state.currentImage} />
        <button onClick={this.nextImage} className="carousel__button">
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
    );
  }
}

export default Carousel;
