import React from 'react';
import BoxBig from '../../components/BoxBig';

import graph_comming_soon from '../../assets/graph_comming_soon.jpg'

import {
  RECOMMENDATIONS_POINSTS_OF_CHANGE,
  RECOMMENDATIONS_GRAPH_COMING_SOON,
} from '../../messages';

import './styles.scss';

const Graph = () => (
  <BoxBig
    title={RECOMMENDATIONS_POINSTS_OF_CHANGE}
  >
    <div className='graph'>
      <div className='graph__text'>{RECOMMENDATIONS_GRAPH_COMING_SOON}</div>
      <img src={graph_comming_soon} className='graph__img' />
    </div>
  </BoxBig>
);

export default Graph;
