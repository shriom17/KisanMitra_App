import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SPACING } from '../constants';

interface HeaderProps {
  onMenuPress?: () => void;
}

export function Header({ onMenuPress }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      {/* Green KisanMitra Logo */}
      <View style={styles.logoSection}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={onMenuPress}
          >
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.logoText}>🌾 KisanMitra</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
    paddingTop: StatusBar.currentHeight || 40, // Add status bar height padding
  },
  logoSection: {
    paddingHorizontal: SPACING.lg,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  menuButton: {
    marginRight: 15,
    padding: 5,
  },
  menuIcon: {
    fontSize: 24,
    color: '#174f19ff',
    fontWeight: 'bold',
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