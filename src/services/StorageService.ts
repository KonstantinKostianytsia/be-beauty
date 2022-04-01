import {IStorageService} from 'models/sevices/IStorageService';
import AsyncStorage from '@react-native-async-storage/async-storage';

var StorageService: IStorageService;

StorageService = class {
  static async storeData(key: string, data: any) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  static async retrieveData<T>(key: string) {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return <T>JSON.parse(value);
    }
  }

  static async removeData(key: string) {
    await AsyncStorage.removeItem(key);
  }

  static async multiRemoveData(keys: readonly string[]) {
    await AsyncStorage.multiRemove(keys);
  }

  static async removeAll() {
    const allKeys = await AsyncStorage.getAllKeys();
    await this.multiRemoveData(allKeys);
  }
};

export default StorageService;
