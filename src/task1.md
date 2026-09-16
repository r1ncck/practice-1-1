# Задание 1. Разбор tsconfig.json

Откройте `tsconfig.json` в корне проекта и для каждой строки напишите
**своими словами**, что она делает. Не копируйте документацию —
объясните так, как будто рассказываете одногруппнику.

## compilerOptions

### target
> Указывает, в какую версию JavaScript компилирует наш TypeScript

### module
> Определяет как файлы будут связываться друг с другом

### moduleResolution
> Настройка, указывающая компилятору алгоритм поисков файлов

### strict
> Общий механизм, включающий в себя набор проверок типов для поиска ошибок при компиляции

### strictNullChecks
> Опция, делающая null и undefined отдельными самостоятельными типами

### esModuleInterop
> Нужен для совместимости со старыми библиотеками

### skipLibCheck
> Настройка, которая отключает проверку типов во всех файлах 

### forceConsistentCasingInFileNames
> Флаг, который запрещает импортировать файлы с нарушением регистра

### outDir
> Настройка указывающая в какую папку TypeScript будет сохранять скомпелированные файлы

### rootDir
> Настройка указывающая какой папкой TypeScript будет считать исходной для кода

## include
> Настройка указывающая TypeScript какие файлы и папки он может обрабатывать

## exclude
> Настройка указывающая какие файлы TypeScript будет игнорировать при компиляции

# Задание 1.2. Включение флагов

Для каждого пункта ниже:
1. Определите, какой флаг нужно поменять в `tsconfig.json`.
2. Внесите изменение.
3. Запустите `npm run check`.
4. Запишите результат в `task1.md`.

---

### 1. Строгие проверки типов
Включите опцию, которая делает `null` и `undefined` отдельными типами,
а не «совместимыми со всем». Без неё код с `null` компилируется, с ней — нет.

**Ваш ответ:** `strictNullChecks: true`

---

### 2. Проверка `this`
Включите опцию, которая ругается, если внутри функции используется `this`,
но функция не является методом класса (то есть `this` не определён).

**Ваш ответ:** `noImplicitThis: true`

---

### 3. Неявный `any`
Включите опцию, которая ругается, если переменная получает тип `any`
автоматически (например, функция без аннотаций параметров).

**Ваш ответ:** `noImplicitAny: true`

---

### 4. Возврат из функции
Включите опцию, которая требует, чтобы **все** ветки функции возвращали значение,
если функция объявлена как возвращающая не-`void`.

**Ваш ответ:** `noImplicitReturns: true`

`src/task3-null.ts:4:50 - error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

4 export function greet(name: string | undefined): string {
                                                   ~~~~~~

src/task3-null.ts:11:72 - error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

11 export function applyDiscount(price: number, discount: number | null): number {
                                                                          ~~~~~~

src/task3-null.ts:20:60 - error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

20 export function getErrorMessage(code: number | undefined): string {
                                                              ~~~~~~

src/task5-states.ts:10:51 - error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

10 export function canWithdraw(state: AccountState): boolean {
                                                     ~~~~~~~

src/task5-states.ts:20:56 - error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

20 export function getStatusMessage(state: AccountState): string {
                                                          ~~~~~~

src/task5-states.ts:27:69 - error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

27 export function freezeAccount(state: AccountState, reason: string): AccountState {
                                                                       ~~~~~~~~~~~~

tests/task4.test.ts:2:41 - error TS2306: File 'C:/Users/Ринат/practice-1-1/src/task4-union.ts' is not a module.

2 import { convert, formatCurrency } from "../src/task4-union";
                                          ~~~~~~~~~~~~~~~~~~~~

tests/task6.test.ts:2:61 - error TS2306: File 'C:/Users/Ринат/practice-1-1/src/task6-star.ts' is not a module.

2 import { parseStatus, canTransition, getNextStatuses } from "../src/task6-star";
                                                              ~~~~~~~~~~~~~~~~~~~


Found 8 errors in 4 files.

Errors  Files
     3  src/task3-null.ts:4
     3  src/task5-states.ts:10
     1  tests/task4.test.ts:2
     1  tests/task6.test.ts:2`