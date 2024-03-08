import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { LineGraph, GraphPoint } from 'react-native-graph';
import { SizableText, View, XStack } from 'tamagui';

type ChartCardProps = {
  title: string;
  color: string;
  icon?: string;
  defaultValue?: string;
  currentValue?: string;
};

const ChartCard = (props: ChartCardProps) => {
  const { title, color, icon, defaultValue, currentValue } = props;

  function getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const points: GraphPoint[] = Array.from({ length: 20 }, (_, i) => ({
    date: new Date(2023, 1, i + 1),
    value: getRandomValue(100, 120),
  }));

  return (
    <XStack gap="$3">
      <View
        width={50}
        backgroundColor="#d3d3d3"
        borderRadius="$4"
        alignItems="center"
        justifyContent="center">
        <FontAwesome5 name={icon} size={30} color={color} />
      </View>

      <View justifyContent="center">
        <SizableText size="$5">{title}</SizableText>
        <SizableText size="$4" color="#AEA8B2">
          {defaultValue}
        </SizableText>
      </View>

      <View>
        <LineGraph
          style={{
            width: 110,
            height: 60,
          }}
          lineThickness={1}
          points={points}
          animated={false}
          color={color}
        />
      </View>

      <View justifyContent="center" alignItems="center">
        <SizableText size="$5" color="#242424">
          {currentValue}
        </SizableText>
        <XStack gap="$1" alignItems="center" justifyContent="center">
          <AntDesign name="caretdown" size={8} color={color} />

          <SizableText size="$4" color={color}>
            11.75%
          </SizableText>
        </XStack>
      </View>
    </XStack>
  );
};

export default ChartCard;
