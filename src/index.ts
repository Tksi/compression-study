import * as runLength from 'runLength';

const str = 'Helloo';

console.info('# RUN Length');
console.info(`encode: ${str} -> ${runLength.encode(str)}`);
console.info(
  `decode: ${runLength.encode(str)} -> ${runLength.decode(
    runLength.encode(str)
  )}`
);
