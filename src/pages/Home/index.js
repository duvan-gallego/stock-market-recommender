import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { getRecommendations } from './actions';

import './styles.scss';
import {
  HOME_TITLE,
  HOME_INPUT_PLACEHOLDER,
  HOME_BUTTON_TEXT,
  HOME_ERROR_STOCK_SYMBOL
} from '../../messages';


const Home = ({ getRecommendations: getRecommendationsAction, recommendations }) => {

  const [stockSymbol, setStockSymbol] = useState("");

  const onClickHandler = () => {
    if (stockSymbol) {
      getRecommendationsAction(stockSymbol);
    } else {
      // TODO: Change this alert for an error in the input
      alert(HOME_ERROR_STOCK_SYMBOL);
    }
  }

  return (
    <>
      {recommendations.stockSymbol
        ? (<Redirect to='/recommendations' />)
        : (
          <div className='home'>
            <h1 className='home__title'>{HOME_TITLE}</h1>
            <Input
              type='text'
              placeholder={HOME_INPUT_PLACEHOLDER}
              name='stock_symbol'
              onChange={e => setStockSymbol(e.target.value)}
              alt={HOME_INPUT_PLACEHOLDER}
            />
            <Button
              onClick={onClickHandler}
              text={HOME_BUTTON_TEXT}
            />
          </div>
        )
      }
    </>
  );
}

const mapStateToProps = ({ recommendations }) => ({ recommendations });


export default connect(mapStateToProps, { getRecommendations })(Home);