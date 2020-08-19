exports.getMessages = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('hit messages controller');

    let response;


    response = 'No news.'

    res.send({ response });
};
