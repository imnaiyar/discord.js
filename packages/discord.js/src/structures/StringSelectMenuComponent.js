import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent.js";
'use strict';
/**
 * Represents a string select menu component
 * @extends {BaseSelectMenuComponent}
 */
class StringSelectMenuComponent extends BaseSelectMenuComponent {
    /**
     * The options in this select menu
     * @type {APISelectMenuOption[]}
     * @readonly
     */
    get options() {
        return this.data.options;
    }
}
export { StringSelectMenuComponent };
