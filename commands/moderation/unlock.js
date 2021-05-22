module.exports = {
    name: "unlock",
    code: `$sendmessage[{description:$customemoji[cool_yes] | **Channel Unlocked by <@$authorID>!}{color:WHITE};no]
    $textsplitmap[unlock]
    $textsplit[$channelOverwrites[$channelid;{mention};/];/]
    $onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
    $onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions!]`
    }