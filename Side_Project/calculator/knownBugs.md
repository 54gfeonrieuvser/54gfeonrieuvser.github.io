There are some unexpected bugs within this calculator project, which is due to implement backward as a bonus feature.
I'd solve those bugs if there is a must-do, but for now as a showcase of my learning css and js record, just leave it unsolved.

ver1.:
.1 by tracking the lecture code, its width of the button(set by flex-basis) was of some weird numbers 24.7%, 49.5 , so it would be some unnatural performances from horizontal aspects, and would cause no borders between if you zoom-in(not Rwd based)
.2the implement of computing process in js code is pre-executed(預處理), the final total is computed by every step(which can be seen in built in console), and backward could just delete last number you pressed, but wouldn't delete last operation. Like pressing: 13+25(backwards) should be 13+2=15, but it is 38.

ver2. :
.1 the border issues should be fixed in this version.
.2 the DOM selecting is not ideal, which is one-on-one in 16 different boxes, not clean at all
.3 still not implement backward completely, probably require rebuliding the whole program flows. 