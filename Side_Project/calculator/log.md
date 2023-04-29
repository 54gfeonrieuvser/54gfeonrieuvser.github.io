<h1>Version log for Calculator</h2>

<h2>ver1</h2> 

[demo here](54gfeonrieuvser.github.io/Side_Project/calculator/ver1(2020)/)
1. By tracking the lecture code, width of the button(set by flex-basis) was set to some weird numbers 24.7%, 49.5 , so it would cause some unnatural performances and no borders between if zoom-in(not Rwd based).
2. the implement of computing process is wrote in  pre-executed process, the final total is computed by every step. backward could just delete last number you pressed, but wouldn't delete last operation. Like pressing: 13+25$backwards= should be 13+2=15, but it is 38.

<h2>ver2</h2> 

[demo here](54gfeonrieuvser.github.io/Side_Project/calculator/ver2(2023)/)
1. the border issues had been fixed in this version. 
2. the DOM selecting is not ideal, in 16 different lines, not clean at all 
3. still not implement backward completely, probably require rebuliding the whole program flows.