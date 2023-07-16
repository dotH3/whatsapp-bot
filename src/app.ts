import qrcode from 'qrcode-terminal';
import { Client, LocalAuth, Message } from 'whatsapp-web.js';
import { WhatsappMessage } from './interfaces/WhatsappMessage';

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr: string) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message)=>{
    const msg = message.rawData as WhatsappMessage
    console.log(msg.stickerSentTs)
})

client.initialize();