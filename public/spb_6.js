//fungsi hitung %freq
const input_freq_trip1 = document.getElementById("freq_trip1");
const output_percent_freq1 = document.getElementById("percent_freq1");

input_freq_trip1.addEventListener("input", () => {
  const freq_trip1 = parseFloat(input_freq_trip1.value);
  output_percent_freq1.value = (freq_trip1 / 50) * 100;
});

const input_freq_trip2 = document.getElementById("freq_trip2");
const output_percent_freq2 = document.getElementById("percent_freq2");

input_freq_trip2.addEventListener("input", () => {
  const freq_trip2 = parseFloat(input_freq_trip2.value);
  output_percent_freq2.value = (freq_trip2 / 50) * 100;
});

const input_freq_trip3 = document.getElementById("freq_trip3");
const output_percent_freq3 = document.getElementById("percent_freq3");

input_freq_trip3.addEventListener("input", () => {
  const freq_trip3 = parseFloat(input_freq_trip3.value);
  output_percent_freq3.value = (freq_trip3 / 50) * 100;
});

const input_freq_trip4 = document.getElementById("freq_trip4");
const output_percent_freq4 = document.getElementById("percent_freq4");

input_freq_trip4.addEventListener("input", () => {
  const freq_trip4 = parseFloat(input_freq_trip4.value);
  output_percent_freq4.value = (freq_trip4 / 50) * 100;
});

const input_freq_trip5 = document.getElementById("freq_trip5");
const output_percent_freq5 = document.getElementById("percent_freq5");

input_freq_trip5.addEventListener("input", () => {
  const freq_trip5 = parseFloat(input_freq_trip5.value);
  output_percent_freq5.value = (freq_trip5 / 50) * 100;
});

const input_freq_trip6 = document.getElementById("freq_trip6");
const output_percent_freq6 = document.getElementById("percent_freq6");

input_freq_trip6.addEventListener("input", () => {
  const freq_trip6 = parseFloat(input_freq_trip6.value);
  output_percent_freq6.value = (freq_trip6 / 50) * 100;
});

//fungsi hitung waktu total
const input_waktu_trip1 = document.getElementById("waktu_trip1");
const input_waktu_trip2 = document.getElementById("waktu_trip2");
const input_waktu_trip3 = document.getElementById("waktu_trip3");
const input_waktu_trip4 = document.getElementById("waktu_trip4");
const input_waktu_trip5 = document.getElementById("waktu_trip5");
const input_waktu_trip6 = document.getElementById("waktu_trip6");

const output_waktu_total1 = document.getElementById("waktu_total1");
const output_waktu_total2 = document.getElementById("waktu_total2");
const output_waktu_total3 = document.getElementById("waktu_total3");
const output_waktu_total4 = document.getElementById("waktu_total4");
const output_waktu_total5 = document.getElementById("waktu_total5");
const output_waktu_total6 = document.getElementById("waktu_total6");

input_waktu_trip1.addEventListener("input", () => {
  const waktu_trip1 = parseFloat(input_waktu_trip1.value);
  output_waktu_total1.value = waktu_trip1 + 0.12;
});

input_waktu_trip2.addEventListener("input", () => {
  const waktu_trip2 = parseFloat(input_waktu_trip2.value);
  output_waktu_total2.value = waktu_trip2 + 0.12;
});

input_waktu_trip3.addEventListener("input", () => {
  const waktu_trip3 = parseFloat(input_waktu_trip3.value);
  output_waktu_total3.value = waktu_trip3 + 0.12;
});

input_waktu_trip4.addEventListener("input", () => {
  const waktu_trip4 = parseFloat(input_waktu_trip4.value);
  output_waktu_total4.value = waktu_trip4 + 0.28;
});

input_waktu_trip5.addEventListener("input", () => {
  const waktu_trip5 = parseFloat(input_waktu_trip5.value);
  output_waktu_total5.value = waktu_trip5 + 0.28;
});

input_waktu_trip6.addEventListener("input", () => {
  const waktu_trip6 = parseFloat(input_waktu_trip6.value);
  output_waktu_total6.value = waktu_trip6 + 0.42;
});

//fungsi hitung total (mW) dan daya LS aktual

const input_daya1a = document.getElementById("daya1a");
const input_daya2a = document.getElementById("daya2a");
const input_daya3a = document.getElementById("daya3a");
const input_daya4a = document.getElementById("daya4a");
const input_daya5a = document.getElementById("daya5a");
const input_daya6a = document.getElementById("daya6a");
const input_daya7a = document.getElementById("daya7a");

