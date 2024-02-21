import type { TabsContentProps } from 'tamagui';
import { SizableText, Tabs, H5 } from 'tamagui';

import TaskCategories from './Tasks/TaskCategories';
import TaskList from './Tasks/TaskList';

const HomeTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width="100%"
      height="100%"
      overflow="hidden">
      <Tabs.List borderRadius={25} flexDirection="row" theme="light_green">
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body" fontWeight="bold" fontSize={16}>
            Tasks
          </SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body" fontWeight="bold" fontSize={16}>
            Health
          </SizableText>
        </Tabs.Tab>
      </Tabs.List>

      <TabsContent value="tab1" theme="light">
        <TaskCategories />
        <TaskList />
      </TabsContent>

      <TabsContent value="tab2" theme="light">
        <H5>Health</H5>
      </TabsContent>
    </Tabs>
  );
};

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      {...props}>
      {props.children}
    </Tabs.Content>
  );
};

export default HomeTabs;
