import React from 'react';

import { PhotoPost } from '../../components/PhotoPost';
import {
  Container
} from './styles';

export function PhotoScreen() {
  return (
    <Container>
    <PhotoPost />
    </Container>
  );
}