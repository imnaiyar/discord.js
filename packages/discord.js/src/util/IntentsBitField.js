import * as v10 from "discord-api-types/v10";
import { BitField } from "./BitField.js";
'use strict';
const { GatewayIntentBits } = v10;
/**
 * Data structure that makes it easy to calculate intents.
 * @extends {BitField}
 */
class IntentsBitField extends BitField {
    /**
     * Numeric WebSocket intents
     * @type {GatewayIntentBits}
     * @memberof IntentsBitField
     */
    static Flags = GatewayIntentBits;
}
export { IntentsBitField };
