let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo kakk 👋
━━━〔 ıll *Sewa Bot* llı 〕━━㉿
━━━━━━━━━━━━━━━━━━━━
━━━〔 ıll *HARGA* llı 〕━━㉿
⬡ *1 BULAN* 5.000
⬡ *PERMANEN 2 grup:* 10.000
⬡ *PERMANEN 3-6 grup:* 20.000
⟩» lebih dari 6 tambah +5.000
📮 *batas scan 5 kali !*
┗━━━━━━━━━━━━━━━━━━㉿
┏━━━〔 ıll *PAYMENT* llı 〕━━㉿
⬡ *DANA:* ${dana}
⬡ *PULSA:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll *RULES* llı 〕━㉿
⬡ [❗] *Dana yang sudah masuk tida bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━㉿
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot ini

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow githubku juga kakk😼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, github, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewahana']
handler.tags = ['info']
handler.command = /^(hanasewa|sewahana|sewa|sewabot)$/i

module.exports = handler
