let loop = 100;
while (loop <= 200) {
if (loop % 3 === 0 && loop % 4 === 0) {
  console.log('LoopyLighthouse');
} else if (loop % 4 === 0) {
  console.log('Lighthouse');
} else if (loop % 3 === 0) {
  console.log('Loopy');
} 
else {
  console.log(loop);
}
loop = loop + 1;
}
