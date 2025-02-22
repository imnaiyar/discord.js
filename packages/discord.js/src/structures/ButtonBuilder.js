import { ButtonBuilder as BuildersButton } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
import { resolvePartialEmoji } from "../util/Util.js";
'use strict';
/**
 * Represents a button builder.
 * @extends {BuildersButton}
 */
class ButtonBuilder extends BuildersButton {
    constructor({ emoji, ...data } = {}) {
        super(toSnakeCase({ ...data, emoji: emoji && typeof emoji === 'string' ? resolvePartialEmoji(emoji) : emoji }));
    }
    /**
     * Sets the emoji to display on this button
     * @param {string|APIMessageComponentEmoji} emoji The emoji to display on this button
     * @returns {ButtonBuilder}
     */
    setEmoji(emoji) {
        if (typeof emoji === 'string') {
            return super.setEmoji(resolvePartialEmoji(emoji));
        }
        return super.setEmoji(emoji);
    }
    /**
     * Creates a new button builder from JSON data
     * @param {ButtonBuilder|ButtonComponent|APIButtonComponent} other The other data
     * @returns {ButtonBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { ButtonBuilder };
