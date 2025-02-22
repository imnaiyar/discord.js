import { TextInputBuilder as BuildersTextInput } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
'use strict';
/**
 * Represents a text input builder.
 * @extends {BuildersTextInput}
 */
class TextInputBuilder extends BuildersTextInput {
    constructor(data) {
        super(toSnakeCase(data));
    }
    /**
     * Creates a new text input builder from JSON data
     * @param {TextInputBuilder|TextInputComponent|APITextInputComponent} other The other data
     * @returns {TextInputBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { TextInputBuilder };
