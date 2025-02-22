import { EmbedBuilder as BuildersEmbed, embedLength } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
import { resolveColor } from "../util/Util.js";
'use strict';
/**
 * Represents an embed builder.
 * @extends {BuildersEmbed}
 */
class EmbedBuilder extends BuildersEmbed {
    constructor(data) {
        super(toSnakeCase(data));
    }
    /**
     * Sets the color of this embed
     * @param {?ColorResolvable} color The color of the embed
     * @returns {EmbedBuilder}
     */
    setColor(color) {
        return super.setColor(color && resolveColor(color));
    }
    /**
     * Creates a new embed builder from JSON data
     * @param {EmbedBuilder|Embed|APIEmbed} other The other data
     * @returns {EmbedBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
    /**
     * The accumulated length for the embed title, description, fields, footer text, and author name.
     * @type {number}
     * @readonly
     */
    get length() {
        return embedLength(this.data);
    }
}
export { EmbedBuilder };
