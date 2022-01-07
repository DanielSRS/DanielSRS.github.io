import React from 'react';
import './Cover.css'
import bgGradient from '../../assets/images/CoverGradientBackground.svg'

const Cover = () => {
  return (
    <div className='cover'>
      <img src={bgGradient} className='bgGradient' alt='imagem com um gradiente de cores' />
    </div>
  );
}

export default Cover;