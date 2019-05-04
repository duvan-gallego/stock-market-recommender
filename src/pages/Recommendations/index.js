import React from 'react';

import BoxInfo from '../../components/BoxInfo';

import stock from '../../assets/stock.svg';
import recomendation from '../../assets/recomendation.svg';
import socialNetwork from '../../assets/socialNetwork.svg';

import './styles.scss';


const Recommendations = () => (
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
          title='Stock selected'
          text='$GOO'
          icon={stock}
        />
        <BoxInfo
          title='Recommendation'
          text='SALE'
          icon={recomendation}
          highlight
        />
        <BoxInfo
          title='Social network counter'
          text='200'
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



export default Recommendations;