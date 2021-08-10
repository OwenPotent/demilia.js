import { MessageEmbed, User } from "discord.js";
import { HandleType } from "./HandleType"

export function SendWarnEmbed(warnedMember: User | any, reason?: string, author?: User, dynoStyle?: boolean | undefined): MessageEmbed {
    if (!warnedMember) throw new Error("Demilia: No member provided.");
    if (typeof reason !== "string") HandleType("string");
    if (typeof author !== typeof User) HandleType("user");
    if (typeof dynoStyle !== "boolean") HandleType("boolean");

    if (dynoStyle) {
        let WarnEmbed = new MessageEmbed()
            .setDescription(`${warnedMember.tag} has been warned.`)
            .setColor("BLUE")

        return WarnEmbed
    } else {
        let WarnEmbed = new MessageEmbed()
            .setTitle("Banned Member")
            .setDescription(`${warnedMember.tag} has been warned.`)
            .setColor("BLUE")
            .setTimestamp()

        if (reason) {
            WarnEmbed.addField("Reason:", `${reason}`, true)
        }

        if (author) {
            WarnEmbed.addField("Moderator:", `${author}`, true)
        }

        return WarnEmbed
    }
}