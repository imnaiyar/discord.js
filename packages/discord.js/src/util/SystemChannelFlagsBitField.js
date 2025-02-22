import * as v10 from "discord-api-types/v10";
import { BitField } from "./BitField.js";
'use strict';
const { GuildSystemChannelFlags } = v10;
/**
 * Data structure that makes it easy to interact with a {@link Guild#systemChannelFlags} bitfield.
 * <info>Note that all event message types are enabled by default,
 * and by setting their corresponding flags you are disabling them</info>
 * @extends {BitField}
 */
class SystemChannelFlagsBitField extends BitField {
    /**
     * Numeric system channel flags.
     * @type {GuildSystemChannelFlags}
     * @memberof SystemChannelFlagsBitField
     */
    static Flags = GuildSystemChannelFlags;
}
export { SystemChannelFlagsBitField };
