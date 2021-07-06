/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```බුදු සරණයි\'ü ඔබට සෙත් වේවා. 😎𝓚𝓲𝓷𝓰𝓜𝓪𝓱𝓪𝓼𝓮𝓷 v 1.0 _____ 🤞😎🔰 ඔබේ සේවයේදී!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Whatsapp Group:* https://chat.whatsapp.com/EztcSyEFSXILEDK2Yghdxr\n*Telegram Channel:* https://t.me/joinchat/YJBQYkvXBs84ZTE1\n*Plugin Channel:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            const pow = '*Powered by 𝓚𝓲𝓷𝓰𝓜𝓪𝓱𝓪𝓼𝓮𝓷 v 1.0 _____ 🤞😎🔰*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```බුදු සරණයි\'ü ඔබට සෙත් වේවා. 😎𝓚𝓲𝓷𝓰𝓜𝓪𝓱𝓪𝓼𝓮𝓷 v 1.0 _____ 🤞😎🔰 ඔබේ සේවයේදී!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Whatsapp Group:* https://chat.whatsapp.com/EztcSyEFSXILEDK2Yghdxr\n*Telegram Channel:* https://t.me/joinchat/YJBQYkvXBs84ZTE1\n*Plugin Channel:* ' + Config.CHANNEL, MessageType.text);
        }
        else {
            const pow = '*Powered by 𝓚𝓲𝓷𝓰𝓜𝓪𝓱𝓪𝓼𝓮𝓷 v 1.0 _____ 🤞😎🔰*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
