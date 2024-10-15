// Fungsi untuk mengatur nilai elemen
function setValue(id, value) {
  document.getElementById(id).textContent = value;
}

// Fungsi konversi paralel
async function convertParallel() {
  const inputValue = document.getElementById('inputValue').value;
  const inputType = document.getElementById('inputType').value;

  if (!inputValue.trim()) {
    alert("Masukkan bilangan yang valid");
    return;
  }

  let decimalValue;

  switch (inputType) {
    case "binary":
      decimalValue = parseInt(inputValue, 2);
      break;
    case "octal":
      decimalValue = parseInt(inputValue, 8);
      break;
    case "decimal":
      decimalValue = parseInt(inputValue, 10);
      break;
    case "hexadecimal":
      decimalValue = parseInt(inputValue, 16);
      break;
    default:
      alert("Tipe input tidak valid");
      return;
  }

  if (isNaN(decimalValue)) {
    alert("Input tidak valid. Pastikan format input sesuai.");
    return;
  }

  try {
    const [binary, octal, decimal, hexadecimal] = await Promise.all([
      new Promise((resolve) => resolve(decimalValue.toString(2))),
      new Promise((resolve) => resolve(decimalValue.toString(8))),
      new Promise((resolve) => resolve(decimalValue.toString(10))),
      new Promise((resolve) => resolve(decimalValue.toString(16).toUpperCase())),
    ]);

    setValue('binaryOutput', binary);
    setValue('octalOutput', octal);
    setValue('decimalOutput', decimal);
    setValue('hexadecimalOutput', hexadecimal);
  } catch (error) {
    alert("Terjadi kesalahan dalam proses konversi");
  }
}

// Menambahkan event listener setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('convertButton').addEventListener('click', convertParallel);
});