import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoSeon.web.ts
// and on native platforms to ExpoSeon.ts
import ExpoSeonModule from './ExpoSeonModule';
import ExpoSeonView from './ExpoSeonView';
import { ChangeEventPayload, ExpoSeonViewProps } from './ExpoSeon.types';

// Get the native constant value.
export const PI = ExpoSeonModule.PI;

export function hello(): string {
  return ExpoSeonModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoSeonModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoSeonModule ?? NativeModulesProxy.ExpoSeon);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoSeonView, ExpoSeonViewProps, ChangeEventPayload };
