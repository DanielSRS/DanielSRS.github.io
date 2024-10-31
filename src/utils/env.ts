import type { Assert } from 'ts-runtime-checks';

interface EnvData {
  EXPO_PUBLIC_CurrentData: string;
}

/**
 * This function implementation is generated by ts-runtime checks,
 * is not meant to be edited manually
 */
function validateEnv(a: Assert<EnvData>) {
  if (typeof a !== 'object' || a === null) {
    throw new Error('Expected a to be EnvData');
  }
  if (typeof a.EXPO_PUBLIC_CurrentData !== 'string') {
    throw new Error('Expected a.EXPO_CurrentData to be a string');
  }
  return a as EnvData;
}

const envData = {
  EXPO_PUBLIC_CurrentData:
    'https://gist.githubusercontent.com/DanielSRS/877ecf01d572e17f902a281a3e540c6e/raw/current.json',
};
export const ENV = validateEnv(envData);
