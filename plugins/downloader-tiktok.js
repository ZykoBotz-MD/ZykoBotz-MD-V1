
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
	
if (!args[0]) return m.reply(`masukan kak @${m.sender.split(`@`)[0]} link tiktok contoh\n\n.tiktok https://vt.tiktok.com/ZSR7MJgwa/`)
	
let tiktok = `
${htki}  ðº Tiktok Downloader ð  ${htka}

Silakan pilih Tiktok Downloader di tombol di bawah...

*Teks yang anda kirim:* ${args[0]}
`
// yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} Tiktok Downloader Workâ¦-------`,
	rows: [
        {title: "â â¢ downloader tiktok V1", rowId: `.vidio ${args[0]}`, description: 'download Vidio tiktok Kamu di ZykoBotz-MD' },
        {title: "â â¢ downloader tiktok V2", rowId: `.ttkneoxr ${args[0]}`, description: 'download Vidio tiktok Kamu di ZykoBotz-MD' },
        ]
    },
]

const listMessage = {
  text: tiktok,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fakes, mentions: await conn.parseMention(tiktok), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}

handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)$/i

export default handler
