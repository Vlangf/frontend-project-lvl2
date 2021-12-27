
const genDiff = (docOne, docTwo) => {
  const secondDocKeys = Object.keys(docTwo);
  let result = [];
  Object.entries(docOne).forEach((element) => {
    if (!secondDocKeys.includes(element[0])) {
      result.push(['-', `${element[0]}: ${element[1]}`]);
    } else if (element[1] === docTwo[element[0]]) {
      result.push([' ', `${element[0]}: ${element[1]}`]);
    } else {
      result.push(['-', `${element[0]}: ${element[1]}\n  + ${element[0]}: ${docTwo[element[0]]}`]);
    }
  });
  secondDocKeys.filter((key) => !Object.keys(docOne).includes(key)).forEach((element) => {
    result.push(['+', `${element}: ${docTwo[element]}`]);
  });

  result.sort((a, b) => a[1].localeCompare(b[1]))
  result = result.map((element) => element.join(' '))
  const result_string = `{\n  ${result.join('\n  ')} \n}`;
  return result_string
};

export default genDiff;
