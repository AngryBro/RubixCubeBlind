SIDE = {
    U:0,
    D:1,
    R:2,
    L:3,
    F:4,
    B:5
};
STIKER = {
    U:0,
    D:1,
    R:2,
    L:3,
    F:4,
    B:5,
    UF:6,
    UB:7,
    UR:8,
    UL:9,
    DF:10,
    DB:11,
    DR:12,
    DL:13,
    RU:14,
    RD:15,
    RF:16,
    RB:17,
    LU:18,
    LD:19,
    LF:20,
    LB:21,
    FU:22,
    FD:23,
    FR:24,
    FL:25,
    BU:26,
    BD:27,
    BR:28,
    BL:29,
    UFR:30,
    UFL:31,
    UBL:32,
    UBR:33,
    DFR:34,
    DFL:35,
    DBL:36,
    DBR:37,
    FLU:38,
    FRU:39,
    FDR:40,
    FDL:41,
    BLU:42,
    BRU:43,
    BDR:44,
    BDL:45,
    RFU:46,
    RBU:47,
    RDF:48,
    RBD:49,
    LFU:50,
    LBU:51,
    LDF:52,
    LBD:53
}

Cube = () => {
    var makeColor = (color) => {
        var temp = [];
        temp.length = 10;
        for(var i = 1; i<10; i++) {
            temp[i] = color;
        }
        return temp;
    }
    var color = JSON.parse(JSON.stringify(STIKER));
    for(var i in color) {
        switch(i[0]) {
            case 'U': {
                color[i] = COLOR.white;
                break;
            }
            case 'D': {
                color[i] = COLOR.yellow;
                break;
            }
            case 'F': {
                color[i] = COLOR.green;
                break;
            }
            case 'B': {
                color[i] = COLOR.blue;
                break;
            }
            case 'R': {
                color[i] = COLOR.red;
                break;
            }
            case 'L': {
                color[i] = COLOR.orange;
                break;
            }
        }
    }
    var change4 = (stikers) => {
        var temp = color[stikers[0]];
        for(var i = 1; i<stikers.length; i++) {
            color[stikers[i-1]] = color[stikers[i]];
        }
        color[stikers[stikers.length-1]] = temp;
    }
    var change4edges = (stikers) => {
        change4(stikers);
        stikers = stikers.map(s => s[1]+s[0]);
        change4(stikers);
    }
    var elementaryMove = (move) => {
        switch(move) {
            case 'U': {
                change4(['UBL','UFL','UFR','UBR']);
                change4(['BLU','LFU','FRU','RBU']);
                change4(['LBU','FLU','RFU','BRU']);
                change4edges(['UB','UL','UF','UR']);
                break;
            }
            case 'D': {
                change4(['DBL','DBR','DFR','DFL']);
                change4(['BDL','RBD','FDR','LDF']);
                change4(['LBD','BDR','RDF','FDL']);
                change4edges(['DB','DR','DF','DL']);
                break;
            }
            case 'F': {
                change4(['FLU','FDL','FDR','FRU']);
                change4(['UFL','LDF','DFR','RFU']);
                change4(['LFU','DFL','RDF','UFR']);
                change4edges(['FU','FL','FD','FR']);
                break;
            }
            case 'B': {
                change4(['BLU','BRU','BDR','BDL']);
                change4(['UBL','RBU','DBR','LBD']);
                change4(['LBU','UBR','RBD','DBL']);
                change4edges(['BU','BR','BD','BL']);
                break;
            }
            case 'R': {
                change4(['RFU','RDF','RBD','RBU']);
                change4(['FRU','DFR','BDR','UBR']);
                change4(['UFR','FDR','DBR','BRU']);
                change4edges(['RU','RF','RD','RB']);
                break;
            }
            case 'L': {
                change4(['LFU','LBU','LBD','LDF']);
                change4(['FLU','UBL','BDL','DFL']);
                change4(['UFL','BLU','DBL','FDL']);
                change4edges(['LU','LB','LD','LF']);
                break;
            }
            case 'M': {
                change4edges(['FU','UB','BD','DF']);
                change4(['U','B','D','F']);
                break;
            }
            case 'S': {
                change4edges(['UL','LD','DR','RU']);
                change4(['U','L','D','R']);
                break;
            }
            case 'E': {
                change4edges(['FR','RB','BL','LF']);
                change4(['F','R','B','L']);
                break;
            }
        }
    }
    var singleMove = cmd => {
        if(cmd.length==1) {
            return elementaryMove(cmd);
        }
        for(var i in [1,1]) elementaryMove(cmd[0]);
        if(cmd[1]=='\'') {
            elementaryMove(cmd[0]);
        }
    }
    var move = cmd => {
        cmd = cmd.split(' ');
        for(var i in cmd) {
            singleMove(cmd[i]);
        }
    }
    return Object.freeze({
        color,
        move
    });
}

COLOR = {
    white: 'white',
    green: 'green',
    blue: 'blue',
    red: 'red',
    orange: 'orange',
    yellow: 'yellow'
};