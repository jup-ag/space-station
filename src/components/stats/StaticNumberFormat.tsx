import { detectedSeparator } from '@site/src/utils';
import * as React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

interface StaticNumberFormatProps {
  currency?: boolean;
}

const StaticNumberFormat: React.FC<
  NumberFormatProps & StaticNumberFormatProps
> = ({ currency = true, ...props }) => {
  return (
    <NumberFormat
      displayType="text"
      prefix={currency ? '$' : ''}
      {...props}
      decimalSeparator={detectedSeparator}
      thousandSeparator={detectedSeparator === ',' ? '.' : ','}
    />
  );
};

export default StaticNumberFormat;
