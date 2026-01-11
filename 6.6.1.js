const word = 'Довод';

const normalized = word.toLowerCase();
const reversed = normalized.split('').reverse().join('');

if (normalized === reversed) {
  console.log(`Слово ${word} является палиндромом`);
} else {
  console.log(`Слово ${word} не является палиндромом`);
}
