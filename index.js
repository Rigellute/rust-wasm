const appendNumberToBody = number => {
  const text = document.createTextNode(number);

  document.body.appendChild(text);
};

(async function executeRustFunction() {
  const wasmModule = await WebAssembly.instantiateStreaming(
    fetch('utils.gc.wasm')
  );

  const result = wasmModule.instance.exports.add_one(3);
  appendNumberToBody(result);
})();

(async function executeJSFromRust() {
  const importObject = {
    env: {
      appendNumberToBody
    }
  };

  WebAssembly.instantiateStreaming(fetch('utils.gc.wasm'), importObject);
})();
