import React from 'react';
import { connect } from 'react-redux';

import BoxInfo from '../../components/BoxInfo';

import stock from '../../assets/stock.svg';
import price from '../../assets/price.svg';
import socialNetwork from '../../assets/socialNetwork.svg';
import graph from '../../assets/graph.svg';

import {
  RECOMMENDATIONS_STOCK_SELECTED,
  RECOMMENDATIONS_RECOMMENDATION,
  RECOMMENDATIONS_SM_COUNTER,
  RECOMMENDATIONS_STOCK_PRICE,
} from '../../messages';

import './styles.scss';


const Recommendations = ({ recommendations }) => (
  <div className='recommendations'>
    <nav className='recommendations__nav'>
      <div className='recommendations__nav-content'>
        <span className='recommendations__nav-logo'>Logo...</span>
        <span className='recommendations__nav-title'>Stock Market Recommender</span>
      </div>
    </nav>
    <section className='recommendations__body'>
      <header className='recommendations__header'>
        <img src={graph} className='recommendations__header-img' />
        <div className='recommendations__header-text'>
          {RECOMMENDATIONS_RECOMMENDATION} <span className='recommendations__header-text--highlight'>{recommendations.recommendation}</span>
        </div>
      </header>
      <h3 className='recommendations__body-initial-text'>
        Hi User!
        <br />
        These are the recommendations for the
        <span className='recommendations__body-initial-text--bold'> $GOO </span>
        stock, based on data from the last
        <span className='recommendations__body-initial-text--bold'> 10 days.</span>
      </h3>
      <div className='recommendations__box-wrapper'>
        <BoxInfo
          title={RECOMMENDATIONS_STOCK_SELECTED}
          text={recommendations.stockSymbol}
          icon={stock}
        />
        <BoxInfo
          title={RECOMMENDATIONS_STOCK_PRICE}
          text={recommendations.stockPrice}
          icon={price}
          highlight
        />
        <BoxInfo
          title={RECOMMENDATIONS_SM_COUNTER}
          text={recommendations.countOfSocialMediaPost}
          icon={socialNetwork}
        />
      </div>
    </section>

    <div className='recommendations__footer'>
      <div className='recommendations__footer-content'>
        Copyright stock market recommender...
      </div>
    </div>
  </div >
);

const mapStateToProps = ({ recommendations }) => ({ recommendations });

export default connect(mapStateToProps, null)(Recommendations);