/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './screens/Login';
import {name as appName} from './app.json';
import { YellowBox } from "react-native";

AppRegistry.registerComponent(appName, () => App);
console.ignoredYellowBox = ["Remote debugger"];
YellowBox.ignoreWarnings([  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"]);
