import { Console } from 'node:console';
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
const { value, tree } = huffman.encode(str);
console.info(`encode: ${str} -> ${Number.parseInt(value, 2).toString(16)}`);
console.info(
  `decode: ${Number.parseInt(value, 2).toString(16)} -> ${huffman.decode(
    value,
    tree
  )}`
);
