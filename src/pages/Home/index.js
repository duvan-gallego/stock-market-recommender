import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import RangeDatePicker from '../../components/RangeDatePicker';
import Spinner from '../../components/Spinner';
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
  const [startDate, setStartDate] = useState(moment().subtract('days', 10).format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));

  const onClickHandler = () => {
    if (stockSymbol) {
      let socialNetworkSelected = socialNetwork;
      if (!socialNetworkSelected) {
        socialNetworkSelected = HOME_SELECT_SN_OP1;
      }
      getRecommendationsAction(stockSymbol, socialNetworkSelected, startDate, endDate);
    } else {
      // TODO: Change this alert for an error in the input
      alert(HOME_ERROR_STOCK_SYMBOL);
    }
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      default:
        setSocialNetwork(value);
        break;
    }
  }

  return (
    <>

      {recommendations.stockSymbol
        ? (<Redirect to='/recommendations' />)
        : (
          <div className='home'>
            <h1 className='home__title'>{HOME_TITLE}</h1>
            {recommendations.isFetching
              ? (<Spinner />)
              : (
                <>
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
                    onChange={onChangeHandler}
                    value={socialNetwork}
                  />
                  <RangeDatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onChange={onChangeHandler}
                  />
                  <Button
                    onClick={onClickHandler}
                    text={HOME_BUTTON_TEXT}
                    big
                  />
                </>
              )
            }
          </div>
        )
      }
    </>
  );
}

const mapStateToProps = ({ recommendations }) => ({ recommendations });


export default connect(mapStateToProps, { getRecommendations })(Home);