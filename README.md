### Scripts to run

1.  Compile the rust code with `cargo build --target wasm32-unknown-unknown --release`
1.  Create the `wasm` file `wasm-gc target/wasm32-unknown-unknown/release/utils.wasm -o utils.gc.wasm`
1.  Start the web server with `http` command

### Makefile

These scripts are automated by `cargo make web` - check `Makefile.toml`
