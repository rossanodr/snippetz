import React from 'react';
import { ImageComponent } from '../ImageComponent';

import {
  Container
} from './styles';

interface Props {
  imgSource:string;
}

export function ImagesGallery({imgSource}: Props) {
  return (
    <Container>
<ImageComponent source={{ uri: imgSource }}>

</ImageComponent>
    </Container>
  );
}