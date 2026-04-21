// Override aman untuk mematikan fitur toko di header
function updateCartCount(){
  // sembunyikan badge "0" jika ada
  try {
    var el = document.querySelector('header .itemcount');
    if (el) el.style.display = 'none';
  } catch(e){}
}
function populateCart(){
  // tidak melakukan apa-apa
}
