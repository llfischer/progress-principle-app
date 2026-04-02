import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  AccessibilityRole,
} from 'react-native';
import { useRouter } from 'expo-router';

interface SectionCardProps {
  title: string;
  subtitle: string;
  route: string;
}

export default function SectionCard({ title, subtitle, route }: SectionCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(route as never)}
      accessible
      accessibilityRole={'button' as AccessibilityRole}
      accessibilityLabel={`${title}: ${subtitle}`}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  arrow: {
    fontSize: 24,
    color: '#9ca3af',
    marginLeft: 8,
  },
});
