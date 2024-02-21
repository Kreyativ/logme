import { AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { primaryColor } from '../tamagui.config';

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          paddingTop: top + 10,
        }}>
        <DrawerItem
          label="Logme"
          onPress={() => router.replace('/')}
          labelStyle={{
            color: primaryColor,
            fontFamily: 'InterBold',
            fontSize: 24,
          }}
        />

        <DrawerItemList {...props} />

        <DrawerItem
          label="Logout"
          icon={() => <AntDesign name="logout" size={24} color="gray" />}
          onPress={() => router.replace('/')}
          labelStyle={{
            color: 'gray',
            fontFamily: 'Inter',
            marginLeft: -20,
          }}
          style={{
            paddingBottom: bottom + 20,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}
