# Instructions

Fork and follow the instructions.

Most libraries are already included, but feel free to add more. You will have to justify why they have been added.
Localization isn't needed, English is fine.

Please take about 2h to play with this and try to do as much as possible.

The main goal is to implement the book a class button, with basic routing and a mock layout.
Then you can pick an additional stretch goal, if there's more time.

## MAIN GOAL - Book a class

Use the references image to write a page matching the destination of the button "book a class" in home page.

The page has to have a calendar section and a collapsable availability.
Feel free to use any mock data with 2+ entries.

## Stretch goals

1.b. Stretch goal 1 - make it responsive
Continue working on the layout based on your best guesses. Try to make the page responsive, mobile view first, then tablets.

1.c Stretch goal 2 - Start a class now
Follow this instructions https://docs.daily.co/guides/products/call-object and create a page with a 1-to-1 video chat.

Gray: #667085
Purple: #B1B2FF
Green: #56C795

Connors notes


| Day | notes |
| --- | --- |
| Nov 29 - night | Tailwind wasn't working properly, took all night to problem solve |
| Nov 30 | Styled the Navbar and Sidebar. Only hard-coded the calendar. Had to relearn React-Router-6 as it was different that v5. I've been using Next.js for quite a while. |
| Nov 31 | Added the available logic/drop down and styled the buttons, colored circles and three gray dots|
| Dec 1 | Started to add the dynamic components for the dates and time. Wasn't sure if you wanted the `new Date()` or static. For the calendar logic, I knew it wouldn't be statically coding in the future (either use the `new Date()`, a json string or a third party library. |
| Dec 2 | Thinking how to implement the calendar function if it was a JSON string or `new Date()`. I used a 2d array because I was running out of time and only one date can be highlighted. I made the calendar 2D grid array, then placed over it an 2D array of `false`. I then made a shallow copy of the `false` grid to toggle `true` onClick. The function isn't elegant, as onClick, first will rerender the entire grid to `false`, then the selected component would be true. It rerenders this function on every new onClick.
| Dec 3 | The weekly schedule also gave me some problems. Original, I for-looped the boxes, the later realized there were times with __:30. I was thinking about putting a invisible grid over the weekly schedule to accept an onClick function, but I went to the meetup and asked some people if they could think of a better solution.|
| Dec 4 | I couldn't solve the weekly schedule problem because of the __:30 increments, so I just hard-coded each week. It was terrible and I'm sure theres a better way. Getting Typescript to accept SVG's also took another few hours.|
| Summary | The weekly schedule more difficult than I realized. The second most difficult was the logic for the calendar. The Available dropmenu and components took a day. The styling only took a day. |

















