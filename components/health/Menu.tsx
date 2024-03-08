import { Image, SizableText, View, XStack, YStack } from 'tamagui';

import BeverageImg from '../../assets/images/beverage.jpg';
import DessertImg from '../../assets/images/dessert.jpeg';
import SeafoodImg from '../../assets/images/seafood.jpeg';
import SnackImg from '../../assets/images/snacks.jpg';
import { Subtitle } from '../../tamagui.config';

const menuItems = [
  {
    title: 'Beverage',
    image: BeverageImg,
  },
  {
    title: 'Snack',
    image: SnackImg,
  },
  {
    title: 'Seafood',
    image: SeafoodImg,
  },
  {
    title: 'Dessert',
    image: DessertImg,
  },
];

const Menu = () => {
  return (
    <YStack height="30%" marginTop={15} gap="$3">
      <XStack justifyContent="space-between">
        <Subtitle size="$6">Menu</Subtitle>
        <SizableText size="$4" color="gray">
          See all
        </SizableText>
      </XStack>

      <XStack gap="$3">
        {menuItems.map((item, index) => (
          <View key={index} alignItems="center" gap="$2">
            <Image
              source={item.image}
              width={64}
              height={64}
              style={{
                borderRadius: 32,
              }}
            />
            <SizableText size="$5">{item.title}</SizableText>
          </View>
        ))}
      </XStack>
    </YStack>
  );
};

export default Menu;
