import { YStack } from 'tamagui';

import ChartCard from './ChartCard';
import { Subtitle } from '../../tamagui.config';

const chartData = [
  {
    title: 'Heart',
    color: '#FE4340',
    icon: 'heartbeat',
    defaultValue: '80-100',
    currentValue: '100-120',
  },
  {
    title: 'Weight',
    color: '#677FFF',
    icon: 'weight-hanging',
    defaultValue: '80 KG',
    currentValue: '120 KG',
  },
  {
    title: 'Steps',
    color: '#43C465',
    icon: 'walking',
    defaultValue: '10 km',
    currentValue: '11 km',
  },
  {
    title: 'Water',
    color: '#22B7AE',
    icon: 'hand-holding-water',
    defaultValue: '3L',
    currentValue: '2.1 L',
  },
];

const AllCharts = () => {
  return (
    <YStack gap="$3" height="65%" width="100%">
      <Subtitle size="$6">Charts</Subtitle>

      <YStack width="100%" gap="$4">
        {chartData.map((chart, index) => (
          <ChartCard key={index} {...chart} />
        ))}
      </YStack>
    </YStack>
  );
};

export default AllCharts;
