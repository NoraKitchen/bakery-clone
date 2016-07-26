#Bakery-Clone

This site was created shortly after I graduated the BoiseCodeWorks Immersive Full Stack program. It primarily utilizes HTML, CSS, and Bootstrap (with a small amount of jQuery and JavaScript for a couple small features).

The source image I am cloning from can be found here: https://github.com/NoraKitchen/bakery-clone/blob/gh-pages/source_image/bakepage.jpg

###Goal

During my bootcamp experience, I focused a lot more on the functionality of my sites rather than aesthetics. Though I have some experience with usability, I'm not skilled at the visual-appeal side of user experience design. Intentions to make my sites responsive often fell by the wayside as well.

This left me at the end of my program with a lot of questionably responsive, visually half-baked sites and a lot of internally repeated excuses to the effect of “I don't suck at CSS or Bootstrap—I just suck at visual design!” 

In making this site, I wanted to get out of my comfort zone and...

1. Focus purely on visuals (and my HTML/CSS/Bootstrap skills) rather than functionality
2. Clone/use someone else's design to divorce the result from my iffy visual design skills
3. Get better acquainted with the tools of responsive design, and make the site fully responsive

##Process highlights

Working with CSS and Bootstrap has always been a little frustrating for me. Often they behave in ways I don't expect, and I feel at a loss when trying to figure out why. This project has been really great for demystifying Bootstrap in particular, as I dove deeper into what exact styles it was applying to my elements and ways I might get around those things when necessary.

###My new best friend, the computed styles tab

Don't laugh. Before this, I'd basically never utilized the HTML/CSS side of my browser dev tools. I'd used them to debug my JavaScript for sure, but somehow, it never occurred to me there might be a way to rectify my misbehaving styles other than banging my face repeatedly onto a hard surface and staring at the screen till brain and corneal damage resolved the view into something vaguely more like what I intended.

By far my most beloved discovery during this project was the dev tools computed styles tab. This tab allows you to see the actual styles at play for a given element and where those styles came from. Was the extra space around an element related to margin, padding, alignment? Was it from a neighbor or parent element? Was it from my custom styles or something from Bootstrap?

Checking out my computed styles didn't always illuminate exactly where a problem was coming from, but it frequently allowed me to rule out some potential factors. And that was enough to send me in the right direction toward solving an issue, and with a lot less frustration than in previous projects, where I had little hint of where to start looking.

###Making it mobile

Previous to this project, I'd made some attempts at using Bootstrap responsive utilities, namely its classes to hide or show certain elements on certain screen sizes. However, I found the utilities rather limiting What was I supposed to do if I didn't want to remove an element, but change how it looked? Making two different elements to hide/show at different times would work, but I was sure there must be a better way, even if I never stopped to figure out what it was.

Finally, it was time to learn about media queries. And I was surprised how easy they were to use once I actually looked into them. Media queries allow CSS styles to be toggled depending on the type of device or view the page is being displayed on. If you want an image to go from small and left-aligned on desktop to big and centered on mobile, media queries have you covered. 

I did have a fair amount of hiccups testing my site on other devices, since it tended to behave differently on my dev tool mobile view than on my actual mobile phone. Not owning a tablet to test on, the true tablet version of the site remains a mystery to me. I was also unclear how screen pixel width varied or broke down between devices.

I did not want to invest the time to learn more about the wonderful world of mobile screen widths during this particular project, but I will definitely be looking into this before making another mobile site, because I feel like I did some pretty quirky things with screen widths here that might not have been necessary.