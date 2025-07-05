//IEC
//HVCB
// fungsi hitung cb_fla
const input_load_fla4 = document.getElementById("load_fla4");
const output_cb_fla4 = document.getElementById("cb_fla4");

input_load_fla4.addEventListener("input", () => {
  const load_fla4 = parseFloat(input_load_fla4.value);
  output_cb_fla4.value = 1.1 * load_fla4;
});

//fungsi hitung making peak
const input_ac_breaking4 = document.getElementById("ac_breaking4");
const output_making_peak4 = document.getElementById("making_peak4");

input_ac_breaking4.addEventListener("input", () => {
  const ac_breaking4 = parseFloat(input_ac_breaking4.value);
  output_making_peak4.value = 2.5 * ac_breaking4;
});

//LVCB
// fungsi hitung cb_fla
const input_load_fla5 = document.getElementById("load_fla5");
const output_cb_fla5 = document.getElementById("cb_fla5");

input_load_fla5.addEventListener("input", () => {
  const load_fla5 = parseFloat(input_load_fla5.value);
  output_cb_fla5.value = 1.1 * load_fla5;
});

//fungsi hitung making peak
const input_service_breaking5 = document.getElementById("service_breaking5");
const output_making_peak5 = document.getElementById("making_peak5");

input_service_breaking5.addEventListener("input", () => {
  const service_breaking5 = parseFloat(input_service_breaking5.value);
  output_making_peak5.value = 2.5 * service_breaking5;
});

//Busbar
//fungsi hitung making peak
const input_ac_breaking6 = document.getElementById("ac_breaking6");
const output_making_peak6 = document.getElementById("making_peak6");

input_ac_breaking6.addEventListener("input", () => {
  const ac_breaking6 = parseFloat(input_ac_breaking6.value);
  output_making_peak6.value = 2.5 * ac_breaking6;
});
