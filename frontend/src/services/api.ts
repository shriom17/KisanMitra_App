import { API_CONFIG } from '../constants';
import type { ApiResponse, WeatherData, CropInfo, AgricultureAdvice } from '../types';

class ApiService {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          data: data,
          error: data.message || `HTTP Error: ${response.status}`,
        };
      }

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        data: {} as T,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  // Weather Services
  async getWeather(latitude: number, longitude: number): Promise<ApiResponse<WeatherData>> {
    return this.makeRequest<WeatherData>(
      `${API_CONFIG.ENDPOINTS.WEATHER}?lat=${latitude}&lon=${longitude}`
    );
  }

  async getWeatherForecast(latitude: number, longitude: number, days: number = 7) {
    return this.makeRequest<WeatherData[]>(
      `${API_CONFIG.ENDPOINTS.WEATHER}/forecast?lat=${latitude}&lon=${longitude}&days=${days}`
    );
  }

  // Crop Services
  async getCrops(userId: number): Promise<ApiResponse<CropInfo[]>> {
    return this.makeRequest<CropInfo[]>(`${API_CONFIG.ENDPOINTS.CROPS}?userId=${userId}`);
  }

  async addCrop(cropData: Omit<CropInfo, 'id'>): Promise<ApiResponse<CropInfo>> {
    return this.makeRequest<CropInfo>(API_CONFIG.ENDPOINTS.CROPS, {
      method: 'POST',
      body: JSON.stringify(cropData),
    });
  }

  async updateCrop(cropId: string, cropData: Partial<CropInfo>): Promise<ApiResponse<CropInfo>> {
    return this.makeRequest<CropInfo>(`${API_CONFIG.ENDPOINTS.CROPS}/${cropId}`, {
      method: 'PUT',
      body: JSON.stringify(cropData),
    });
  }

  // Advice Services
  async getAdvice(userId: number): Promise<ApiResponse<AgricultureAdvice[]>> {
    return this.makeRequest<AgricultureAdvice[]>(`${API_CONFIG.ENDPOINTS.ADVICE}?userId=${userId}`);
  }

  async getAdviceByCategory(category: string): Promise<ApiResponse<AgricultureAdvice[]>> {
    return this.makeRequest<AgricultureAdvice[]>(
      `${API_CONFIG.ENDPOINTS.ADVICE}?category=${category}`
    );
  }
}

export const apiService = new ApiService();