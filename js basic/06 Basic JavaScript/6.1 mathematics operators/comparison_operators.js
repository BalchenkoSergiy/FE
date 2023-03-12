// Оператори порівняння > < >= <= == ===

console.log('5 > 10 -->>', 5>10)                            // 5 > 10 -->> false
console.log('5 < 10 -->>', 5<10)                            // 5 < 10 -->> true
console.log('5 <= 5 -->>', 5 <= 5)                          // 5 <= 5 -->> true
console.log('5 >= 6 -->>', 5 >= 6)                          // 5 >= 6 -->> false
console.log('100 == 100 -->>', 100 == 100)                  // 100 == 100 -->> true

// Порівняння стрічок
console.log('Java == java -->>', 'Java' == 'java')          // Java == java -->> false
console.log('S.charCodeAt() -->>', 'S'.charCodeAt())        // S.charCodeAt() -->> 83
console.log('s.charCodeAt() -->>', 's'.charCodeAt())        //  s.charCodeAt() -->> 115

// == vs ===
// == порівню значення а === порівнює типи
console.log('"1" == 1 -->>', '1' == 1)                      // 1 == 1 -->> true
console.log('"1" === 1 -->>', '1' === 1)                    // 1 === 1 -->> false
