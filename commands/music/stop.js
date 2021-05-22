module.exports = {
    name: "stop",
    code: `
    $author[Music Stopped]
    $stopSong
    $description[<@$authorID> stopped the queue!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]`
    }