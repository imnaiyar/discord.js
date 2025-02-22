import { ChannelCreateAction } from "./ChannelCreate.js";
import { ChannelDeleteAction } from "./ChannelDelete.js";
import { ChannelUpdateAction } from "./ChannelUpdate.js";
import { GuildChannelsPositionUpdateAction } from "./GuildChannelsPositionUpdate.js";
import { GuildEmojiCreateAction } from "./GuildEmojiCreate.js";
import { GuildEmojiDeleteAction } from "./GuildEmojiDelete.js";
import { GuildEmojiUpdateAction } from "./GuildEmojiUpdate.js";
import { GuildEmojisUpdateAction } from "./GuildEmojisUpdate.js";
import { GuildMemberRemoveAction } from "./GuildMemberRemove.js";
import { GuildMemberUpdateAction } from "./GuildMemberUpdate.js";
import { GuildRoleCreateAction } from "./GuildRoleCreate.js";
import { GuildRoleDeleteAction } from "./GuildRoleDelete.js";
import { GuildRolesPositionUpdateAction } from "./GuildRolesPositionUpdate.js";
import { GuildScheduledEventDeleteAction } from "./GuildScheduledEventDelete.js";
import { GuildScheduledEventUserAddAction } from "./GuildScheduledEventUserAdd.js";
import { GuildScheduledEventUserRemoveAction } from "./GuildScheduledEventUserRemove.js";
import { GuildStickerCreateAction } from "./GuildStickerCreate.js";
import { GuildStickerDeleteAction } from "./GuildStickerDelete.js";
import { GuildStickerUpdateAction } from "./GuildStickerUpdate.js";
import { GuildStickersUpdateAction } from "./GuildStickersUpdate.js";
import { GuildUpdateAction } from "./GuildUpdate.js";
import { InteractionCreateAction } from "./InteractionCreate.js";
import { MessageCreateAction } from "./MessageCreate.js";
import { MessageDeleteAction } from "./MessageDelete.js";
import { MessageDeleteBulkAction } from "./MessageDeleteBulk.js";
import { MessagePollVoteAddAction } from "./MessagePollVoteAdd.js";
import { MessagePollVoteRemoveAction } from "./MessagePollVoteRemove.js";
import { MessageReactionAddAction } from "./MessageReactionAdd.js";
import { MessageReactionRemoveAction } from "./MessageReactionRemove.js";
import { MessageReactionRemoveAllAction } from "./MessageReactionRemoveAll.js";
import { MessageReactionRemoveEmojiAction } from "./MessageReactionRemoveEmoji.js";
import { MessageUpdateAction } from "./MessageUpdate.js";
import { StageInstanceCreateAction } from "./StageInstanceCreate.js";
import { StageInstanceDeleteAction } from "./StageInstanceDelete.js";
import { StageInstanceUpdateAction } from "./StageInstanceUpdate.js";
import { ThreadCreateAction } from "./ThreadCreate.js";
import { ThreadMembersUpdateAction } from "./ThreadMembersUpdate.js";
import { TypingStartAction } from "./TypingStart.js";
import { UserUpdateAction } from "./UserUpdate.js";
'use strict';
class ActionsManager {
    // These symbols represent fully built data that we inject at times when calling actions manually.
    // Action#getUser, for example, will return the injected data (which is assumed to be a built structure)
    // instead of trying to make it from provided data
    injectedUser = Symbol('djs.actions.injectedUser');
    injectedChannel = Symbol('djs.actions.injectedChannel');
    injectedMessage = Symbol('djs.actions.injectedMessage');
    constructor(client) {
        this.client = client;
        this.register({ ChannelCreateAction }.ChannelCreateAction);
        this.register({ ChannelDeleteAction }.ChannelDeleteAction);
        this.register({ ChannelUpdateAction }.ChannelUpdateAction);
        this.register({ GuildChannelsPositionUpdateAction }.GuildChannelsPositionUpdateAction);
        this.register({ GuildEmojiCreateAction }.GuildEmojiCreateAction);
        this.register({ GuildEmojiDeleteAction }.GuildEmojiDeleteAction);
        this.register({ GuildEmojiUpdateAction }.GuildEmojiUpdateAction);
        this.register({ GuildEmojisUpdateAction }.GuildEmojisUpdateAction);
        this.register({ GuildMemberRemoveAction }.GuildMemberRemoveAction);
        this.register({ GuildMemberUpdateAction }.GuildMemberUpdateAction);
        this.register({ GuildRoleCreateAction }.GuildRoleCreateAction);
        this.register({ GuildRoleDeleteAction }.GuildRoleDeleteAction);
        this.register({ GuildRolesPositionUpdateAction }.GuildRolesPositionUpdateAction);
        this.register({ GuildScheduledEventDeleteAction }.GuildScheduledEventDeleteAction);
        this.register({ GuildScheduledEventUserAddAction }.GuildScheduledEventUserAddAction);
        this.register({ GuildScheduledEventUserRemoveAction }.GuildScheduledEventUserRemoveAction);
        this.register({ GuildStickerCreateAction }.GuildStickerCreateAction);
        this.register({ GuildStickerDeleteAction }.GuildStickerDeleteAction);
        this.register({ GuildStickerUpdateAction }.GuildStickerUpdateAction);
        this.register({ GuildStickersUpdateAction }.GuildStickersUpdateAction);
        this.register({ GuildUpdateAction }.GuildUpdateAction);
        this.register({ InteractionCreateAction }.InteractionCreateAction);
        this.register({ MessageCreateAction }.MessageCreateAction);
        this.register({ MessageDeleteAction }.MessageDeleteAction);
        this.register({ MessageDeleteBulkAction }.MessageDeleteBulkAction);
        this.register({ MessagePollVoteAddAction }.MessagePollVoteAddAction);
        this.register({ MessagePollVoteRemoveAction }.MessagePollVoteRemoveAction);
        this.register({ MessageReactionAddAction }.MessageReactionAddAction);
        this.register({ MessageReactionRemoveAction }.MessageReactionRemoveAction);
        this.register({ MessageReactionRemoveAllAction }.MessageReactionRemoveAllAction);
        this.register({ MessageReactionRemoveEmojiAction }.MessageReactionRemoveEmojiAction);
        this.register({ MessageUpdateAction }.MessageUpdateAction);
        this.register({ StageInstanceCreateAction }.StageInstanceCreateAction);
        this.register({ StageInstanceDeleteAction }.StageInstanceDeleteAction);
        this.register({ StageInstanceUpdateAction }.StageInstanceUpdateAction);
        this.register({ ThreadCreateAction }.ThreadCreateAction);
        this.register({ ThreadMembersUpdateAction }.ThreadMembersUpdateAction);
        this.register({ TypingStartAction }.TypingStartAction);
        this.register({ UserUpdateAction }.UserUpdateAction);
    }
    register(Action) {
        this[Action.name.replace(/Action$/, '')] = new Action(this.client);
    }
}
export { ActionsManager };
