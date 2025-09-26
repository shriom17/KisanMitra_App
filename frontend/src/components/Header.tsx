import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SPACING } from '../constants';

interface HeaderProps {
  // No props needed for simple logo-only header
}

export function Header({}: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      {/* Green KisanMitra Logo */}
      <View style={styles.logoSection}>
        <Text style={styles.logoText}>🌾 KisanMitra</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
    marginTop: -10,
  },
  logoSection: {
    paddingHorizontal: SPACING.lg,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#174f19ff',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
  },
});