import * as fs from 'fs'
import 'core-js/features/symbol/async-iterator';
import 'core-js/features/symbol/dispose';

export function openFile(path: string) {
    const file = fs.openSync(`files/${path}`, 'w+')
    return {
        handle: file,
        [Symbol.dispose]() {
            //automatically called when the object is garbage collected
            console.log("Disposed: File closed")
            fs.closeSync(file)
        }
    }
}