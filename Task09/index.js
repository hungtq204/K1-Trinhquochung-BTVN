function swapNumber(a, b) {
  a += b;
  b = a - b;
  a -= b;
  return [a, b];
}
console.log(swapNumber(5, 8));
/*
! input : a,b là số nguyên 
* output : a,b sau khi hoán đổi 
* logic :  a += b;b = a - b;a -= b;
 */
