import { Action } from "./Action.js";
'use strict';
class GuildRolesPositionUpdateAction extends Action {
    handle(data) {
        const client = this.client;
        const guild = client.guilds.cache.get(data.guild_id);
        if (guild) {
            for (const partialRole of data.roles) {
                const role = guild.roles.cache.get(partialRole.id);
                if (role)
                    role.rawPosition = partialRole.position;
            }
        }
        return { guild };
    }
}
export { GuildRolesPositionUpdateAction };
