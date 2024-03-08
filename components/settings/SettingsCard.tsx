import { Entypo, FontAwesome } from '@expo/vector-icons';
import { SizableText, View, XStack } from 'tamagui';

type SettingsCardProps = {
  title: string;
  value?: string;
  toggle?: boolean;
};

const SettingsCard = (props: SettingsCardProps) => {
  const { title, value, toggle } = props;

  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#f5f5f5"
      width={340}
      height={60}
      paddingHorizontal={16}
      borderRadius={8}>
      <SizableText size="$7" color="#000000">
        {title}
      </SizableText>

      <XStack alignItems="center" justifyContent="center">
        {value && (
          <SizableText size="$6" color="#bbbbbb">
            {value}
          </SizableText>
        )}

        <View alignItems="center" justifyContent="center">
          {toggle ? (
            <FontAwesome name="toggle-on" size={36} color="#0099ff" />
          ) : (
            <Entypo name="chevron-right" size={30} color="#bbbbbb" />
          )}
        </View>
      </XStack>
    </XStack>
  );
};

export default SettingsCard;
