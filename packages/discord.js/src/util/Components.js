import { ComponentBuilder } from "@discordjs/builders";
import * as v10 from "discord-api-types/v10";
import { ActionRow } from "../structures/ActionRow.js";
import { ActionRowBuilder } from "../structures/ActionRowBuilder.js";
import { ButtonBuilder } from "../structures/ButtonBuilder.js";
import { ButtonComponent } from "../structures/ButtonComponent.js";
import { ChannelSelectMenuBuilder } from "../structures/ChannelSelectMenuBuilder.js";
import { ChannelSelectMenuComponent } from "../structures/ChannelSelectMenuComponent.js";
import { Component } from "../structures/Component.js";
import { MentionableSelectMenuBuilder } from "../structures/MentionableSelectMenuBuilder.js";
import { MentionableSelectMenuComponent } from "../structures/MentionableSelectMenuComponent.js";
import { RoleSelectMenuBuilder } from "../structures/RoleSelectMenuBuilder.js";
import { RoleSelectMenuComponent } from "../structures/RoleSelectMenuComponent.js";
import { StringSelectMenuBuilder } from "../structures/StringSelectMenuBuilder.js";
import { StringSelectMenuComponent } from "../structures/StringSelectMenuComponent.js";
import { TextInputBuilder } from "../structures/TextInputBuilder.js";
import { TextInputComponent } from "../structures/TextInputComponent.js";
import { UserSelectMenuBuilder } from "../structures/UserSelectMenuBuilder.js";
import { UserSelectMenuComponent } from "../structures/UserSelectMenuComponent.js";
'use strict';
const { ComponentType } = v10;
/**
 * @typedef {Object} BaseComponentData
 * @property {ComponentType} type The type of component
 */
/**
 * @typedef {BaseComponentData} ActionRowData
 * @property {ComponentData[]} components The components in this action row
 */
/**
 * @typedef {BaseComponentData} ButtonComponentData
 * @property {ButtonStyle} style The style of the button
 * @property {?boolean} disabled Whether this button is disabled
 * @property {string} label The label of this button
 * @property {?APIMessageComponentEmoji} emoji The emoji on this button
 * @property {?string} customId The custom id of the button
 * @property {?string} url The URL of the button
 */
/**
 * @typedef {object} SelectMenuComponentOptionData
 * @property {string} label The label of the option
 * @property {string} value The value of the option
 * @property {?string} description The description of the option
 * @property {?APIMessageComponentEmoji} emoji The emoji on the option
 * @property {?boolean} default Whether this option is selected by default
 */
/**
 * @typedef {BaseComponentData} SelectMenuComponentData
 * @property {string} customId The custom id of the select menu
 * @property {?boolean} disabled Whether the select menu is disabled or not
 * @property {?number} maxValues The maximum amount of options that can be selected
 * @property {?number} minValues The minimum amount of options that can be selected
 * @property {?SelectMenuComponentOptionData[]} options The options in this select menu
 * @property {?string} placeholder The placeholder of the select menu
 */
/**
 * @typedef {ActionRowData|ButtonComponentData|SelectMenuComponentData} MessageComponentData
 */
/**
 * @typedef {BaseComponentData} TextInputComponentData
 * @property {string} customId The custom id of the text input
 * @property {TextInputStyle} style The style of the text input
 * @property {string} label The text that appears on top of the text input field
 * @property {?number} minLength The minimum number of characters that can be entered in the text input
 * @property {?number} maxLength The maximum number of characters that can be entered in the text input
 * @property {?boolean} required Whether or not the text input is required or not
 * @property {?string} value The pre-filled text in the text input
 * @property {?string} placeholder Placeholder for the text input
 */
/**
 * @typedef {ActionRowData|ButtonComponentData|SelectMenuComponentData|TextInputComponentData} ComponentData
 */
/**
 * Any emoji data that can be used within a button
 * @typedef {APIMessageComponentEmoji|string} ComponentEmojiResolvable
 */
/**
 * Transforms API data into a component
 * @param {APIMessageComponent|Component} data The data to create the component from
 * @returns {Component}
 * @ignore
 */
function createComponent(data) {
    if (data instanceof Component) {
        return data;
    }
    switch (data.type) {
        case ComponentType.ActionRow:
            return new ActionRow(data);
        case ComponentType.Button:
            return new ButtonComponent(data);
        case ComponentType.StringSelect:
            return new StringSelectMenuComponent(data);
        case ComponentType.TextInput:
            return new TextInputComponent(data);
        case ComponentType.UserSelect:
            return new UserSelectMenuComponent(data);
        case ComponentType.RoleSelect:
            return new RoleSelectMenuComponent(data);
        case ComponentType.MentionableSelect:
            return new MentionableSelectMenuComponent(data);
        case ComponentType.ChannelSelect:
            return new ChannelSelectMenuComponent(data);
        default:
            return new Component(data);
    }
}
/**
 * Transforms API data into a component builder
 * @param {APIMessageComponent|ComponentBuilder} data The data to create the component from
 * @returns {ComponentBuilder}
 * @ignore
 */
function createComponentBuilder(data) {
    if (data instanceof ComponentBuilder) {
        return data;
    }
    switch (data.type) {
        case ComponentType.ActionRow:
            return new ActionRowBuilder(data);
        case ComponentType.Button:
            return new ButtonBuilder(data);
        case ComponentType.StringSelect:
            return new StringSelectMenuBuilder(data);
        case ComponentType.TextInput:
            return new TextInputBuilder(data);
        case ComponentType.UserSelect:
            return new UserSelectMenuBuilder(data);
        case ComponentType.RoleSelect:
            return new RoleSelectMenuBuilder(data);
        case ComponentType.MentionableSelect:
            return new MentionableSelectMenuBuilder(data);
        case ComponentType.ChannelSelect:
            return new ChannelSelectMenuBuilder(data);
        default:
            return new ComponentBuilder(data);
    }
}
export { createComponent };
export { createComponentBuilder };
