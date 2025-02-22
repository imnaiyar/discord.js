import * as v10 from "discord-api-types/v10";
import { BitField } from "./BitField.js";
'use strict';
const { GuildMemberFlags } = v10;
/**
 * Data structure that makes it easy to interact with a {@link GuildMember#flags} bitfield.
 * @extends {BitField}
 */
class GuildMemberFlagsBitField extends BitField {
    /**
     * Numeric guild guild member flags.
     * @type {GuildMemberFlags}
     * @memberof GuildMemberFlagsBitField
     */
    static Flags = GuildMemberFlags;
}
export { GuildMemberFlagsBitField };
