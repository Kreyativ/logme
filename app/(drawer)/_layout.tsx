import { Ionicons, Octicons } from '@expo/vector-icons';
import { faker } from '@faker-js/faker';
import Drawer from 'expo-router/drawer';
import { Avatar } from 'tamagui';

import CustomDrawerContent from '../../components/CustomDrawerContent';

const randomAvatar = faker.image.avatar();

const UserAvatar = () => {
  return (
    <Avatar circular size="$3" style={{ marginRight: 20 }}>
      <Avatar.Image src={randomAvatar} />
      <Avatar.Fallback bc="light_green" />
    </Avatar>
  );
};

const Layout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: false,
        drawerActiveTintColor: '#39D264',
        drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Home',
          headerTitleStyle: {
            fontFamily: 'InterBold',
            marginLeft: -20,
          },
          headerShown: true,
          headerRight: () => <UserAvatar />,
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          drawerLabelStyle: {
            fontFamily: 'Inter',
            marginLeft: -20,
            verticalAlign: 'middle',
          },
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerTitleStyle: {
            fontFamily: 'InterBold',
            marginLeft: -20,
          },
          headerShown: true,
          headerRight: () => <UserAvatar />,
          drawerIcon: ({ color, size }) => <Octicons name="gear" size={size} color={color} />,
          drawerLabelStyle: {
            fontFamily: 'Inter',
            marginLeft: -20,
            verticalAlign: 'middle',
          },
        }}
      />
    </Drawer>
  );
};

export default Layout;
