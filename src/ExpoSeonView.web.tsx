import * as React from 'react';

import { ExpoSeonViewProps } from './ExpoSeon.types';

export default function ExpoSeonView(props: ExpoSeonViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
