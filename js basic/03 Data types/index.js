// 1. string
    const favoriteDrink = 'Coffee';
    console.log(favoriteDrink);

// 2. number
    const numberOfCups = 5;
    console.log(numberOfCups);

// 3. boolean
    const isColdDrink = false;
    console.log(isColdDrink);

// 4. null - empty value, Uncknown
    const studentFavouriteDrink = null;
    console.log(studentFavouriteDrink);

// 5. undefined - Value vas not initialized
    let carOwner;
    console.log(carOwner);

// 6. object
    const drink = {
        favoriteDrink: 'Coffee',
        numberOfCups: 5,
        isColdDrink: true
    };
    console.log(drink);

// 7. symbol
    const id = Symbol ('id');
    console.log(id);

// 8. bigint
    const bigIntNumber = BigInt (100);
    console.log(bigIntNumber);

// How to know which data type is in some variable (typeof)
    console.log(typeof(favoriteDrink))
    console.log(typeof('Serhii'))
    console.log(typeof(5))
    console.log(typeof(false))
    console.log(typeof(Symbol('id')))
    console.log(typeof(100n))
    console.log(typeof(console))

// Exeptions
    console.log(typeof(null))           // object
    console.log(typeof(console.log))    // function