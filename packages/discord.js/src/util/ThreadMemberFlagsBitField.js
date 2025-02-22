import { BitField } from "./BitField.js";
'use strict';
/**
 * Data structure that makes it easy to interact with a {@link ThreadMember#flags} bitfield.
 * @extends {BitField}
 */
class ThreadMemberFlagsBitField extends BitField {
    /**
     * Numeric thread member flags. There are currently no bitflags relevant to bots for this.
     * @type {Object<string, number>}
     * @memberof ThreadMemberFlagsBitField
     */
    static Flags = {};
}
export { ThreadMemberFlagsBitField };
