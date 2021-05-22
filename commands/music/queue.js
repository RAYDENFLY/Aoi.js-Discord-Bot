  
module.exports = {
    name: "queue",
    code: `$title[Queue] $description[**Now Playing:** $songInfo[title] by $username[$songInfo[userID]] \n **Song List:** \n $queue[1;10;{number} - {title} ~ $songInfo[duration] | Request by **$username**]]`
  }