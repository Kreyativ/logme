import { YStack } from 'tamagui';

import SettingsCard from './SettingsCard';
import { Subtitle } from '../../tamagui.config';

const generalSettings = [
  {
    title: 'Account',
  },
  {
    title: 'Week Start',
    value: 'Sunday',
  },
  {
    title: 'Language',
    value: 'English',
  },
  {
    title: 'Notifications',
    toggle: true,
  },
  {
    title: 'Dark Mode',
    toggle: true,
  },
];

const supportSettings = [
  {
    title: 'Get Help',
  },
  {
    title: 'Restore Purchases',
  },
];

const Settings = () => {
  return (
    <YStack gap="$3">
      <Subtitle marginTop={-15}>General</Subtitle>
      {generalSettings.map((setting, index) => (
        <SettingsCard key={index} {...setting} />
      ))}

      <Subtitle marginHorizontal="$2">Support</Subtitle>
      {supportSettings.map((setting, index) => (
        <SettingsCard key={index} {...setting} />
      ))}
    </YStack>
  );
};

export default Settings;
