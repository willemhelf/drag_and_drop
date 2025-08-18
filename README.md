### p5.js image drag and drop

<p>This p5.js script imports independent image files to the p5 canvas and enbables a click-and-drag drag-and-drop function for each individually rendered image.</p>
<p>While working with this, I noticed that while dragging an indepentent element over another element, the second element would begin dragging along with it. This is fixed via initializing a "toggle" boolean (see line 3) which is toggled to "true" in the pressed() function (line 88), then toggled to "false" when the mouse is released (line 98).</p>
<p>See the file called sketch.js for the entire script.</p>
