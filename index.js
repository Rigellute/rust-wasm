const appendNumberToBody = number => {
  const p = document.createElement('h1');

  const text = document.createTextNode(number);

  p.appendChild(text);
  document.body.appendChild(p);
};

(async function main() {
  const importObject = {
    env: {
      appendNumberToBody: rustNum => {
        appendNumberToBody(`JS function invoked from Rust: ${rustNum}`);
      }
    }
  };

  const wasmModule = await WebAssembly.instantiateStreaming(
    fetch('utils.gc.wasm'),
    importObject
  );

  const result = wasmModule.instance.exports.add_one(3);
  appendNumberToBody(`Result of Rust fn: ${result}`);

  wasmModule.instance.exports.run();
})();
