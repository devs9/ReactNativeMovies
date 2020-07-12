import AsyncStorage from '@react-native-community/async-storage'

export const persistedConfig = {
  version: 2,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['movies']
}
