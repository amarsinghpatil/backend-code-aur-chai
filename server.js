import express from 'express'; // module js syntax

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/jokes', (req, res) => {
    res.send('Server is Ready');
});

// Some standarization are followed like '/api/jokes'
//if in local host environment variable is not there then serve at 3000
//if it goes in Production it is an 100 percentage necessary that port will get through process.env.PORT 
// other Wise app will not run

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


app.get('/jokes', (req, res) => {

    // This is an Array below
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content : 'This is a Joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'this is another Joke'

        },
        {
            id: 3,
            title : 'A third Joke',
            content: 'This is an third Joke'
        },

        {
            id: 4,
            title: 'A fourth joke',
            content: 'this is a fourth'
        },

        {
            id:5,
            title: 'A fifth joke',
            content: ' This is a fifth joke',
        }
    ];
    res.send(jokes);
})

// Now the server is ready
/* videos Pratical Notes --
-- Create an express app
-- When an error arrive at this like syntaxError : cannot use import statement outside a module
type "type":"Module" in an Pakage.json file.

-- Create an Jokes array in which it has an four object
-- To when an localhost environement is run in the browser, Run an /jokes , this will display
    an json format that you will not able to understand it, copy that, and go to the json format
    https://jsonformatter.org/ paste it here, You will fully Understand it json data.

--  Port in localhost and Production Envirorment are different.
--  There is an standard for writing is that, where an listening is happening that should be written
    in '/api/jokes'

*/