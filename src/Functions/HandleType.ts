type Types = "string" | "boolean" | "number" | "undefined" | "bigint" | "object" | "user"

export function HandleType(type: Types) {
    if (type === "string") throw new Error("Demilia: Provided type is not a type of \"string\"")
    if (type === "bigint") throw new Error("Demilia: Provided type is not a type of \"bigint\"")
    if (type === "number") throw new Error("Demilia: Provided type is not a type of \"number\"")
    if (type === "boolean") throw new Error("Demilia: Provided type is not a type of \"boolean\"")
    if (type === "undefined") throw new Error("Demilia: Provided type is not a type of \"undefined\"")
    if (type === "object") throw new Error("Demilia: Provided type is not a type of \"object\"")
    if (type === "user") throw new Error("Demilia: Provided type is not a type of \"User\"")
}