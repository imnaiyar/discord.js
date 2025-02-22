import applicationCommandPermissionsUpdate from "./APPLICATION_COMMAND_PERMISSIONS_UPDATE.js";
import autoModerationActionExecution from "./AUTO_MODERATION_ACTION_EXECUTION.js";
import autoModerationRuleCreate from "./AUTO_MODERATION_RULE_CREATE.js";
import autoModerationRuleDelete from "./AUTO_MODERATION_RULE_DELETE.js";
import autoModerationRuleUpdate from "./AUTO_MODERATION_RULE_UPDATE.js";
import channelCreate from "./CHANNEL_CREATE.js";
import channelDelete from "./CHANNEL_DELETE.js";
import channelPinsUpdate from "./CHANNEL_PINS_UPDATE.js";
import channelUpdate from "./CHANNEL_UPDATE.js";
import entitlementCreate from "./ENTITLEMENT_CREATE.js";
import entitlementDelete from "./ENTITLEMENT_DELETE.js";
import entitlementUpdate from "./ENTITLEMENT_UPDATE.js";
import guildAuditLogEntryCreate from "./GUILD_AUDIT_LOG_ENTRY_CREATE.js";
import guildBanAdd from "./GUILD_BAN_ADD.js";
import guildBanRemove from "./GUILD_BAN_REMOVE.js";
import guildCreate from "./GUILD_CREATE.js";
import guildDelete from "./GUILD_DELETE.js";
import guildEmojisUpdate from "./GUILD_EMOJIS_UPDATE.js";
import guildIntegrationsUpdate from "./GUILD_INTEGRATIONS_UPDATE.js";
import guildMembersChunk from "./GUILD_MEMBERS_CHUNK.js";
import guildMemberAdd from "./GUILD_MEMBER_ADD.js";
import guildMemberRemove from "./GUILD_MEMBER_REMOVE.js";
import guildMemberUpdate from "./GUILD_MEMBER_UPDATE.js";
import guildRoleCreate from "./GUILD_ROLE_CREATE.js";
import guildRoleDelete from "./GUILD_ROLE_DELETE.js";
import guildRoleUpdate from "./GUILD_ROLE_UPDATE.js";
import guildScheduledEventCreate from "./GUILD_SCHEDULED_EVENT_CREATE.js";
import guildScheduledEventDelete from "./GUILD_SCHEDULED_EVENT_DELETE.js";
import guildScheduledEventUpdate from "./GUILD_SCHEDULED_EVENT_UPDATE.js";
import guildScheduledEventUserAdd from "./GUILD_SCHEDULED_EVENT_USER_ADD.js";
import guildScheduledEventUserRemove from "./GUILD_SCHEDULED_EVENT_USER_REMOVE.js";
import guildStickersUpdate from "./GUILD_STICKERS_UPDATE.js";
import guildUpdate from "./GUILD_UPDATE.js";
import interactionCreate from "./INTERACTION_CREATE.js";
import inviteCreate from "./INVITE_CREATE.js";
import inviteDelete from "./INVITE_DELETE.js";
import messageCreate from "./MESSAGE_CREATE.js";
import messageDelete from "./MESSAGE_DELETE.js";
import messageDeleteBulk from "./MESSAGE_DELETE_BULK.js";
import messagePollVoteAdd from "./MESSAGE_POLL_VOTE_ADD.js";
import messagePollVoteRemove from "./MESSAGE_POLL_VOTE_REMOVE.js";
import messageReactionAdd from "./MESSAGE_REACTION_ADD.js";
import messageReactionRemove from "./MESSAGE_REACTION_REMOVE.js";
import messageReactionRemoveAll from "./MESSAGE_REACTION_REMOVE_ALL.js";
import messageReactionRemoveEmoji from "./MESSAGE_REACTION_REMOVE_EMOJI.js";
import messageUpdate from "./MESSAGE_UPDATE.js";
import presenceUpdate from "./PRESENCE_UPDATE.js";
import ready from "./READY.js";
import stageInstanceCreate from "./STAGE_INSTANCE_CREATE.js";
import stageInstanceDelete from "./STAGE_INSTANCE_DELETE.js";
import stageInstanceUpdate from "./STAGE_INSTANCE_UPDATE.js";
import subscriptionCreate from "./SUBSCRIPTION_CREATE.js";
import subscriptionDelete from "./SUBSCRIPTION_DELETE.js";
import subscriptionUpdate from "./SUBSCRIPTION_UPDATE.js";
import threadCreate from "./THREAD_CREATE.js";
import threadDelete from "./THREAD_DELETE.js";
import threadListSync from "./THREAD_LIST_SYNC.js";
import threadMembersUpdate from "./THREAD_MEMBERS_UPDATE.js";
import threadMemberUpdate from "./THREAD_MEMBER_UPDATE.js";
import threadUpdate from "./THREAD_UPDATE.js";
import typingStart from "./TYPING_START.js";
import userUpdate from "./USER_UPDATE.js";
import voiceChannelEffectSend from "./VOICE_CHANNEL_EFFECT_SEND.js";
import voiceServerUpdate from "./VOICE_SERVER_UPDATE.js";
import voiceStateUpdate from "./VOICE_STATE_UPDATE.js";
import webhooksUpdate from "./WEBHOOKS_UPDATE.js";
'use strict';
const PacketHandlers = Object.fromEntries([
    ['APPLICATION_COMMAND_PERMISSIONS_UPDATE', applicationCommandPermissionsUpdate],
    ['AUTO_MODERATION_ACTION_EXECUTION', autoModerationActionExecution],
    ['AUTO_MODERATION_RULE_CREATE', autoModerationRuleCreate],
    ['AUTO_MODERATION_RULE_DELETE', autoModerationRuleDelete],
    ['AUTO_MODERATION_RULE_UPDATE', autoModerationRuleUpdate],
    ['CHANNEL_CREATE', channelCreate],
    ['CHANNEL_DELETE', channelDelete],
    ['CHANNEL_PINS_UPDATE', channelPinsUpdate],
    ['CHANNEL_UPDATE', channelUpdate],
    ['ENTITLEMENT_CREATE', entitlementCreate],
    ['ENTITLEMENT_DELETE', entitlementDelete],
    ['ENTITLEMENT_UPDATE', entitlementUpdate],
    ['GUILD_AUDIT_LOG_ENTRY_CREATE', guildAuditLogEntryCreate],
    ['GUILD_BAN_ADD', guildBanAdd],
    ['GUILD_BAN_REMOVE', guildBanRemove],
    ['GUILD_CREATE', guildCreate],
    ['GUILD_DELETE', guildDelete],
    ['GUILD_EMOJIS_UPDATE', guildEmojisUpdate],
    ['GUILD_INTEGRATIONS_UPDATE', guildIntegrationsUpdate],
    ['GUILD_MEMBERS_CHUNK', guildMembersChunk],
    ['GUILD_MEMBER_ADD', guildMemberAdd],
    ['GUILD_MEMBER_REMOVE', guildMemberRemove],
    ['GUILD_MEMBER_UPDATE', guildMemberUpdate],
    ['GUILD_ROLE_CREATE', guildRoleCreate],
    ['GUILD_ROLE_DELETE', guildRoleDelete],
    ['GUILD_ROLE_UPDATE', guildRoleUpdate],
    ['GUILD_SCHEDULED_EVENT_CREATE', guildScheduledEventCreate],
    ['GUILD_SCHEDULED_EVENT_DELETE', guildScheduledEventDelete],
    ['GUILD_SCHEDULED_EVENT_UPDATE', guildScheduledEventUpdate],
    ['GUILD_SCHEDULED_EVENT_USER_ADD', guildScheduledEventUserAdd],
    ['GUILD_SCHEDULED_EVENT_USER_REMOVE', guildScheduledEventUserRemove],
    ['GUILD_STICKERS_UPDATE', guildStickersUpdate],
    ['GUILD_UPDATE', guildUpdate],
    ['INTERACTION_CREATE', interactionCreate],
    ['INVITE_CREATE', inviteCreate],
    ['INVITE_DELETE', inviteDelete],
    ['MESSAGE_CREATE', messageCreate],
    ['MESSAGE_DELETE', messageDelete],
    ['MESSAGE_DELETE_BULK', messageDeleteBulk],
    ['MESSAGE_POLL_VOTE_ADD', messagePollVoteAdd],
    ['MESSAGE_POLL_VOTE_REMOVE', messagePollVoteRemove],
    ['MESSAGE_REACTION_ADD', messageReactionAdd],
    ['MESSAGE_REACTION_REMOVE', messageReactionRemove],
    ['MESSAGE_REACTION_REMOVE_ALL', messageReactionRemoveAll],
    ['MESSAGE_REACTION_REMOVE_EMOJI', messageReactionRemoveEmoji],
    ['MESSAGE_UPDATE', messageUpdate],
    ['PRESENCE_UPDATE', presenceUpdate],
    ['READY', ready],
    ['STAGE_INSTANCE_CREATE', stageInstanceCreate],
    ['STAGE_INSTANCE_DELETE', stageInstanceDelete],
    ['STAGE_INSTANCE_UPDATE', stageInstanceUpdate],
    ['SUBSCRIPTION_CREATE', subscriptionCreate],
    ['SUBSCRIPTION_DELETE', subscriptionDelete],
    ['SUBSCRIPTION_UPDATE', subscriptionUpdate],
    ['THREAD_CREATE', threadCreate],
    ['THREAD_DELETE', threadDelete],
    ['THREAD_LIST_SYNC', threadListSync],
    ['THREAD_MEMBERS_UPDATE', threadMembersUpdate],
    ['THREAD_MEMBER_UPDATE', threadMemberUpdate],
    ['THREAD_UPDATE', threadUpdate],
    ['TYPING_START', typingStart],
    ['USER_UPDATE', userUpdate],
    ['VOICE_CHANNEL_EFFECT_SEND', voiceChannelEffectSend],
    ['VOICE_SERVER_UPDATE', voiceServerUpdate],
    ['VOICE_STATE_UPDATE', voiceStateUpdate],
    ['WEBHOOKS_UPDATE', webhooksUpdate],
]);
export { PacketHandlers };
