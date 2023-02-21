function greeting(req, res){
    var fn = req.query.first;
    res.send("Greetings, "+ fn);
}

function add(req,res){
    var n1 = req.body.num1;
    n2 = req.body.num2;
    sum = parseInt(n1) + parseInt(n2);
    res.send(n1 + ' and ' + n2 + ' is equal to ' + sum);
}

var attachService = function (app){
    app.get('/svc/greeting',greeting);
    app.post('/svc/add',add);
};

exports.attachService = attachService;
