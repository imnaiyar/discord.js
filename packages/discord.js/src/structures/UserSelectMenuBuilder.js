import { UserSelectMenuBuilder as BuildersUserSelectMenu } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
'use strict';
/**
 * Class used to build select menu components to be sent through the API
 * @extends {BuildersUserSelectMenu}
 */
class UserSelectMenuBuilder extends BuildersUserSelectMenu {
    constructor(data = {}) {
        super(toSnakeCase(data));
    }
    /**
     * Creates a new select menu builder from JSON data
     * @param {UserSelectMenuBuilder|UserSelectMenuComponent|APIUserSelectComponent} other The other data
     * @returns {UserSelectMenuBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { UserSelectMenuBuilder };
