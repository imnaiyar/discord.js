import { RoleSelectMenuBuilder as BuildersRoleSelectMenu } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
'use strict';
/**
 * Class used to build select menu components to be sent through the API
 * @extends {BuildersRoleSelectMenu}
 */
class RoleSelectMenuBuilder extends BuildersRoleSelectMenu {
    constructor(data = {}) {
        super(toSnakeCase(data));
    }
    /**
     * Creates a new select menu builder from JSON data
     * @param {RoleSelectMenuBuilder|RoleSelectMenuComponent|APIRoleSelectComponent} other The other data
     * @returns {RoleSelectMenuBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { RoleSelectMenuBuilder };
