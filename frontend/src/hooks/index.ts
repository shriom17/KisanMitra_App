import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { WeatherData, CropInfo, AgricultureAdvice } from '../types';

// Weather Hook
export function useWeather(latitude?: number, longitude?: number) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    if (!latitude || !longitude) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.getWeather(latitude, longitude);
      if (response.success) {
        setWeather(response.data);
      } else {
        setError(response.error || 'Failed to fetch weather data');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeather();
    }
  }, [latitude, longitude]);

  return { weather, loading, error, refetch: fetchWeather };
}

// Crops Hook
export function useCrops(userId: number) {
  const [crops, setCrops] = useState<CropInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCrops = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.getCrops(userId);
      if (response.success) {
        setCrops(response.data);
      } else {
        setError(response.error || 'Failed to fetch crops');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addCrop = async (cropData: Omit<CropInfo, 'id'>) => {
    try {
      const response = await apiService.addCrop(cropData);
      if (response.success) {
        setCrops(prev => [...prev, response.data]);
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (err) {
      return { success: false, error: 'Failed to add crop' };
    }
  };

  useEffect(() => {
    if (userId) {
      fetchCrops();
    }
  }, [userId]);

  return { crops, loading, error, refetch: fetchCrops, addCrop };
}

// Advice Hook
export function useAdvice(userId: number) {
  const [advice, setAdvice] = useState<AgricultureAdvice[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.getAdvice(userId);
      if (response.success) {
        setAdvice(response.data);
      } else {
        setError(response.error || 'Failed to fetch advice');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchAdvice();
    }
  }, [userId]);

  return { advice, loading, error, refetch: fetchAdvice };
}