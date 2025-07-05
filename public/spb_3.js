//fungsi hitung konversi f -> hz
const input_f_in = document.getElementById("f_in");
const output_hz_out = document.getElementById("hz_out");

input_f_in.addEventListener("input", () => {
  const f_in = parseFloat(input_f_in.value);
  output_hz_out.value = 1.1 * f_in; //mbuh
});

//fungsi hitung konversi hz -> f
const input_hz_in = document.getElementById("hz_in");
const input_f_base = document.getElementById("f_base");
const output_f_out = document.getElementById("f_out");

input_hz_in.addEventListener("input", calc_f);
input_f_base.addEventListener("input", calc_f);

function calc_f() {
  const hz_in = parseFloat(input_hz_in.value);
  const f_base = parseFloat(input_f_base.value);

  const f_out_val = (hz_in / f_base) * 100;
  output_f_out.value = f_out_val;
}

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

//fungsi hitung waktu total
const input_waktu_trip1 = document.getElementById("waktu_trip1");
const input_delay_cb1 = document.getElementById("delay_cb1");
const input_time_delay1 = document.getElementById("time_delay1");
const output_waktu_total1 = document.getElementById("waktu_total1");

const input_waktu_trip2 = document.getElementById("waktu_trip2");
const input_delay_cb2 = document.getElementById("delay_cb2");
const input_time_delay2 = document.getElementById("time_delay2");
const output_waktu_total2 = document.getElementById("waktu_total2");

const input_waktu_trip3 = document.getElementById("waktu_trip3");
const input_delay_cb3 = document.getElementById("delay_cb3");
const input_time_delay3 = document.getElementById("time_delay3");
const output_waktu_total3 = document.getElementById("waktu_total3");

input_waktu_trip1.addEventListener("input", calc_waktu);
input_delay_cb1.addEventListener("input", calc_waktu);
input_time_delay1.addEventListener("input", calc_waktu);

input_waktu_trip2.addEventListener("input", calc_waktu);
input_delay_cb2.addEventListener("input", calc_waktu);
input_time_delay2.addEventListener("input", calc_waktu);

input_waktu_trip3.addEventListener("input", calc_waktu);
input_delay_cb3.addEventListener("input", calc_waktu);
input_time_delay3.addEventListener("input", calc_waktu);

function calc_waktu() {
  const waktu_trip1 = parseFloat(input_waktu_trip1.value);
  const delay_cb1 = parseFloat(input_delay_cb1.value);
  const time_delay1 = parseFloat(input_time_delay1.value);

  const waktu_val1 = waktu_trip1 + delay_cb1 + time_delay1;
  output_waktu_total1.value = waktu_val1;

  const waktu_trip2 = parseFloat(input_waktu_trip2.value);
  const delay_cb2 = parseFloat(input_delay_cb2.value);
  const time_delay2 = parseFloat(input_time_delay2.value);

  const waktu_val2 = waktu_trip2 + delay_cb2 + time_delay2;
  output_waktu_total2.value = waktu_val2;

  const waktu_trip3 = parseFloat(input_waktu_trip3.value);
  const delay_cb3 = parseFloat(input_delay_cb3.value);
  const time_delay3 = parseFloat(input_time_delay3.value);

  const waktu_val3 = waktu_trip3 + delay_cb3 + time_delay3;
  output_waktu_total3.value = waktu_val3;
}

//fungsi hitung total (mW)

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

const output_total1a = document.getElementById("total1a");
const output_total1b = document.getElementById("total1b");
const output_total1c = document.getElementById("total1c");

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

  const total1a_val =
    (daya1a + daya2a + daya3a + daya4a + daya5a + daya6a + daya7a) / 1000;
  const total1b_val =
    (daya1b + daya2b + daya3b + daya4b + daya5b + daya6b + daya7b) / 1000;
  const total1c_val =
    (daya1c + daya2c + daya3c + daya4c + daya5c + daya6c + daya7c) / 1000;

  output_total1a.value = total1a_val;
  output_total1b.value = total1b_val;
  output_total1c.value = total1c_val;
}
