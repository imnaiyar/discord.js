import { Action } from "./Action.js";
import { Events } from "../../util/Events.js";
'use strict';
class GuildScheduledEventUserAddAction extends Action {
    handle(data) {
        const client = this.client;
        const guild = client.guilds.cache.get(data.guild_id);
        if (guild) {
            const guildScheduledEvent = this.getScheduledEvent(data, guild);
            const user = this.getUser(data);
            if (guildScheduledEvent && user) {
                /**
                 * Emitted whenever a user subscribes to a guild scheduled event
                 * @event Client#guildScheduledEventUserAdd
                 * @param {GuildScheduledEvent} guildScheduledEvent The guild scheduled event
                 * @param {User} user The user who subscribed
                 */
                client.emit(Events.GuildScheduledEventUserAdd, guildScheduledEvent, user);
                return { guildScheduledEvent, user };
            }
        }
        return {};
    }
}
export { GuildScheduledEventUserAddAction };
