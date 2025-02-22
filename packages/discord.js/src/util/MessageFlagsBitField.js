import * as v10 from "discord-api-types/v10";
import { BitField } from "./BitField.js";
'use strict';
const { MessageFlags } = v10;
/**
 * Data structure that makes it easy to interact with a {@link Message#flags} bitfield.
 * @extends {BitField}
 */
class MessageFlagsBitField extends BitField {
    /**
     * Numeric message flags.
     * @type {MessageFlags}
     * @memberof MessageFlagsBitField
     */
    static Flags = MessageFlags;
}
export { MessageFlagsBitField };
