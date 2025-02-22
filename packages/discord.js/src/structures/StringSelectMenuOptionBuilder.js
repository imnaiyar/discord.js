import { SelectMenuOptionBuilder as BuildersSelectMenuOption } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
import { resolvePartialEmoji } from "../util/Util.js";
'use strict';
/**
 * Represents a select menu option builder.
 * @extends {BuildersSelectMenuOption}
 */
class StringSelectMenuOptionBuilder extends BuildersSelectMenuOption {
    constructor({ emoji, ...data } = {}) {
        super(toSnakeCase({
            ...data,
            emoji: emoji && typeof emoji === 'string' ? resolvePartialEmoji(emoji) : emoji,
        }));
    }
    /**
     * Sets the emoji to display on this option
     * @param {ComponentEmojiResolvable} emoji The emoji to display on this option
     * @returns {StringSelectMenuOptionBuilder}
     */
    setEmoji(emoji) {
        if (typeof emoji === 'string') {
            return super.setEmoji(resolvePartialEmoji(emoji));
        }
        return super.setEmoji(emoji);
    }
    /**
     * Creates a new select menu option builder from JSON data
     * @param {StringSelectMenuOptionBuilder|APISelectMenuOption} other The other data
     * @returns {StringSelectMenuOptionBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { StringSelectMenuOptionBuilder };
