import { SelectMenuBuilder as BuildersSelectMenu, normalizeArray } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
import { resolvePartialEmoji } from "../util/Util.js";
'use strict';
/**
 * Class used to build select menu components to be sent through the API
 * @extends {BuildersSelectMenu}
 */
class StringSelectMenuBuilder extends BuildersSelectMenu {
    constructor({ options, ...data } = {}) {
        super(toSnakeCase({
            ...data,
            options: options?.map(({ emoji, ...option }) => ({
                ...option,
                emoji: emoji && typeof emoji === 'string' ? resolvePartialEmoji(emoji) : emoji,
            })),
        }));
    }
    /**
     * Normalizes a select menu option emoji
     * @param {SelectMenuComponentOptionData|APISelectMenuOption} selectMenuOption The option to normalize
     * @returns {StringSelectMenuOptionBuilder|APISelectMenuOption}
     * @private
     */
    static normalizeEmoji(selectMenuOption) {
        if (isJSONEncodable(selectMenuOption)) {
            return selectMenuOption;
        }
        const { emoji, ...option } = selectMenuOption;
        return {
            ...option,
            emoji: typeof emoji === 'string' ? resolvePartialEmoji(emoji) : emoji,
        };
    }
    /**
     * Adds options to this select menu
     * @param {RestOrArray<APISelectMenuOption>} options The options to add to this select menu
     * @returns {StringSelectMenuBuilder}
     */
    addOptions(...options) {
        return super.addOptions(normalizeArray(options).map(option => StringSelectMenuBuilder.normalizeEmoji(option)));
    }
    /**
     * Sets the options on this select menu
     * @param {RestOrArray<APISelectMenuOption>} options The options to set on this select menu
     * @returns {StringSelectMenuBuilder}
     */
    setOptions(...options) {
        return super.setOptions(normalizeArray(options).map(option => StringSelectMenuBuilder.normalizeEmoji(option)));
    }
    /**
     * Creates a new select menu builder from json data
     * @param {StringSelectMenuBuilder|StringSelectMenuComponent|APIStringSelectComponent} other The other data
     * @returns {StringSelectMenuBuilder}
     */
    static from(other) {
        if (isJSONEncodable(other)) {
            return new this(other.toJSON());
        }
        return new this(other);
    }
}
export { StringSelectMenuBuilder };
