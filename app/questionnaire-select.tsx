import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { SHORT_QUESTIONS, LONG_QUESTIONS } from '../constants/questions';

export default function QuestionnaireSelectScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={styles.heading}>Choose a version</Text>
        <Text style={styles.subheading}>Select how many questions you'd like to answer.</Text>

        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push('/questionnaire?version=short')}
          accessibilityRole="button"
          accessibilityLabel="Short version"
        >
          <Text style={styles.optionTitle}>Short version</Text>
          <Text style={styles.optionDetail}>{SHORT_QUESTIONS.length} questions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push('/questionnaire?version=long')}
          accessibilityRole="button"
          accessibilityLabel="Long version"
        >
          <Text style={styles.optionTitle}>Long version</Text>
          <Text style={styles.optionDetail}>{LONG_QUESTIONS.length} questions</Text>
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
    padding: 24,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 40,
    lineHeight: 22,
  },
  option: {
    backgroundColor: '#1a1a2e',
    borderRadius: 14,
    padding: 24,
    marginBottom: 16,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  optionDetail: {
    fontSize: 14,
    color: '#9ca3af',
  },
});
