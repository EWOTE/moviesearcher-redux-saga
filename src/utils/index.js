import fallbackImg from '../static/fallback.jpg';

const handleImgError = e => {
  e.target.src = fallbackImg;
};

export default handleImgError;
