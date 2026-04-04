import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1a1a2e' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'The Progress Principle' }} />
        <Stack.Screen name="catalysts" options={{ title: 'Catalysts' }} />
        <Stack.Screen name="nourishers" options={{ title: 'Nourishers' }} />
        <Stack.Screen name="inhibitors" options={{ title: 'Inhibitors' }} />
        <Stack.Screen name="toxins" options={{ title: 'Toxins' }} />
        <Stack.Screen name="about-progress-principle" options={{ title: 'About Progress Principle' }} />
        <Stack.Screen name="questionnaire-select" options={{ title: 'Self-Assessment' }} />
        <Stack.Screen name="questionnaire" options={{ title: 'Self-Assessment' }} />
        <Stack.Screen name="result" options={{ title: 'Your Result', headerBackVisible: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
