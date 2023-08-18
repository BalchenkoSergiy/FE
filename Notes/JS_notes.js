/*
    There are major four elements of DOM as folloows:
        • Document: Treats all the HTML documents 
        • Elements: Tags used inside HTML document 
        • Text: Content of tags 
        • Attributes: Here, “href” is an attribute
*/

/*
    Properties:
        • Cookie: Returns value pairs of cookies in the document
        • documentMode: Returns mode of rendering used by the browser
        • domain: Returns the domain name
        • lastModified: Returns date & time of last modification 
        • title: Returns the title of the document
        • URL: Returns entire URL of the document
*/
 

/*
    Methods:
        • close(): Closes the output stream opened using document.open()
        • getElementById(): Accesses the first element with specified id
        • getElementByName(): Accesses all the elements with the specified name
        • getElementByTagName():Accesses all elements with the specified Tag name
        • open(): Opens the output stream to input information using document.write()
        • write(): Writes HTML JavaScript code 
        • writeIn(): Same as write() just adds a newline after each statement
*/
 
/*
    Examples:
        <html>
        <head>
            <title> My Squad </title>
        </head>
        <body>
            The title of the document is:
            <script type=”text/javascript”>
                document.write(document.title);
            </script>
        </body>
        </html>
*/

/*
    DOM ELEMENTS:
    While manipulating HTML documents we need to first find elements. There are few ways to do so:
        • By ID:
        Suppose id =’intro’, example:
        var myElement = document.getElementById(“Intro”);
        • By TagName:
        Suppose tag=’hello’, example:
        var buttons = document.getElementByTagName(‘hello’);
        • By ClassName:
        var myElement = document.getElementByClassName(‘stock’);
        • By CSS Selectors:
        var resetElement = document.querySelector(‘#reset’);
        • By querySelectorAll():
        var myElements = document.querySelector(‘#elements’);
        • parentNode
        • firstElementChild
        • lastElementChild
*/