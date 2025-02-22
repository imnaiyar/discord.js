import { ChannelSelectMenuBuilder as BuildersChannelSelectMenu } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
'use strict';
/**
 * Class used to build select menu components to be sent through the API
 * @extends {BuildersChannelSelectMenu}
 */
class ChannelSelectMenuBuilder extends BuildersChannelSelectMenu {
    constructor(data = {}) {
        super(toSnakeCase(data));
    }
    /**
     * Creates a new select menu builder from JSON data
     * @param {ChannelSelectMenuBuilder|ChannelSelectMenuComponent|APIChannelSelectComponent} other The other data
     * @returns {ChannelSelectMenuBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { ChannelSelectMenuBuilder };
