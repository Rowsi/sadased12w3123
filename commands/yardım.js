const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(` **r!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n **r!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n **r!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n **r!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n **r!yardım bot |** Bot Komutlarını Gösterir\)`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle(" Ana Komutlar ")
.setDescription("**r!istatistik |** Botun istatistiklerini gösterir\n**r!linkler |** Botla Alakalı Linkleri Alırsınız\n**r!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**r!ping |** Botun pingini gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle(" Yetkili Komutları ")
.setDescription("**r!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**r!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**r!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**r!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**r!kick |** İstediğiniz kişiyi sunucudan atar\n**r!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**r!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**r!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**r!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**r!temizle |** Belirtilen miktar mesajı siler\n**r!unban |** Belirtilen kişinin banını kaldırır\n**r!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle(" Eğlence Komutları ")
.setDescription("**r!alkış |** Bot Alkışlar\n**r!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**r!emojiyazı |** Bot mesajınızı emoji haline getirir\n**r!hackle |** Etiketlediğiniz kişiyi hackler\n**r!kaçcm |** Malafatının uzunluğunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**r!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**r!slot |** Slots oyununu oynar\n**r!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle(" Kullanıcı Komutları ")
.setDescription("**r!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**r!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**r!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**r!emojiler |** Sunucuda bulunan emojileri gösterir\n**r!hesapla |** Belirtilen işlemi yapar\n**r!kurucu-kim |** Sunucunun kurucusunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**r!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**r!not-al |** Bot not alır\n**r!notum |** Notunuzu gösterir\n**r!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**r!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle(" Ayarlamalı Komutları ")
.setDescription("**r!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**r!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**r!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**r!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**r!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**r!sa-as |** Oto sa-ası ayarlarsınız\n**r!sayaç |** Sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}