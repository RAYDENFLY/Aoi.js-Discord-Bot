module.exports = {
    name: "spotify",
    code: `$author[Added Song]
           $description[$playSpotify[$message;name;yes;:x: An error has occured]]
           $color[GREEN]
           $footer[Requested by $userTag[$authorID]]
           $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
    `
    }