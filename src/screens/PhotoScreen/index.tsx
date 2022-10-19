import React from 'react';

import { PostImageType } from '../../components/PostImageType';
import {
  Container
} from './styles';

export function PhotoScreen() {
  return (
    <Container>
    <PostImageType screenType='fullscreen' />
    </Container>
  );
}