import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            ignore: 'pid,hostname',
        },
    },
    timestamp: () => `,"time":"${dayjs().format('MM/DD, HH:mm')}"`,
});

export default log;
