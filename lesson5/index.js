var baseUser = {
    name: 'Arkadii',
    getFriends: function(){
        return [];
    }
};

var man ={
    name: 'amin'
}

baseUser.objectCreate(man);

function jq() {

}

jq.prototype = Object.create(jquery.prototype);