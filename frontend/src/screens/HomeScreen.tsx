import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Header } from '../components/Header';
import { COLORS, FONT_SIZES, SPACING } from '../constants';

const bgImage = require('../../../assets/images/homebg.avif');

const { width, height } = Dimensions.get('window');

export function HomeScreen() {
  const [showWeatherModal, setShowWeatherModal] = useState(false);

  const handleGetStarted = () => {
    Alert.alert('Get Started', 'Navigate to Dashboard');
  };

  const handleAIChatClick = () => {
    Alert.alert('AI Chat', 'AI-powered farming assistant coming soon!');
  };

  const handleExpertAdviceClick = () => {
    Alert.alert('Expert Advice', 'AgriGuide - Connect with agricultural experts');
  };

  const handleWeatherClick = () => {
    setShowWeatherModal(true);
  };

  const handleMarketplaceClick = () => {
    Alert.alert('Marketplace', 'AgriGuru Agricultural Marketplace');
  };

  const handleNavigationPress = (tab: string) => {
    switch (tab) {
      case 'farm':
        Alert.alert('Farm', 'Navigate to Farm Management');
        break;
      case 'chat':
        handleAIChatClick();
        break;
      case 'home':
        // Already on home screen
        break;
      case 'market':
        handleMarketplaceClick();
        break;
      case 'profile':
        Alert.alert('Profile', 'Navigate to User Profile');
        break;
      default:
        break;
    }
  };

  const handleAnnapurnaPress = () => {
    Alert.alert('Annapurna AI', '🤖 Annapurna - AI Powered Farming Assistant\n\nAsk me anything about farming!');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      
      <ImageBackground
        source={bgImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Simplified Header Component - Logo Only */}
          <Header />

          {/* Greeting Section */}
          <View style={styles.greetingSection}>
            <Text style={styles.greeting}>Welcome</Text>
            <Text style={styles.subtitle}>What are the plans for crop maintenance today?</Text>
            
            <TouchableOpacity style={styles.primaryButton} onPress={handleGetStarted}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Explore Features</Text>
                        <View style={styles.featuresContainer}>
              <TouchableOpacity style={styles.featureBox} onPress={handleAIChatClick}>
                <Text style={styles.featureIcon}>🏛️</Text>
                <Text style={styles.featureTitle}>Government Schemes</Text>
                <Text style={styles.featureDescription}>Navigate to know about Agriculture Govt. Schemes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureBox} onPress={handleWeatherClick}>
                <Text style={styles.featureIcon}>💡</Text>
                <Text style={styles.featureTitle}>Contract Farming</Text>
                <Text style={styles.featureDescription}>Do you have Extra Field? Use it to earn Extra</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureBox} onPress={handleMarketplaceClick}>
                <Text style={styles.featureIcon}>📊</Text>
                <Text style={styles.featureTitle}>Live Marketprice</Text>
                <Text style={styles.featureDescription}>Know about daily live Market Prices</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureBox} onPress={handleAIChatClick}>
                <Text style={styles.featureIcon}>👮</Text>
                <Text style={styles.featureTitle}>Contact ADO</Text>
                <Text style={styles.featureDescription}>Connect with Agriculture Development Officers</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <Modal
          visible={showWeatherModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowWeatherModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}> मसम परवनमन</Text>
              <Text>मसम क जनकर यह दखग</Text>
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={() => setShowWeatherModal(false)}
              >
                <Text style={styles.closeButtonText}>बद कर</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Bottom Navigation Component */}
        <BottomNavigation 
          activeTab="home" 
          onTabPress={handleNavigationPress}
          onAIPress={handleAnnapurnaPress}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#4CAF50',
    backgroundImage: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 90, // Add padding for bottom navigation
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 0,
  },
  greetingSection: {
    paddingTop: SPACING.md,
    paddingBottom: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  greeting: {
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
    color: COLORS.surface,
    marginBottom: SPACING.xs,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.surface,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  primaryButtonText: {
    color: COLORS.surface,
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: '600',
    color: COLORS.surface,
    marginBottom: SPACING.md,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: SPACING.md,
  },
  featureBox: {
    width: (width - SPACING.md * 3 - SPACING.lg * 2) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: SPACING.lg,
    alignItems: 'center',
    marginBottom: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  featureTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  featureDescription: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: SPACING.lg,
    width: width * 0.9,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 8,
    marginTop: SPACING.md,
  },
  closeButtonText: {
    color: COLORS.surface,
    fontWeight: 'bold',
  },
});
