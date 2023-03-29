// task 01
const existedUserLogin  = 'the_best_user'
const existedUserPassword = '12345678'

userLogin = (prompt('Insert your login')).trim()
userPassword = prompt('Insert your passsword')

if (userLogin === existedUserLogin) {
    alert(`Welcome ${userLogin}`)
} else {
    alert(`Login or Password was wrong`)
}