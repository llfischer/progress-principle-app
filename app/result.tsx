import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LONG_PRIVACY_TEXT } from '../constants/questions';

export default function ResultScreen() {
  const router = useRouter();
  const { score, version } = useLocalSearchParams<{ score: string; version: string }>();
  const isLong = version === 'long';

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.scoreSection}>
          <Text style={styles.label}>Your total score</Text>
          <Text style={styles.score}>{score}</Text>
        </View>

        {isLong && (
          <View style={styles.privacySection}>
            <Text style={styles.privacyText}>{LONG_PRIVACY_TEXT}</Text>

            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setPrivacyAccepted(!privacyAccepted)}
              accessibilityRole="checkbox"
              accessibilityLabel="Accept privacy policy"
              accessibilityState={{ checked: privacyAccepted }}
            >
              <View style={[styles.checkbox, privacyAccepted && styles.checkboxChecked]}>
                {privacyAccepted && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>I accept the privacy policy</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.emailInput}
              placeholder="Your email address"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              accessibilityLabel="Email address"
            />
          </View>
        )}

        <TouchableOpacity
          style={[styles.button, isLong && !privacyAccepted && styles.buttonDisabled]}
          onPress={() => router.replace('/')}
          disabled={isLong && !privacyAccepted}
          accessibilityRole="button"
          accessibilityLabel="Okay"
          accessibilityState={{ disabled: isLong && !privacyAccepted }}
        >
          <Text style={styles.buttonText}>Okay</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scroll: {
    flexGrow: 1,
    padding: 24,
  },
  scoreSection: {
    alignItems: 'center',
    paddingVertical: 40,
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
  },
  privacySection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  privacyText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#1a1a2e',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#1a1a2e',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  checkboxLabel: {
    fontSize: 15,
    color: '#1a1a2e',
    flex: 1,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 14,
    fontSize: 15,
    color: '#1a1a2e',
    backgroundColor: '#f9fafb',
  },
  button: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
