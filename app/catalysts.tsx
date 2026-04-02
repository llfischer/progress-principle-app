import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionHeader from '../components/SectionHeader';
import { SECTIONS } from '../constants/content';

const section = SECTIONS.catalysts;

export default function CatalystsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView>
        <SectionHeader title={section.title} tagline={section.tagline} />
        <Text style={styles.body}>{section.body}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  body: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 26,
    margin: 20,
  },
});
