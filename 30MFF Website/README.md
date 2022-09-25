# 30MFF Website - _Moving Forward_

![homepage](https://user-images.githubusercontent.com/98512628/192147912-824ab73a-44b6-4333-a3c9-fb05ce0c9bc9.png)

### Project Description:

This project is a webpage created to house and debut my group's 30 Minute Film Festival film, titled *Moving Forward*. As this film is part of a hypothetical "film festival" where you want people to watch your film, I wanted to brand this project as lighthearted and welcoming, but also professional and worthwile. The title of my project is the same as of the film. Our short film has a certain "driving" element to it and I wanted to carry this momentum into the flow of my webpage.

As a result, I told the "story" of the film through the use of interactive links that move you "forward" and sequenced a logical progression that the user takes through the webpage. What is most important is the film, which is why it takes up the honme page, and second most important is promoting the people who made the film. The next on the level of importance is what the creators intended to do with the film and how they achieved it, but of course the audience is free to interpret the film which is why the section is not as important. Finally, the last page contains more details about the film for those who are interested. I made the final page the most interactive as I am assuming most users are starting to lose interest by the time they get to this page, whereby incorporating interactivity creates newfound interest.

Furthermore, I also had to keep in mind the stylistic elements of the webpage. I chose the orange annd blue colour scheme for my webpage as it is a colour combination often used in films since they provide a dynamic contrast and simulate the opposite spectrums of colour temperature in light (warm is orange tones and cool is blue tones). In fact, the orange and blue color palettes are commonly used for representations of play and summer fun, depicting both the hot, summer sun and the cool, refreshing water, thus emphasizing the playful nature of the film and its soundtrack.

The bios for the actors are quite rudimentary but it is good to provide a "face" behind the film. Plus, the behind the scenes photos of the filming locations give a sense of life outside the film's world which gives the webpage more personality.

### Process:

First step in implementing the concept was creating a basic wireframe. I decided on 4 separate pages for my website to organise the bits of information I wanted the user to read/watch and to keep it minimal so as to not overwhelm them, as well as keep the emphasis on the film itsef.

**Basic Wireframe:**

![pg1](https://user-images.githubusercontent.com/98512628/192146591-19fa4f36-fde5-4641-934c-d8e82af71952.png)

The first page is the home page and I wanted it to be solely on the film itself because this is a website advertising a film after all, visitors open the website with the purpose of watching the film. I also planned to have the logo be a link to the home page, which means two items can be interacted with on the navbar to take the user to the film.

![pg2](https://user-images.githubusercontent.com/98512628/192146622-bb652e58-ce07-405e-8b0c-5440dcab437f.png)

The next page will likely be the most dense as it contains text and images on the three people who created the film. This page is important as it gives a human element to the film, reminding the user that real people made this.

![pg3](https://user-images.githubusercontent.com/98512628/192146650-a302b3a3-9e87-4b41-a435-e1b68fb2b3ff.png)

The third page is next as it outlines why the film was made and what we did to enahnce the cinematic experience, hopefully this can make the user appreciate the film greater.

![pg4](https://user-images.githubusercontent.com/98512628/192146682-49a88f4a-e284-4272-b468-1dbe4773543d.png)

The final page is for more information on the film, though not essential. Such as pictures of behind the scenes (which will be made into a carousel/slideshow) and the more technical details.

Then, the next - and much longer - step was implementing the wireframe into code, and I chose to use Visual Studio Code software. I have no previous experience in web development (html and css) so this was all new and challenging to me.

* For HTML I had to make 4 separate documents for each page of the webpage. Every page incorporated a navigation bar, a button that takes the user back to the top of the page, and a footer with the NYUAD logo, while the rest of a page's contents were catered to its specific purpose. In addition, every page has a link that refers to certain sections of the page to tailor towards more specific navigation. The home page loads the local video with controls so the user can freely pause and play it. The about us page is divided into many lists and divs with classes so it can be easily organized later. The statement page is mostly text. The details page mainly includes the code for the image carousel, this was taken from w3schools.com (https://www.w3schools.com/howto/howto_js_slideshow.asp) and sections were replaced with the relevent code and images pertaining my project.
* For CSS it was one document for the style loaded into each html file. The first part is formmating the "starting section" for each page which includes the inner links to the split up sections. This takes up the entire screen. Another important css element is the navbar which formats the links to separate pages. Both of these feature are enhanced by the hovering fucntion where background and/or text colour changes. Other elements like the techniques list is simply sorted into flexbox containers that look nice and organized. Most items included a white border to create an aesthetic white space that separates everything cleanly.
* For Javascript it was one document for the script loaded into each html file. Apart from the image carousel javascript code taken from w3schools, the file also includes code for the mouse interaction which changes colour of text and background along the grayscale spectrum according to mouse y-coordinates, whereby the basis of the code was taken from the HelloJS example. Plus, there is code for smooth scrolling which makes the in-page links to different sections flow naturally instead of instantly taking the user there (also from w3schools https://www.w3schools.com/howto/howto_css_smooth_scroll.asp).

### Reflection/Evaluation:

