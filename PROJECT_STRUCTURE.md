# KisanMitra - Project Structure Guide

This document explains the recommended project structure for your KisanMitra agricultural app.

## 📁 Current Project Structure

```
KisanMitra/
├── app/                          # Expo Router pages
│   ├── _layout.tsx              # Root layout
│   └── index.tsx                # Home page (uses structured components)
├── frontend/                    # Frontend application code
│   └── src/                     # Main source code (ORGANIZED STRUCTURE)
│       ├── components/          # Reusable UI components
│       │   ├── ui/              # Basic UI components (Button, Input, etc.)
│       │   │   └── Button.tsx
│       │   ├── WeatherCard.tsx  # Feature-specific components
│       │   └── index.ts         # Component exports
│       ├── screens/             # Screen/Page components
│       │   ├── HomeScreen.tsx   # Main home screen with Hindi support
│       │   └── index.ts         # Screen exports
│       ├── services/            # API and external services
│       │   └── api.ts           # API service layer
│       ├── hooks/               # Custom React hooks
│       │   └── index.ts         # useWeather, useCrops, useAdvice
│       ├── types/               # TypeScript type definitions
│       │   └── index.ts         # All type definitions
│       ├── constants/           # App constants and configuration
│       │   └── index.ts         # Colors, spacing, API config
│       └── utils/               # Utility functions
│           └── index.ts         # Helper functions
├── backend/                     # Backend service (existing)
├── back/                        # Alternative backend (existing)
└── assets/                      # Static assets
```

## 🎯 Benefits of This Structure

### 1. **Separation of Concerns**
- Each folder has a specific purpose
- Easy to find and modify code
- Better collaboration between developers

### 2. **Scalability**
- Easy to add new screens, components, and services
- Modular architecture supports growth
- Type-safe with TypeScript

### 3. **Maintainability**
- Consistent naming conventions
- Centralized constants and types
- Reusable components reduce duplication

### 4. **Developer Experience**
- Auto-imports work seamlessly
- IntelliSense support with TypeScript
- Easy debugging and testing

## 🚀 Key Features Implemented

### **Multi-language Support (Hindi/English)**
```tsx
// Hindi content in HomeScreen
<Text style={styles.greeting}>नमस्ते, {user.name}</Text>
<Text style={styles.subtitle}>आज आपकी खेती के लिए क्या योजना है?</Text>
```

### **Custom Hooks for Data Management**
```tsx
// Easy data fetching with custom hooks
const { weather, loading, error } = useWeather(lat, lng);
const { crops, addCrop } = useCrops(userId);
const { advice } = useAdvice(userId);
```

### **Reusable UI Components**
```tsx
// Consistent UI components
<Button title="जोड़ें" onPress={handleAdd} variant="primary" />
<WeatherCard weather={weatherData} />
```

### **Type-Safe API Integration**
```tsx
// Type-safe API calls
const response: ApiResponse<WeatherData> = await apiService.getWeather(lat, lng);
```

## 📱 Next Steps

### 1. **Backend Integration**
- Connect the API service to your actual backend endpoints
- Implement authentication
- Add error handling and retry logic

### 2. **Add More Screens**
```tsx
// Create additional screens in frontend/src/screens/
frontend/src/screens/
├── WeatherScreen.tsx      # Detailed weather page
├── CropsScreen.tsx        # Crop management
├── MarketScreen.tsx       # Market prices
├── ExpertScreen.tsx       # Expert consultation
└── ProfileScreen.tsx      # User profile
```

### 3. **Enhanced Components**
```tsx
// Add more UI components in frontend/src/components/ui/
frontend/src/components/ui/
├── Input.tsx             # Text input component
├── Card.tsx              # Generic card component
├── Loading.tsx           # Loading spinner
├── Modal.tsx             # Modal component
└── DatePicker.tsx        # Date picker
```

### 4. **State Management**
- Consider adding Redux Toolkit or Zustand for complex state
- Implement persistent storage with AsyncStorage
- Add offline support

### 5. **Navigation**
- Set up proper navigation between screens
- Add tab navigation or drawer navigation
- Implement deep linking

## 🛠 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Run on Android
npx expo start --android

# Run on iOS
npx expo start --ios

# Build for production
npx expo build
```

## 🧪 Testing Structure (Recommended)

```
__tests__/
├── components/           # Component tests
├── screens/             # Screen tests
├── services/            # API service tests
├── hooks/               # Custom hook tests
└── utils/               # Utility function tests
```

## 📚 Dependencies to Consider Adding

```json
{
  "dependencies": {
    "@react-native-async-storage/async-storage": "^1.19.0",
    "react-native-localize": "^3.0.0",
    "react-native-svg": "^13.0.0",
    "react-native-vector-icons": "^10.0.0",
    "@reduxjs/toolkit": "^1.9.0",
    "react-redux": "^8.1.0"
  },
  "devDependencies": {
    "@testing-library/react-native": "^12.0.0",
    "jest": "^29.0.0"
  }
}
```

This structure provides a solid foundation for your KisanMitra app that can scale as your project grows!