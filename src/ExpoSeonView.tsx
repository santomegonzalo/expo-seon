import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoSeonViewProps } from './ExpoSeon.types';

const NativeView: React.ComponentType<ExpoSeonViewProps> =
  requireNativeViewManager('ExpoSeon');

export default function ExpoSeonView(props: ExpoSeonViewProps) {
  return <NativeView {...props} />;
}
