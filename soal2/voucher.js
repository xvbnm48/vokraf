function voucher(length) {
  var result = "";
  const arr = ("TGD", "YCC", "SKU");
  arr[Math.floor(Math.random() * arr.length)];
  var characters = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
  var charactersLength = characters.length;
  for (var i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return arr + result;
}

console.log(voucher(2));
