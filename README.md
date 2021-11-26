# Quiz game
Simple [quiz game](https://gifted-wescoff-55dd75.netlify.app/) created with [Bootstrap 5.1](https://getbootstrap.com/) and vanilla JavaScript

## Table of contents
* [Assignment requirements](#assignment-requirements)
* [Implementation requirements](#implementation-requirements)
* [Flow](#flow)
* [Rewritten specs](#rewritten-specs)
* [Code skeleton](code-skeleton)
* [Room for improvement](#room-for-improvement)

## Assignment requirements
##### HTML
- responsive design with 3 breakpoints
- semantic HTML
##### CSS
- flexbox, CSS grid (or Bootstrap)
##### JS
- all data should be contained in script file
#### TODOs
- [x] store code in git repo
- [x] publish code on Netlify

## Implementation requrirements
#### Structures
- create 'students' array of objects
    - each object has properties: 'name' and 'image'
        - 'name' is a string with the student name
        - 'image' is a URL to the image resource representing a photo of the student
    - array should be scalable, ie.:
        - no fixed length
        - arbitrary amount of objects can be added/removed from array
- contain in another structure or set of structures:
    - all options of possible names to guess for the displayed image
    - correct option corresponding to the displayed picture
#### Function/concepts
- use the array.map(); method
- use the array.filter(); method

## Flow
- For each student, present an image of the student
    - for each image, show 4 options of student names:
        - show 1 option (radio button) which is correct (corresponds to the image)
            - placement of the correct answer should be randomized 
        - show 3 options (radio buttons) which are incorrect
            - randomly selected from 'students' array of objects
            - the same name may only appear once per image
            - placement of options should be randomized, ie. subsequent runs should not generate identical placements of student names
- Once guesses have been made for each picture
    - verify: all selections have been made
        - if not then show alert and do not proceed
    - show results of "correct guesses" out of total "possible guesses"
    - save results of current run and compare to previous run, print out a message corresponding to whether you did:
        - better :slightly_smiling_face:
        - worse :slightly_frowning_face:
        - the same this run :neutral_face:

## Rewritten specs
My opinions on the implementation (where requirements haven't been specified):

- Flow:
    - During input phase
        - all images and options should be presented on the same page
    - Displaying results
        - auto-scroll to top :arrow_up:
        - results should be inserted into top of page
            - correct option boxes (radio buttons) are highlighted green :green_circle:
            - incorrect option boxes (radio buttons) are highlighted red :red_circle:

## Code skeleton
To be done.

## Room for improvement
- [ ] take gender into consideration when generating options
- [x] disable submit button on click
- [ ] add media query for mobile in landscape mode (show image on left half and options on right half)
- [ ] let user pick difficulty (number of questions/options)