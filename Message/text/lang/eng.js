/**
* Prefix bot multi
* Author Alfarizky.
*/
const prefix = '.'

exports.wait = () => {
    return `Please wait a moment bro~`
}

exports.ok = () => {
    return `Ok desu~`
}
exports.error = () => {
    return `An Error / Error Occurred!`
}
exports.wrongFormat = () => {
    return `Wrong format! Please check how to use it at *${prefix}menu*.`
}
exports.linke = () => {
    return `The link is error :v`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${cmd}* not found!`
}

exports.ownerOnly = () => {
    return `This command is for Owner-sama only!`
}

exports.doneOwner = () => {
    return `It's done, Owner-sama~`
}

exports.groupOnly = () => {
    return `This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `This command can only be used by group admins!`
}

exports.notPremium = () => {
    return `Sorry! This command is only for premium users.`
}

exports.notAdmin = () => {
    return `User is not an admin!`
}

exports.adminAlready = () => {
    return `Unable to promote user who is admin!`
}
exports.notRegistered = () => {
    return `You are not registered in the database!\n\nPlease register with the format:\n*${prefix}verfy*`
}

exports.registeredAlready = () => {
    return `You have registered before.`
}

exports.daily = (time) => {
    return `Sorry, but you have reached the limit using this command.\nPlease wait *${time.hours}* hours *${time.minutes}* minutes *${time.seconds}* seconds more.`
}

exports.aktifan = () => {
    return `Add parameter *On* to enable and *Off* to disable!`
}

exports.onsystem = (fcom) => {
    return `Successfully activated the ${fcom} feature in this group!`
}

exports.offsystem = (fcom) => {
    return `Successfully disabled the ${fcom} feature in this group!`
}

exports.minimalDb = () => {
    return `Requires at least *10* users who have a level in the database!`
}

exports.afkOn = (pushname, reason) => {
    return `
*── 「 AFK MODE 」 ──*
    
Fitur AFK berhasil *diaktifkan*!
➸ *Username*: ${pushname}
➸ *Alasan*: ${reason}
    `
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `
*── 「 AFK MODE 」 ──*

Sssttt! Orangnya lagi AFK, jangan diganggu!
➸ *Alasan*: ${getReason}
➸ *Sejak*: ${getTime}
    `
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Limit penggunaan kamu telah habis! Silakan lakukan hal berikut:
❏ *_Tunggu hingga jam 00:00 WIB_*
    `
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 REMINDER 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.id.replace('@c.us', '')}
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 REMINDER 」 ──*

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Pesan*: ${messRemind}`
}

exports.rules = () => {
    return `
*── 「 PERATURAN BOT 」 ──*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
}

Follow :
https://instagram.com/fahmicog`
}

exports.tos = (ownerNumber) => {
    return `
*── 「 TERMS OF SERVICE 」 ──*

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6285726125902 (Developer)

Kalian juga bisa mendukung saya agar bot ini tetap up to date dengan:
https://saweria.co/alfavrd

Terima kasih!

Alfarizky.
    `
}

