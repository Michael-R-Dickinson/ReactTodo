import React from 'react';
import { defaultSettings } from './staticData';

import { SettingsInterface } from './body/body_types';

const SettingsContext = React.createContext({
    settings: defaultSettings,
    setSettings: (param: SettingsInterface) => { }
});
export const SettingsProvider = SettingsContext.Provider
export default SettingsContext