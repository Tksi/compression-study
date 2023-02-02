type CountObj = { char?: string; count: number };

type Node = CountObj & { right?: CountObj; left?: CountObj };

const generateTree = (freq: Node[]): Node => {
  const tree: Node[] = structuredClone(freq);

  while (tree.length > 1) {
    tree.sort(({ count: a }, { count: b }) => a - b);
    const left = tree.shift()!;
    const right = tree.shift()!;
    tree.unshift({
      count: left.count + right.count,
      left,
      right,
    });
  }

  return tree[0]!;
};

const generateTable = (tree: Node): Map<string, string> => {
  const table = new Map<string, string>();

  const traverse = (tree: Node, value = '') => {
    if (tree.left === undefined && tree.right === undefined) {
      table.set(tree.char!, value);

      return;
    }

    traverse(tree.left!, `${value}0`);
    traverse(tree.right!, `${value}1`);
  };

  traverse(tree);

  return table;
};

export const encode = (
  str: string
): {
  value: string;
  tree: Node;
} => {
  // 出現頻度
  const freq: Node[] = Object.entries(
    [...str].reduce<{ [key: string]: number }>((prev, curr) => {
      // eslint-disable-next-line no-param-reassign
      prev[curr] = (prev[curr] ?? 0) + 1;

      return prev;
    }, {})
  ).map(([char, count]) => ({ char, count }));

  // ハフマン木
  const tree = generateTree(freq);

  // 変換テーブル
  const table = generateTable(tree);

  return {
    value: [...str].map((char) => table.get(char)).join(''),
    tree,
  };
};

export const decode = (encoded: string, tree: Node): string => {
  let decoded = '';

  let currentNode = tree;

  for (const binary of encoded) {
    switch (binary) {
      case '0': {
        currentNode = currentNode.left!;

        break;
      }

      case '1': {
        currentNode = currentNode.right!;

        break;
      }
    }

    if (currentNode.left === undefined && currentNode.right === undefined) {
      decoded += currentNode.char;
      currentNode = tree;
    }
  }

  return decoded;
};
