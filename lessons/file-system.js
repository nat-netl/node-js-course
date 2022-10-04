const fs = require("fs");
const path = require("path");

// Асинхронное добавление папки
// console.log("start");
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log ('Папка создана')
// });
// console.log("end");

// удаление папки
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

//Вложенность функций
// fs.writeFile (path.resolve (__dirname, 'text.txt'), "Sheeeeeesh", (err) => {
//   if (err) {
//     throw err;
//   }

//   fs.appendFile (path.resolve (__dirname, 'text.txt'), "Sheeeeeesh", (err) => {
//     if (err) {
//       throw err;
//     }
//   })
// })

// // Функция с промис для записи в файл
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err.message);
      }
      resolve();
    });
  });
};

// // Функция с промис для добавления текста в конец файла
// const appendFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.appendFile(path, data, (err) => {
//       if (err) {
//         reject(err.message);
//       }
//       resolve();
//     })
//   );
// };

// // Чтение данных с файла
const readFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    })
  );
};

// Удаление файла
const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        reject(err.message);
      }
      resolve();
    })
  );
};

// Пример использования промисов на запись/перезапись и добавление данных
// writeFileAsync (path.resolve (__dirname, 'text.txt'), "Sheeeeesh")
//   .then (() => appendFileAsync (path.resolve (__dirname, 'text.txt'), "Sheeeeesh"))
//   .then (() => readFileAsync (path.resolve (__dirname, 'text.txt')))
//   .then (data => console.log (data))
//   .catch (err => console.log (err))

// Удаление файла
// removeFileAsync (path.resolve (__dirname, 'text.txt'));

// const text = process.env.TEXT || "";

// writeFileAsync(path.resolve(__dirname, "text.txt"), text)
//   .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//   .then((data) => String (data).split(" ").length)
//   .then((count) =>
//     writeFileAsync(path.resolve(__dirname, "count.txt"), `Кол-во слов ${count}`)
//   )
//   .then(removeFileAsync(path.resolve(__dirname, "text.txt")))
//   .catch((err) => console.log(err));
