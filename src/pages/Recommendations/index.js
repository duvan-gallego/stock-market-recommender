import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import BoxInfo from '../../components/BoxInfo';
import SocialMedia from '../../containers/SocialMedia';
import Graph from '../../containers/Graph';

import stock from '../../assets/stock.svg';
import price from '../../assets/price.svg';
import socialNetwork from '../../assets/socialNetwork.svg';
import graph from '../../assets/graph.svg';
import logo_header from '../../assets/logo_header.png';

import {
  RECOMMENDATIONS_STOCK_SELECTED,
  RECOMMENDATIONS_RECOMMENDATION,
  RECOMMENDATIONS_SM_COUNTER,
  RECOMMENDATIONS_STOCK_PRICE,
  HOME_TITLE,
  HOME_GREETING,
  RECOMMENDATIONS_GREETING_RECOMMENDATIONS,
  RECOMMENDATIONS_GREETING_DATA,
  RECOMMENDATIONS_GREETING_TO,
  RECOMMENDATIONS_INFO_UPDATED,
} from '../../messages';

import './styles.scss';


const Recommendations = ({ recommendations }) => (
  <>
    {recommendations.stockSymbol === null
      ? (<Redirect to='/' />)
      : (
        <div className='recommendations'>
          <nav className='recommendations__nav'>
            <div className='recommendations__nav-content'>
              <Link to='/'>
                <img src={logo_header} alt='Logo header' className='recommendations__nav-logo' />
              </Link>
              <span className='recommendations__nav-title'>{HOME_TITLE}</span>
            </div>
          </nav>
          <section className='recommendations__body'>
            <header className='recommendations__header'>
              <img src={graph} className='recommendations__header-img' alt={RECOMMENDATIONS_RECOMMENDATION} />
              <div className='recommendations__header-text'>
                {RECOMMENDATIONS_RECOMMENDATION} <span className='recommendations__header-text--highlight'>{recommendations.recommendation}</span>
              </div>
            </header>
            <h3 className='recommendations__body-text'>
              <div>{HOME_GREETING}</div>
              {RECOMMENDATIONS_GREETING_RECOMMENDATIONS}
              <span className='recommendations__body-text--bold'> {recommendations.stockSymbol} </span>
              {RECOMMENDATIONS_GREETING_DATA}
              <span className='recommendations__body-text--bold'> {recommendations.startDate} </span>
              {RECOMMENDATIONS_GREETING_TO}
              <span className='recommendations__body-text--bold'> {recommendations.endDate} </span>
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
          <section className='recommendations__sm-and-graph'>
            <div className='recommendations__box-wrapper recommendations__box-wrapper--responsive'>
              <Graph />
              <SocialMedia />
            </div>
          </section>

          <footer className='recommendations__footer'>
            <div className='recommendations__footer-content'>
              {recommendations.dateOfUpdate &&
                <div className='recommendations__footer-content--updated'>
                  {`${RECOMMENDATIONS_INFO_UPDATED} ${recommendations.dateOfUpdate.toDateString()}, ${recommendations.dateOfUpdate.toLocaleTimeString()} h`}
                </div>
              }
              Copyright stock market recommender...
            </div>
          </footer>
        </div >
      )
    }
  </>
);

const mapStateToProps = ({ recommendations }) => ({ recommendations });

export default connect(mapStateToProps, null)(Recommendations);