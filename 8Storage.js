localStorage
> persistent Storage
> save wrt to browser 

localStorage.setItem('token','8678gh78')
undefined
localStorage.getItem('token')
"8678gh78"
localStorage.setItem('token','mytoken')
undefined
localStorage.getItem('token')
"mytoken"
localStorage.removeItem('token')
undefined
localStorage.getItem('token')
null



sessionStorage
> non persistent Storage
> save wrt to tab

sessionStorage.setItem('usersessionkey','3534f54tg54y')
undefined
sessionStorage.getItem('usersessionkey')
"3534f54tg54y"
sessionStorage.removeItem('usersessionkey')

cookies
> save wrt to website
> expires time 


document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.953314084.1607098068; _gat_gtag_UA_131256843_1=1"
document.cookie="origin=delhi"
"origin=delhi"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.953314084.1607098068; origin=delhi"

document.cookie="country=india;expires=Sat, 05 Dec 2020 01:00:00 UTC"