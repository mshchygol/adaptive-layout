## Project setup
  First of all you need to clone this repository:
  
   `git clone https://github.com/mshchygol/adaptive-layout.git`
   
   Don't forget to change directory:
   
   `cd adaptive-layout`
   
   Install all of the packadges:
   
  `npm install`
  
####  Then run 
  <ul>
    <li>
      <code>gulp build</code> to launch project deployment tasks
    </li>
    <li>
       <code>gulp</code> for development enviorment (with <i>watch</i> task, be careful when you are<br>
        adding new iamges and fonts, <i>default</i> task don't include images compression and fonts bundle)
    </li>
  </ul>
  
  All production files will be able at _dist_ directory.
  
  <p style="border-bottom: 1px dashed black;width: 700px;">P.S. Project deployment is still in progress.</p>
  </hr>
  My todo list:
    <ul>
      <li style="text-decoration: line-through;">
         replace <i>gulp-simplefont64</i> plugin
      </li>
      <li>
         refactor <i>sass</i> files (add <code>_variables.scss</code>, add shorthand properties etc.)
      </li>
      <li>
         add <i>postCSS</i> and <i>autoprefixer</i> for cross-browser compatibility
      </li>
      <li>
         add expandble menu list
      </li>
      <li>
         create custom modules for JS
      </li>
      <li>
        setup gitHub page for preview
      </li>
    </ul>
  
  
  ## License
  
  General public license
  
  [MIT License](https://github.com/mshchygol/adaptive-layout/blob/master/README.md)
 