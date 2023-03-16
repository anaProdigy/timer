const args = process.argv.slice(2);


const timer = (args) => {
  for (const arg of args) {
    if (arg > 0 && !isNaN(arg)) {
     
      setTimeout(() => {
        process.stdout.write(`\x07${arg}`);
      }, arg );
    }
  }

}

timer([10, 3, 5, 15, 9])


