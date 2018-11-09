(() =>{

    // set up vie instance
    const vm = new Vue({
        el : "#app",

        data : {
            message : "Welcome to your first Vue app",

            targetURL : "http://google.ca",

            vuemessage : "yay",

            anchorOff : true,

            deliciousFruit : [
                {name : "apple", flavour: "tasty"},
                {name : "banana", flavour: "yellow"},
                {name : "lemon", flavour: "sour"},
            ],

            hazVue : true
        },

        methods : {
            logFruit(e) {
                console.log(e.currentTarget);
            }
        }
    })

})();