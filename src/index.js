import genDiff from './genDiff.js';
import parseFile from './parseFile.js';

export default (file1, file2) => {
    console.log(genDiff(parseFile(file1), parseFile(file2)))
}