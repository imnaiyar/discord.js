import { MentionableSelectMenuBuilder as BuildersMentionableSelectMenu } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
'use strict';
/**
 * Class used to build select menu components to be sent through the API
 * @extends {BuildersMentionableSelectMenu}
 */
class MentionableSelectMenuBuilder extends BuildersMentionableSelectMenu {
    constructor(data = {}) {
        super(toSnakeCase(data));
    }
    /**
     * Creates a new select menu builder from JSON data
     * @param {MentionableSelectMenuBuilder|MentionableSelectMenuComponent|APIMentionableSelectComponent} other
     * The other data
     * @returns {MentionableSelectMenuBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { MentionableSelectMenuBuilder };