const input_daya1b = document.getElementById("daya1b");
const input_daya2b = document.getElementById("daya2b");
const input_daya3b = document.getElementById("daya3b");
const input_daya4b = document.getElementById("daya4b");
const input_daya5b = document.getElementById("daya5b");
const input_daya6b = document.getElementById("daya6b");
const input_daya7b = document.getElementById("daya7b");

const input_daya1c = document.getElementById("daya1c");
const input_daya2c = document.getElementById("daya2c");
const input_daya3c = document.getElementById("daya3c");
const input_daya4c = document.getElementById("daya4c");
const input_daya5c = document.getElementById("daya5c");
const input_daya6c = document.getElementById("daya6c");
const input_daya7c = document.getElementById("daya7c");

const input_daya1d = document.getElementById("daya1d");
const input_daya2d = document.getElementById("daya2d");
const input_daya3d = document.getElementById("daya3d");
const input_daya4d = document.getElementById("daya4d");
const input_daya5d = document.getElementById("daya5d");
const input_daya6d = document.getElementById("daya6d");
const input_daya7d = document.getElementById("daya7d");

const input_daya1e = document.getElementById("daya1e");
const input_daya2e = document.getElementById("daya2e");
const input_daya3e = document.getElementById("daya3e");
const input_daya4e = document.getElementById("daya4e");
const input_daya5e = document.getElementById("daya5e");
const input_daya6e = document.getElementById("daya6e");
const input_daya7e = document.getElementById("daya7e");

const input_daya1f = document.getElementById("daya1f");
const input_daya2f = document.getElementById("daya2f");
const input_daya3f = document.getElementById("daya3f");
const input_daya4f = document.getElementById("daya4f");
const input_daya5f = document.getElementById("daya5f");
const input_daya6f = document.getElementById("daya6f");
const input_daya7f = document.getElementById("daya7f");

const output_total1a = document.getElementById("total1a");
const output_total1b = document.getElementById("total1b");
const output_total1c = document.getElementById("total1c");
const output_total1d = document.getElementById("total1d");
const output_total1e = document.getElementById("total1e");
const output_total1f = document.getElementById("total1f");

const output_daya_ls1a = document.getElementById("daya_ls1a");
const output_daya_ls2a = document.getElementById("daya_ls2a");
const output_daya_ls3a = document.getElementById("daya_ls3a");
const output_daya_ls4a = document.getElementById("daya_ls4a");
const output_daya_ls5a = document.getElementById("daya_ls5a");
const output_daya_ls6a = document.getElementById("daya_ls6a");

input_daya1a.addEventListener("input", calc_total);
input_daya2a.addEventListener("input", calc_total);
input_daya3a.addEventListener("input", calc_total);
input_daya4a.addEventListener("input", calc_total);
input_daya5a.addEventListener("input", calc_total);
input_daya6a.addEventListener("input", calc_total);
input_daya7a.addEventListener("input", calc_total);

input_daya1b.addEventListener("input", calc_total);
input_daya2b.addEventListener("input", calc_total);
input_daya3b.addEventListener("input", calc_total);
input_daya4b.addEventListener("input", calc_total);
input_daya5b.addEventListener("input", calc_total);
input_daya6b.addEventListener("input", calc_total);
input_daya7b.addEventListener("input", calc_total);

input_daya1c.addEventListener("input", calc_total);
input_daya2c.addEventListener("input", calc_total);
input_daya3c.addEventListener("input", calc_total);
input_daya4c.addEventListener("input", calc_total);
input_daya5c.addEventListener("input", calc_total);
input_daya6c.addEventListener("input", calc_total);
input_daya7c.addEventListener("input", calc_total);

input_daya1d.addEventListener("input", calc_total);
input_daya2d.addEventListener("input", calc_total);
input_daya3d.addEventListener("input", calc_total);
input_daya4d.addEventListener("input", calc_total);
input_daya5d.addEventListener("input", calc_total);
input_daya6d.addEventListener("input", calc_total);
input_daya7d.addEventListener("input", calc_total);

input_daya1e.addEventListener("input", calc_total);
input_daya2e.addEventListener("input", calc_total);
input_daya3e.addEventListener("input", calc_total);
input_daya4e.addEventListener("input", calc_total);
input_daya5e.addEventListener("input", calc_total);
input_daya6e.addEventListener("input", calc_total);
input_daya7e.addEventListener("input", calc_total);

input_daya1f.addEventListener("input", calc_total);
input_daya2f.addEventListener("input", calc_total);
input_daya3f.addEventListener("input", calc_total);
input_daya4f.addEventListener("input", calc_total);
input_daya5f.addEventListener("input", calc_total);
input_daya6f.addEventListener("input", calc_total);
input_daya7f.addEventListener("input", calc_total);

