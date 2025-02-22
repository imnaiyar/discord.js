import * as v10 from "discord-api-types/v10";
import { BitField } from "./BitField.js";
'use strict';
const { RoleFlags } = v10;
/**
 * Data structure that makes it easy to interact with a {@link Role#flags} bitfield.
 * @extends {BitField}
 */
class RoleFlagsBitField extends BitField {
    /**
     * Numeric role flags.
     * @type {RoleFlags}
     * @memberof RoleFlagsBitField
     */
    static Flags = RoleFlags;
}
export { RoleFlagsBitField };
