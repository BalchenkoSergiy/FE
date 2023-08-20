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

/*
    Top 10 Essential JavaScript DOM methods List
        1) getElementId
            getElementId is a method to access any element virtually. It accesses the first element with the specified ID.
            
            Syntax:
                var myVariable = document.getElementById(“my_squad”);

            It can also be used dynamically as follows:
                var myVariable = document.getElementById(mySquad);

            This method places object which needs to be accessed in a variable called “myVariable”. 
            myVariable allows your program to access object directly.
            Suppose you need to find an id “SY”, you just need to use the above syntax & replace “my_element” with “SY”. 
            Secondly, you can also apply few additional codes on getElementById as follows:
                var myVariable = document.getElementById(“SY”);
                myVariable.style.display = “block”;
                myVariable.style.backgroundColor = “#f00”;
                myVariable.style.border = “solid 1 px #00f”;

            Here the above code will display in block font with a Hex-red background & blue border. 
            So using myVariable code you can add font & color. A lot of people face trouble using getElementId usually because of silly mistakes.
            Consider the following example:
                myVariable = document.getElementByID(“my_squad”);

            Here it might look correct, but remember, “JavaScript is a case sensitive language.” So “ID” won’t work in place of “Id.”
            Usually, beginners commit this mistake & find methods to be complicated. Meanwhile, 
            code might look a bit messed up because you need to apply an id in your HTML. 
            So this method is robust but may look messy as it encourages you to mess up your markup.
*/