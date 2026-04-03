import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();
  const { score } = useLocalSearchParams<{ score: string }>();

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={styles.label}>Your total score</Text>
        <Text style={styles.score}>{score}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/')}
          accessibilityRole="button"
          accessibilityLabel="Okay"
        >
          <Text style={styles.buttonText}>Okay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
  },
  score: {
    fontSize: 80,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 48,
  },
  button: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
