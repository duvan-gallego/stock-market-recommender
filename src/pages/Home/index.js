import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { getRecommendations } from './actions';

import './styles.scss';
import {
  HOME_TITLE,
  HOME_INPUT_PLACEHOLDER,
  HOME_BUTTON_TEXT,
  HOME_ERROR_STOCK_SYMBOL,
  HOME_SELECT_PLACEHOLDER,
  HOME_SELECT_SN_OP1,
  HOME_SELECT_SN_OP2,
  HOME_SELECT_SN_OP3,
} from '../../messages';

const SN_OPTIONS = [
  {
    _id: HOME_SELECT_SN_OP1,
    name: HOME_SELECT_SN_OP1
  },
  {
    _id: HOME_SELECT_SN_OP2,
    name: HOME_SELECT_SN_OP2
  },
  {
    _id: HOME_SELECT_SN_OP3,
    name: HOME_SELECT_SN_OP3
  }
]

const Home = ({ getRecommendations: getRecommendationsAction, recommendations }) => {

  const [stockSymbol, setStockSymbol] = useState("");
  const [socialNetwork, setSocialNetwork] = useState("");

  const onClickHandler = () => {
    if (stockSymbol) {
      let socialNetworkSelected = socialNetwork;
      if (!socialNetworkSelected) {
        socialNetworkSelected = HOME_SELECT_SN_OP1;
      }
      getRecommendationsAction(stockSymbol, socialNetworkSelected);
    } else {
      // TODO: Change this alert for an error in the input
      alert(HOME_ERROR_STOCK_SYMBOL);
    }
  }

  const onChangeHnadler = (e) => {
    setSocialNetwork(e.target.value);
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
              onKeyDown={e => e.key === 'Enter' && onClickHandler()}
              alt={HOME_INPUT_PLACEHOLDER}
            />
            <Select
              noSelectedText={HOME_SELECT_PLACEHOLDER}
              options={SN_OPTIONS}
              onChange={onChangeHnadler}
              value={socialNetwork}
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