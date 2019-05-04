import React from 'react';
import { connect } from 'react-redux';

import BoxInfo from '../../components/BoxInfo';

import stock from '../../assets/stock.svg';
import recomendation from '../../assets/recomendation.svg';
import socialNetwork from '../../assets/socialNetwork.svg';

import {
  RECOMMENDATIONS_STOCK_SELECTED,
  RECOMMENDATIONS_RECOMMENDATION,
  RECOMMENDATIONS_SM_COUNTER,
} from '../../messages';

import './styles.scss';


const Recommendations = ({ recommendations }) => (
  <div className='recommendations'>
    <nav className='recommendations__header'>
      <div className='recommendations__header-content'>
        <span className='recommendations__header-logo'>Logo...</span>
        <span className='recommendations__header-title'>Stock Market Recommender</span>
      </div>
    </nav>
    <section className='recommendations__body'>
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
          title={RECOMMENDATIONS_RECOMMENDATION}
          text={recommendations.recommendation}
          icon={recomendation}
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