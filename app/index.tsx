import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionCard from '../components/SectionCard';
import { HOME_CONTENT, SECTIONS } from '../constants/content';

const SECTION_ROUTES = [
  { key: 'catalysts', route: '/catalysts' },
  { key: 'nourishers', route: '/nourishers' },
  { key: 'inhibitors', route: '/inhibitors' },
  { key: 'toxins', route: '/toxins' },
] as const;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Text style={styles.title}>{HOME_CONTENT.title}</Text>
          <Text style={styles.subtitle}>{HOME_CONTENT.subtitle}</Text>
        </View>
        <View style={styles.intro}>
          <Text style={styles.introText}>{HOME_CONTENT.intro}</Text>
        </View>
        <View style={styles.cards}>
          <Text style={styles.menuLabel}>{HOME_CONTENT.menuLabel}</Text>
          {SECTION_ROUTES.map(({ key, route }) => (
            <SectionCard
              key={key}
              title={SECTIONS[key].title}
              subtitle={SECTIONS[key].tagline}
              route={route}
            />
          ))}
        </View>
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
  },
  hero: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    fontStyle: 'italic',
  },
  intro: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 12,
    padding: 20,
  },
  introText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 24,
  },
  cards: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  menuLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
});
