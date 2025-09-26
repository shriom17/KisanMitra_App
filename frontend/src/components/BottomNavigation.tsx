import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, FONT_SIZES } from '../constants';

interface BottomNavigationProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
  onAIPress?: () => void;
}

export function BottomNavigation({ activeTab = 'home', onTabPress, onAIPress }: BottomNavigationProps) {
  const handleTabPress = (tab: string) => {
    if (onTabPress) {
      onTabPress(tab);
    }
  };

  return (
    <>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'farm' && styles.activeNavItem]} 
          onPress={() => handleTabPress('farm')}
        >
          <Text style={[styles.navIcon, activeTab === 'farm' && styles.activeNavIcon]}>🌾</Text>
          <Text style={[styles.navLabel, activeTab === 'farm' && styles.activeNavLabel]}>Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'chat' && styles.activeNavItem]} 
          onPress={() => handleTabPress('chat')}
        >
          <Text style={[styles.navIcon, activeTab === 'chat' && styles.activeNavIcon]}>💬</Text>
          <Text style={[styles.navLabel, activeTab === 'chat' && styles.activeNavLabel]}>Chat</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.homeNavItem, activeTab === 'home' && styles.activeHomeNavItem]} 
          onPress={() => handleTabPress('home')}
        >
          <Text style={styles.homeNavIcon}>🏠</Text>
          <Text style={styles.homeNavLabel}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'market' && styles.activeNavItem]} 
          onPress={() => handleTabPress('market')}
        >
          <Text style={[styles.navIcon, activeTab === 'market' && styles.activeNavIcon]}>🛒</Text>
          <Text style={[styles.navLabel, activeTab === 'market' && styles.activeNavLabel]}>Market</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'profile' && styles.activeNavItem]} 
          onPress={() => handleTabPress('profile')}
        >
          <Text style={[styles.navIcon, activeTab === 'profile' && styles.activeNavIcon]}>👤</Text>
          <Text style={[styles.navLabel, activeTab === 'profile' && styles.activeNavLabel]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Annapurna AI Bot Floating Button */}
      <TouchableOpacity 
        style={styles.aiBot}
        onPress={onAIPress}
        activeOpacity={0.8}
      >
        <Text style={styles.aiBotIcon}>👩‍🌾</Text>
        <Text style={styles.aiBotText}>Annapurna</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 70,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    minWidth: 50,
  },
  activeNavItem: {
    backgroundColor: `${COLORS.primary}15`,
  },
  homeNavItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    minWidth: 60,
  },
  activeHomeNavItem: {
    backgroundColor: COLORS.primary,
    transform: [{ scale: 1.05 }],
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 4,
  },
  activeNavIcon: {
    fontSize: 24,
  },
  homeNavIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  activeNavLabel: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  homeNavLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.surface,
    fontWeight: 'bold',
  },
  // Annapurna AI Bot Styles
  aiBot: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    backgroundColor: '#18360dff',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#071019ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    flexDirection: 'row',
    minHeight: 50,
    minWidth: 100,
  },
  aiBotIcon: {
    fontSize: 20,
    marginRight: 6,
  },
  aiBotText: {
    fontSize: FONT_SIZES.small,
    color: 'white',
    fontWeight: 'bold',
  },
});