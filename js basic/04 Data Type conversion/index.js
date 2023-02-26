// Into string
    /*
        Є два шляхи зміни типу даних на STRING:
            - Явне (Саме цей тип радять використовувати)
            - Неявне
    */
    const age = 20;
    console.log('Number age:', typeof age)
    console.log('String age:', typeof String(age))  //  Явна зміна типу даних 
    
    const updateAge = '1' + 20; // Неявна зміна типу даних
    console.log('updateAge', typeof updateAge)

// Into Number
// Into Boolean
