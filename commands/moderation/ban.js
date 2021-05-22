module.exports = {
    name: "ban",
    code: `
    $username[$message] has been banned from the guild.
    $ban[$message]
    $argsCheck[1;Just enter the User ID of who you want to ban.]
    $onlyPerms[ban;Only cool people with ban perms can use this!]
    `
}
