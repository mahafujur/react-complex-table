## <img src="https://www.solvians.com/logo.png" alt="Solvians" width="170"/> Frontend Challenge


👋 Welcome to the Solvians Frontend Challenge!

The idea is to enhance this **React application (Typescript)** with some feature and cover it with tests.

You have two tasks to implement.

Code coverage and quality of tests are important.

At the end you can write your notes about your architectural decisions or feedback.

## Project Setup

**Before you start please read** through this document.

❓ If you are blocked for some reason or something is unclear, please do not hesitate to contact us.
We believe that unclear requirements or ambiguous instructions should always be clarified.

To simplify the tasks, we use static data instead of a real backend, **please do NOT modify the file `./src/data/products.json`**

### 📂 Installing dependencies

You are free to use `npm` or `yarn`. We recommend using `yarn`.

```sh
yarn install
```

### 🏃 Running the development server

To see what you're building run the following command:

```sh
yarn start
```

It will start the development server and open a page in your default browser.

By default, the application will be running under http://localhost:3000

### 🧪 Testing

This project uses [`jest`](https://jestjs.io/) as a test runner.

You can run tests with the following command:

```sh
yarn test
```

### 🗃️ Code coverage

Open `./coverage/lcov-report/index.html` in your browser to check the code coverage after running `yarn test`

## Task 1 - ✅ Table Sorting

This task is to allow the user to sort the table by columns.
- If you click the column title for the first time it should sort the clicked column in ascending order.
- If you click the same column title again this should toggle between ascending and descending.
- Display the icon ▲ or ▼ next to the column title


## Task 2 - ✅ Cell values formatting

This task is to render the values inside the table in a human-readable format.

If a column has `format` or/and `decimalDigits` properties in the data, use it with the following rules:

**Rules:**
- A human-readable `number` should use the `decimalDigits` from the data
- A human-readable `date` should use the `format` from the data
- A human-readable `percent` number is (value * 100) then append the `%` sign to it and use `decimalDigits`

**Example:**
- Number format: The formatting of the number `123.45678` with 2 decimal-digits should result `123.46`
- Percent format: if `value = 0.12345` and `decimalDigits = 3` then the formatted result should be `12.345%`

## 📋 Your notes, decisions and feedback:

**Using Hooks:**
I wrote clean code by first formatting the data into a reusable hook. I utilized custom formatting functions for numbers and dates to ensure consistency, paired with the lightweight Day.js library for efficient and immutable date handling.
I decided to use hooks for several reasons:

**Organized Code:** Hooks help keep my code clean by separating complex logic into smaller, reusable pieces.

**Easier to Share:** With hooks, I can easily share functionality between different components without repeating code.

**Testing Made Simple:** It's easier to test hooks on their own, which means I can focus on making sure each piece works correctly.

**Clear Structure:** Hooks help separate the UI from the logic, making the code easier to understand and manage.

**Readability:** Using hooks makes the code flow more straightforward, which helps new developers understand it better.

## Testing Approach: 
I wrote six tests to check the main features of the table and how the cell values are formatted. I skipped testing the sorting for now because I wanted to focus on other aspects, but I'm feeling good about my testing skills overall.

