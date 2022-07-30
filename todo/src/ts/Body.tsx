import { useState } from 'react';

import Header from './header';
import { SettingsProvider } from "./settings_context";
import { defaultSettings } from './staticData';


export default function Body({ }) {
    const [settings, setSettings] = useState(defaultSettings)
    const value = { settings: settings, setSettings: setSettings }
    return (
        <div className='body'>
            <SettingsProvider value={value}>
                <Header />
            </SettingsProvider>
        </div>)
}
