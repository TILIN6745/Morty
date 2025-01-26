export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] HOLA @${m.sender.split`@`[0]}, SOY UN BOT PARA GRUPO DE WHATSAPP ESTA PROHIBIDO MANDAR MENSAJE AL PRIVADO ENTONCES SERAS BLOQUEADO SI QUIERES MAS INFORMACIÓN MANDA MENSAJE A MI DUEÑO  https://wa.me/+527202699304
    *`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
