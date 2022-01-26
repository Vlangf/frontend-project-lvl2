
import { readFileSync } from 'fs'; 
import {dirname, join} from 'path';
import genDiff from '../src/genDiff';
import { fileURLToPath } from 'url';
import parseFile from '../src/parseFile';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fixturesPath = join(__dirname, '__fixtures__')

test('Compare two flat jsons', () =>{
    const firstJson = join(fixturesPath, 'fileOne.json');
    const secondJson = join(fixturesPath, 'fileTwo.json');
    const expectedResult = readFileSync(join(fixturesPath, 'result.txt'), 'utf-8');
    const actualResult = genDiff(parseFile(firstJson), parseFile(secondJson));
    
    expect(actualResult).toMatch(expectedResult);
})

test('Compare two flat yaml', () =>{
    const firstJson = join(fixturesPath, 'fileOne.yaml');
    const secondJson = join(fixturesPath, 'fileTwo.yml');
    const expectedResult = readFileSync(join(fixturesPath, 'result.txt'), 'utf-8');
    const actualResult = genDiff(parseFile(firstJson), parseFile(secondJson));
    
    expect(actualResult).toMatch(expectedResult);
})