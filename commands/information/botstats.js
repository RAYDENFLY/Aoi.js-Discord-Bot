module.exports = {
  name: "botstats",
  aliases: ["botinfo", "stats"],
  description: "Get bot's Stats",
  usage: "<prefix>info (stat name || all)",
  code: `
 
  $if[$message==ping]
 $description[**🏓 Ping**
 > \`$ping\`ms]
 
 $elseIf[$toLowercase[$message]==uptime]
 $description[
 **🕔 Uptime**
 > \`$uptime\`]
 $endelseIf
 $elseIf[$toLowercase[$message]==commands]
 $description[
 **#️⃣️ Command Count**
 > \`$commandsCount\`]
 $endelseIf
 $elseIf[$toLowercase[$message]==servers]
 $description[
 **$customEmoji[servers] Server Count**
 > \`$serverCount\`]
 $endelseIf
 $elseIf[$toLowercase[$message]==ram]
 $description[
 **$customEmoji[ram] Ram**
 > \`$ram\`]
 $endelseIf
 $elseIf[$toLowercase[$message]==cpu]
 $description[
 **$customEmoji[cpu] CPU**
 > \`$cpu\`]
 $endelseIf
 $else
 $description[
 **🏓 Ping**
 > \`$ping\`ms
 
 **🕔 Uptime**
 > \`$uptime\`
 
 **#️⃣️ Command Count**
 > \`$commandsCount\`
 
 **$customEmoji[servers] Server Count**
 > \`$serverCount\`
 
 **$customEmoji[ram] Ram**
 > \`$ram\`
 
 **$customEmoji[cpu] CPU**
 > \`$cpu\`
 ]
 $endif
 
  $title[__**Bot Stats**__]
  $author[$userTag[$authorID];$authorAvatar]
  $addTimestamp
  $color[RANDOM]
  $thumbnail[$userAvatar[$clientID]]
  `
 }
 
