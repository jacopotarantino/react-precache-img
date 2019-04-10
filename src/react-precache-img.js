import { PropTypes } from 'prop-types';

const PreCacheImg = (props) => {
  const precache = (images) => {
    let image;
    for (let i = 0, len = images.length; i < len; i += 1) {
      image = new Image(); // eslint-disable-line no-undef
      image.src = images[i];
    }
    return false;
  };

  return precache(props.images);
};

PreCacheImg.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PreCacheImg;
