//default catch-all route that leads to home.html which displays the home page
app.get("/public/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/home.html"));
});

//should display the survey page
app.get("/public/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});