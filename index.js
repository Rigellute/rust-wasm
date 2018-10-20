const appendNumberToBody = number => {
  const p = document.createElement('h1');

  const text = document.createTextNode(number);

  p.appendChild(text);
  document.body.appendChild(p);
};

(async function main() {
  /**
   * Pass javascript into Rust
   */
  const importObject = {
    env: {
      appendNumberToBody: rustNum => {
        appendNumberToBody(`JS function invoked from Rust: ${rustNum}`);
      },
      alert // Pass in native browser alert
    }
  };

  const wasmModule = await WebAssembly.instantiateStreaming(
    fetch('utils.gc.wasm'),
    importObject
  );

  /**
   * Invoke function from Rust code
   */
  const result = wasmModule.instance.exports.add_one(3);
  appendNumberToBody(`Result of Rust fn: ${result}`);

  /**
   * Run Rust code that invokes a javascript function
   */
  wasmModule.instance.exports.run();
})();
