import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import QuestionCard from '../components/QuestionCard';
import { SHORT_QUESTIONS, LONG_QUESTIONS } from '../constants/questions';

export default function QuestionnaireScreen() {
  const router = useRouter();
  const { version } = useLocalSearchParams<{ version: 'short' | 'long' }>();
  const questions = version === 'long' ? LONG_QUESTIONS : SHORT_QUESTIONS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  function handleAnswer(value: number) {
    const newScore = totalScore + value;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTotalScore(newScore);
    } else {
      router.replace(`/result?score=${newScore}&version=${version ?? 'short'}`);
    }
  }

  const question = questions[currentIndex];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <QuestionCard
        questionText={question.text}
        questionIndex={currentIndex}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
});
