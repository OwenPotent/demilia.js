import { MessageEmbed, User } from "discord.js";
import { HandleType } from "./HandleType"

export function SendBanEmbed(bannedMember: User | any, reason?: string, author?: User | any, dynoStyle?: boolean | undefined): MessageEmbed {
    if (!bannedMember) throw new Error("Demilia: No member provided.");
    if (typeof reason !== "string") HandleType("string");
    if (typeof dynoStyle !== "boolean") HandleType("boolean");

    if (dynoStyle) {
        let BanEmbed = new MessageEmbed()
            .setDescription(`${bannedMember.tag} has been banned from the server.`)
            .setColor("BLUE")

        return BanEmbed
    } else {
        let BanEmbed = new MessageEmbed()
            .setTitle("Banned Member")
            .setDescription(`${bannedMember.tag} has been banned from the server.`)
            .setColor("BLUE")
            .setTimestamp()

        if (reason) {
            BanEmbed.addField("Reason:", `${reason}`, true)
        }

        if (author) {
            BanEmbed.addField("Moderator:", `${author}`, true)
        }

        return BanEmbed
    }
}