import { Md5 } from 'ts-md5/dist/md5';

//creates a delay of (ms) using setTimeout and promises
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function hashObject(obj: any): number {
    return parseInt(Md5.hashStr(JSON.stringify(obj)).replace(/\D/g, ""))
}


export { delay, hashObject }