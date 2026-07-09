import { FALLBACK_IMAGE } from '../../data/images';

const ImageWithFallback = ({ src, alt, className = '', style = {} }) => {
  const handleError = (e) => {
    if (e.target.src !== FALLBACK_IMAGE) {
      e.target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;
