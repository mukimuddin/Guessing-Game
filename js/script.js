let player_name = document.querySelector(".player_name")
let player_1 = document.querySelector(".player_1")
let player_1_input = document.querySelector(".player_1_input")
let player_1_button = document.querySelector(".player_1_button")
let player_2 = document.querySelector(".player_2")
let player_2_input = document.querySelector(".player_2_input")
let player_2_button = document.querySelector(".player_2_button")
let player_3 = document.querySelector(".player_3")
let player_3_input = document.querySelector(".player_3_input")
let player_3_button = document.querySelector(".player_3_button")
let player_4 = document.querySelector(".player_4")
let player_4_input = document.querySelector(".player_4_input")
let player_4_button = document.querySelector(".player_4_button")
let error = document.querySelector(".error")
let chance_one = document.querySelector(".chance_one")
let chance_span_one = document.querySelector(".chance_span_one")
let chance_two = document.querySelector(".chance_two")
let chance_span_two = document.querySelector(".chance_span_two")
let chance_three = document.querySelector(".chance_three")
let chance_span_three = document.querySelector(".chance_span_three")
let chance_number_one = 3
let chance_number_two = 3
let chance_number_three = 3
chance_span_one.innerHTML = chance_number_one
chance_span_two.innerHTML = chance_number_two
chance_span_three.innerHTML = chance_number_three


player_1_button.addEventListener("click", ()=>{
    if(player_1_input.value == ""){
        error.innerHTML = "Please Give A One Digit Value"
    }else{
        if(player_1_input.value < 10){
            player_name.innerHTML = "Player Two"
            player_1.style = "display: none"
            player_2.style = "display: block"
            error.style = "display: none"
            chance_one.style = "display: block"
        }else{
            error.innerHTML = "Please Give A One Digit Number Value"
        }
    }
})
player_2_button.addEventListener("click", ()=>{
    if(player_2_input.value == ""){
        error.style = "display: block"
        error.innerHTML = "Please Give A One Digit Value"
    }else{
        if(player_2_input.value < 10){
            if(player_1_input.value == player_2_input.value){
                player_name.innerHTML = "Player Two Win"
                player_2.innerHTML = ""
                error.style = "display: block"
                error.innerHTML = "Congratulations!!!"
                chance_one.innerHTML = ""
            }else{
                chance_number_one--
                chance_span_one.innerHTML = chance_number_one
                if(chance_number_one == 0){
                    player_name.innerHTML = "Player three"
                    player_2.style = "display: none"
                    player_3.style = "display: block"
                    chance_one.style = "display: none"
                    chance_two.style = "display: block"
                }
            }
        }else{
            error.style = "display: block"
            error.innerHTML = "Please Give A One Digit Value"
        }
    }
})
player_3_button.addEventListener("click", ()=>{
    if(player_3_input.value == ""){
        error.style = "display: block"
        error.innerHTML = "Please Give A One Digit Value"
    }else{
        if(player_3_input.value < 10){
            if(player_1_input.value == player_3_input.value){
                player_name.innerHTML = "Player Three Win"
                player_3.innerHTML = ""
                error.style = "display: block"
                error.innerHTML = "Congratulations!!!"
                chance_two.innerHTML = ""
            }else{
                chance_number_two--
                chance_span_two.innerHTML = chance_number_two
                if(chance_number_two == 0){
                    player_name.innerHTML = "Player Four"
                    player_3.style = "display: none"
                    player_4.style = "display: block"
                    chance_two.style = "display: none"
                    chance_three.style = "display: block"
                }
            }
        }else{
            error.style = "display: block"
            error.innerHTML = "Please Give A One Digit Value"
        }
    }
})
player_4_button.addEventListener("click", ()=>{
    if(player_4_input.value == ""){
        error.style = "display: block"
        error.innerHTML = "Please Give A One Digit Value"
    }else{
        if(player_4_input.value < 10){
            if(player_1_input.value == player_4_input.value){
                player_name.innerHTML = "Player Four Win"
                player_4.innerHTML = ""
                error.style = "display: block"
                error.innerHTML = "Congratulations!!!"
                chance_three.innerHTML = ""
            }else{
                chance_number_three--
                chance_span_three.innerHTML = chance_number_three
                if(chance_number_three == 0){
                    player_name.innerHTML = "Player One Win"
                    player_4.innerHTML = ""
                    error.style = "display: block"
                    error.innerHTML = "Congratulations!!!"
                    chance_three.innerHTML = ""
                }
            }
        }else{
            error.style = "display: block"
            error.innerHTML = "Please Give A One Digit Value"
        }
    }
})