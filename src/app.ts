import qrcode from 'qrcode-terminal';
import { WhatsappMessage } from './interfaces/WhatsappMessage';
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr: string) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message:WhatsappMessage) => {
    console.log('hello');
})

client.initialize();