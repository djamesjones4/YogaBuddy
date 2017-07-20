# Some design consideration.

#### Maybe still images are not the correct format for such a fluid movement

- Example: A client has a problem with a pose but the root of the problem could possibly be the transition into the pose from their previous pose.


#### Possible solutions.
- A series of captured images
  - (_?Snapshots?_) What ever its called adjustable by time between photo)
- this could be turned into a `.gif`
- Users can seamlessly view multiple `.gifs`

##### ADVANTAGE of `.gif` vs Video:
  - Videos are large files
  - We would have to offload the upload process (Youtube)
    - This creates an extra barrier between users adding content to our site
  - Videos you have to click play/ watch it over and try and pick
  - Having multiple videos play on a forum / feed page is more than annoying.

##### DISADVANTAGE of `.gif` Video:
  - Extra development hurdle for us to overcome (gotta learn & build)
  - Can't Pause (_I think_ See below for a possible solution on this)
  - Users will have to upload each photo / a video to convert.
    - Could get tedious / take forever (upload converter might be a bit much for us as developers ATM)



##### Implementation:
- Have a standardized(recommended) distance and angle set up for Clients to follow.
_(this allows an easier )_
  Example:
  - hip level 3 - 4'(ft) away)
  - Pose A => Transition => Pose B (problem pose) Recommend time settings for snap shots
Client sets their camera to snapshot mode with recommended settings (determined by length of transition from previous pose to pose they are having trouble with)


- If we built a little `.gif` creator we could add a pause feature and have the frames number)
