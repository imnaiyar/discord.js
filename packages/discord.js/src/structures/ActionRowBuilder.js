import { ActionRowBuilder as BuildersActionRow } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { createComponentBuilder } from "../util/Components.js";
import { toSnakeCase } from "../util/Transformers.js";
'use strict';
/**
 * Represents an action row builder.
 * @extends {BuildersActionRow}
 */
class ActionRowBuilder extends BuildersActionRow {
    constructor({ components, ...data } = {}) {
        super({
            ...toSnakeCase(data),
            components: components?.map(component => createComponentBuilder(component)),
        });
    }
    /**
     * Creates a new action row builder from JSON data
     * @param {ActionRow|ActionRowBuilder|APIActionRowComponent} other The other data
     * @returns {ActionRowBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { ActionRowBuilder };
