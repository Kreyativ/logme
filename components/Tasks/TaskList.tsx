import { ScrollView, Separator, XStack, YStack } from 'tamagui';

import TaskItem from './TaskItem';
import { Button, ButtonText, Subtitle } from '../../tamagui.config';

const tasks = [
  {
    id: 1,
    name: 'Task 1',
    completed: false,
  },
  {
    id: 2,
    name: 'Task 2',
    completed: true,
  },
  {
    id: 3,
    name: 'Task 3',
    completed: false,
  },
  {
    id: 4,
    name: 'Task 4',
    completed: false,
  },
  {
    id: 5,
    name: 'Task 5',
    completed: true,
  },
  {
    id: 6,
    name: 'Task 6',
    completed: false,
  },
];

const TaskList = () => {
  return (
    <YStack height="55%" marginTop={20}>
      <XStack width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Subtitle size="$6">Task List</Subtitle>

        <Button width="$10" padding="$1" backgroundColor="#2BC2B0">
          <ButtonText>Add Task</ButtonText>
        </Button>
      </XStack>

      <Separator marginTop={10} />

      <ScrollView>
        <XStack
          paddingBottom="$2"
          paddingTop="$2"
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
          gap="$3"
          overflow="scroll">
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </XStack>
      </ScrollView>

      <YStack display="flex" alignItems="center" justifyContent="center" paddingTop={10}>
        <Button padding="$2" width="$12" backgroundColor="#A5A7B6">
          <ButtonText>Select All Tasks</ButtonText>
        </Button>
      </YStack>
    </YStack>
  );
};

export default TaskList;
