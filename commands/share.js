const { Client, RichEmbed } = require("discord.js");
const colors = require("../json/colors.json");

module.exports.run = async (bot, message, args) => {
  const voiceChannelId = message.member.voiceChannelID;
  const link = `https://www.discordapp.com/channels/${
    message.guild.id
  }/${voiceChannelId}`;

  if (message.member.voiceChannel) {
    const shareEmbed = new RichEmbed()
      .setColor("#0099ff")
      .addField(
        "ScreenShare",
        `Screenshare functionality in ${
          message.channel
        }: [ clicking here](${link})`
      )
      .setFooter(`${bot.user.username}`, `${bot.user.displayAvatarURL}`);

    message.channel.send(shareEmbed);
  } else {
    message.channel.send("You have to be connected to a Voice Channel");
  }
};

module.exports.config = {
  name: "share",
  description: "Share you screen"
};
