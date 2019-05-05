import React from 'react';
import BoxBig from '../../components/BoxBig';
import {
  RECOMMENDATIONS_TODAY_UPDATES,
  RECOMMENDATIONS_GRAPH_COMING_SOON,
} from '../../messages';

import './styles.scss';

const Graph = () => (
  <BoxBig
    title={RECOMMENDATIONS_TODAY_UPDATES}
  >
    <div className='graph'>
      {RECOMMENDATIONS_GRAPH_COMING_SOON}
    </div>
  </BoxBig>
);

export default Graph;
