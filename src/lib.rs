#[no_mangle]
pub extern fn add_one(x: u32) -> u32 {
    x + 1
}

extern {
    fn appendNumberToBody(x: u32);
}

#[no_mangle]
pub extern fn run() {
    unsafe {
        appendNumberToBody(42);
    }
}
