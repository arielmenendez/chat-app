import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(props.blob);
    reader.onloadend = function () {
      setImageSrc(reader.result);
    };
  }, [props.blob]);

  return (
    <img
      style={{ width: 150, height: 'auto' }}
      src={imageSrc}
      alt={props.fileName}
    />
  );
}

Image.propTypes = {
  blob: PropTypes.instanceOf(Blob).isRequired,
  fileName: PropTypes.string.isRequired,
};

export default Image;
