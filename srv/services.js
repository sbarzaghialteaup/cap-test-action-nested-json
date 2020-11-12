module.exports = (say) => {
    say.on("upload", (req) => {
        console.log(req._.req.body);
        console.log(req.user);
        return `Ok`;
    });
};
