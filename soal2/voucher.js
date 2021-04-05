function voucher(length) {
  var result = "";
  const kode = ("TGD", "YCC", "SKU");
  var characters = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
  var charactersLength = characters.length;
  for (var i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return kode + result;
}

console.log(voucher(2));
