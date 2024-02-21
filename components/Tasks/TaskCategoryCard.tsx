import { Entypo } from '@expo/vector-icons';
import { YStack, SizableText, View } from 'tamagui';

type TaskCategoryCardProps = {
  name: string;
  tasks: number;
  icon: string;
  iconColor: string;
  bgColor: string;
};

const TaskCategoryCard = (props: TaskCategoryCardProps) => {
  const { name, tasks, iconColor, bgColor } = props;

  return (
    <YStack
      padding="$4"
      height="80%"
      width={120}
      borderRadius="$6"
      borderTopRightRadius="$12"
      gap="$2"
      alignItems="flex-start"
      justifyContent="center"
      backgroundColor={bgColor}>
      <View
        backgroundColor="#fff"
        padding="$3"
        borderRadius="$12"
        alignItems="flex-start"
        width="$5">
        <Entypo name="briefcase" size={24} color={iconColor} />
      </View>

      <View>
        <SizableText fontWeight="700" fontSize={16}>
          {name}
        </SizableText>
        <SizableText fontWeight="400" fontSize={13}>
          {tasks} tasks
        </SizableText>
      </View>
    </YStack>
  );
};

export default TaskCategoryCard;
