module.exports = {
    name:"anime", 
    description: "Search anime info via title",
    usage: "anime <anime title>",
    code:`
    
    $title[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.romaji;] / $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.japanese;] ]
    $description[
    📅 Published\`\`\`
    $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.startDate;] - $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.endDate;]\`\`\`
    📖 Episode\`\`\`
    $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.episodeCount;] Episode\`\`\`
    ⭐ Rating\`\`\`
    $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.averageRating;]\`\`\`
    🏆 Popularity Rank\`\`\`
    $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.popularityRank;]\`\`\`
    📜 Synopsis\`\`\`
    $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.synopsis;]\`\`\`
    ]
    $color[RANDOM]
    $image[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.posterImage.medium;]]
    $footer[Requested By $username[$authorID];$authorAvatar]
    $addTimestamp
    $onlyIf[$message[1]!=;You need to put Anime name]
    
    `};
