import ExpoSeonModule from './ExpoSeonModule';

export async function fingerprintBase64(sessionId: string): Promise<string> {
  return await ExpoSeonModule.fingerprintBase64(sessionId);
}
