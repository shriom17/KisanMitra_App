import React, { useEffect, useRef } from 'react';
import {
    Alert,
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
}

export function Sidebar({ isVisible, onClose, isLoggedIn = false, userName, userAvatar }: SidebarProps) {
  const sidebarWidth = width * 0.75; // 75% of screen width
  const slideAnim = useRef(new Animated.Value(-sidebarWidth)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      // Slide in animation
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Slide out animation
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -sidebarWidth,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible, slideAnim, opacityAnim, sidebarWidth]);

  const handleMenuItemPress = (item: string) => {
    switch (item) {
      case 'Dashboard':
        Alert.alert('Dashboard', 'Navigate to Dashboard');
        break;
      case 'Market Price & Loans':
        Alert.alert('Market Price & Loans', 'Navigate to Market Price & Loans');
        break;
      case 'Government Schemes':
        Alert.alert('Government Schemes', 'Navigate to Government Schemes');
        break;
      case 'Contract Farming':
        Alert.alert('Contract Farming', 'Navigate to Contract Farming');
        break;
      case 'KisanGuide':
        Alert.alert('KisanGuide', 'Navigate to KisanGuide');
        break;
      case 'Contact ADO':
        Alert.alert('Contact ADO', 'Navigate to Contact ADO');
        break;
      case 'Marketplace':
        Alert.alert('Marketplace', 'Navigate to Marketplace');
        break;
      case 'About':
        Alert.alert('About', 'Navigate to About');
        break;
      case 'Settings':
        Alert.alert('Settings', 'Navigate to Settings');
        break;
      default:
        break;
    }
    onClose();
  };

  const handleAuthPress = (action: string) => {
    if (action === 'login') {
      Alert.alert('Login', 'Navigate to Login Screen');
    } else if (action === 'signup') {
      Alert.alert('Sign Up', 'Navigate to Sign Up Screen');
    }
    onClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <Animated.View 
        style={[
          styles.overlay,
          {
            opacity: opacityAnim,
          }
        ]}
      >
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          activeOpacity={1}
          onPress={onClose}
        />
      </Animated.View>
      
      {/* Sidebar */}
      <Animated.View 
        style={[
          styles.sidebar, 
          { 
            width: sidebarWidth,
            transform: [{ translateX: slideAnim }],
          }
        ]}
      >
        {/* Header */}
        <View style={styles.sidebarHeader}>
          <Text style={styles.appTitle}>🌾 KisanMitra</Text>
          <Text style={styles.appSubtitle}>Smart Farming Platform</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentContainer}
        >
          {/* Main Features */}
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>Main Features</Text>
          
          <TouchableOpacity
            style={[styles.menuItem, styles.activeMenuItem]}
            onPress={() => handleMenuItemPress('Dashboard')}
          >
            <Text style={styles.menuIcon}>📊</Text>
            <Text style={[styles.menuText, styles.activeMenuText]}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Market Price & Loans')}
          >
            <Text style={styles.menuIcon}>💰</Text>
            <Text style={styles.menuText}>Market Price & Loans</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Government Schemes')}
          >
            <Text style={styles.menuIcon}>🏛️</Text>
            <Text style={styles.menuText}>Government Schemes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Contract Farming')}
          >
            <Text style={styles.menuIcon}>📋</Text>
            <Text style={styles.menuText}>Contract Farming</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('KisanGuide')}
          >
            <Text style={styles.menuIcon}>📚</Text>
            <Text style={styles.menuText}>KisanGuide</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Contact ADO')}
          >
            <Text style={styles.menuIcon}>📞</Text>
            <Text style={styles.menuText}>Contact ADO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Marketplace')}
          >
            <Text style={styles.menuIcon}>🛒</Text>
            <Text style={styles.menuText}>Marketplace</Text>
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Settings')}
          >
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('About')}
          >
            <Text style={styles.menuIcon}>ℹ️</Text>
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

        {/* User Section */}
        <View style={styles.userSection}>
          {isLoggedIn ? (
            <View style={styles.userInfo}>
              <View style={styles.userAvatar}>
                <Text style={styles.avatarText}>
                  {userAvatar || (userName ? userName.charAt(0).toUpperCase() : 'U')}
                </Text>
              </View>
              <Text style={styles.userName}>{userName || 'User'}</Text>
            </View>
          ) : (
            <View style={styles.authButtons}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => handleAuthPress('login')}
              >
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.signupButton}
                onPress={() => handleAuthPress('signup')}
              >
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    zIndex: 1000,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sidebarHeader: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 20,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2e7d32',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 2,
  },
  activeMenuItem: {
    backgroundColor: '#2e7d32',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  activeMenuText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  userSection: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2e7d32',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  authButtons: {
    gap: 10,
  },
  loginButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  signupButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2e7d32',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#2e7d32',
    fontSize: 16,
    fontWeight: '500',
  },
});