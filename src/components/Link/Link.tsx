import React from 'react';
import type { LinkProps } from './Link.types';
import { Pressable } from 'react-native';

export const Link = (props: LinkProps) => {
  return <Pressable>{props.children}</Pressable>;
};
