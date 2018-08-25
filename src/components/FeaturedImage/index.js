import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';

function FeaturedImage({ sizes }) {
  return (
    <Wrapper>
      <Img sizes={sizes}/>
    </Wrapper>  
  );
}

export default FeaturedImage;