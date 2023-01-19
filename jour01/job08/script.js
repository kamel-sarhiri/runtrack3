function sommenombrespremiers(a, b) {
  function estPremier(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (!estPremier(a) || !estPremier(b)) {
    return false;
  }
  console.log(a + " + " + b + " =");
  return a + b;
}
