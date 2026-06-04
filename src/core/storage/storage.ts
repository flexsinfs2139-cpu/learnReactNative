import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'token';

/**
 * Saves the authentication token securely in the device's keychain/Keystore.
 * @param token - The JWT or session access token.
 */
export async function saveToken(token: string): Promise<void> {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error saving secure token:', error);
  }
}

/**
 * Retrieves the securely stored authentication token.
 * @returns The token string or null if not found.
 */
export async function getToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error('Error retrieving secure token:', error);
    return null;
  }
}

/**
 * Removes the securely stored authentication token.
 */
export async function removeToken(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error('Error deleting secure token:', error);
  }
}