import qrcode from 'qrcode-terminal';
import { Client, LocalAuth, Message } from 'whatsapp-web.js';
import { WhatsappMessage } from './interfaces/WhatsappMessage';
import fs from 'fs'

import say from 'say'



const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr: string) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async(message) => {
    // AUDIO = 'audio',
    // VOICE = 'ptt',
    console.log('type',message.type);
    if(message.type === 'ptt'){
        var mediaBuffer = await message.downloadMedia();
        console.log(typeof mediaBuffer.data, typeof Buffer.from(mediaBuffer.data, 'base64'))
        const realBuffer = Buffer.from(mediaBuffer.data, 'base64')
        fs.writeFileSync(`${message.author||'USER'}.ogg`, realBuffer);
    }
    if(message.type === 'chat' && message.body.startsWith('!')){
        say.speak(message.body, undefined, 1)
    }

    

})

client.initialize();