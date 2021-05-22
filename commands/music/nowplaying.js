module.exports = {
    name: "now-playing",
    aliases: ['np'],
    code: `
    $author[Now Playing]
    $description[Currently playing [$songInfo[title]\\]($songInfo[url]) 
    Added By: **$username[$songInfo[userID]]**
    Duration: $songInfo[duration]]]`
    };