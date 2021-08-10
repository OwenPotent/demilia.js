import { MessageEmbed, User } from "discord.js";
import { HandleType } from "./HandleType"

export function SendKickEmbed(kickedMember: User, reason?: string, author?: User, dynoStyle?: boolean | undefined): MessageEmbed {
    if (!kickedMember) throw new Error("Demilia: No member provided.");
    if (typeof kickedMember !== typeof User) HandleType("user");
    if (typeof reason !== "string") HandleType("string");
    if (typeof author !== typeof User) HandleType("user");
    if (typeof dynoStyle !== "boolean") HandleType("boolean");

    if (dynoStyle) {
        let KickEmbed = new MessageEmbed()
            .setDescription(`${kickedMember.tag} has been kicked from the server.`)
            .setColor("BLUE")

        return KickEmbed
    } else {
        let KickEmbed = new MessageEmbed()
            .setTitle("Kicked Member")
            .setDescription(`${kickedMember.tag} has been kicked from the server.`)
            .setColor("BLUE")
            .setTimestamp()

        if (reason) {
            KickEmbed.addField("Reason:", `${reason}`, true)
        }

        if (author) {
            KickEmbed.addField("Moderator:", `${author}`, true)
        }

        return KickEmbed
    }
}