'use strickt';
let money, time,
    startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    input = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optExpenses = document.querySelectorAll('.optionalexpenses-item'),
    day = document.querySelector('.day-value'),
    month = document.querySelector('.month-value'),
    year = document.querySelector('.year-value'),
    percent = document.querySelector('.choose-percent'),
    sum = document.querySelector('.choose-sum'),
    savings = document.querySelector('#savings'),
    chooseIncome = document.querySelector('.choose-income');

    console.log(optionalExpensesBtn);




startBtn.addEventListener('click', () => {
    money = +prompt('Ваш бюджет на месяц', '');

    while(isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет на месяц', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date().toLocaleDateString('ru', {
        year: 'numeric' 
    });
    month.value = new Date().toLocaleDateString('ru', {
        month: 'numeric'
    });
    day.value = new Date().toLocaleDateString('ru', {
        day: 'numeric'
    });

    expensesBtn.disabled = false; 
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    
});

expensesBtn.addEventListener('click', () => {
    let sume = 0;

    for (let i = 0; i < input.length; i++) {
        let a = input[i].value,
            b = input[++i].value;
    
        if (typeof(a) === 'string' && typeof(a) != null && 
            typeof(b) != null &&
            a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sume += +b;
        } else {
            i--;
        }
    
    }

    expensesValue.textContent = sume;
});

optionalExpensesBtn.addEventListener('click', () => {
    for (let i = 0; i < optExpenses.length; i++) {
        let opt = optExpenses[i].value;
        console.log(opt);
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }
});


countBtn.addEventListener('click', () => {

    if(appData.budget != undefined) {
        if(expensesValue.value) {
            appData.moneyPerDay = (appData.budget - +expensesValue.value / 30).toFixed();
            alert(`Бюджет на 1 день составляет ${appData.moneyPerDay}руб.`);
            dayBudgetValue.textContent = appData.moneyPerDay;
        } else {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert(`Бюджет на 1 день составляет ${appData.moneyPerDay}руб.`);
            dayBudgetValue.textContent = appData.moneyPerDay;
        }


        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка!';
        } 
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!';
    }

    
});

chooseIncome.addEventListener('input', () => {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', () => {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener('input', () => {
    if(appData.savings == true) {
        let sume = +sum.value,
            perc = +percent.value;

            appData.monthIncome = sume/100/12*perc;
            appData.yearIncome = sume/100*perc;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', () => {
    if(appData.savings == true) {
        let sume = +sum.value,
            perc = +percent.value;

            appData.monthIncome = sume/100/12*perc;
            appData.yearIncome = sume/100*perc;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

expensesBtn.disabled = true; 
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for(let prop in appData) {
    console.log(`Наша программа включает в себя данные: ${prop} - ${appData}`);
}

//alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);


/* Ещё 2 способа цикла
let i = 0;
while(i < 2) {
    let a = prompt('Введите обязательную статью расходов?', ''),
    b = prompt('Во сколько обойдётся?', '');

if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
    a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
} else {
    i--;
}
i++
}


do {
    let a = prompt('Введите обязательную статью расходов?', ''),
    b = prompt('Во сколько обойдётся?', '');

if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
    a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
} else {
    i--;
}
i++;
} while (i < 2);
*/