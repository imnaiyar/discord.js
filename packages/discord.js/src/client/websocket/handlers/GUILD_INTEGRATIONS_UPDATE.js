import { Events } from "../../../util/Events.js";
'use strict';
export default (client, { d: data }) => {
    const guild = client.guilds.cache.get(data.guild_id);
    if (!guild)
        return;
    /**
     * Emitted whenever a guild integration is updated
     * @event Client#guildIntegrationsUpdate
     * @param {Guild} guild The guild whose integrations were updated
     */
    client.emit(Events.GuildIntegrationsUpdate, guild);
};
