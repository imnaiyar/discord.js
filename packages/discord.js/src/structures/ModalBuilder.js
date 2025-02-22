import { ModalBuilder as BuildersModal, ComponentBuilder } from "@discordjs/builders";
import { isJSONEncodable } from "@discordjs/util";
import { toSnakeCase } from "../util/Transformers.js";
'use strict';
/**
 * Represents a modal builder.
 * @extends {BuildersModal}
 */
class ModalBuilder extends BuildersModal {
    constructor({ components, ...data } = {}) {
        super({
            ...toSnakeCase(data),
            components: components?.map(component => component instanceof ComponentBuilder ? component : toSnakeCase(component)),
        });
    }
    /**
     * Creates a new modal builder from JSON data
     * @param {ModalBuilder|APIModalComponent} other The other data
     * @returns {ModalBuilder}
     */
    static from(other) {
        return new this(isJSONEncodable(other) ? other.toJSON() : other);
    }
}
export { ModalBuilder };
