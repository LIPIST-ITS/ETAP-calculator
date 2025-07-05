//ANSI
// HVCB
// fungsi hitung cb_fla
const input_load_fla1 = document.getElementById("load_fla1");
const output_cb_fla1 = document.getElementById("cb_fla1");

input_load_fla1.addEventListener("input", () => {
  const load_fla1 = parseFloat(input_load_fla1.value);
  output_cb_fla1.value = 1.1 * load_fla1;
});

//fungsi hitung max int
const input_rated_int1 = document.getElementById("rated_int1");
const input_max_kv1 = document.getElementById("max_kv1");
const input_kv1 = document.getElementById("kv1");
const output_max_int1 = document.getElementById("max_int1");

input_rated_int1.addEventListener("input", calc_max_int1);
input_max_kv1.addEventListener("input", calc_max_int1);
input_kv1.addEventListener("input", calc_max_int1);

function calc_max_int1() {
  const rated_int1 = parseFloat(input_rated_int1.value);
  const max_kv1 = parseFloat(input_max_kv1.value);
  const kv1 = parseFloat(input_kv1.value);
  const max_int_val1 = rated_int1 * (max_kv1 / kv1);
  output_max_int1.value = max_int_val1;
  calc_cl_rms1(max_int_val1);
  calc_cl_peak1(max_int_val1);
}

//fungsi hitung cl_rms
const output_cl_rms1 = document.getElementById("cl_rms1");

function calc_cl_rms1(max_int_val1) {
  output_cl_rms1.value = 1.6 * max_int_val1;
}

//fungsi hitung cl_peak
const output_cl_peak1 = document.getElementById("cl_peak1");
function calc_cl_peak1(max_int_val1) {
  output_cl_peak1.value = 2.7 * max_int_val1;
}

//LVCB
//fungsi hitung cb fla
const input_load_fla2 = document.getElementById("load_fla2");
const output_cb_fla2 = document.getElementById("cb_fla2");

input_load_fla2.addEventListener("input", () => {
  const load_fla2 = parseFloat(input_load_fla2.value);
  output_cb_fla2.value = 1.1 * load_fla2;
});

//Busbar
//fungsi hitung continuous
const input_load_fla3 = document.getElementById("load_fla3");
const output_continuous3 = document.getElementById("continuous3");

input_load_fla3.addEventListener("input", () => {
  const load_fla3 = parseFloat(input_load_fla3.value);
  output_continuous3.value = 1.1 * load_fla3;
});
