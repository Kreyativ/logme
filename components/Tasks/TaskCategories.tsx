import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, XStack, YStack } from 'tamagui';

import TaskCategoryCard from './TaskCategoryCard';
import { Button, ButtonText, Subtitle } from '../../tamagui.config';

const categories = [
  {
    id: 1,
    name: 'Work',
    tasks: 3,
    icon: 'briefcase',
    iconColor: '#ffe600',
    bgColor: '#fffce2',
  },
  {
    id: 2,
    name: 'Personal',
    tasks: 2,
    icon: 'briefcase',
    iconColor: '#ffe600',
    bgColor: '#fffce2',
  },
  {
    id: 3,
    name: 'Shopping',
    tasks: 4,
    icon: 'briefcase',
    iconColor: '#ffe600',
    bgColor: '#fffce2',
  },
  {
    id: 4,
    name: 'Health',
    tasks: 1,
    icon: 'briefcase',
    iconColor: '#ffe600',
    bgColor: '#fffce2',
  },
];

const TaskCategories = () => {
  return (
    <YStack gap="$4" height="40%" overflow="hidden" marginTop={10}>
      <XStack width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Subtitle size="$6">Categories</Subtitle>

        <XStack display="flex" alignItems="center" gap="$2">
          <FontAwesome name="filter" size={20} color="black" />
          <Button width="$6" padding="$1">
            <ButtonText>All</ButtonText>
          </Button>
        </XStack>
      </XStack>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack display="flex" alignItems="center" gap="$3" overflow="scroll">
          {categories.map((category) => (
            <TaskCategoryCard
              key={category.id}
              name={category.name}
              tasks={category.tasks}
              icon={category.icon}
              iconColor={category.iconColor}
              bgColor={category.bgColor}
            />
          ))}
        </XStack>
      </ScrollView>
    </YStack>
  );
};

export default TaskCategories;
