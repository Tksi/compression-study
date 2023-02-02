export const encode = (str: string): string => {
  if (str === '') return '';
  const countArr: [string, number][] = [[str[0]!, 1]];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      countArr[countArr.length - 1]![1]++;
    } else {
      countArr.push([str[i]!, 1]);
    }
  }

  return countArr.map((arr) => arr.join('')).join('');
};

export const decode = (str: string): string => {
  const countArr = [...str].reduce<[string, number][]>((prev, curr, i) => {
    if (i % 2 === 1) {
      prev.push([[...str][i - 1]!, Number(curr)]);
    }

    return prev;
  }, []);

  return countArr.map(([char, len]) => char.repeat(len)).join('');
};
