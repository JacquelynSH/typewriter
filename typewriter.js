const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i + 1 === sentence.length)
      process.stdout.write('\n');
  }, i * 50);
}
