// Тип валюты — только три варианта
export type Currency = "RUB" | "USD" | "EUR";

// Курсы конвертации (упрощенно, относительно RUB):
// 1 USD = 90 RUB
// 1 EUR = 100 RUB

export function convert(amount: number, from: Currency, to: Currency): number {
    if (from === to){
        return amount;
    }
    let rubAmount: number;

    switch (from){
        case "RUB":
            rubAmount = amount;
            break;
        case "USD":
            rubAmount = amount * 90;
            break;
        case "EUR":
            rubAmount = amount * 100;
            break;
    }

    switch (to){
        case "RUB":
            return rubAmount;
        case "USD":
            return rubAmount / 90;
        case "EUR":
            return rubAmount / 100;
    }
  // Напишите код здесь
  // Алгоритм:
  // 1. Если from === to, вернуть amount
  // 2. Иначе конвертировать from -> RUB, потом RUB -> to
}

export function formatCurrency(amount: number, currency: Currency): string {
    // Вернуть строку вида "100 RUB" или "50.5 USD"
  return `${amount} ${currency}`;
}