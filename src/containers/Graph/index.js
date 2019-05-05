import React from 'react';
import BoxBig from '../../components/BoxBig';
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
      {RECOMMENDATIONS_GRAPH_COMING_SOON}
    </div>
  </BoxBig>
);

export default Graph;
