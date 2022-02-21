export default function bin2dec(bin) {
   let sum = 0;
   for (let i = bin.length - 1; i >= 0; i--) {
      const bit = bin[i];
      const pos = bin.length - i - 1;
      console.log(pos, bit, 1 << pos);
      sum += parseInt(bit) * (1 << pos);
   }
   return sum;
}
