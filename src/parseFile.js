import { readFileSync } from 'fs'; 
import { resolve } from 'path';
import { cwd } from 'process';
import yaml from 'js-yaml';

const parseFile = (file) => {
    const fileExt = file.split('.').pop()
    if (fileExt == 'json') {
        return JSON.parse(readFileSync(resolve(cwd(), file)))
    } else if (fileExt == 'yaml' || fileExt == 'yml') {
        return yaml.load(readFileSync(resolve(cwd(), file)))
    };
    
};
export default parseFile