exports.animesaran = () => {
	return `*── 「 SARAN ANIME 」 ──*
Anime Romance dimana Heroine nya awalnya benci kemudian jatuh cinta
°Fuuka
°Masamune's Revenge
°Sousei no Onmyouji
°Oda Nobuna no Yabou
°Kaze no Stigma
°Btooom!
°Tonari no Kaibutsu-kun
°Akame ga Kill
°Kaichou wa Maid-sama!
°Nisekoi
____________________________
Anime dimana MC ke Isekai dan mendapatkan kekuatan OP
°Isekai wa Smartphone to Tomo ni
°Isekai Maou to Shokan Shoujo no Dorei Majutsu
°Arifureta Shokugyo de Sekai Saikyou
°Maou-sama, Retry!
°Hataraku Maou-sama
°Drifter
°Yojou Senki
°Tensei Shitara Slime Datta Ken
°No Game No Life
____________________________
Top Anime Romance/Action
°Beatless
°Kishuku Gakkou no Juliet
°Devil Line
°Toaru Hikuushi e no Koiuta
°Shuumatsu Nani Shitemasu ka? Isogashii Desu ka? Sukutte Moratte Ii desu ka?
____________________________
Anime dimana MC OP tidak mengetahui kekuatan sebenarnya
°Dakara Boku wa, H ga Dekinai
°Tokyo Ravens
°Kore wa Zombie desu ka?
°Maoyuu Maou Yuusha
°Blood Lad
°Musaigen no Phantom World
°Witch Craft Works
____________________________
Anime dimana MC OP tapi tidak dapat mengendalikan kekuatannya
°Sousei no Onmyouji
°Bungo Stray Dogs
°Owari no Seraph
°Kyoukai no Kanata
•Mushibugyo
____________________________
Best Anime Romance 
•Love Lab
°Noucome
°Inou-Battle wa Nichijou-Kei no Naka de
°Boku wa Tomodachi ga Sukunai
°Kono Bijutsubu ni wa Mondai ga Aru!
°Just Because!
°Mayo Chiki!
°Mikakunin de Shinkoukei
°Sankarea
°Oda
°Seiren
°3D kanojo
______________________________
Top anime MC kalem/badass
°Amnesia
°Angel Beats!
°Tokyo Ghoul
°Darling in the FranXX
°Golden Time
_____________
.Top 10 Harem dan MC over power
°Maji de Watashi Ni Koi Shinasai!
°Hagure Yuusha no Aesthetica
°Busou Shoujo Machiavellianism
°Hidan no Aria
°Seiken Tsukai no World Break
°Hundred
°Masou Gakuen HXH
°Highschool DxD
°Seikon no Qwaser
°Inou-Battle Nichijou-Kei no Naka de
____________________________
Top Harem MC OP
°IS: Infinite Stratos
°Campione!
°Kore wa Zombie Desu ka?
°Trinity Seven
°Yuragi-sou no Yuuna-san
•Sin: Nanatsu no Taizai
•Neon Genesis Evangelion
•Hello World
•Recently, My sister is unusual
•Vampire Knight
____________________________
Top Anime MC ngebangkitkan kekuatannya
°Hitsugi no Chaika
°Tsubasa Chronicle
°Fate/Stay Night
°Seiken no Blacksmith
°Absolute Duo
°Dakara Boku wa, H ga Dekinai
°Mahou Sensou
____________________________
Top Anime with anti sosial & OP MC
°Goblin Slayer
°No Game No Life
°Grisaia no Kajitsu
°Jormungand
°Classroom of the Elite
°Saiki Kusou no Psi Nan
____________________________
Top anime MC badas
°Drifters
•Kara no Kyoukai
•Kino no Tabi
°Darker than Black
°Grisaia Series
°Fate/Zero
____________________________
Top Anime MC pura² lemah padahal kuat
°Blood Lad
°Rokudenashi Majutsu Koushitsu
°Saiki Kusou no Psi Nan
°Classroom of the Elite
____________________________
Top anime with OP MC (2019)
°Isekai Cheat Magician
°Arifureta Shokugyo Sekai ni Saikyou
°Maou-sama, Retry!
°Katsute Kami Datta Kemono-tachi e
°Toaru Kagaku no Accelerator
°Kenja no Mago
°Vinland Saga
°Tate no Yuusha no Nariagari
°Dr. Stone
____________________________
Top anime MC abadi
°Itsuka Tenma no Kuro Usagi
°UQ Holder
°Renai Boukun
•Kuroshitsuji
°Sayonara no Asa
°Re:Zero Kara Hajimeru Isekai Seikatsu
____________________________
Top anime dimana MC dikhianati dan jatuh ke jalan gelap
°Arifureta Shokugyo Sekai ni Saikyou
°Guilty Crown
°Akame ga Kill
°Zetsuen no Tempest
°Ao no Excorcist
°Densetsu no Yuusha no Densetsu
•91 Days
°Tate no Yuusha no Nariagari
•Shinsekai Yori
°Btooom!
•Mawaru Penguindrum
____________________________
Top anime MC terlihat malas tapi OV/badass
°Densetsu no Yuusha no Densetsu
°Rokudenashi Majutsu Koushitsu
°Zetsuen no Tempest
°Nejimaki Seirei Senki: Tenkyou no Alderamin
°Gate
°Hyouka
°Gintama
____________________________
Top Anime yang MC-nya adalah legenda pensiunan yang kembali lagi
°Accel World
°Noragami
°Shuumatsu Nani Shitemasu ka?
•Yuushibu
°Rokudenashi Majutsu Koushitsu
°Densetsu no Yuusha no Densetsu
°Hataraku Maou-sama
°Violet Evergarden
°Hagure Yuusha no Aesthetica
____________________________
Top Anime dengan MC memiliki masa lalu yang gelap
°Zankyou no Terror
°Black Bullet
°Jigoku Shoujo
°Owari no Seraph
•91 Days
°Classroom of the Elite
°Noragami
____________________________
Top anime dengan MC yang memiliki kekuatan khusus
°Dakara Boku wa, H ga Dekinai
°Yuragi-Sou no Yuuna-san
°Inu X Boku SS
°Charlotte
____________________________
Top Anime Cinta Obsesi 
°Amagami SS
°Aho Girl
•Kono Bijutsubu
°Haiyore! Nyaruko-san
°Shuffle!
°Gekkan Shoujo Nozaki-kun
°Renai Boukun
°Mirai Nikki
°Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?
____________________________
Top anime romantis-komedi
•Net-juu no Susume
°Mikakunin de Shinkoukei
°Chuunibyou demo Koi ga Shitai!
°Servant x Service
°Masamune-kun's Revenge
•Gamers!
°Nisekoi
____________________________
Top Anime dimana MC memiliki kekuatan Hewan Legendaris
°Seikoku no Dragonar
°Bungo Stray Dogs
°High school DxD
°Owari no Seraph
____________________________
Top Anime dimana MC OP dan tidak ada yang mengetahui
°Chrome Shelled Regios
•Tokyo Majin Gakuen Kenpuchou
°Quanzhi Fashi
°Rokudenashi Majutsu Koushitsu
°Witch Craft Works
°Mahouka Koukou no Rettousei
°Rakudai Kishi no Cavalry
____________________________
Top Anime dengan MC OP
•Phantom: Requiem for the Phantom
°Divine Gate
°Hitsugi no Chaika
°Code: Breaker
•Kiznaiver
°Ansatsu koushitsu
•Kara no Kyoukai
____________________________
Top Anime dimana MC nya Jenius/Cerdas/Ahli siasat
°Nejimaki Seirei Senki: Tenkyou no Alderamin
°Hyouka
°Dr. Stone
°Classroom of the Elite
°No Game No Life
°Death Note
____________________________
Anime dimana MC adalah murid pindahan yang OP
°Hundred
°Code: Breaker
•Tokyo Majin Gakuen Kenpuchou
°Chrome Shelled Regios
°Kill la Kill
°Mahouka Koukou no Rettousei
____________________________

anime Isekai (2019)
°Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no - Okaasan wa Suki Desu ka?
°Arifureta Shokugyo de Sekai Saikyou
°Kenja no Mago
°Maou-sama, Retry!
°Watashi, Nouryoku wa Heikinchi de tte Yo ne!
°Mairimashita! Iruma-kun
°Honzuki no Gekokujou: Shisho ni Naru Tame ni Shudan wo
°Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you Desu!
°Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuseni Shinchou Sugiru`
}
exports.animesaran2 = () => { 
	return `*── 「 SARAN ANIME 」 ──*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
DRAMA+KESEDIHAN
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇs
- Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
- Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
- Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ Dᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ
- Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
- Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ (Rᴇᴄᴏᴍᴇɴᴅᴇᴅ)
- Jᴜsᴛ Bᴇᴄᴀᴜsᴇ
- Iɴᴜʏᴀsʜɪᴋɪ
- Cʟᴀɴɴᴀᴅ
- Aɴɢᴇʟ Bᴇᴀᴛs
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Rᴇ : LIFE
- Aɴᴏ Hᴀɴᴀ
- Kᴏɪ ᴛᴏ Usᴏ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ E
- Sᴀɴᴋᴀ Rᴇᴀ
- Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ 

GENRE HAREM:

- Tᴏ Lᴏᴠᴇ - ʀᴜ
- Hɪɢʜsᴄʜᴏᴏʟ DxD 
- Hᴇɴᴛᴀɪ Oᴜᴊɪ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
- Isᴇᴋᴀɪ ᴡᴀ Sᴍᴀʀᴛᴘʜᴏɴᴇ Tᴏᴍᴏ ɴɪ 
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Mᴀsᴀᴍᴜɴᴇ - Kᴜɴ Rᴇᴠᴇɴɢᴇ
- Lᴀᴅɪᴇs Vs Bᴜᴛʟᴇʀ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Mᴀsᴏᴜ Gᴀᴋᴜᴇɴ HxH 
- Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ 
- Sᴇɪʀᴇɪ Tsᴜᴋᴀɪ ɴᴏ Bʟᴀᴅᴇ Dᴀɴᴄᴇ
- Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Mᴜsᴀɪɢᴇɴ ɴᴏ Pʜᴀɴᴛᴏᴍ Wᴏʀʟᴅ
- Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
- Hᴜɴᴅʀᴇᴅ
- Dᴀᴋᴀʀᴀ Bᴏᴋᴜ ᴡᴀ H, Dᴇᴋɪɴᴀɪ? 
- Kᴏʀᴇ ᴡᴀ Zᴏᴍʙɪᴇ Dᴇsᴜ Kᴀ?
- Sʜɪᴏᴍɪɴ Sᴀᴍᴘʟᴇ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ 
- Dᴀᴛᴇ A Lɪᴠᴇ
- Kᴏɴᴏ Nᴀᴋᴀ ɴɪ Hɪᴛᴏʀɪ, Iᴍᴏᴜᴛᴏ ɢᴀ Iʀᴜ
- Oɴɪɪ - Cʜᴀɴ Dᴀᴋᴇᴅᴏ Aɪ Sᴀʀᴇʙᴀ Kᴀɴᴋᴇɪ Nᴀɪʏᴏɴᴇ
- Oʀᴇ ɴᴏ Nᴏᴜɴᴀɪ Sᴇɴᴛᴀᴋᴜsʜɪ ɢᴀ, Gᴀᴋᴜᴇɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Zᴇɴʀʏᴏᴋᴜ ᴅᴇ Jᴀᴍᴀ Sʜɪᴛᴇʀᴜ 
- Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
- Kᴀɴᴏᴋᴏɴ
- Rᴏᴋᴜᴊᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ
- Nɪsᴇᴋᴏɪ
- Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪ Nᴏᴍɪ ᴢᴏ Sʜɪʀᴜ Sᴇᴋᴀɪ
- Rᴇɴᴀɪ Bᴏᴜᴋᴜɴ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ

GENRE COMEDY

- Gɪɴᴛᴀᴍᴀ 
- Tᴀɴᴀᴋᴀ - ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
- Wᴏʀᴋɪɴɢ!!!
- Bᴀʀᴀᴋᴀᴍᴏɴ
- Bʟᴇɴᴅ S
- Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ - Cʜᴀɴ
- Nᴇᴡ Gᴀᴍᴇ
- Aɴɪᴍᴇɢᴀᴛᴀʀɪs
- Gᴇᴋᴋᴀɴ Sʜᴏᴜᴊᴏ Nᴏᴢᴀᴋɪ - ᴋᴜɴ
- Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
- Kᴏʙᴀʏᴀsʜɪ - ᴄʜᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
- Dᴀɴsʜɪ Kᴏᴜᴋᴏsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ 

GENRE ROMANCE

- Iᴍᴏᴜᴛᴏ Sᴀᴇ Iʀᴇʙᴀ Iɪ
- Eʀᴏᴍᴀɴɢᴀ Sᴇɴsᴇɪ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ ᴡᴀ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ

GENRE ACTION

- Fᴀᴛᴇ/Sᴛᴀʏ Nɪɢʜᴛ 
- UQ Hᴏʟᴅᴇʀ! Mᴀʜᴏᴜ Nᴇɢɪᴍᴀ Sᴇɴsᴇɪ 2
- Aʙsᴏʟᴜᴛᴇ Dᴜᴏ
- Rᴏᴋᴜᴅᴇɴᴀsʜɪ Mᴀᴊᴜᴛsᴜ Kᴏᴜsɪ ɴᴏ Aᴋᴀsʜɪᴄ Rᴇᴄᴏʀᴅ
- Oᴠᴇʀʟᴏʀᴅ
- Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Sᴛᴇɪɴ Gᴀᴛᴇ
- Tᴏᴀʀᴜ Kᴀɢᴀᴋᴜ ɴᴏ Rᴀɪʟɢᴜɴ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Iɴᴜʏᴀsʜɪᴋɪ
- Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
- Mᴏʙ Psʏᴄʜᴏ 100
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
- Bᴜɴɢᴏᴜ Sᴛʀᴀʏ Dᴏɢs

GENRE PHSYCOLOGICAL
- Iɴᴜʏᴀsʜɪᴋɪ
- Mᴀᴅᴏᴋᴀ Mᴀɢɪᴄᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Kᴀᴋᴇɢᴜʀᴜɪ
- K-Pʀᴏᴊᴇᴄᴛ
- Gʀɪsᴀɪᴀ ɴᴏ Rᴀᴋᴜᴇɴ & Kᴀᴊɪᴛsᴜ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Dᴇᴀᴛʜ Pᴀʀᴀᴅᴇ
- Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
- Rᴇ : Zᴇʀᴏ Kᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- BTOOOM!
- Psʏᴄʜᴏ Pᴀss
- Kɪsᴇɪᴊᴜᴜ : Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
- Tᴏᴋʏᴏ Gʜᴏᴜʟ
- NHK ɴɪ Yᴏᴜᴋᴏsᴏ 

GENRE GAME & ISEKAI

- Mᴏɴᴅᴀɪᴊɪ - ᴛᴀᴄʜɪ ɢᴀ Isᴇᴋᴀɪ Kᴀʀᴀ Kᴜʀᴜ Sᴏ Dᴇsᴜ Yᴏ?
- Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
- Aᴄᴄᴇʟ Wᴏʀʟᴅ
- Kᴏɴᴏ Sᴜʙᴀʀᴀsʜɪ Isᴇᴋᴀɪ Sᴏɴᴏ Sʜᴜᴋᴜғᴜᴋᴜ ᴡ
- 3 Gᴀᴛsᴜ ɴᴏ Lɪᴏɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Mᴀᴅᴀɴ Oᴜ Vᴀɴᴀᴅɪs

GENRE MYSTERI

- Sᴀᴋᴜʀᴀᴅᴀ Rᴇsᴇᴛ
- Hʏᴏᴜᴋᴀ
- Mᴏɴᴏɢᴀᴛᴀʀɪ ᴜʀᴜᴛᴀɴ ᴄᴇʀɪᴛᴀɴʏᴀ
1. Kɪᴢᴜᴍᴏɴᴏɢᴀᴛᴀʀɪ 
2. Nᴇᴋᴏᴍᴏɴᴏɢᴀᴛᴀʀɪ : Kᴜʀᴏ
3. Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
4. Nɪsᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
5. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs Sᴇᴄᴏɴᴅ Sᴇᴀsᴏɴ
6. Tsᴜᴋɪᴍᴏɴᴏɢᴀᴛᴀʀɪ
7. Kᴏʏᴏᴍɪᴍᴏɴᴏɢᴀᴛᴀʀɪ (Dᴜʀᴀsɪ 12 ᴍɪɴ)
8. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S1
9. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S2
10. Hᴀɴᴀᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Aɴᴏᴛʜᴇʀ

SPORT :

- Yᴀᴡᴀᴍᴜsʜɪ ᴘᴇᴅᴀʟ
- Mᴀᴊᴏʀ
- Eʏᴇsʜɪʟᴇᴅ 21
- Dɪᴀᴍᴏɴᴅ ɴᴏ ᴀᴄᴇ
- Sʟᴀᴍ ᴅᴜɴᴋ
- Hᴀᴊɪᴍᴇ ɴᴏ ɪᴘᴘᴏ
- Fʀᴇᴇ
- Pɪɴɢ ᴘᴏɴɢ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- Bᴀʙʏ sᴛᴇᴘ
- Aʀᴇᴀ ɴᴏ ᴋɪsʜɪ
- Cᴀᴘᴛᴇɪɴ ᴛsᴜʙᴀᴀᴀ
- Aɪʀ ɢᴇᴀʀ
- Cʜɪʜᴀғᴜʏᴜ
- Cʀᴏss ɢᴀᴍᴇ
- Iɴᴀᴢᴜᴍᴀ ᴇʟᴇᴠᴇɴ

 ROMANCE SAD

- Kɪᴍɪᴋɪss ᴘᴜʀᴇ ʀᴀᴏᴜɢᴇ
- Kᴀᴍɪᴋɪss
- Tᴏʀᴀᴅᴏʀᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Sᴀᴋᴜʀᴀsᴏᴜ
- Wʜɪᴛᴇ ᴀʟʙᴜᴍ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- 11ᴇʏᴇs
- Aɴɢᴇʟ ʙᴇᴀᴛs
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇ
- Aᴋᴀᴍᴇ ɢᴀ ᴋɪʟʟ
- Aᴋᴀᴛsᴜᴋɪ ɴᴏ ʏᴏɴᴀ
- Bᴇʀsᴇʀᴋ
- Sᴀᴏ
- Bᴏᴋᴜ ᴡᴀ ᴛᴏᴍᴏᴅᴀᴄʜɪ ᴡᴀ sᴜᴋᴜɴᴀɪ
- Bᴏᴋᴜʀᴀ ᴡᴀ ᴍɪɴɴᴀ ᴋᴀᴡᴀɪsᴏᴜ
- Bᴛᴏᴏᴏᴍ
- Bᴜɴɢᴀᴋᴜ sʜᴏᴜᴊᴏ
- C ᴛʜᴇ ᴍᴏɴᴇʏ ᴏғ sᴏᴜʟ ᴀɴᴅ ᴘᴏssɪʙɪʟɪᴛʏ ᴄᴏɴᴛʀᴏʟ
- Cʜᴀʀʟᴏᴛᴛᴇ
- Cʜɪʜᴀʏᴀғᴜʏᴜ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Cʟᴀɴɴᴀᴅ
- Dᴀɴᴄᴇ ɪɴ ᴛʜᴇ ᴠᴀᴍᴘɪʀᴇ ʙᴜɴᴅ
- Dᴀɴsᴀɪ ʙᴜɴʀɪ ɴᴏ ᴄʀɪᴍᴇ ᴇᴅɢᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Dᴇᴠɪʟs ʟɪɴᴇ
- Dᴀᴛᴇ ᴀ ʟɪᴠᴇ
- Dᴇ ᴄᴀᴘɪ sᴇʀɪᴇs
- Tʀᴜᴇᴇ ᴛᴇᴀʀs
- ᴅᴇᴀᴅᴍᴇᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- ʙʟᴏᴏᴅ ʟᴀᴅ
- ᴅᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜsᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- ᴋʏᴏᴜᴋᴀɪ ɴᴏ ᴋᴀɴᴀᴛᴀ
- Fᴀᴛᴇ/sᴛᴀʏ 
- Mᴀɢɪ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Gᴜɪʟᴛʏ ᴄʀᴏᴡɴ
- Gᴏsɪᴄᴋ
- Hᴇɴᴛᴀɪ ᴏᴜᴊɪ ᴛᴏ ᴡᴀʀᴀᴡᴀɴᴀɪ ɴᴇᴋᴏ
- Kɪsᴇɪᴊᴜᴜ
- Kᴏᴋᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Mɪᴋᴀᴋᴜɴɪɴ
- Mɪʀᴀɪ ɴɪᴋɪ
- Nᴀɢɪ ɴᴏ ᴀsᴜᴋᴀʀᴀ
- Oʀᴇʟᴍᴏ
- Pᴜɴᴄʜ ʟɪɴᴇ
- Rᴏᴋᴋᴀ ɴᴏ ʏᴜᴜsʜᴀ
- Sʜɪɢᴀᴛᴜ ᴡᴀ ᴋɪᴍɪ ɴᴏ ᴜsᴏ
- Kᴏᴛᴏɴᴏʜᴀ ɴᴏ ᴍɪᴡᴀ
- Kɪᴍɪ ɴᴏ ɴᴀᴡᴀ
- Kᴀɪᴄʜᴏᴜ ᴡᴀ ᴍᴀɪᴅ sᴀᴍᴀ
- Oʀᴇɢᴀɪʀᴜ
- Oᴏᴋᴀᴍɪ ɴᴏ ᴋᴏᴜsʜɪɴʀʏᴏᴜ
- Zᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ
- Asᴛᴇʀɪᴋ
- Kᴏʀᴇ ᴡᴀ ᴢᴏᴍʙɪᴇ ᴅᴇsᴜ ᴋᴀ
- Kᴏᴇ ɴᴏ ᴋᴀᴛᴀᴄʜɪ
- Kɪᴍɪ ɴᴏ ᴛᴇᴅᴏᴋᴇ
- Rᴇʟɪғᴇ
- Tsᴜᴋɪɢᴀ ᴋɪʀᴇɪ
- Tᴀᴍᴀᴋᴏ ᴍᴀʀᴋᴇᴛ
- Sᴜᴋɪᴛᴛᴇ ʟɪ ɴᴀʏᴏᴜ
- Oʀᴇ ᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Mᴏɴᴏɢᴀᴛᴀʀɪ
- Aᴋᴀɢᴀᴍɪ ɴᴏ sʜɪʀᴀʏᴜᴋɪ
- Sᴀɴᴋᴀʀᴇᴀ
- Aᴍᴀɢᴀᴍɪ ss
- Issᴜᴋᴀɴ ғʀɪᴇɴᴅ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Fᴜᴜᴋᴀ
- Aɴᴏ ʜᴀɴᴀ
- Yᴏsᴜɢᴀ ɴᴏ sᴏʀᴀ
MYSTERI:
- Dᴇᴀᴛʜ ɴᴏᴛᴇ
- Gᴏsɪᴄᴋ
- Bᴏᴋᴜ ᴅᴀᴋᴇ ɢᴀ ɪɴᴀɪ ᴍᴀᴄʜɪ
- Bᴀᴄᴄᴀɴᴏ
- Dᴜʀᴀʀᴀʀᴀ
- Sʜɪɴsᴇᴋᴀɪ ʏᴏʀɪ
- Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴇᴀᴛʜ ᴘᴀʀᴀᴅᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Zᴀᴛsᴜᴇɴ ɴᴏ ᴛᴇᴍᴘᴇsᴛ
- Eғ: A ᴛᴀʟᴇ ᴍᴇʟᴏᴅɪᴇs
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Pᴀᴘʀɪᴋᴀ
- Tɪɢᴇʀ ᴀɴᴅ ʙᴜɴɴʏ
- Tᴀsᴏɢᴀʀᴇ ᴏᴛᴏᴍᴇ x ᴀᴍɴᴇsɪᴀ
- Mɪʀᴀɪ ɴɪᴋɪ
- Tᴏᴋʏᴏᴜ ɢʜᴏᴜʟ
- Eʀɢᴏ ᴘʀᴏxʏ 
- Aɴᴏᴛʜᴇʀ
- Yᴀᴍᴀᴅᴀ ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ ᴍᴀᴊᴏ
- Gᴀᴋᴋᴏᴜ ɢᴜʀᴀsʜɪ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ᴍᴇᴍᴏᴄʜᴏᴜ
- Hᴀᴍᴀᴛᴏʀᴀ
- Bʟᴀᴄᴋ ʙᴜʟʟᴇᴛ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ɪɴᴀɪ ɴɪᴄʜɪʏᴜʙɪ
- Dᴀɴᴛᴀʟɪᴀɴ ɴᴏ sʜᴏᴋᴀ
- Kᴜᴊɪʀᴀ ɴᴏ ᴋᴏʀᴀ ᴡᴀ sᴀᴊᴏᴜ ɴɪ  ᴊᴀᴍ
- Sᴜʙᴇᴛᴇ ɢᴀ ғ ɴɪ ɴᴀʀᴜ
- Gᴀᴋᴜᴋᴏᴋᴜ ɴᴏ ʙʀʏɴʜɪʟᴅʀ
- Sᴇɪᴋɪᴍᴀᴛsᴜ ᴏᴄᴄᴜʟᴛ ɢᴀᴋᴜɪɴ
- Kᴏɴɪ ɴᴀᴋᴀ ɴɪ ʜɪᴛᴏʀɪ ɪᴍᴏᴜᴛᴏ ɢᴀ ɪʀᴜ 
- Mᴀʏᴏɪɢᴀ
- Kʏᴏᴛᴏ ᴛᴇʀᴀᴍᴀᴄʜɪ sᴀɴᴊᴏᴜ ɴᴏ ʜᴏʟᴍᴇs
- 18ɪғ
- ᴏᴜsᴀᴍᴀ ɢᴀᴍᴇ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- ᴍᴀᴅᴇ ɪɴ ᴀʙʏss

COMEDY SCHOOL :
- Pʀᴇsᴏɴ sᴄʜᴏᴏʟ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ ɴᴏᴢᴀᴋɪ ᴋᴜɴ
- Bᴇᴇʟᴢᴇʙᴜʙ
- Sʜɪᴍᴏɴᴇᴛᴀ
- Aʜᴏ ɢɪʀʟ
- Tᴀɴᴀᴋᴀ ᴋᴜɴ
- D ғʀᴀɢ
- Hᴀɴᴅᴀ ᴋᴜɴ
- Tᴏɴᴀʀᴜ ɴᴏ sᴇᴋɪ ᴋᴜɴ
- Aɴsᴀᴛsᴜ ᴋʏᴏᴜsʜɪᴛᴇ
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Tᴏʀᴀᴅᴏʀᴀ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ
- Gʀᴇᴀᴛ ᴛᴇᴀᴄʜsʀ ᴏɴɪᴢᴜᴋᴀ
- Nɪᴄʜɪᴊᴏᴜ
- Sᴋᴇᴛ ᴅᴀɴᴄᴇ
- Dᴀɴsʜɪ ᴋᴏᴜᴋᴏᴜsᴇɪ ɴᴏ ɴɪᴄʜɪᴊᴏ

Aɴɪᴍᴇ ᴅᴜʀᴀsɪ ᴘᴇɴᴅᴇᴋ:
Aʜᴏ ɢɪʀʟ
Tsᴜʀᴇᴛᴢᴜʀᴇ ᴄʜɪʟᴅᴇʀɴ
Uᴄʜᴜᴜ sᴇɴᴋᴀɴ ᴛɪʀᴀᴍɪsᴜ
Mᴀɴɢᴀᴋᴀ sᴀɴ ᴛᴏ ᴀssɪsᴛᴀɴᴛ sᴀɴ
Tᴏɴᴀʀɪ ɴᴏ sᴇᴋɪ ᴋᴜɴ
Dᴀɴɴᴀ ɢᴀ ɪᴛᴛᴇɪʀᴜ ᴋᴀ ᴡᴀᴋᴀʀᴀɴᴀɪ ᴋᴇɴ
Fᴜᴍɪᴋɪʀɪ ᴊɪᴋᴀɴ
Oɴᴇᴇ ᴄʜᴀɴ ɢᴀ ᴋɪᴛᴀ
Osᴀᴋᴇ ғᴜғᴜ ɴɪɴᴀᴛᴛᴇ
Aᴄᴛɪᴏɴ Sᴜᴘᴇʀɴᴀᴛᴜʀᴀʟ :
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Oᴠᴇʀʟᴏʀᴅ
- Hᴀᴛᴀʀᴀᴋᴜ ᴍᴀᴏ sᴀᴍᴀ
- Mᴀʜᴏᴜᴋᴀ ᴋᴏᴜᴋᴀ
- Bʟᴏᴏᴅ ʟᴀᴅ
- Sᴀᴏ
- Nᴀɴᴀᴛsᴜ ɴᴏ ᴛᴀɪᴢᴀɪ
- Aɴsʏᴀᴛsᴜ ᴋʏᴏᴜʜɪᴛsᴜ
- Cᴏᴅᴇ ɢᴇᴀss
- Nᴏ ɢᴀᴍᴇ ɴᴏ ʟɪғᴇ
- Mᴏʙ ᴘsʏᴄᴏ 100
- Mᴏɴᴅᴀɪᴊɪ-ᴛᴀᴄʜɪ ɢᴀ ɪsᴇᴋᴀɪ ᴋᴀʀᴀ ᴋᴜʀᴜ ᴢᴏᴜ ᴅᴇsᴜ ʏᴏ

Rᴏᴍᴀɴᴄᴇ Sʜᴏᴜᴊᴏ
- Sᴀᴇɪᴋᴀɴᴏ
- Sᴘᴇᴄɪᴀʟ A
- Cᴏᴄᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Kᴀᴍɪsʜᴀᴍᴀ ʜᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- Sɪᴋɪᴛᴛᴇ ʟɪ ɴᴀ ʏᴏ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Aɴᴏ ɴᴀᴛsᴜ ᴅᴇ ᴍᴀᴛᴛᴇʀᴜ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Rᴇ ᴢᴇʀᴏ ᴋᴀʀᴀ
- Dᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜᴜsʜᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- Dᴀɴᴍᴀᴄʜɪ
- Sᴜᴋᴀsᴜᴋᴀ
- Rᴀᴋᴜᴅᴀʏ ᴋɪsʜʏ ɴᴏ ᴄᴀᴠᴀʟʀʏ
- Cᴏᴅᴇ:Rᴇᴀʟɪᴢᴇ
- Cᴏᴅᴇ ʙʀᴇᴀᴋᴇʀ
- ᴢᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ

Cʜᴀʀᴀ GENIUS :
-ᴍᴀsᴀᴍᴜɴᴇ ᴋᴜɴ ɴᴏ ʀᴇᴠᴇɴɢᴇ
-ᴀᴍᴀɢɪ ʙʀɪʟʟɪᴀɴᴛ ᴘᴀʀᴋ
-ʜʏᴏᴜᴋᴀ
-ᴏʀᴇɢᴀɪʀᴜ
-ᴛᴀɴᴀᴋᴀ ᴋᴜɴ
-ᴋɪsʜᴜᴋᴜ ɢᴀᴋᴋᴏᴜ ᴊᴜʟʟɪᴇᴛ
-ʏᴏᴜᴋᴏsᴏ ᴊᴏᴛsᴜʀʏᴏᴋᴜ sʜɪᴊᴏᴜ sʜᴜɢɪ ɴᴏ ᴋʏᴏᴜsʜɪᴛsᴜ ᴇ
-ᴀᴍᴀɢᴀᴍɪ SS
HOROR:
- Gʜᴏsᴛ ᴀᴛ sᴄʜᴏᴏʟ
- Bᴏᴏɢɪᴇᴘᴏᴘ ᴘʜᴀɴᴛᴏᴍ
- Pᴇᴛ sʜᴏᴘs ᴏғ ʜᴏʀʀᴏʀ
- Cᴀᴛ sᴏᴜᴘ
- Hɪʜᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ

- Iᴛᴏᴜ ᴊᴜɴᴊɪ
- Aɴᴏᴛʜᴇʀ
- Kᴏᴡᴀʙᴏɴ
- Bʟᴏᴏᴅ ᴄ
- Bʟᴏᴏᴅ +
- Kᴀᴋᴜʀᴇɴʙᴏ
- Jɪᴋᴏɢᴜ sʜᴏᴜᴊᴏ
- Gʜᴏsᴛ ʜᴜɴᴛ
- Kᴀɢᴇᴡᴀɴɪ
- Yᴀᴍɪ sʜɪʙᴀɪɪ
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Cᴏʀᴘsᴇ ᴘᴀʀᴛʏ
- Sᴇʀɪᴀʟ ᴇxᴘᴇʀɪᴍᴇɴᴛ ʟᴀɪɴ
- Eʟғᴇɴ ʟᴇɪᴅ
- Sʜɪᴋɪ
- Gᴀɴᴛᴢ
- Gʏᴏ : Tᴏᴋʏᴏ ғɪsʜ ᴀᴛᴛᴀᴄᴋ
- Tᴏᴋʏᴏ ɢʜᴏᴜʟ
- Kɪsᴇɪᴊᴜ
- Mᴏɴᴏɴᴏᴋᴇ
- Aᴊɪɴ
- Gᴀᴋᴋᴏᴜɢᴜʀᴀsʜɪ
- Dᴇᴀᴅᴍᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- Hᴇʟʟsɪɴɢ
Cᴀʀɪ ʏɢ ʟᴜ sᴜᴋᴀ
[11/5 20:43] Eʟғ: Rᴇᴋᴏᴍᴇɴᴅᴀsɪ Aɴɪᴍᴇ

Aᴄᴛɪᴏɴ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Nᴀʀᴜᴛᴏ
3. Dʀᴀɢᴏɴ Bᴀʟʟ
4. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
5. Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
6. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
7. Bʟᴇᴀᴄʜ
8. Cᴏᴅᴇ: Bʀᴇᴀᴋᴇʀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ : Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Fᴀɪʀʏ Tᴀɪʟ
11. Gɪɴᴛᴀᴍᴀ
12. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
13. 91 Dᴀʏs
14. Aᴄᴄᴇʟ Wᴏʀʟᴅ
15. Aɪʀ Gᴇᴀʀ
16. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
17. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
18. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
19. Aᴏ ɴᴏ Exᴏʀᴄɪsᴛ
20. Aʀsʟᴀɴ Sᴇɴᴋɪ
21. Bᴀᴄᴄᴀɴᴏ!
22. Bᴇᴇʟᴢᴇʙᴜʙ
23. Bᴇʀsᴇʀᴋ
24. Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
25. Bʟᴏᴏᴅ Lᴀᴅ
26. Bʟᴏᴏᴅ+
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Bᴏʀᴜᴛᴏ
29. Bᴛᴏᴏᴏᴍ!
30. Cʟᴀʏᴍᴏʀᴇ
31. Cᴏᴅᴇ Gᴇᴀss
32. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
33. D.Gʀᴀʏ-ᴍᴀɴ
34. Dᴀɴɢᴀɴʀᴏɴᴘᴀ Sᴇʀɪᴇs
35. Dᴀʀᴋᴇʀ ᴛʜᴀɴ Bʟᴀᴄᴋ Sᴇʀɪᴇs
36. Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
37. Fᴀᴛᴇ Sᴇʀɪᴇs
38. Fʟᴀᴍᴇ ᴏғ Rᴇᴄᴄᴀ
39. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
40. Gᴀɴɢsᴛᴀ
41. Gᴀɴᴛᴢ
42. Gᴀ-Rᴇɪ: Zᴇʀᴏ
43. Gᴏᴅ Eᴀᴛᴇʀ
44. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
45. Hᴇʟʟsɪɴɢ
46. Hɪɢᴀsʜɪ ɴᴏ Eᴅᴇɴ
47. Hɪɢʜsᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
48. IɴᴜYᴀsʜᴀ
49. K (Pʀᴏᴊᴇᴄᴛ K)
50. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
51. Kᴀᴛᴇᴋʏᴏ Hɪᴛᴍᴀɴ Rᴇʙᴏʀɴ!
52. Kɪʟʟ ʟᴀ Kɪʟʟ
53. Kɪsᴇɪᴊᴜᴜ: Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
54. Kᴏᴜᴛᴇᴛsᴜᴊᴏᴜ ɴᴏ Kᴀʙᴀɴᴇʀɪ
55. Kᴜʀᴏsʜɪᴛsᴜᴊɪ (Bʟᴀᴄᴋ Bᴜᴛʟᴇʀ)
56. Mᴀɢɪ Sᴇʀɪᴇs
57. Mɪʀᴀɪ Nɪᴋᴋɪ
58. Mᴏʙ Psʏᴄʜᴏ 100
59. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
60. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
61. Nᴏʀᴀɢᴀᴍɪ
62. Nᴜʀᴀʀɪʜʏᴏɴ ɴᴏ Mᴀɢᴏ
63. Oᴠᴇʀʟᴏʀᴅ
64. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
65. Psʏᴄʜᴏ-Pᴀss
66. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
67. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
68. Sʜᴀᴋᴜɢᴀɴ ɴᴏ Sʜᴀɴᴀ
69. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ
70. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
71. Sᴏᴜʟ Eᴀᴛᴇʀ
72. Sᴛʀɪᴋᴇ ᴛʜᴇ Bʟᴏᴏᴅ
73. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
74. Tᴏᴀʀᴜ Sᴇʀɪᴇs
75. Tᴏᴋʏᴏ Gʜᴏᴜʟ
76. Usʜɪᴏ ᴛᴏ Tᴏʀᴀ
77. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ

Aᴅᴠᴇɴᴛᴜʀᴇ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴜsʜɪsʜɪ
3. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
4. Mᴀᴅᴇ Iɴ Aʙʏss
5. Cʟᴀʏᴍᴏʀᴇ
6. BTOOOM
7. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
8. Rᴏᴋᴋᴀ Nᴏ Yᴜᴜsʜᴀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Mᴀɢɪ Sᴇʀɪᴇs
11. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ 
12. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ 
13. Nᴀʀᴜᴛᴏ Sᴇʀɪᴇs
14. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ 
15. Fᴀɪʀʏ Tᴀɪʟ
16. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
17. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ 
18. Cᴏᴅᴇ Gᴇᴀss
19. Kɪɴᴏ ɴᴏ Tᴀʙɪ: Tʜᴇ Bᴇᴀᴜᴛɪғᴜʟ Wᴏʀʟᴅ
20. Sᴏᴜʟ Eᴀᴛᴇʀ
21. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
22. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
23. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
24. Dʀᴀɢᴏɴ Bᴀʟʟ
25. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ 
26. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ
27. Rᴏᴍᴇᴏ ɴᴏ Aᴏɪ Sᴏʀᴀ
28. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
29. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
30. Sᴇɴ ᴛᴏ Cʜɪʜɪʀᴏ ɴᴏ Kᴀᴍɪᴋᴀᴋᴜsʜɪ
31. Nᴜʀᴀʀɪʜʏᴏɴ Nᴏ Mᴀɢᴏ
32. Lᴏɢ Hᴏʀɪᴢᴏɴ
33. Tᴏʀɪᴋᴏ
34. Gᴀʀɢᴀɴᴛɪᴀ ᴏɴ ᴛʜᴇ Vᴇʀᴅᴜʀᴏᴜs Pʟᴀɴᴇᴛ
35. Jᴏᴊᴏ’s Bɪᴢᴀʀʀᴇ Aᴅᴠᴇɴᴛᴜʀᴇ
36. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
37. Bʟᴀᴄᴋ Lᴀɢᴏᴏɴ
38. D.Gʀᴀʏ-ᴍᴀɴ
39. Aᴛᴛᴀᴄᴋ ᴏɴ Tɪᴛᴀɴ
40. IɴᴜYᴀsʜᴀ
41. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
42. Nᴏʀᴀɢᴀᴍɪ
43. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
44. Rᴀᴅɪᴀɴᴛ

Mᴇᴄʜᴀ
1. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
2. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
3. Cʀᴏss Aɴɢᴇ: Tᴇɴsʜɪ ᴛᴏ Rʏᴜᴜ ɴᴏ Rᴏɴᴅᴏ
4. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
5. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
6. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ (Vᴀʟᴠʀᴀᴠᴇ ᴛʜᴇ Lɪʙᴇʀᴀᴛᴏʀ)
7. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
8. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
9. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
10. Cᴏᴅᴇ Gᴇᴀss
11. Dᴀᴛᴇ A Lɪᴠᴇ
12. Gᴇɴᴇsɪs ᴏғ Aϙᴜᴀʀɪᴏɴ (Sᴏᴜsᴇɪ ɴᴏ Aϙᴜᴀʀɪᴏɴ)
13. Vɪsɪᴏɴ ᴏғ Esᴄᴀғʟᴏᴡɴᴇ 
14. Mᴀᴄʀᴏss Sᴇʀɪᴇs
15. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ: Sᴛᴀɴᴅ Aʟᴏɴᴇ Cᴏᴍᴘʟᴇx
16. RᴀʜXᴇᴘʜᴏɴ
17. Yᴜᴜsʜᴀ-Oᴜ GᴀᴏGᴀɪGᴀʀ
18. FLCL
19. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
20. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
21. Sᴜɪsᴇɪ ɴᴏ Gᴀʀɢᴀɴᴛɪᴀ
22. Uɴᴅᴇғᴇᴀᴛᴇᴅ Bᴀʜᴀᴍᴜᴛ Cʜʀᴏɴɪᴄʟᴇ
23. Hᴜɴᴅʀᴇᴅ
24. Sɪᴅᴏɴɪᴀ ɴᴏ Kɪsʜɪ
25. Rᴏ𝐁𝐎𝐓ɪᴄs;Nᴏᴛᴇs
26. Hᴏsʜɪ ɴᴏ Kᴏᴇ
27. Gᴜɴᴅᴀᴍ Wɪɴɢ
28. Bᴏᴋᴜʀᴀɴᴏ
29. MᴏʙɪʟᴇSᴜɪᴛGᴜɴᴅᴀᴍ:Iʀᴏɴ-Bʟᴏᴏᴅᴇᴅ Oʀᴘʜᴀɴs
30. Kɴɪɢʜᴛ’s & Mᴀɢɪᴄ
31. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
32. Sᴀᴍᴜʀᴀɪ Sᴇᴠᴇɴ
33. Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ
34. Sᴛᴀʀ Dʀɪᴠᴇʀ: Kᴀɢᴀʏᴀᴋɪ ɴᴏ Tᴀᴋᴜᴛᴏ
35. Asᴜʀᴀ Cʀʏɪɴ'
36. Hᴇʀᴏɪᴄ Aɢᴇ
37. Aϙᴜᴀʀɪᴏɴ Eᴠᴏʟ
38. Kᴜʀᴏᴍᴜᴋᴜʀᴏ
39. Nᴏʙᴜɴᴀɢᴀ ᴛʜᴇ Fᴏᴏʟ
40. Sᴄʜᴡᴀʀᴢᴇsᴍᴀʀᴋᴇɴ
41. Tᴏᴘ ᴡᴏ Nᴇʀᴀᴇ! Gᴜɴʙᴜsᴛᴇʀ
42. Sᴄʀᴀᴘᴘᴇᴅ Pʀɪɴᴄᴇss
43. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
44. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
45. Rᴀᴋᴜᴇɴ Tsᴜɪʜᴏᴜ 
46. Vᴀɴᴅʀᴇᴀᴅ
47. Bᴜʙᴜᴋɪ Bᴜʀᴀɴᴋɪ
48. Aᴘᴘʟᴇsᴇᴇᴅ (2004)
49. Dʀᴀɢᴏɴᴀᴜᴛ: Tʜᴇ Rᴇsᴏɴᴀɴᴄᴇ
50. Gᴜɴ X Sᴡᴏʀᴅ

Cᴀʀs
1. Tᴀᴋᴜᴍɪ's AE86 / Iɴɪᴛɪᴀʟ D
2. Aᴋɪᴏ's Fᴀɪʀ Lᴀᴅʏ Z / Wᴀɴɢᴀɴ Mɪᴅɴɪɢʜᴛ
3. JP's Tʀᴀɴsᴀᴍ / Rᴇᴅʟɪɴᴇ
4. Nɪᴄᴏ's Mᴇʀᴄᴇᴅᴇs A-ᴄʟᴀss / Nᴇxᴛ A-ᴄʟᴀss
5. Kᴀᴋᴇʀᴜ's Rᴀɪʟʙɪʀᴅ / Cʜᴏᴜsᴏᴋᴜ Hᴇɴᴋᴇɪ Gʏʀᴏᴢᴇᴛᴛᴇʀ
6. Sᴏɪᴄʜɪ's Lᴏᴛᴜs Sᴜᴘᴇʀ 7 / ᴇX-Dʀɪᴠᴇʀ: Tʜᴇ ᴍᴏᴠɪᴇ
7. Sʜɪʀᴏ's ᴍᴏᴅɪғɪᴇᴅ F-1 / Tᴀɪʟᴇɴᴅᴇʀs
8. Vɪᴄᴇ Pʀɪɴᴄɪᴘᴀʟ Uᴄʜɪʏᴀᴍᴀᴅᴀ's Tᴏʏᴏᴛᴀ Cʀᴇsᴛᴀ / GTO
9. Cᴀᴘᴇᴛᴀ's Fᴏʀᴍᴜʟᴀ Oɴᴇ / Cᴀᴘᴇᴛᴀ
10. Rᴏᴍᴀɴ ᴀɴᴅ Oᴛᴛᴏ's sʜᴀʀᴋ ᴄᴀʀ / Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ

Dʀᴀᴍᴀ
1. RᴇLIFE
2. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
3. AɴᴏHᴀɴᴀ
4. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
5. Mᴀᴅᴇ Iɴ Aʙʏss
6. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
7. Rᴇ: Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
8. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
9. Aɴɢᴇʟ Bᴇᴀᴛs
10. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
11. Cʜᴀʀʟᴏᴛᴛᴇ
12. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
13. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
14. Eʀᴏᴍᴀɴɢᴀ-sᴇɴsᴇɪ
15. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
16. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
17. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴜᴊɪɴ
18. Cʟᴀɴɴᴀᴅ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ

Fᴀɴᴛᴀsʏ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴀᴅᴇ ɪɴ Aʙʏss
3. Rᴇ:Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
4. DᴀɴMᴀᴄʜɪ
5. OᴠᴇʀLᴏʀᴅ
6. Sᴀʏᴏɴᴀʀᴀ ɴᴏ Asᴀ ɴɪ Yᴀᴋᴜsᴏᴋᴜhɴᴏ Hᴀɴᴀ ᴡᴏ 
7. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
8. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
9. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
10. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
11. Lᴏɢ Hᴏʀɪᴢᴏɴ
12. Bᴇʀsᴇʀᴋ
13. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
14. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
15. Mᴀɢɪ Sᴇʀɪᴇs
16. Fᴀɪʀʏ Tᴀɪʟ
17. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
18. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
19. Sᴏᴜʟ Eᴀᴛᴇʀ
20. Fᴀᴛᴇ/sᴛᴀʏ ɴɪɢʜᴛ: Uɴʟɪᴍɪᴛᴇᴅ Bʟᴀᴅᴇ Wᴏʀᴋs
21. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ
22. Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
23. Kᴏʙᴀᴛᴏ.
24. Dʀɪғᴛᴇʀs
25. Hᴀɪʙᴀɴᴇ Rᴇɴᴍᴇɪ
26. Mᴀʜᴏᴜᴊɪɴ Gᴜʀᴜɢᴜʀᴜ
27. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ Nɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
28. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
29. Kᴏɴᴏsᴜʙᴀ
30. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
31. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
32. Mᴜsʜɪsʜɪ
33. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
34. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
35. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
36. Hᴏᴜsᴇᴋɪ ɴᴏ Kᴜɴɪ
37. Pʀɪɴᴄᴇss Mᴏɴᴏɴᴏᴋᴇ
38. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
39. Yᴀᴏɢᴜᴀɪ Mɪɴɢᴅᴀɴ
40. Jᴜᴜɴɪ Kᴏᴋᴜᴋɪ
41. Cᴀʀᴅᴄᴀᴘᴛᴏʀ Sᴀᴋᴜʀᴀ: Cʟᴇᴀʀ Cᴀʀᴅ-ʜᴇɴ
42. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
43. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
44. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
45. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
46. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ

Sᴄʜᴏᴏʟ Lɪғᴇ
1. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
2. Hʏᴏᴜᴋᴀ
3. Cʜᴀʀʟᴏᴛᴛᴇ
4. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
5. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
6. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
7. Tᴏʀᴀᴅᴏʀᴀ!
8. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
9. Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
10. RᴇLIFE
11. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
12. AɴᴏHᴀɴᴀ
13. Issʜᴜᴋᴀɴ Fʀɪᴇɴᴅs
14. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
15. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
16. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
17. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
18. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
19. Tᴏᴋʏᴏ Rᴀᴠᴇɴs
20. Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ-ᴄʜᴀɴ
21. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
22. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
23. Aɴɢᴇʟ Bᴇᴀᴛs
24. Bʟᴇᴀᴄʜ
25. Bʟᴏᴏᴅ-C
26. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Sʜᴏᴋᴜɢᴇᴋɪ ɴᴏ Sᴏᴜᴍᴀ
29. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
30. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
31. Oʀᴀɴɢᴇ
32. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
33. Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ?
34. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
35. Kᴜʀᴏᴋᴏ ɴᴏ Bᴀsᴜᴋᴇ
36. Nɪsᴇᴋᴏɪ
37. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
38. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
39. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
40. Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
41. Aʜᴏ Gɪʀʟ
42. Iᴛsᴜᴅᴀᴛᴛᴇ Bᴏᴋᴜʀᴀ ɴᴏ Kᴏɪ ᴡᴀ 10-Cᴇɴᴛɪᴍᴇᴛᴇʀs Dᴀᴛᴛᴀ
43. Jᴜsᴛ Bᴇᴄᴀᴜsᴇ!
44. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
45. Kᴏᴋᴏʀᴏ ɢᴀ Sᴀᴋᴇʙɪᴛᴀɢᴀᴛᴛᴇʀᴜɴᴅᴀ

Sʟɪᴄᴇ ᴏғ Lɪғᴇ
1. Gᴇɴsʜɪᴋᴇɴ
2. Sʜɪɴʀʏᴀᴋᴜ! Iᴋᴀ Mᴜsᴜᴍᴇ
3. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
4. Kᴏᴛᴏɴᴏʜᴀ ɴᴏ Nɪᴡᴀ
5. Mᴜsʜɪsʜɪ
6. Pᴀᴘᴀ ɴᴏ Iᴜᴋᴏᴛᴏ ᴡᴏ Kɪᴋɪɴᴀsᴀɪ!
7. Aɪʀ
8. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ ɴᴏ Nᴀᴍᴀᴇ ᴡᴏ Bᴏᴋᴜᴛᴀᴄʜɪ ᴡᴀ Mᴀᴅᴀ Sʜɪʀᴀɴᴀɪ.
9. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
10. Bᴀʀᴀᴋᴀᴍᴏɴ ᴅᴀɴ Hᴀɴᴅᴀ-ᴋᴜɴ
11. Dᴀɢᴀsʜɪ Kᴀsʜɪ
12. Aᴍᴀᴀᴍᴀ ᴛᴏ Iɴᴀᴢᴜᴍᴀ
13. Cʟᴀɴɴᴀᴅ
14. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
15. Hɪᴍᴏᴜᴛᴏ! Uᴍᴀʀᴜ-ᴄʜᴀɴ
16. Sᴀᴋᴜʀᴀ Qᴜᴇsᴛ
17. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
18. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
19. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
20. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
21. Tᴀᴍᴀᴋᴏ Lᴏᴠᴇ Sᴛᴏʀʏ
22. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
23. Usᴀɢɪ Dʀᴏᴘ
24. Nᴇᴡ Gᴀᴍᴇ!
25. Wᴏʀᴋɪɴɢ!! (Wᴀɢɴᴀʀɪᴀ!!) Sᴇʀɪᴇs
26. Gᴏᴄʜᴜᴜᴍᴏɴ ᴡᴀ Usᴀɢɪ ᴅᴇsᴜ ᴋᴀ??
27. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
28. Uᴄʜᴜᴜ Kʏᴏᴜᴅᴀɪ
28. Nɪᴄʜɪᴊᴏᴜ
30. Nᴀɴᴀ
31. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
32. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
33. Dᴀɴsʜɪ Kᴏᴜᴋᴏᴜsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ
34. K-Oɴ!
35. Yᴜʀᴜ Cᴀᴍᴘ
36. Gɪɴ ɴᴏ Sᴀᴊɪ
37. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
38. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
39. RᴇLIFE
40. Kᴜʀᴀɢᴇʜɪᴍᴇ
41. Sʜᴏᴜᴊᴏ Sʜᴜᴜᴍᴀᴛsᴜ Rʏᴏᴋᴏᴜ
42. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
43. Hʏᴏᴜᴋᴀ
44. Iᴇ Nᴀᴋɪ Kᴏ Rᴇᴍʏ
45. Tᴀɴᴀᴋᴀ-ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
46. Sʜɪʀᴏʙᴀᴋᴏ
47. Gʀᴇᴀᴛ Tᴇᴀᴄʜᴇʀ Oɴɪᴢᴜᴋᴀ
48. Sᴀɪᴋɪ Kᴜsᴜᴏ ɴᴏ Ψ Nᴀɴ
49. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
50. 3-ɢᴀᴛsᴜ ɴᴏ Lɪᴏɴ
51. Gᴀᴋᴜᴇɴ Bᴀʙʏsɪᴛᴛᴇʀs
52. Mɪᴛsᴜʙᴏsʜɪ Cᴏʟᴏʀs
53. Hɪɴᴀᴍᴀᴛsᴜʀɪ
54. Tᴀᴅᴀ-ᴋᴜɴ ᴡᴀ Kᴏɪ ᴡᴏ Sʜɪɴᴀɪ
55. Cᴏᴍɪᴄ Gɪʀʟs
56. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
57. Hᴀɴᴀsᴀᴋᴜ Iʀᴏʜᴀ
58. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ

Sᴀᴍᴜʀᴀɪ
1. Sᴀᴍᴜʀᴀɪ 7
2. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
3. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
4. Aғʀᴏ Sᴀᴍᴜʀᴀɪ
5. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ: Sᴀᴍᴜʀᴀɪ Kɪɴɢs
6. Gɪɴᴛᴀᴍᴀ
7. Hᴀᴋᴜᴏᴜᴋɪ
8. Sᴡᴏʀᴅ ᴏғ ᴛʜᴇ Sᴛʀᴀɴɢᴇʀ
9. Bʟᴀᴅᴇ ᴏғ ᴛʜᴇ Iᴍᴍᴏʀᴛᴀʟ
10. Rᴏɴɪɴ Wᴀʀʀɪᴏʀs
11.Sᴀᴍᴜʀᴀɪ X

Mɪʟɪᴛᴀʀʏ
1. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
2. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
3. Cᴏᴅᴇ Gᴇᴀss: Hᴀɴɢʏᴀᴋᴜ ɴᴏ Lᴇʟᴏᴜᴄʜ
4. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
5. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ ɴɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
6. Aʟᴅɴᴏᴀʜ .Zᴇʀᴏ
7. Gᴏᴅ Eᴀᴛᴇʀ
8. Yᴏᴜᴊᴏ Sᴇɴᴋɪ 
9. SAO Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Gᴜɴ Gᴀʟᴇ Oɴʟɪɴᴇ
10. Nᴇᴊɪᴍᴀᴋɪ Sᴇɪʀᴇɪ Sᴇɴᴋɪ: Tᴇɴᴋʏᴏᴜ ɴᴏ Aʟᴅᴇʀᴀᴍɪɴ
11. Gɪʀʟs ᴜɴᴅ Pᴀɴᴢᴇʀ
12. Kᴀɴᴛᴀɪ Cᴏʟʟᴇᴄᴛɪᴏɴ
13. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
14. 07-Gʜᴏsᴛ
15. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
16. Kɪɴɢᴅᴏᴍ
17. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ
18. Sᴛʀɪᴋᴇ Wɪᴛᴄʜᴇs
19. Mᴀᴄʀᴏss Fʀᴏɴᴛɪᴇʀ
20. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
21. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
22. Sᴇɴᴊᴏᴜ ɴᴏ Vᴀʟᴋʏʀɪᴀ
23. Oᴛᴏᴍᴇ Yᴏᴜᴋᴀɪ Zᴀᴋᴜʀᴏ
24. Aɴɢᴏʟᴍᴏɪs: Gᴇɴᴋᴏᴜ Kᴀssᴇɴᴋɪ
25. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
26. Hɪɢʜ Sᴄʜᴏᴏʟ Fʟᴇᴇᴛ
27. Tᴏsʜᴏᴋᴀɴ Sᴇɴsᴏᴜ
28. Sᴀʙᴀɢᴇʙᴜ!
29. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜɪᴋᴇɴ Sʜᴏᴜᴛᴀɪ
30. Jᴏᴋᴇʀ Gᴀᴍᴇ

Hɪsᴛᴏʀɪᴄᴀʟ
1. Gɪɴᴛᴀᴍᴀ
2. Mᴜsʜɪsʜɪ
3. Dᴏʀᴏʀᴏ
4. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
5. Bᴀᴄᴄᴀɴᴏ!
6. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
7. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ: Mᴇɪᴊɪ Kᴇɴᴋᴀᴋᴜ Rᴏᴍᴀɴᴛᴀɴ
8. Gᴏsɪᴄᴋ
9. Kɪɴɢᴅᴏᴍ
10. Kᴜʀᴏsʜɪᴛsᴜᴊɪ
11. Aᴏɪ Bᴜɴɢᴀᴋᴜ Sᴇʀɪᴇs
12. Hᴇᴛᴀʟɪᴀ Axɪs Pᴏᴡᴇʀs
13. Hᴀᴋᴜᴏᴜᴋɪ
14. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
15. Jᴏᴋᴇʀ Gᴀᴍᴇ
16. Kᴀɢᴜʏᴀ Hɪᴍᴇ ɴᴏ Mᴏɴᴏɢᴀᴛᴀʀɪ
17. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ 

Pᴏʟɪᴄᴇ
1. Tᴀɪʜᴏ Sʜɪᴄʜᴀᴜ ᴢᴏ
2. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
3. Kᴏᴄʜɪʀᴀ Kᴀᴛsᴜsʜɪᴋᴀᴋᴜ Kᴀᴍᴇᴀʀɪ Kᴏᴜᴇɴᴍᴀᴇ 
4. Hᴀsʜᴜᴛsᴜᴊᴏ
5. Psʏᴄʜᴏ-Pᴀss
6. Mᴏʙɪʟᴇ Pᴏʟɪᴄᴇ Pᴀᴛʟᴀʙᴏʀ
7. Mɪʀᴀɪ Kᴇɪsᴀᴛsᴜ Uʀᴀsʜɪᴍᴀɴ
8. Wɪʟᴅ 7
9. Yᴜᴜsʜᴀ Kᴇɪsᴀᴛsᴜ J-Dᴇᴄᴋᴇʀ
10. Hɪᴍɪᴛsᴜ: Tʜᴇ Rᴇᴠᴇʟᴀᴛɪᴏɴ
11. Sᴀᴍᴜʀᴀɪ Fʟᴀᴍᴇɴᴄᴏ
12. B: Tʜᴇ Bᴇɢɪɴɴɪɴɢ
13. Jɪɴ-Rᴏʜ: Tʜᴇ Wᴏʟғ Bʀɪɢᴀᴅᴇ
14. Oɴɪʜᴇɪ
15. Kɪᴅᴏᴜ Kᴇɪsᴀᴛsᴜ Pᴀᴛʟᴀʙᴏʀ: Oɴ ᴛᴇʟᴇᴠɪsɪᴏɴ
16. Mᴏᴜsᴏᴜ Dᴀɪʀɪɴɪɴ
17. Pᴇᴀᴄᴇ Mᴀᴋᴇʀ Kᴜʀᴏɢᴀɴᴇ
18. Hʏᴘᴇʀ Pᴏʟɪᴄᴇ

Sᴄɪ-ғɪ
1. Sᴛᴇɪɴs;Gᴀᴛᴇ
2. Iɴᴜʏᴀsʜɪᴋɪ
3. Mᴀᴅᴇ ɪɴ Aʙʏss
4. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
5. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
6. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
7. Mᴀʜᴏᴜᴋᴀ Kᴏᴜᴋᴏᴜ ɴᴏ Rᴇᴛᴛᴏᴜsᴇɪ
8. Dɪᴍᴇɴsɪᴏɴ W
9. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
10. Dᴇɴɴᴏᴜ Cᴏɪʟ
11. Sᴘᴀᴄᴇ☆Dᴀɴᴅʏ
12. Kɪᴢɴᴀɪᴠᴇʀ
13. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
14. Rᴏ𝐁𝐎𝐓ɪᴄs;Nᴏᴛᴇs
15. Pᴀᴘʀɪᴋᴀ
16. Mᴇɢᴀʟᴏ Bᴏx
17. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
18. Gᴀᴛᴄʜᴀᴍᴀɴ Cʀᴏᴡᴅs
19. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
20. Gɪɴᴛᴀᴍᴀ
21. Sᴀᴋᴀsᴀᴍᴀ ɴᴏ Pᴀᴛᴇᴍᴀ
22. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
23. Psʏᴄʜᴏ-Pᴀss
24. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
25. Mᴇᴋᴀᴋᴜᴄɪᴛʏ Aᴄᴛᴏʀs
26. Pʟᴀɴᴇᴛᴇs
27. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
28. Pᴇʀsᴏɴᴀ Sᴇʀɪᴇs
29. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ

Sᴘᴏʀᴛ
1. Cᴀᴘᴛᴀɪɴ Tsᴜʙᴀsᴀ
2. Gɪᴀɴᴛ Kɪʟʟɪɴɢ
3. Tʜᴇ Kɴɪɢʜᴛ ɪɴ Tʜᴇ Aʀᴇᴀ (Aʀᴇᴀ ɴᴏ Kɪsʜɪ )
4. Aᴏᴋɪ Dᴇɴsᴇᴛsᴜ Sʜᴏᴏᴛ! (Bʟᴜᴇ Lᴇɢᴇɴᴅ Sʜᴏᴏᴛ!)
5. Dᴀʏs
6. Wʜɪsᴛʟᴇ!
7. Oғғsɪᴅᴇ
8. Dʀᴀɢᴏɴ Lᴇᴀɢᴜᴇ
9. Fᴀɴᴛᴀsɪsᴛᴀ Sᴛᴇʟʟᴀ
10. Iɴᴀᴢᴜᴍᴀ Eʟᴇᴠᴇɴ
11. Gɪɴɢᴀ ᴇ Kɪᴄᴋᴏғғ!!
12. Hᴜɴɢʀʏ Hᴇᴀʀᴛ Wɪʟᴅ Sᴛʀɪᴋᴇʀ
13. Gᴀɴʙᴀʀᴇ Kɪᴄᴋᴇʀs
14. Kᴜʀᴏᴋᴏ Nᴏ Bᴀsᴋᴇᴛ
15. Sʟᴀᴍ Dᴜɴᴋ
16. Dᴇᴀʀ Bᴏʏs
17. I’ʟʟ/CKBC
18. Bᴜᴢᴢᴇʀ Bᴇᴀᴛᴇʀ
19. Bᴀsϙᴜᴀsʜ!
20. Rᴏ-Kʏᴜ-Bᴜ!
21. Dᴀsʜ Kᴀᴘᴘᴇɪ
22. Dɪᴀᴍᴏɴᴅ ɴᴏ Aᴄᴇ (Aᴄᴇ ᴏғ Dɪᴀᴍᴏɴᴅ)
23. Pʀɪɴᴄᴇss Nɪɴᴇ: Kɪsᴀʀᴀɢɪ Jᴏsʜɪᴋᴏᴜ Yᴀᴋʏᴜᴜʙᴜ
24. Mᴀᴊᴏʀ
25. Tᴏᴜᴄʜ
26. H2
27. Cʀᴏss Gᴀᴍᴇ
28. Tᴀɪsʜᴏᴜ Yᴀᴋʏᴜᴜ Mᴜsᴜᴍᴇ
29. Mᴏsʜɪᴅᴏʀᴀ (Wʜᴀᴛ Iғ ᴀ Fᴇᴍᴀʟᴇ Mᴀɴᴀɢᴇʀ ᴏғ ᴀ Hɪɢʜ Sᴄʜᴏᴏʟ Bᴀsᴇʙᴀʟʟ Tᴇᴀᴍ Rᴇᴀᴅ Dʀᴜᴄᴋᴇʀ’s)
30. Oɴᴇ Oᴜᴛs
31. Oᴏᴋɪᴋᴜ Fᴜʀɪᴋᴀʙᴜᴛᴛᴇ (Bɪɢ Wɪɴᴅᴜᴘ!)
32. Hᴀɪᴋʏᴜᴜ
33. Aᴛᴛᴀᴄᴋ ᴏɴ Tᴏᴍᴏʀʀᴏᴡ
34. Aᴛᴛᴀᴄᴋ Nᴏ.1
35. Aᴛᴛᴀᴄᴋᴇʀ Yᴏᴜ
36. Yᴏᴡᴀᴍᴜsʜɪ Pᴇᴅᴀʟ
37. Iᴅᴀᴛᴇɴ Jᴜᴍᴘ
38. Oᴠᴇʀ Dʀɪᴠᴇ
39. Nᴀsᴜ: Sᴜᴍᴍᴇʀ ɪɴ Aɴᴅᴀʟᴜsɪᴀ
40. Nᴀsᴜ : A Mɪɢʀᴀᴛᴏʀʏ Bɪʀᴅ ᴡɪᴛʜ Sᴜɪᴛᴄᴀsᴇ
41. Hᴀᴊɪᴍᴇ ɴᴏ Iᴘᴘᴏ
42. Asʜɪᴛᴀ ɴᴏ Jᴏᴇ
43. Gᴀɴʙᴀʀᴇ Gᴇɴᴋɪ
44. Nᴏᴢᴏᴍɪ Wɪᴛᴄʜᴇs
45. Oɴᴇ Pᴏᴜɴᴅ Gᴏsᴘᴇʟ
46. Aɪᴍ ғᴏʀ ᴛʜᴇ Aᴄᴇ!
47. Tʜᴇ Pʀɪɴᴄᴇ ᴏғ Tᴇɴɴɪs
48. Bᴀʙʏ Sᴛᴇᴘs
49. Eʏᴇsʜɪᴇʟᴅ 21
50. Sᴍᴀsʜ
51. Sʜᴀᴋᴜɴᴇᴛsᴜ ɴᴏ ᴛᴀᴋᴋʏᴜᴜ ᴍᴜsᴜᴍᴇ
52. Aɪʀ ɢᴇᴀʀ
53. Pʀɪɴᴄᴇ Oғ Sᴛʀɪᴅᴇ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ
54. Fʀᴇᴇ!
55. Kᴇɴᴋᴏᴜ Zᴇɴʀᴀᴋᴇɪ Sᴜɪᴇɪʙᴜ Uᴍɪsʜᴏᴜ

Mᴀʀᴛɪᴀʟ Aʀᴛ
1. Bᴏʀᴜᴛᴏ: Nᴀʀᴜᴛᴏ Nᴇxᴛ Gᴇɴᴇʀᴀᴛɪᴏɴs
2. Sʜɪᴋᴀʙᴀɴᴇ Hɪᴍᴇ: Aᴋᴀ
3. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
4. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ (KᴇɴIᴄʜɪ: Tʜᴇ Mɪɢʜᴛɪᴇsᴛ Dɪsᴄɪᴘʟᴇ)
5. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
6. Tᴀʙᴏᴏ Tᴀᴛᴛᴏᴏ
7. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
8. Bᴇɴ-ᴛᴏ
9. Mᴇᴅᴀᴋᴀ Bᴏx
10. Mᴜsʜɪʙᴜɢʏᴏᴜ
11. Mᴀᴋᴇɴ-ᴋɪ!
12. Bʟᴀᴅᴇ & Sᴏᴜʟ
13. Fʀᴇᴇᴢɪɴɢ
14. Iᴋᴋɪᴛᴏᴜsᴇɴ (Iᴋᴋɪ Tᴏᴜsᴇɴ)
15. Asᴜ ɴᴏ Yᴏɪᴄʜɪ!
16. Kᴜʀᴏᴋᴀᴍɪ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
17. Tᴏᴋʏᴏ Mᴀᴊɪɴ Gᴀᴋᴜᴇɴ Kᴇɴᴘᴜᴄʜᴏ: Tᴏᴜ
18. Tᴇɴᴊᴏᴜ Tᴇɴɢᴇ
19. Bᴀᴋɪ (2018)
20. Kᴏɪʜɪᴍᴇ †Mᴜsᴏᴜ
21. Dʀᴀɢᴏɴ Bᴀʟʟ

Mᴜsɪᴋ
1. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
2. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
3. Zᴏᴍʙɪᴇʟᴀɴᴅ Sᴀɢᴀ
4. K-Oɴ!
5. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
6. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
7. Bᴇᴄᴋ
8. BᴀɴG Dʀᴇᴀᴍ!
9. Tʜᴇ ɪDOLM@STER
10. Lᴏᴠᴇ Lɪᴠᴇ! Sᴄʜᴏᴏʟ Iᴅᴏʟ Pʀᴏᴊᴇᴄᴛ
11. Dᴇᴛʀᴏɪᴛ Mᴇᴛᴀʟ Cɪᴛʏ
12. Nᴀɴᴀ
13. IDOLɪSH7
14. Sᴀᴋᴀᴍɪᴄʜɪ ɴᴏ Aᴘᴏʟʟᴏɴ
15. Kɪɴɪʀᴏ ɴᴏ Cᴏʀᴅᴀ
16. Mᴀɢɪᴄ-Kʏᴜɴ! Rᴇɴᴀɪssᴀɴᴄᴇ
17. Pɪᴀɴᴏ ɴᴏ Mᴏʀɪ
18. Fᴜʟʟ Mᴏᴏɴ ᴡᴏ Sᴀɢᴀsʜɪᴛᴇ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ
20. Wᴀᴋᴇ Uᴘ, Gɪʀʟs!
21. Tᴀʀɪ Tᴀʀɪ
22. Gʀᴀᴠɪᴛᴀᴛɪᴏɴ
23. Mᴀᴄʀᴏss Sᴇʀɪᴇs
24. ᴇғ: A Tᴀʟᴇ ᴏғ Mᴇᴍᴏʀɪᴇs.
25. Kᴀᴄʜᴏᴜ Oᴜᴊɪ
26. Lɪᴢ ᴛᴏ Aᴏɪ Tᴏʀɪ
27. Yᴏᴀᴋᴇ Tsᴜɢᴇʀᴜ Lᴜ ɴᴏ Uᴛᴀ
28. Aɪᴋᴀᴛsᴜ!
29. Sᴛᴀʀᴍʏᴜ
30. Fᴜᴜᴋᴀ
31. Sʜᴇʟᴛᴇʀ
32. AKB0048
33. Sʜᴏᴡ Bʏ Rᴏᴄᴋ!!
34. Sʏᴍᴘʜᴏɢᴇᴀʀ 

Hᴀʀᴇᴍ
1. Dᴀᴛᴇ ᴀ Lɪᴠᴇ
2.Mᴀʏᴏ Cʜɪᴋɪ!
3. Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ Nᴏ Iʀᴜ Nɪᴄʜɪᴊᴏᴜ
4. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜᴏᴜᴛᴀɪ
5. Tʜᴇ Wᴏʀʟᴅ Gᴏᴅ Oɴʟʏ Kɴᴏᴡs
6. Dᴇɴᴘᴀ Kʏᴏᴜsʜɪ
7. Kᴏʀᴇ Wᴀ Zᴏᴍʙɪᴇ Dᴇsᴜᴋᴀ
8. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs
9. OʀᴇIᴍᴏ
10. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
11. Mᴀʜᴏᴜ Sᴇɴsᴇɪ Nᴇɢɪᴍᴀ!
12. Isᴇᴋᴀɪ ɴᴏ Sᴇɪᴋɪsʜɪ Mᴏɴᴏɢᴀᴛᴀʀɪ
13. Mᴀɴɢᴀᴋᴀ-sᴀɴ ᴛᴏ Assɪsᴛᴀɴᴛ-sᴀɴ ᴛᴏ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
14. Iᴄʜɪɢᴏ 100%
15. Hᴀɪʏᴏʀᴇ! Nʏᴀʀᴜᴋᴏ-sᴀɴ
16. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
17. Cᴀᴍᴘɪᴏɴᴇ!
18. Gʀɪsᴀɪᴀ Sᴇʀɪᴇs
19. Fʀᴇᴇᴢɪɴɢ
20. MM!
21. NᴏᴜCᴏᴍᴇ
22. Aʜ, Mʏ Gᴏᴅᴅᴇss
23. Lᴏᴠᴇ Hɪɴᴀ
24. Hɪɢʜ Sᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
25. Kɪss x sɪs
26. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ.
27. Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
28. Sᴇᴋɪʀᴇɪ
29. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
30. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
31. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
32. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
33. Sʜᴜғғʟᴇ!
34. Nʏᴀɴ Kᴏɪ!
35. Oᴜᴛʙʀᴇᴀᴋ Cᴏᴍᴘᴀɴʏ
36. Mᴀᴅᴀɴ ɴᴏ Oᴜ ᴛᴏ Vᴀɴᴀᴅɪs
37. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
38. Pʀɪɴᴄᴇss Lᴏᴠᴇʀ!
29. Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
40. Rᴏᴋᴜᴊᴏᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ!?
41. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
42. Nɪsᴇᴋᴏɪ
43. Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
44. Rᴏsᴀʀɪᴏ ᴛᴏ Vᴀᴍᴘɪʀᴇ
45. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
46. Tᴏ LOVE-Rᴜ Sᴇʀɪᴇs
47. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ
48. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
49. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7-ɴɪɴ ɴᴏ Mᴀᴊᴏ
50. Iᴄʜɪʙᴀɴ Usʜɪʀᴏ ɴᴏ Dᴀɪᴍᴀᴏᴜ

Rᴇᴠᴇʀsᴇ Hᴀʀᴇᴍ
1. Hᴀɴᴀsᴀᴋᴇʀᴜ Sᴇɪsʜᴏᴜɴᴇɴ
2. Uᴛᴀ ɴᴏ☆Pʀɪɴᴄᴇ-sᴀᴍᴀ♪
3. Hᴀᴋᴜᴏᴜᴋɪ
4. Yᴀᴍᴀᴛᴏ Nᴀᴅᴇsʜɪᴋᴏ Sʜɪᴄʜɪ Hᴇɴɢᴇ
5. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
6. Fᴜsʜɪɢɪ Yᴜᴜɢɪ (Mʏsᴛᴇʀɪᴏᴜs Pʟᴀʏ)
7. Dɪᴀʙᴏʟɪᴋ Lᴏᴠᴇʀs
8. Aʀᴄᴀɴᴀ Fᴀᴍɪɢʟɪᴀ
9. Bʀᴏᴛʜᴇʀs Cᴏɴғʟɪᴄᴛ
10. Dᴀɴᴄᴇ ᴡɪᴛʜ Dᴇᴠɪʟs
11. Oᴜʀᴀɴ Hɪɢʜ Sᴄʜᴏᴏʟ Hᴏsᴛ Cʟᴜʙ
12. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
13. Aᴍɴᴇsɪᴀ
14. Bᴏɴᴊᴏᴜʀ Sᴡᴇᴇᴛ Lᴏᴠᴇ Pᴀᴛɪssᴇʀɪᴇ
15. Kᴀᴍɪɢᴀᴍɪ ɴᴏ Asᴏʙɪ
16. Hɪɪʀᴏ ɴᴏ Kᴀᴋᴇʀᴀ

Rᴏᴍᴀɴᴄᴇ
1 Cʟᴀʏ & Mᴀʀɪᴀ
2. Wʜɪᴛᴇ Aʟʙᴜᴍ 
3. Cʟᴀɴɴᴀᴅ Aғᴛᴇʀ Sᴛᴏʀʏ
4. Aɴɢᴇʟ Bᴇᴀᴛs
5. Isʜᴜᴜᴋᴀɴ Fʀɪᴇɴᴅs.
6. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
7. Nɪsᴇᴋᴏɪ
8. Gᴏʟᴅᴇɴ Tɪᴍᴇ
9. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
10. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
11. Oʀᴇ Mᴏɴᴏɢᴀᴛᴀʀɪ
12. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Nᴏ Sᴏᴅᴀᴛᴇᴋᴀ
13. Gᴇᴋᴋᴀɴ Sʜᴏᴊᴏᴜ Nᴏᴢᴀᴋɪ-Kᴜɴ
14. Sᴀɴᴋᴀʀᴇᴀ
15. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
16. Aᴍᴀɢᴀᴍɪ SS
17. Kᴏᴛᴏᴜʀᴀ-sᴀɴ (Mᴀsᴜᴋɪɴ Dᴀғᴛᴀʀ Cᴀᴅᴀɴɢᴀɴ Aᴊᴀʜ)
18. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
19. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
20. Kᴀɪᴄʜᴏᴜ ᴡᴀ Mᴀɪᴅ-sᴀᴍᴀ!
21. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
22. Tᴏʀᴀᴅᴏʀᴀ!
23. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ
24. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
25. Bᴏᴋᴜʀᴀ ᴡᴀ Mɪɴɴᴀ Kᴀᴡᴀɪsᴏᴜ
26. Iᴛᴀᴢᴜʀᴀ ɴᴀ Kɪss
27. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ Mᴀᴊᴏ
28. Aᴋᴀᴛsᴜᴋɪ Nᴏ Yᴏɴᴀ
29. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
30. Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ
31. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
32. Aɴᴏ Nᴀᴛsᴜ ᴅᴇ Mᴀᴛᴛᴇʀᴜ
33. Nᴀʀᴜᴛᴏ Sʜɪᴘᴘᴜᴅᴇɴ : Tʜᴇ Lᴀsᴛ
34. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
35. Gᴏsɪᴄᴋ
36. Nᴀɢᴀᴛᴏ Yᴜᴋɪ-Cʜᴀɴ ɴᴏ Sᴏᴜsʜɪᴛsᴜ (Gᴀᴍʙᴀʀ ᴅᴀʀɪ Sᴢᴜᴍɪʏᴀ Hᴀʀᴜʜɪ ɴᴏ Sᴏᴜsʜɪᴛsᴜ)
37. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
38. Oʀᴇɢᴀɪʀᴜ
39. Sᴏʀᴇᴅᴇᴍᴏ Sᴇᴋᴀɪ ᴡᴀ Uᴛsᴜᴋᴜsʜɪɪ
42. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
43. Wᴏʀᴋɪɴɢ
44. Aᴋᴀɢᴀᴍɪ ɴᴏ Sʜɪʀᴀʏᴜᴋɪ Hɪᴍᴇ
45. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
46. Tᴀsᴏɢᴀʀᴇ Oᴛᴏᴍᴇ x Aᴍɴᴇsɪᴀ
47. NHK Nɪ Yᴏᴜᴋᴏsᴏ
48. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
49. Iɴᴜ x Bᴏᴋᴜ Sᴇᴄʀᴇᴛ Sᴇʀᴠɪᴄᴇ
50. Nᴀᴢᴏ ɴᴏ Kᴀɴᴏᴊᴏ X
51. Sᴘᴇᴄɪᴀʟ A
52. Lᴏᴠᴇʟʏ Cᴏᴍᴘʟᴇx
53. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
54. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ Eᴍᴍᴀ
55. Nᴀɴᴀ
56. Rᴏᴍᴇᴏ x Jᴜʟɪᴇᴛ
57. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
58. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
59. Bᴏᴋᴜʀᴀ ɢᴀ Iᴛᴀ
60. Kᴏɪ Kᴀᴢᴇ
61. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
62. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ 
63. Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ ᴇ
64. Kɪᴍɪ ɴᴏ Nᴀ Wᴀ?
65. Hᴏʀɪ-sᴀɴ ᴛᴏ Mɪʏᴀᴍᴜʀᴀ-ᴋᴜɴ
66. Rᴇᴄ
67. Cʜɪʜᴀʏᴀғᴜʀᴜ
68. Mᴀsʜɪʀᴏ-ɪʀᴏ Sʏᴍᴘʜᴏɴʏ
70. Cʀᴏss Gᴀᴍᴇ
71. Tʀᴜᴇ Tᴇᴀʀs
72. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ 
73. Sᴇɪʀᴇɴ 
74. RᴇLIFE
75. Hᴏsʜɪᴢᴏʀᴀ ᴇ Kᴀᴋᴀʀᴜ Hᴀsʜɪ
76. Eʀᴏᴍᴀɴɢᴀ-Sᴇɴsᴇɪ
77. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
78. Nᴏɢɪᴢᴀᴋᴀ Hᴀʀᴜᴋᴀ ɴᴏ Hɪᴍɪᴛsᴜ
79. Kɪᴢɴᴀɪᴠᴇʀ
80. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
81. Oʀᴀɴɢᴇ
82. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
83. Gᴀᴍᴇʀs
84. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ ᴘᴇᴛ ɴᴀ ᴋᴀɴᴏᴊᴏᴜ
85. Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ`
}