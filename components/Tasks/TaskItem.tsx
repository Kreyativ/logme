import { FontAwesome } from '@expo/vector-icons';
import { XStack } from 'tamagui';

import { Subtitle } from '../../tamagui.config';
import CheckboxWithLabel from '../elements/CheckBox';

type TaskItemProps = {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
};

const TaskItem = (props: TaskItemProps) => {
  const { name, completed } = props.task;

  return (
    <XStack
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="$4"
      backgroundColor="#fff"
      borderRadius={16}>
      <XStack display="flex" alignItems="center" gap="$4">
        <FontAwesome name="group" size={20} color="black" />
        <Subtitle size="$5">{name}</Subtitle>
      </XStack>
      <CheckboxWithLabel size="$4" checked={completed} />
    </XStack>
  );
};

export default TaskItem;
