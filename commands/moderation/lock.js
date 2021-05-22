module.exports = {
    name: "lock",
    code: `$sendmessage[{description:$customemoji[cool_yes] | **Channel Locked by <@$authorID>!}{color:WHITE};no]
    $textsplitmap[lock]
    $textsplit[$channelOverwrites[$channelid;{mention};/];/]
    $onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;I need stack permissions to **MANAGE_CHANNELS** / **EMBED_LINKS**]
    $onlyperms[managechannels;You need **MANAGE_CHANNELS** permissions!]`
    }    