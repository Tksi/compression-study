import * as huffman from 'huffman';
import * as runLength from 'runLength';

const str = 'Helloo';

console.info('# RUN Length');
console.info(`encode: ${str} -> ${runLength.encode(str)}`);
console.info(
  `decode: ${runLength.encode(str)} -> ${runLength.decode(
    runLength.encode(str)
  )}`
);

console.info('# Huffman');
const { value, table } = huffman.encode(str);
console.info(`encode: ${str} -> ${Number.parseInt(value, 2).toString(16)}`);
console.info(table);
