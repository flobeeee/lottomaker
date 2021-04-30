function lotto(lucky) {
  const min = 1;
  const max = 45;

  while (lucky.length < 6) {
    const pickOne = Math.floor(Math.random() * (max - min + 1)) + min;
    // 중복 숫자 걸러내기
    let count = 0;
    for (let i = 0; i < lucky.length; i++) {
      if (lucky[i] === pickOne) {
        count = 1
      }
    }
    if (count === 0) {
      lucky.push(pickOne);
    }
  }

  return lucky.sort((a, b) => a - b)
}
console.log(lotto([]))
console.log(lotto([]))
console.log(lotto([]))
console.log(lotto([]))
console.log(lotto([]))