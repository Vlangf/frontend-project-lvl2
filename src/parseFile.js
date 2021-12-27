import { readFileSync } from 'fs'; 
import { resolve } from 'path';
import { cwd } from 'process';

const parseFile = (file) => JSON.parse(readFileSync(resolve(cwd(), file)))
export default parseFile