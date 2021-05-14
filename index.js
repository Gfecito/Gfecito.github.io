var test = new Vue({
    el: '#test',
    data: {
        message: 'Hello Vue'
    }
})

function testFunct(){
    test.message="Hello Vue\n"
    var checkBoxes = [document.getElementById("a"),document.getElementById("b"),document.getElementById("c"),document.getElementById("d")];
    var options = ["a","b","c","d"]

    for(var i=0; i<checkBoxes.length; i++){
        if(checkBoxes[i].checked){
            test.message+= "Option " + options[i] + " selected" + " \n"
        }
    }

}