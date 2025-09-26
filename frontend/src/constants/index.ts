import { Dimensions } from 'react-native';

// Screen Dimensions
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Colors
export const COLORS = {
  // Primary colors for agriculture theme
  primary: '#4CAF50', // Green
  primaryDark: '#388E3C',
  primaryLight: '#8BC34A',
  
  // Secondary colors
  secondary: '#FF9800', // Orange
  secondaryDark: '#F57C00',
  secondaryLight: '#FFB74D',
  
  // UI colors
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#212121',
  textSecondary: '#757575',
  border: '#E0E0E0',
  
  // Status colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Weather colors
  sunny: '#FFB300',
  rainy: '#1976D2',
  cloudy: '#616161',
} as const;

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Typography
export const FONT_SIZES = {
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 24,
  title: 28,
  heading: 32,
} as const;

// API Endpoints
export const API_CONFIG = {
  BASE_URL: __DEV__ ? 'http://localhost:8000' : 'https://your-production-api.com',
  ENDPOINTS: {
    WEATHER: '/api/weather',
    CROPS: '/api/crops',
    ADVICE: '/api/advice',
    USER: '/api/user',
  },
  TIMEOUT: 10000,
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: 'KisanMitra',
  VERSION: '1.0.0',
  SUPPORTED_LANGUAGES: ['en', 'hi', 'mr', 'gu'] as const,
  DEFAULT_LANGUAGE: 'hi',
} as const;