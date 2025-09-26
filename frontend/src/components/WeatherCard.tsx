import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../constants';
import type { WeatherData } from '../types';

interface WeatherCardProps {
  weather: WeatherData;
  showDate?: boolean;
}

export function WeatherCard({ weather, showDate = true }: WeatherCardProps) {
  const getWeatherIcon = (description: string) => {
    const desc = description.toLowerCase();
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('sun') || desc.includes('clear')) return '☀️';
    return '🌤️';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>{getWeatherIcon(weather.description)}</Text>
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>{Math.round(weather.temperature)}°C</Text>
          <Text style={styles.description}>{weather.description}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{weather.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Wind Speed</Text>
          <Text style={styles.detailValue}>{weather.windSpeed} km/h</Text>
        </View>
        {weather.rainfall > 0 && (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Rainfall</Text>
            <Text style={styles.detailValue}>{weather.rainfall} mm</Text>
          </View>
        )}
      </View>
      
      {showDate && (
        <Text style={styles.date}>
          {new Date(weather.date).toLocaleDateString('en-IN', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
          })}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.md,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  icon: {
    fontSize: 40,
    marginRight: SPACING.md,
  },
  temperatureContainer: {
    flex: 1,
  },
  temperature: {
    fontSize: FONT_SIZES.xxlarge,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  description: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    textTransform: 'capitalize',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  detailValue: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: COLORS.text,
  },
  date: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textSecondary,
    textAlign: 'right',
  },
});