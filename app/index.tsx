import { Stack, Link } from 'expo-router';
import { YStack } from 'tamagui';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

export default function Page() {
  return (
    <Container>
      <Main>
        <Stack.Screen options={{ title: 'Overview' }} />
        <YStack>
          <Title>Logme</Title>
          <Subtitle>Hello and welcome to Logme 👋</Subtitle>
        </YStack>
        <Link href={{ pathname: '/details', params: { name: 'Victor' } }} asChild>
          <Button>
            <ButtonText>Show Details</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
