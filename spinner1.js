const array = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
const spinner = function (array) {
  let timer = 100
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(array[i] + '\r');
    }, timer += 300);
  }
}
spinner(array)