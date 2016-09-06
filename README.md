# Video Player Application
This demo app allows a user to slice up a video (included in the source) into clips

# Installing and running the app
1. Clone this repo
2. Run npm install in the main directory
3. Run webpack-dev-server in the main directory
4. Point your browser to localhost:8080

# Requirements
### Mandatory Features
- An HTML5 video player that utilizes media fragments (COMPLETED)
- A list of clips to be played in the video player (COMPLETED)
- The first item in the list should be the full video (COMPLETED)
- An interface to add new clips to the list by specifying a name, start time, and end time (COMPLETED)
- The ability to delete clips from the list (excluding the full video item​) (COMPLETED)
- The ability to edit existing clips in the list (COMPLETED)
- The ability to play clips in the video player (COMPLETED)

### Bonus (Optional)
- The ability to automatically jump to the next clip after it finishes, with a 3 second waiting period and appropriate loading animation.
- The ability to ‘save’ clips for persistent use. (COMPLETED)
- The ability to add arbitrary ‘tags’ to clips so that they can be filtered by the tag name.
- Hotkeys to jump between the current clip and next and previous clips (if there are any) (COMPLETED)
- Markers on the video player timeline that denote where a clip starts (full video only).
- Clicking the marker chooses that clip and plays it from that point.
- The ability to reuse the the player and playlist on another page without the editing capabilities

### Acknowledged shortcuts and hacks
- I've used the state of the outermost App React component as the source of truth for this demo (instead of wiring everything up to a redux store), for the sake of transparency and simplicity. Had I managed state via a redux store, it would have factored heavily into the implementation of the last bonus requirement.
- I also use the browser's localStorage object in order to persist clips from session to session, instead of wiring it up to a server and dealing with user auth and recognition
- As such, I didn't build a way for a user to clear their browser's persisted clip data, as it seemed to be of trivial importance for the main purpose of the demo
- The app doesn't provide any error messages on validating new or updated clips - again, since this feature wasn't mentioned in the requirements I judged it to be of secondary importance
- In the interest of time I skipped the first, third, fifth and sixth bonus requirements, but I have pretty solid ideas of how I would implement them; please feel free to get in touch with me for any explanations.
