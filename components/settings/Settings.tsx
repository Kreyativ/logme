import { YStack } from 'tamagui';

import SettingsCard from './SettingsCard';
import { Subtitle } from '../../tamagui.config';

const generalSettings = [
  {
    title: 'Account',
    href: '/settings/account-page',
  },
  {
    title: 'Week Start',
    href: '/settings/week-start',
    value: 'Sunday',
  },
  {
    title: 'Language',
    href: '/settings/language',
    value: 'English',
  },
  {
    title: 'Notifications',
    href: '/settings/notifications',
    toggle: true,
  },
  {
    title: 'Dark Mode',
    href: '/settings/dark-mode',
    toggle: true,
  },
];

const supportSettings = [
  {
    title: 'Get Help',
    href: '/settings/get-help',
  },
  {
    title: 'Restore Purchases',
    href: '/settings/restore-purchases',
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
