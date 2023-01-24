const a = Number.parseInt(prompt('Для перевода Цельсия в Фаренгейт,введите число'));
const f = (Math.round ((((9 / 5) * a + 32))* 100) / 100);

alert(`Цельсий: ${a} Фаренгейт: ${f}`);
