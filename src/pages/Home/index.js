import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.scss';
import {
  HOME_INPUT_PLACEHOLDER,
  HOME_BUTTON_TEXT
} from '../../messages';


const Home = () => {

  const getRecomendationsHandler = () => {
    console.log('get recomendations');
  }

  return (
    <div className='home'>
      <h1 className='home__title'>Stock Market Recommender</h1>
      <Input
        type='text'
        placeholder={HOME_INPUT_PLACEHOLDER}
        name='stock_symbol'
        alt={HOME_INPUT_PLACEHOLDER}
      />
      <Button
        text={HOME_BUTTON_TEXT}
      />
    </div>
  );
}



export default Home;