function calc_total() {
  const daya1a = parseFloat(input_daya1a.value);
  const daya2a = parseFloat(input_daya2a.value);
  const daya3a = parseFloat(input_daya3a.value);
  const daya4a = parseFloat(input_daya4a.value);
  const daya5a = parseFloat(input_daya5a.value);
  const daya6a = parseFloat(input_daya6a.value);
  const daya7a = parseFloat(input_daya7a.value);

  const daya1b = parseFloat(input_daya1b.value);
  const daya2b = parseFloat(input_daya2b.value);
  const daya3b = parseFloat(input_daya3b.value);
  const daya4b = parseFloat(input_daya4b.value);
  const daya5b = parseFloat(input_daya5b.value);
  const daya6b = parseFloat(input_daya6b.value);
  const daya7b = parseFloat(input_daya7b.value);

  const daya1c = parseFloat(input_daya1c.value);
  const daya2c = parseFloat(input_daya2c.value);
  const daya3c = parseFloat(input_daya3c.value);
  const daya4c = parseFloat(input_daya4c.value);
  const daya5c = parseFloat(input_daya5c.value);
  const daya6c = parseFloat(input_daya6c.value);
  const daya7c = parseFloat(input_daya7c.value);

  const daya1d = parseFloat(input_daya1d.value);
  const daya2d = parseFloat(input_daya2d.value);
  const daya3d = parseFloat(input_daya3d.value);
  const daya4d = parseFloat(input_daya4d.value);
  const daya5d = parseFloat(input_daya5d.value);
  const daya6d = parseFloat(input_daya6d.value);
  const daya7d = parseFloat(input_daya7d.value);

  const daya1e = parseFloat(input_daya1e.value);
  const daya2e = parseFloat(input_daya2e.value);
  const daya3e = parseFloat(input_daya3e.value);
  const daya4e = parseFloat(input_daya4e.value);
  const daya5e = parseFloat(input_daya5e.value);
  const daya6e = parseFloat(input_daya6e.value);
  const daya7e = parseFloat(input_daya7e.value);

  const daya1f = parseFloat(input_daya1f.value);
  const daya2f = parseFloat(input_daya2f.value);
  const daya3f = parseFloat(input_daya3f.value);
  const daya4f = parseFloat(input_daya4f.value);
  const daya5f = parseFloat(input_daya5f.value);
  const daya6f = parseFloat(input_daya6f.value);
  const daya7f = parseFloat(input_daya7f.value);

  const total1a_val =
    (daya1a + daya2a + daya3a + daya4a + daya5a + daya6a + daya7a) / 1000;
  const total1b_val =
    (daya1b + daya2b + daya3b + daya4b + daya5b + daya6b + daya7b) / 1000;
  const total1c_val =
    (daya1c + daya2c + daya3c + daya4c + daya5c + daya6c + daya7c) / 1000;
  const total1d_val =
    (daya1d + daya2d + daya3d + daya4d + daya5d + daya6d + daya7d) / 1000;
  const total1e_val =
    (daya1e + daya2e + daya3e + daya4e + daya5e + daya6e + daya7e) / 1000;
  const total1f_val =
    (daya1f + daya2f + daya3f + daya4f + daya5f + daya6f + daya7f) / 1000;

  output_total1a.value = total1a_val;
  output_total1b.value = total1b_val;
  output_total1c.value = total1c_val;
  output_total1d.value = total1d_val;
  output_total1e.value = total1e_val;
  output_total1f.value = total1f_val;

  output_daya_ls1a.value = total1a_val;
  output_daya_ls2a.value = total1b_val;
  output_daya_ls3a.value = total1c_val;
  output_daya_ls4a.value = total1d_val;
  output_daya_ls5a.value = total1e_val;
  output_daya_ls6a.value = total1f_val;

  calc_daya_setelah();

  //fungsi hitung daya aktual LS 2 - LS6
}

//fungsi daya minimal LS
const input_daya_aktual1a = document.getElementById("daya_aktual1a");
const output_daya_minimal1a = document.getElementById("daya_minimal1a");

input_daya_aktual1a.addEventListener("input", () => {
  const daya_aktual1a = parseFloat(input_daya_aktual1a.value);
  output_daya_minimal1a.value = daya_aktual1a * 0.1;
});

const input_daya_aktual2a = document.getElementById("daya_aktual2a");
const output_daya_minimal2a = document.getElementById("daya_minimal2a");

input_daya_aktual2a.addEventListener("input", () => {
  const daya_aktual2a = parseFloat(input_daya_aktual2a.value);
  output_daya_minimal2a.value = daya_aktual2a * 0.1;
});

