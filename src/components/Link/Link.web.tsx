import React from 'react';
import type { LinkProps } from './Link.types';

export const Link = (props: LinkProps) => {
  return <a href={props.target}>{props.children}</a>;
};
