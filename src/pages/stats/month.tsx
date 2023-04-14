import StatsContent from '@site/src/components/stats';
import React from 'react';
import StatsLayout from '../../components/stats/StatsLayout';

const Stats: React.FC = () => {
  return (
    <StatsLayout>
      <StatsContent mode="month" />
    </StatsLayout>
  );
};

export default Stats;
