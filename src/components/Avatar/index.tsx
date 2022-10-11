import React from 'react';
import Img from '../../assets/imgTest.png';
import {
  Container, AvatarImg
} from './styles';

interface Props {
  size: number;
  radius: number;
}

export function Avatar({size, radius}: Props) {
  return (
    <Container size={size} radius={radius}>
        <AvatarImg source={{uri :'http://www.github.com/rossanodr.png'}} size={size} radius={radius}/>
    </Container>
  );
}