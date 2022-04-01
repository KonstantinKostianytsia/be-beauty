export interface IStorageService {
  storeData(key: string, data: any): Promise<void>;
  retrieveData<T>(key: string): Promise<T | undefined>;
  removeData(key: string): Promise<void>;
  multiRemoveData(keys: string[]): Promise<void>;
  removeAll(): Promise<void>;
}
