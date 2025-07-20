let a = {
    "name": "Name1",
    "func" : function abc(){
        function bcd(){
            console.log(this.name)
        }
        console.log(this.name)
        bcd()
    }
}

a.func()