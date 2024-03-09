import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function quickCLIPrompt(onInput: (input: string) => Promise<void>) {
  rl.question('Enter input (type "!@!" to quit): ', async (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close();
    } else {
      await onInput(input)
      quickCLIPrompt(onInput); // Ask for the next input
    }
  });
}

export default quickCLIPrompt;