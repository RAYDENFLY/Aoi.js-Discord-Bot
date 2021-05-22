module.exports = {
    name:"manga", 
    description: "Search manga info via title",
    usage: "manga <manga title>",
    code:`
     
    $title[:dance: $jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.titles.enJp;]]
    
    $addField[📜 Synopsis;\`\`\`$jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.synopsis;]\`\`\`;no]
    $addField[⭐ Rating;\`\`\`$jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.averageRating;]\`\`\`;no]
    $addField[🏆 Popularity Rank;\`\`\`$jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.popularityRank;]\`\`\`;no]
    $addField[📖 Chapter;\`\`\`$replaceText[$jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.chapterCount;];null;Unknown] Chapter\`\`\`;no]
    $addField[📅 Published;\`\`\`$jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.startDate;] - $jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.endDate;]\`\`\`;no]
    
    $color[$getVar[color]]
    $image[$jsonRequest[https://api.avux.ga/mangasearch?text=$message;text.posterImage.medium;]]
    $footer[Requested By $userTag[$authorID];$authorAvatar]
    $addTimestamp
    
    $onlyIf[$message[1]!=;{author:ERROR:$userAvatar[$clientID]}{description:You need to put manga name}{color:FF0000}]
    
    `}