const input_daya_aktual3a = document.getElementById("daya_aktual3a");
const output_daya_minimal3a = document.getElementById("daya_minimal3a");

input_daya_aktual3a.addEventListener("input", () => {
  const daya_aktual3a = parseFloat(input_daya_aktual3a.value);
  output_daya_minimal3a.value = daya_aktual3a * 0.1;
});

const input_daya_aktual4a = document.getElementById("daya_aktual4a");
const output_daya_minimal4a = document.getElementById("daya_minimal4a");

input_daya_aktual4a.addEventListener("input", () => {
  const daya_aktual4a = parseFloat(input_daya_aktual4a.value);
  output_daya_minimal4a.value = daya_aktual4a * 0.1;
});

const input_daya_aktual5a = document.getElementById("daya_aktual5a");
const output_daya_minimal5a = document.getElementById("daya_minimal5a");

input_daya_aktual5a.addEventListener("input", () => {
  const daya_aktual5a = parseFloat(input_daya_aktual5a.value);
  output_daya_minimal5a.value = daya_aktual5a * 0.1;
});

const input_daya_aktual6a = document.getElementById("daya_aktual6a");
const output_daya_minimal6a = document.getElementById("daya_minimal6a");

input_daya_aktual6a.addEventListener("input", () => {
  const daya_aktual6a = parseFloat(input_daya_aktual6a.value);
  output_daya_minimal6a.value = daya_aktual6a * 0.1;
});

//fungsi hitung daya setelah LS
function calc_daya_setelah() {
  const daya_ls1a = parseFloat(document.getElementById("daya_ls1a").value) || 0;
  const daya_ls2a = parseFloat(document.getElementById("daya_ls2a").value) || 0;
  const daya_ls3a = parseFloat(document.getElementById("daya_ls3a").value) || 0;
  const daya_ls4a = parseFloat(document.getElementById("daya_ls4a").value) || 0;
  const daya_ls5a = parseFloat(document.getElementById("daya_ls5a").value) || 0;
  const daya_ls6a = parseFloat(document.getElementById("daya_ls6a").value) || 0;

  const daya_minimal1a =
    parseFloat(document.getElementById("daya_minimal1a").value) || 0;
  const daya_minimal2a =
    parseFloat(document.getElementById("daya_minimal2a").value) || 0;
  const daya_minimal3a =
    parseFloat(document.getElementById("daya_minimal3a").value) || 0;
  const daya_minimal4a =
    parseFloat(document.getElementById("daya_minimal4a").value) || 0;
  const daya_minimal5a =
    parseFloat(document.getElementById("daya_minimal5a").value) || 0;
  const daya_minimal6a =
    parseFloat(document.getElementById("daya_minimal6a").value) || 0;

  const daya_setelah1a = daya_ls1a - daya_minimal1a;
  const daya_setelah2a = daya_ls2a - daya_minimal2a;
  const daya_setelah3a = daya_ls3a - daya_minimal3a;
  const daya_setelah4a = daya_ls4a - daya_minimal4a;
  const daya_setelah5a = daya_ls5a - daya_minimal5a;
  const daya_setelah6a = daya_ls6a - daya_minimal6a;

  document.getElementById("daya_setelah1a").value = daya_setelah1a;
  document.getElementById("daya_setelah2a").value = daya_setelah2a;
  document.getElementById("daya_setelah3a").value = daya_setelah3a;
  document.getElementById("daya_setelah4a").value = daya_setelah4a;
  document.getElementById("daya_setelah5a").value = daya_setelah5a;
  document.getElementById("daya_setelah6a").value = daya_setelah6a;

  // Update daya aktual setelah LS agar trigger fungsi minimal
  document.getElementById("daya_aktual2a").value = daya_setelah1a;
  document.getElementById("daya_aktual3a").value = daya_setelah2a;
  document.getElementById("daya_aktual4a").value = daya_setelah3a;
  document.getElementById("daya_aktual5a").value = daya_setelah4a;
  document.getElementById("daya_aktual6a").value = daya_setelah5a;

  // Update juga nilai minimal secara langsung
  document.getElementById("daya_minimal2a").value = daya_setelah1a * 0.1;
  document.getElementById("daya_minimal3a").value = daya_setelah2a * 0.1;
  document.getElementById("daya_minimal4a").value = daya_setelah3a * 0.1;
  document.getElementById("daya_minimal5a").value = daya_setelah4a * 0.1;
  document.getElementById("daya_minimal6a").value = daya_setelah5a * 0.1;
}

//dipanggil di fungsi calc_total
