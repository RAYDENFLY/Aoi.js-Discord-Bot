module.exports = {
    name: "ejected",
    code: `$author[$userTag[$findUser[$message]] Has Been Voted Out;$userAvatar[$findUser[$message]]]
   $color[RANDOM]
   $image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$findUser[$message]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
   $footer[Request By:$userTag[$authorID]]
   $addTimestamp`
   }
