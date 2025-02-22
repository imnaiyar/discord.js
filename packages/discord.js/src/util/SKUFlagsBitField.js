import * as v10 from "discord-api-types/v10";
import { BitField } from "./BitField.js";
'use strict';
const { SKUFlags } = v10;
/**
 * Data structure that makes it easy to interact with an {@link SKU#flags} bitfield.
 * @extends {BitField}
 */
class SKUFlagsBitField extends BitField {
    /**
     * Numeric SKU flags.
     * @type {SKUFlags}
     * @memberof SKUFlagsBitField
     */
    static Flags = SKUFlags;
}
export { SKUFlagsBitField };
