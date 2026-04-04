import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionCard from '../components/SectionCard';
import { SECTIONS } from '../constants/content';

const SECTION_ROUTES = [
  { key: 'catalysts', route: '/catalysts' },
  { key: 'nourishers', route: '/nourishers' },
  { key: 'inhibitors', route: '/inhibitors' },
  { key: 'toxins', route: '/toxins' },
] as const;

export default function AboutProgressPrincipleScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.cards}>
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
  cards: {
    padding: 16,
  },
});
