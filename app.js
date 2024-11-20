var isLongPressedName = function(name, typed) {
    for(var i=0, j=0; i < name.length; i++){
        if(name[i] === typed[j]){
            j++
        } else if(typed[j] === name[i-1]){
            while(typed[j] === name[i-1]) j++ 
            i--
        } else {
            return false
        }
    }

    while(typed[j] === name[i-1]) j++
    return j === typed.length
};