let son = Math.round(  Math.random()*100)  


alert(' random son: ' +  son)

if( son % 3 === 0 && son % 5 === 0  ){
  alert('bu ' +   son   +  ' fizz  buzz ')
}else if(son % 5 == 0 )   {
    alert( 'bu ' +  son  + ' son  buzz' )
}else if(son % 3 == 0 )   {
    alert( 'bu ' +  son  + ' son  fizz' )
}else {
    alert( 'bu ' +  son  + ' soni fizz  ham buzz ham emas ' )
}
   

