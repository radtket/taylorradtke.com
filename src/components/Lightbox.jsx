import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  };

  componentDidMount = () => {
    window.addEventListener("keyup", this.handleKeyUp, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keyup", this.handleKeyUp, false);
  };

  handleClick = (e, index) => {
    e.preventDefault();
    const { showLightbox } = this.state;
    this.setState({
      showLightbox: !showLightbox,
      selectedImage: index,
    });
  };

  closeModal = () => {
    this.setState({ showLightbox: false });
  };

  goBack = () => {
    const { selectedImage } = this.state;
    this.setState({ selectedImage: selectedImage - 1 });
  };

  goForward = () => {
    const { selectedImage } = this.state;
    this.setState({ selectedImage: selectedImage + 1 });
  };

  handleKeyUp = e => {
    e.preventDefault();
    const { keyCode } = e;
    const { showLightbox, selectedImage } = this.state;
    const { images } = this.props;
    if (showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (selectedImage > 0) {
          this.setState({ selectedImage: selectedImage - 1 });
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (selectedImage < images.length - 1) {
          this.setState({ selectedImage: selectedImage + 1 });
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false });
      }
    }
  };

  render() {
    // const images = this.props.images.filter(post => {
    //   const { relativePath } = post.node;

    //   return relativePath.includes("rands-supply/images/locations");
    // });
    const { images } = this.props;

    const { showLightbox, selectedImage } = this.state;
    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={img.node.childImageSharp.fluid.src}>
              <a
                alt="Car Image"
                href={img.node.childImageSharp.fluid.src}
                onClick={e => this.handleClick(e, i)}
              >
                <StyledImg fluid={img.node.childImageSharp.fluid} />
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightboxModal
          onKeyUp={e => this.handleKeyDown(e)}
          visible={showLightbox}
        >
          <LightboxContent>
            <Img fluid={images[selectedImage].node.childImageSharp.fluid} />
            <Controls>
              <Button onClick={this.closeModal} role="button" type="button">
                Close
              </Button>
              <LeftRight>
                <Button
                  disabled={selectedImage === 0}
                  onClick={this.goBack}
                  role="button"
                  type="button"
                >
                  Previous
                </Button>
                <Button
                  disabled={selectedImage === images.length - 1}
                  onClick={this.goForward}
                  role="button"
                  type="button"
                >
                  Next
                </Button>
              </LeftRight>
            </Controls>
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    );
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }

  grid-gap: 15px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

const GalleryItem = styled.div`
  position: relative;
`;

const Button = styled.button``;

const LightboxModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`;
const LightboxContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftRight = styled.div`
  button:first-of-type {
    margin-right: 10px;
  }
`;

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Lightbox;
