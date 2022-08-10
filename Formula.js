Formula = () => 'Formula';

Formula.random = () => {
    var s = '';
    var moves = ['L','R','U','D','F','B'];
    var types = ['\'','2',''];
    var last = -1;
    for(var i = 0; i<20; i++) {
        var move = last;
        while(last==move) {
            move = Math.round(Math.random()*5);
        }
        last = move;
        s += moves[move]
        +types[Math.round(Math.random()*2)]
        +(i==19?'':' ');
    }
    return s;
}