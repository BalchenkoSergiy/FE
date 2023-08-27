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
*/

    /*
        1) getElementId
            getElementId is a method to access any element virtually. It accesses the first element with the specified ID.
    */        
        //    Syntax:
                var myVariable = document.getElementById(“my_squad”);

        //    It can also be used dynamically as follows:
                var myVariable = document.getElementById(mySquad);

        //    This method places object which needs to be accessed in a variable called “myVariable”. 
        //    myVariable allows your program to access object directly.
        //    Suppose you need to find an id “SY”, you just need to use the above syntax & replace “my_element” with “SY”. 
        //    Secondly, you can also apply few additional codes on getElementById as follows:
                var myVariable = document.getElementById(“SY”);
                myVariable.style.display = “block”;
                myVariable.style.backgroundColor = “#f00”;
                myVariable.style.border = “solid 1 px #00f”;

        //    Here the above code will display in block font with a Hex-red background & blue border. 
        //    So using myVariable code you can add font & color. A lot of people face trouble using getElementId usually because of silly mistakes.
        //    Consider the following example:
                myVariable = document.getElementByID(“my_squad”);

        //    Here it might look correct, but remember, “JavaScript is a case sensitive language.” So “ID” won’t work in place of “Id.”
        //    Usually, beginners commit this mistake & find methods to be complicated. Meanwhile, 
        //    code might look a bit messed up because you need to apply an id in your HTML. 
        //    So this method is robust but may look messy as it encourages you to mess up your markup.


    /*
        2) getElementsByTagName:
    */
        //    In the previous method, we may have some errors. But this method can eradicate those issues. 
        //    getElementByTagName allows you to search all the elements with a specified tag name on your page. 
                var myLinkcollection = document.getElementsByTagName(“abc”);
            
        //    Here myVariable is substituted by “myLinkCollection”. myLinkCollection holds all the elements on the page. 
        //    Pictorially it is like an array holding elements. Here also you can add few additional features. Following is an example:
                var myLinkCollection = document.getElementsByTagName(“abc”);
                for (i = 0; i < myLinkCollection.length; i++) {
                    if (myLinkCollection[i].className == “std_class”) {
                        myLinkCollection[i].onclick = function() {
                            this.style.backgroundColor = “#f00”;
                        }
                    }
                }

        //    The above code isn’t complicated if you know the basics & use of methods. 
        //    Here, when you collect the link into an array i.e., myLinkCollection, we use for loop to navigate.
        //    Next, if the loop sets a condition if class_Name equal to “std_class”, 
        //    there’s a trigger attached to it using “onclick.” The trigger is “Background color.”
        //    If we can use link in getElementById why should we use getElementByTagName? Well, using id allows you to access only one element. 
        //    Because it can have “id” but not “ids.” So for each element, you need to use multiple getId elements. 
        //    Meanwhile, ByTagName allows you to have multiple links with the same class name. We can set onclick triggers in a precise manner.


    /*
        3) Node:
            Any element on a page including text & whitespaces of a DOM structure is known as “NODE.” 
            Nodes can be between XHTML Tags.
            Nodes available in DOM:
    */
                node.childNodes
                node.firstChild
                node.lastChild
                node.parentNode
                node.nextSibling
                node.previousSibling

        //    Suppose we have following XHTML:
                <ul id-“list”>
                    <li><a href=”prod1.html” class=”list_one”> Product Number One</a></li>
                    <li><a href=”prod2.html”> Product Number Two</a></li> 
                    <li><a href=”prod3.html”> Product Number Three</a></li>
                    <li><a href=”prod4.html”> Product Number Four</a></li>
                </ul>

        //    Now if we want to access “Prod1” we can do so using 2 ways:
        //    Using ChildNodes:
                var myLinkList = document.getElementsById(“list”)
                var myFirstProduct = myLinklist.childNodes[0].childNodes[0];
                alert(myFirstLink.className);

        //    Using firstChild:
                var myLinkList = document.getElementsById(“list”)
                var myFirstProduct = myLinklist.firstChild.firstChild;
                alert(myFirstLink.className);

        //    Both codes will display the same results because the same element is accessed. 
        //    Different browsers may give different outputs.
        //    For example, Firefox’s output would be different than Chrome because it views whitespaces as nodes. 
        //    Nodes can be interpreted differently. So be selective & carefully while using & test nodes.

    /*            
        4) createElement:
    */
        //    As the name goes, it is used to create an element & place it anywhere in the DOM structure. 
        //    Let’s add an element to the previous example:
                var myNewListItem = document.createElement(“li”)
                var myNewProd = document.createElement(“prod5”);

        //    Here a new element will be created & added in the DOM structure.

    /*
        5) appendChild:
    */
        //    Previously we created element, now we will add two elements to our list of links using appendChild.
                var myNewListItem = document.createElement(“li”)
                var myNewProd = document.createElement(“prod5”);

                var myLinkList = document.getElementById(“List”)
                myLinkList.appendChild(myNewListItem);
                myLinkList.LastChild.appendChild(myNewProd);

        //    Above the code adds anchor tag inside of element at the endpoint.
        //    If we can create or append, then we can remove it too.

    /*
        6) removeChild:
    */
        //    o remove the effect of appendChild, we can use removeChild. Here, 
        //    we need to remove the list item because it includes both “list item & newly created anchor.” 
        //    And, if we didn’t create a new element, it might remove the last list item.
        //    It doesn’t matter whether it was created recently or it existed. Following is a code to remove Child method:
                var myLinkList = document.getElementById(“list”)
                var myRemovedLink = myLinkList.lastChild;
                myLinkList.removeChild(myRemoveLink);

    /*
        7) getAttribute:
    */
        //    With the getAttribute method, you can access the value of any attribute of an element on a page. 
        //    Suppose there’s an id with abc attribute having value “Best.” 
        //    Now, if we want to retrieve that attribute, we will use getAttribute. 
        //    Following is an example:
                var myLinkFive = document.getElementById(“Prod_5”);
                var myLinkAttribute = myLinkFive.getAttribute(“abc”);

        //    Now getAttribute will retrieve the value from “abc,” i.e., “Best.” 
        //    This method is used to target links with specific attributes & values. 

    /*
        8) setAttribute:
    */
        //    A useful method to replace values in the attribute. 
        //    Assigning a new value to an existing attribute is done using setAttribute. 
        //    Suppose we have an attribute “abc” containing value “Best.” 
        //    Now we want to change the value to “Awesome.” Following is a suitable code:
                Var myLinkFive = document.getElementById(“Prod_5);
                myLinkFive.setAttribute(“abc”, ”Awesome”);

        //    Here, the value inside the abc attribute has been replaced. 
        //    This method cannot change attributes; 
        //    it can only make changes in values of an attribute.
