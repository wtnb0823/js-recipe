// 練習問題 １
const plus1 = function (x) {
  return x + 1
}
// 関数名: 
// 引数:
// 返り値:



// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...


// f2: 1, 10, 100, 1000, 10000, ...


// f3: 2, 14, 107, 1010, 10013, ...



// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply


// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound


const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]

const undoudekiruSeito = seisekibo.filter((seito) => {
  return seito.taiiku >= 3
})

console.log(undoudekiruSeito)