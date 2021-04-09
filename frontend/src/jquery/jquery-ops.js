import $ from 'jquery';


export const dropDown = (e) => {

    if (e.target.classList[0] === "burger") {
        $(".drop-down").addClass("drop-down-clicked");
        $(".burger").addClass("burger-open");
        $(".burger").removeClass("burger");
    } else {
        $(".drop-down").removeClass("drop-down-clicked");
        $(".burger-open").addClass("burger");
        $(".burger-open").removeClass("burger-open");
    }

};


window.addEventListener('wheel', (e) => {

    if (document.body.scrollTop !== 0) {

        $(".burger").addClass("burger-b");
        dropDown(e);
    } else {
        $(".burger").removeClass("burger-b");
        $(".burger-open").removeClass("burger-b");
    }
})
window.addEventListener('resize', (e) => {

    if (document.body.scrollTop !== 0) {

        $(".burger").addClass("burger-b");
    } else {
        $(".burger").removeClass("burger-b");
        $(".burger-open").removeClass("burger-b");
    }
})

export const editAction = (e, index) => {
     let actionType = e.currentTarget.classList[0];

     if (index === 0){
         $(`.update-${actionType}-txt`).addClass(`update-${actionType}-txt-b`);
         $(`.update-${actionType}-input`).addClass(`update-pwd-input-b`);
         if (actionType === "pwd") {
            
             $(".pw-btn").addClass("pw-btn-open");
         }
     } else {
         $(`.update-${actionType}-txt`).removeClass(`update-${actionType}-txt-b`);
         $(`.update-${actionType}-input`).removeClass(`update-pwd-input-b`);
         if (actionType === "pwd") {
             $(`.pw-btn`).removeClass(`pw-btn-open`)
         }
     }
   
}


export const revealShowPage = () => {
    $(".change-b").addClass("change");
    $(".change-b").removeClass("change-b");
    $(".update-mod-b").addClass("update-mod-a");
    $(".update-mod-b").removeClass("update-mod-b");
}

export const revealEditPage = () => {
    $(".change").addClass("change-b");
    // $(".change").removeClass("change");
    $(".update-mod-a").addClass("update-mod-b");
    $(".update-mod-a").removeClass("update-mod-a");
}
