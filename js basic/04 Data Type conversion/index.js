// Into string
    /*
        Є два шляхи зміни типу даних на STRING:
            - Явне (Саме цей тип радять використовувати)
            - Неявне
    */
    const age = 20;
    console.log('Number age:', typeof age);
    console.log('String age:', typeof String(age));  //  Явна зміна типу даних 
    
    const updateAge = '1' + 20; // Неявна зміна типу даних
    console.log('updateAge', typeof updateAge);

// Into Number
    /*
        Є два шляхи зміни типу даних на STRING:
            - Явне (Саме цей тип радять використовувати)
            - Неявне
    */

    const experienceInJavaScript = '5';
    console.log('string experienceInJavaScript:', typeof experienceInJavaScript);
    console.log('Number experienceInJavaScript:', Number (experienceInJavaScript)); //  Явна зміна типу даних 
    console.log('Type of experienceInJavaScript:', typeof (experienceInJavaScript));
    
    console.log('experienceInJavaScript', +experienceInJavaScript); // Неявна зміна типу даних
    console.log('Type of experienceInJavaScript:', typeof (experienceInJavaScript));

// Into Boolean
    // null, undefine, Nan, 0, '' - ці варіанти при зміні у boolean завжди будуть false

    console.log('hello', Boolean('hello'));
    console.log('5', Boolean(5));

    
