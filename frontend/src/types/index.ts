// User Types
export interface User {
  id: number;
  name: string;
  phone?: string;
  location?: Location;
  farmDetails?: FarmDetails;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  district?: string;
  state?: string;
}

export interface FarmDetails {
  size: number; // in acres
  cropTypes: string[];
  soilType?: string;
  irrigationType?: string;
}

// Weather Types
export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  description: string;
  date: string;
}

export interface WeatherForecast {
  daily: WeatherData[];
  weekly: WeatherData[];
}

// Agriculture Types
export interface CropInfo {
  id: string;
  name: string;
  variety: string;
  plantingDate: string;
  harvestDate: string;
  stage: 'planted' | 'growing' | 'flowering' | 'harvest-ready' | 'harvested';
}

export interface AgricultureAdvice {
  id: string;
  title: string;
  description: string;
  category: 'planting' | 'fertilizer' | 'pesticide' | 'irrigation' | 'harvest';
  urgency: 'low' | 'medium' | 'high';
  dateCreated: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Navigation Types
export type RootStackParamList = {
  Home: undefined;
  Weather: undefined;
  Crops: undefined;
  Advice: undefined;
  Profile: undefined;
};