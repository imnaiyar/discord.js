import * as v10 from "discord-api-types/v10";
import { BitField } from "./BitField.js";
'use strict';
const { UserFlags } = v10;
/**
 * Data structure that makes it easy to interact with a {@link User#flags} bitfield.
 * @extends {BitField}
 */
class UserFlagsBitField extends BitField {
    /**
     * Numeric user flags.
     * @type {UserFlags}
     * @memberof UserFlagsBitField
     */
    static Flags = UserFlags;
}
export { UserFlagsBitField };
