function TopicsPage(){
    return (
        <div className="TopicsPage">
        <h2>Web Dev Concepts</h2>
            
            <nav className="local">
                <a href="#servers">Web Servers</a>
                <a href="#Frontend">Frontend Design</a>
                <a href="#imageOptimization">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javaScript">JavaScript</a>
            </nav>

            <article id = "servers">
                <h3>1. Web Servers</h3>
                <p>
                    A <strong>designated home page</strong> is the main entry point to a website. It is typically named index.html and this file automatically loads when a user accesses the sites directory. The Apache web server used by OSU uses the default name index.html. Other servers such as Microsoft's .NET platform use default.html as the homepage. In other cases, the server might look for index.js or index.php as the homepage
                </p>
                
                <p>
                    When viewing the page locally, the <strong>Network tab</strong> in the Web Developer tools shows files being loaded from the local file system (file:// URL), with fewer requests and no HTTP methods or status codes. On the web server, the Network tab provides detailed information about each HTTP request, including the method (e.g., GET), status codes (like 200 or 404 Not Found), and timing data for server response and loading times. It also displays request and response headers, such as User-Agent, Content-Type, and caching policies, which are not present when loading files locally.
                </p>

                <p>
                    The <strong>favicon.ico</strong> file returns a status 200 because it is found and loaded, while the <strong>main.css</strong> and <strong>main.js</strong> files return 404 errors because they do not exist in the current directory.
                </p>

                <p>
                    A typical URL contains the <strong>scheme</strong> (e.g., https), <strong>subdomains</strong> (e.g., web and engr), the <strong>host domain</strong> (e.g., engr.oregonstate.edu), and the <strong>resource path</strong> (e.g., /~osorioar/index.html).
                </p>
            </article>
            <article id = "Frontend">
                <h3>2. Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> includes the visual design of a web page, the graphical user interface (GUI), as well as the interactive experience of the web page. Visual design requires font and typography scheme, color scheme, photography/icon/illustration scheme, and navigation systems.
                </p>

                <p>
                    <strong>Usability/inclusivity</strong> refers to the measure of the quality of a user's experience when interacting with any product or system such as a web, desktop, or smartphone app. These are commonly described by a list of five "E's"
                    <dl>
                        <dt><strong>Effective</strong></dt> 
                        <dd>The app is effective at helping users meet their goal(s). Will the user end up with accurate results? An effective web app will produce accurate results.</dd>
                        <dt><strong>Efficient</strong></dt> 
                        <dd>The app allows the user to perform tasks with the least number of steps. Will user receive results quickly? An efficient app will accomplish this.</dd>
                        <dt><strong>Enjoyable</strong> or <strong>Engaging</strong>.</dt> 
                        <dd>The app fits the unique needs of the intended audience in content and design. The app is visually appealing and holds the users interest.</dd>
                        <dt><strong>Easy to learn and navigate</strong></dt>
                        <dd>An apps ease of use is especially important for users that have never used it before. Users should be able to quickly understand how to locate their goal by clicking or searching the wep page.</dd>
                        <dt><strong>Error-free</strong></dt> 
                        <dd>Apps with little to no errors avoid accessibility and availability issues.</dd>
                    </dl>
                </p>
                
                <p>
                    The <strong>header</strong> tag denotes the banner or masthead for an app/site and typically includes the name, publisher, and/or marketing slogans. 
                    The <strong>main</strong> tag denotes the primary block that holds content, such as stories, galleries, tutorials, etc. The main tag wraps the enirety of the content. 
                    The <strong>section</strong> tag is used to make a thematic grouping of content. It is a group of content that is all related, but doesn't quite stand on its own.
                    The <strong>nav</strong> tag can be used multiple times in an app/site. Each block of navigation takes users from the current page to other pages. Sets of navigation
                    typically include the main menu, search, tools, stories, locations, and legal links. The <strong>article</strong> tag is typically used inside the section element and
                    denotes a single specific topic with a second-level headline, h2. When multiple article tags are displayed on a page, they are typically marked with ID selectors, so they can be syled
                    uniquely from one another. The <strong>footer</strong> tag resides below the main tag and typically holds legal information, contact information, and/or links to critical pages. At the very
                    least, a footer should contain the website owner's copyright statement, which includes the copyright symbol, rendered with ASCII entities, the year of publication, and the owner's name
                </p>

                <ol>
                    <li>
                        <strong>External Links:</strong> Anchors link to external websites using absolute URLs. The absolute URL
                        describes the link. When the user clicks on the link, they will be taken to the link that is underlined.
                    </li>
                    <li>
                        <strong>Internal Links:</strong> Anchors can link to sections within the same page using fragment indentities
                        When a tag has an ID attribute, its value can be used with a hashtag to define the reference/resource for an anchor to land.
                    </li>
                    <li>
                        <strong>Page-to-Page Links:</strong> Anchors can link to other pages within the same site using relative URLs
                    </li>
                </ol>
            </article>

            <article id="imageOptimization">
                <h3>3. Optimizing Images</h3>
                <p>The main purpose of <strong>optimizing images</strong> for online viewing is to reduce the time it takes a browser to display an image file in its correct size. 
                    Visitors to web sites should not have to wait for photos and other graphics to load;</p>
                <p>The six major image optimizing specifications are:</p>
                <ul>
                    <li><strong>Descriptive file name</strong>: To improve search engine optimization (SEO), file names should include who, what, when, and where as much as possible.</li>
                    <li><strong>Small file size</strong>: Reduce file sizes as small as possible for the fastest load time. </li>
                    <li><strong>Exact dimensions</strong>: Crop and reduce the size of images to fit the dimensions of the space in your web page.</li>
                    <li><strong>Correct file format</strong>: Image files must be in correct file format such as JPEG, GIF, or PNG.</li>
                    <li><strong>Reduced resolution</strong>: Monitors render between 72 to 300+ pixels per inch (ppi); the typical default is 72ppi.</li>
                    <li><strong>Color mode</strong>: RGB for .PNG, .JPG, .SVG, and .WebP, and Indexed for .GIF (and sometimes PNG).</li>
                </ul>

                <p>The appropriate file format for photos is .JPG and WebP. The appropriate file format for line art is usually .GIF, but also sometimes .PNG and .SVG.</p>
            </article>

            <article id="favicons">
                <h3>4. Favicons</h3>
                <p><strong>Favicons</strong> are small images that are displayed in the browser's tab or address bar. They help users identify websites and make it easier to navigate between different tabs. Favicons are typically small, square images that can be saved in .GIF, .PNG, .ICO, and .SVG file formats.</p>
                <p>Browsers and devices use favicons in a variety of ways. For example, they may display the favicon in the browser's tab, in the address bar, or in the bookmarks menu. Favicons can also be used to create shortcuts to websites on the home screen of a mobile device.</p>
            </article>

            <article id="css"> 
                <h3>5. Cascading Stylesheets</h3>
                <p>The main advantage of incorporating <strong>Cascading Stylesheets</strong> aka <strong>CSS</strong> into web applications is that the visual representation of content is separate from the structural HTML code.</p>
                <p>There are five primary ways to incorporate styles into websites and applications: 
                    <ul>
                        <li><strong>External stylesheets </strong>: CSS rules are typically defined in an external file. It is then linked to the HTML document using the link tag. This approach allows for consistent styling across multiple pages that link to the global sheet and is the preferred method for incorporating CSS.</li>
                        <li><strong>Import statement</strong>: Stylesheets for specific components can be imported after the global css file.</li>
                        <li><strong>Embedded in HTML</strong>: Embedded within a style tag in the actual HTML code.</li>
                        <li><strong>Inline</strong>: In line within an element using an attribute and value.</li>
                        <li><strong>Javascript</strong>: In regular JavaScript, by manipulating the Document Object Model (DOM).</li>
                    </ul>
                </p>
            </article>
            
            <article id="forms">
                <h3>6. Forms</h3>
                <p>Form usability is critical for ensuring a positive user experience. Here are the six major goals of accessible forms:</p>
                <ol>
                    <li><strong>Provide clear instructions:</strong> above the form and in the labels</li>
                    <li><strong>Let users know why:</strong> we are gathering the data and which fields need to be filled before submitting the form.</li>
                    <li><strong>Set first field to autofocus:</strong> So users can begin typing without using a mouse.</li>
                    <li><strong>Ensure each form can be filled with only the keyboard :</strong> So that users without a mouse or trackpad can still fill out the form. </li>
                    <li><strong>Add tab indexing to complex forms:</strong> So that it is clear in which order the fields must be filled.</li>
                    <li><strong>Ensure validation messages are screen readable:</strong> This is because HTML browser messages are not screen-readable.</li>
                </ol>
                <p>The major tags used in forms include:</p>
                <ul>
                    <li><strong>&lt;form&gt;:</strong> Has 2 important attributes. The first is action, which specifies where the resquest should go. The second is method which specifies the HTTP method to be used in the HTTP request sent when the form is submitted.</li>
                    <li><strong>&lt;input&gt;:</strong> A data-input tag. It has an attribute type="" that changes how it is displayed, how it is used, and even what other attributes can be included. In addition to having the type attribute, it is also import that it provide a name="" attribute. When the data submitted by the form is received by the server, the name attribute is how the server knows which part of the form each data item is associated with.</li>
                    <li><strong>&lt;label&gt;:</strong> Helps the user understand the purpose of their data entry</li>
                    <li><strong>&lt;textarea&gt;:</strong> Allows users to input multiple lines of text.</li>
                    <li><strong>&lt;select&gt;:</strong> Provides the user a drop-down list of choices.</li>
                    <li><strong>&lt;button&gt;:</strong> Creates a button and requires a keyboard activation, a mouse click, a voice command, or finger touch..</li>
                </ul>
                <p>Recommendations to improve usability include size and placement of labels and form controls which improves usability on large devices. Color and contrast and spacing changes also help users understand what is required. Usability is important because it helps users interact with the web app.</p>
            </article>

            <article id="express">
                <h3>7. Express</h3>
                <p>Node.js is a runtime environment that allows developers to run JavaScript on the server side. npm (Node Package Manager) is a package manager for JavaScript that enables developers to easily install and manage libraries and dependencies for their projects. Express is a web application framework for Node.js that simplifies building web applications and APIs by providing a robust set of features.</p>
                <p>These technologies improve the web development experience by allowing developers to use JavaScript throughout the entire stack, streamline application development with reusable components, and handle routing and middleware effectively.</p>
            </article>

            <article id="javaScript">
                <h3>8. JavaScript</h3>
                <p><strong>What are the main data types?</strong></p>
                <p>In JavaScript, the main data types are <strong>number</strong>, <strong>boolean </strong> (false or true), <strong>string</strong>, <strong>date</strong>, <strong>symbol</strong>, <strong>an object</strong>, and <strong>special</strong> values such as <strong>undefined</strong> and <strong>null</strong>.</p>

                <p><strong>How are objects, arrays, and JSON used?</strong></p>
                <p><strong>Objects</strong> are used to store collections of data in name-value pairs. <strong>Arrays</strong> are ordered lists of values, which can store multiple items of any data type. <strong>JSON</strong> (JavaScript Object Notation) is a format used to exchange data, typically used to send data between a server and a client as a string.</p>

                <p><strong>How are conditionals and loops used?</strong></p>
                <p><strong>Conditionals</strong> like <strong>if</strong> will execute if the provided expression evaluates to true. <strong>Else if</strong> will branch with other expressions, and lastly <strong>else</strong>, which is optional, will execute without an expression and evaluate to true if none of the other expressions with other branches evaluate to true. </p>
                <p> <strong>Switch</strong> statements are useful when there are multiple discrete values of a single expression to compare against. Switch is best for situations where a single variable or expression is compared to several specific values.</p>  
                <p><strong>Loops</strong> such as <strong>while</strong>, <strong>do while</strong>,  <strong>for</strong>, <strong>for of</strong>, and <strong>for in</strong> allow repeating a block of code multiple times.
                A <strong>while</strong> loop will keep executing as long as the expression being evaluated continues to be true. <strong>Do while</strong> loop is similar to <strong>while</strong> loop with one difference, it will execute at least once, even if the expression being evaluated is false. 
                A <strong>for</strong> loop is used to iterate over a range of values or indices and requires set up of an index variable, a condition to keep running the loop, and an increment/decrement expression to advance through the loop.
                A <strong>for of</strong> loop is used to iterate over values in an iterable like arrays, strings, maps, etc. without needing an index variable. </p>

                <p><strong>What is object-oriented programming?</strong></p>
                <p><strong>Object-oriented programming</strong> (OOP) in JavaScript is a programming principle that allows for object creation with properties and methods, and it
                supports OOP concepts like encapsulation and inheritance.</p>

                <p><strong>What is functional programming?</strong></p>
                <p><strong>Functional programming</strong> in JavaScript is a programming principle where functions are treated as first-class values. This means that they can be assigned
                to variables, passed as arguments, and returned by other functions.</p>
            </article>
            
        </div>
    )
}
export default TopicsPage;