#[no_mangle]
pub extern fn add_one(x: u32) -> u32 {
    x + 1
}

extern {
    fn appendNumberToBody(x: u32);
    fn alert(x: u32); // Native browswer alert
}

#[no_mangle]
pub extern fn run() {
    unsafe {
        appendNumberToBody(42);
        alert(5)
    }
}
