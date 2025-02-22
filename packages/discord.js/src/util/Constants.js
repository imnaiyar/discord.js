import * as v10 from "discord-api-types/v10";
'use strict';
const { ChannelType, MessageType, ComponentType, ImageFormat, StickerFormatType } = v10;
const MaxBulkDeletableMessageAge$0 = 1_209_600_000;
export const SweeperKeys = [
    'autoModerationRules',
    'applicationCommands',
    'bans',
    'emojis',
    'entitlements',
    'invites',
    'guildMembers',
    'messages',
    'presences',
    'reactions',
    'stageInstances',
    'stickers',
    'threadMembers',
    'threads',
    'users',
    'voiceStates',
];
const NonSystemMessageTypes$0 = [
    MessageType.Default,
    MessageType.Reply,
    MessageType.ChatInputCommand,
    MessageType.ContextMenuCommand,
];
const GuildTextBasedChannelTypes$0 = [
    ChannelType.GuildText,
    ChannelType.GuildAnnouncement,
    ChannelType.AnnouncementThread,
    ChannelType.PublicThread,
    ChannelType.PrivateThread,
    ChannelType.GuildVoice,
    ChannelType.GuildStageVoice,
];
const TextBasedChannelTypes$0 = [...exports.GuildTextBasedChannelTypes, ChannelType.DM, ChannelType.GroupDM];
const SendableChannels$0 = [...exports.GuildTextBasedChannelTypes, ChannelType.DM];
const ThreadChannelTypes$0 = [ChannelType.AnnouncementThread, ChannelType.PublicThread, ChannelType.PrivateThread];
const VoiceBasedChannelTypes$0 = [ChannelType.GuildVoice, ChannelType.GuildStageVoice];
const SelectMenuTypes$0 = [
    ComponentType.StringSelect,
    ComponentType.UserSelect,
    ComponentType.RoleSelect,
    ComponentType.MentionableSelect,
    ComponentType.ChannelSelect,
];
const UndeletableMessageTypes$0 = [
    MessageType.RecipientAdd,
    MessageType.RecipientRemove,
    MessageType.Call,
    MessageType.ChannelNameChange,
    MessageType.ChannelIconChange,
    MessageType.ThreadStarterMessage,
];
const StickerFormatExtensionMap$0 = {
    [StickerFormatType.PNG]: ImageFormat.PNG,
    [StickerFormatType.APNG]: ImageFormat.PNG,
    [StickerFormatType.Lottie]: ImageFormat.Lottie,
    [StickerFormatType.GIF]: ImageFormat.GIF,
};
export { MaxBulkDeletableMessageAge$0 as MaxBulkDeletableMessageAge };
export { NonSystemMessageTypes$0 as NonSystemMessageTypes };
export { GuildTextBasedChannelTypes$0 as GuildTextBasedChannelTypes };
export { TextBasedChannelTypes$0 as TextBasedChannelTypes };
export { SendableChannels$0 as SendableChannels };
export { ThreadChannelTypes$0 as ThreadChannelTypes };
export { VoiceBasedChannelTypes$0 as VoiceBasedChannelTypes };
export { SelectMenuTypes$0 as SelectMenuTypes };
export { UndeletableMessageTypes$0 as UndeletableMessageTypes };
export { StickerFormatExtensionMap$0 as StickerFormatExtensionMap };
