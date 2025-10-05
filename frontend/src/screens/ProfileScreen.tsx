import { useRouter } from 'expo-router';
import React from 'react';
import {
    Alert,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { FONT_SIZES, SPACING } from '../constants';

const { width } = Dimensions.get('window');

interface ProfileScreenProps {
  isLoggedIn?: boolean;
  userName?: string;
  userEmail?: string;
}

export function ProfileScreen({ isLoggedIn = false, userName, userEmail }: ProfileScreenProps) {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  const handleBackToHome = () => {
    router.back();
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Edit profile functionality coming soon!');
  };

  const handleSettings = () => {
    Alert.alert('Settings', 'Settings page coming soon!');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => {
          // TODO: Implement logout logic
          Alert.alert('Logged Out', 'You have been logged out successfully');
        }}
      ]
    );
  };

  if (!isLoggedIn) {
    // Show login/signup options for non-logged-in users
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>👤 Profile</Text>
        </View>

        <View style={styles.notLoggedInContainer}>
          <View style={styles.profileIconContainer}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>
          
          <Text style={styles.notLoggedInTitle}>Welcome to KisanMitra!</Text>
          <Text style={styles.notLoggedInSubtitle}>
            Sign in to access your profile, save preferences, and get personalized farming recommendations.
          </Text>

          <View style={styles.authButtonsContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
              <Text style={styles.signupButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>What you'll get with an account:</Text>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🌾</Text>
              <Text style={styles.featureText}>Personalized crop recommendations</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📊</Text>
              <Text style={styles.featureText}>Track your farming progress</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>💡</Text>
              <Text style={styles.featureText}>Save favorite tips and advice</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🔔</Text>
              <Text style={styles.featureText}>Get weather and market alerts</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  // Show profile information for logged-in users
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>👤 Profile</Text>
      </View>

      <View style={styles.loggedInContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userAvatar}>
            <Text style={styles.avatarText}>
              {userName ? userName.charAt(0).toUpperCase() : 'U'}
            </Text>
          </View>
          <Text style={styles.userName}>{userName || 'User'}</Text>
          <Text style={styles.userEmail}>{userEmail || 'user@example.com'}</Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
            <Text style={styles.menuIcon}>✏️</Text>
            <Text style={styles.menuText}>Edit Profile</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>Settings</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>📊</Text>
            <Text style={styles.menuText}>My Farm Data</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>⭐</Text>
            <Text style={styles.menuText}>Saved Items</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>🔔</Text>
            <Text style={styles.menuText}>Notifications</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❓</Text>
            <Text style={styles.menuText}>Help & Support</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={handleLogout}>
            <Text style={styles.menuIcon}>🚪</Text>
            <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
  },
  backButtonText: {
    fontSize: FONT_SIZES.medium,
    color: '#2e7d32',
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  // Not logged in styles
  notLoggedInContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: SPACING.xl,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#e8f5e8',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  profileIcon: {
    fontSize: 40,
    color: '#2e7d32',
  },
  notLoggedInTitle: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  notLoggedInSubtitle: {
    fontSize: FONT_SIZES.medium,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: SPACING.xl,
  },
  authButtonsContainer: {
    width: '100%',
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  loginButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    paddingVertical: SPACING.md,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2e7d32',
    borderRadius: 12,
    paddingVertical: SPACING.md,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#2e7d32',
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
  },
  featuresContainer: {
    width: '100%',
  },
  featuresTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: '#333',
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: SPACING.md,
    width: 30,
  },
  featureText: {
    fontSize: FONT_SIZES.medium,
    color: '#666',
    flex: 1,
  },
  // Logged in styles
  loggedInContainer: {
    flex: 1,
  },
  userInfoContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: SPACING.xl,
    alignItems: 'center',
    marginBottom: SPACING.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  userAvatar: {
    width: 80,
    height: 80,
    backgroundColor: '#2e7d32',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  avatarText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: SPACING.xs,
  },
  userEmail: {
    fontSize: FONT_SIZES.medium,
    color: '#666',
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: SPACING.md,
    width: 30,
  },
  menuText: {
    fontSize: FONT_SIZES.medium,
    color: '#333',
    flex: 1,
  },
  menuArrow: {
    fontSize: 20,
    color: '#999',
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#d32f2f',
  },
});