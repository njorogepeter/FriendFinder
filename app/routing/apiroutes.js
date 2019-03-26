app.post("/api/friends", function(req, res){
    var newReservation = req.body;
    console.log(newReservation);
    if(tables.length >=5){
        waitlist.push(newReservation);
    } else{
        tables.push(newReservation);
    }
    res.json(newReservation);
});
app.listen(PORT, function(){
    console.log("App is listening at your port");
});