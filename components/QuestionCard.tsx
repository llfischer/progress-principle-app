import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { QUESTIONNAIRE } from '../constants/questions';

interface QuestionCardProps {
  questionText: string;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (value: number) => void;
}

export default function QuestionCard({
  questionText,
  questionIndex,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  const { scaleMin, scaleMax, scaleMinLabel, scaleMaxLabel } = QUESTIONNAIRE;
  const ratings = Array.from(
    { length: scaleMax - scaleMin + 1 },
    (_, i) => scaleMin + i,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Question {questionIndex + 1} of {totalQuestions}
      </Text>
      <Text style={styles.question}>{questionText}</Text>
      <View style={styles.scaleLabels}>
        <Text style={styles.scaleLabel}>{scaleMinLabel}</Text>
        <Text style={styles.scaleLabel}>{scaleMaxLabel}</Text>
      </View>
      <View style={styles.buttons}>
        {ratings.map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.ratingButton}
            onPress={() => onAnswer(value)}
            accessible
            accessibilityRole="button"
            accessibilityLabel={`${value}`}
          >
            <Text style={styles.ratingText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  progress: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 24,
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a2e',
    lineHeight: 30,
    marginBottom: 40,
  },
  scaleLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  scaleLabel: {
    fontSize: 12,
    color: '#6b7280',
    maxWidth: '45%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
