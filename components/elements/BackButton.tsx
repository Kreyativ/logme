import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button, Text } from 'tamagui';

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      unstyled
      flexDirection="row"
      backgroundColor="transparent"
      paddingLeft={0}
      pressStyle={{ opacity: 0.5 }}
      onPress={router.back}
      icon={<Feather name="chevron-left" size={16} color="#007AFF" />}>
      <Text color="#007AFF">Back</Text>
    </Button>
  );
};

export default BackButton;
