const fs = require('fs');
const path = require('path')

// fs.readFile (path.resolve(__dirname, 'text.txt'), (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log (data)
// })

// const stream = fs.createReadStream (path.resolve(__dirname, 'text.txt'))

// stream.on ('data', (chunk) => {
//   console.log (chunk)
// })

// stream.on ('end', () => {
//   console.log ('Закончили читать')
// })
// stream.on ('open', () => {
//   console.log ('Начали читать')
// })
// stream.on ('error', (e) => {
//   console.log (e)
// })

const writableStream = fs.createWriteStream (path.resolve (__dirname, 'text2.txt'))

for (let i = 0; 20 > i; i++) {
  writableStream.write(i + '\n')
}

writableStream.end();
