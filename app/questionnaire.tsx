import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import QuestionCard from '../components/QuestionCard';
import { QUESTIONS } from '../constants/questions';

export default function QuestionnaireScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  function handleAnswer(value: number) {
    const newScore = totalScore + value;
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTotalScore(newScore);
    } else {
      router.replace(`/result?score=${newScore}`);
    }
  }

  const question = QUESTIONS[currentIndex];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <QuestionCard
        questionText={question.text}
        questionIndex={currentIndex}
        totalQuestions={QUESTIONS.length}
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
