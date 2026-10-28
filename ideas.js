// Milo Motion Idea Bank data. Edit ideas here; the pages read this file.
var IDEAS = [
// ---------------- CAROUSELS ----------------
{id:"c01",f:"Carousel",p:"Proof",who:"claude",t:"10 frames from Éanna's season so far",hook:"10 frames from a Super League season.",src:"Eanna 2026:27/Edited Photos · Lightroom/Eanna Photoshoot 2026",how:"Best graded stills, one per slide, small caption naming the moment. Last slide: who it's for and the link.",ok:true},
{id:"c02",hold:true,f:"Carousel",p:"Craft",who:"claude",t:"Stills from Saleen, my short film",hook:"I made a short film. Here are 10 frames from it.",src:"Saleen/Graded Stills (19)",how:"Full-bleed graded stills, film-slate style captions (scene, lens, light). Ends with where to watch.",ok:false},
{id:"c03",hold:true,f:"Carousel",p:"Craft",who:"claude",t:"Saleen: ungraded vs graded, frame by frame",hook:"Same frame. Before and after the grade.",src:"Saleen/Trailer Drafts (No Grade) + Highest Quality",how:"Claude grabs matching frames from the No Grade and graded trailer, pairs them on each slide.",ok:false},
{id:"c04",f:"Carousel",p:"Craft",who:"claude",t:"Flat to finished: 5 grades from real shoots",hook:"Straight off the camera vs. what the client got.",src:"S Log Stills · website grade clips (Éanna, Davey, dog)",how:"Split-frame slides, LOG and GRADED chips like the website. Caption CTA: comment GRADE.",ok:false},
{id:"c05",f:"Carousel",p:"Proof",who:"claude",t:"Thumbnails I've designed for Daniel Davey",hook:"9 thumbnails, 9 different ideas, one consistent look.",src:"Daniel Davey/Stills (448)",how:"3x3 grid on slide 1, then single thumbnails with one line on why each works.",ok:true},
{id:"c06",f:"Carousel",p:"Craft",who:"claude",t:"Raw frame vs finished thumbnail",hook:"From paused frame to thumbnail in 4 steps.",src:"Daniel Davey/Stills + raw video frames",how:"Step slides: raw frame, crop, grade, text. Shows your design eye, not just filming.",ok:true},
{id:"c07",f:"Carousel",p:"Proof",who:"both",t:"Éanna case study: 2.5M views in six months",hook:"2.5M views for an Irish basketball club. Here's what we posted.",src:"Eanna/Highlights · Game Day Videos · 30 Seconds",how:"Brief, what we posted (matchday, features, trends), best frames, the result, a CTA. You confirm the numbers.",ok:true},
{id:"c08",f:"Carousel",p:"Proof",who:"both",t:"Daily content for a performance nutritionist: what I learned",hook:"I've made content for Daniel Davey every day. What I learned.",src:"Daniel Davey/Videos · Stills · Numbers",how:"6 lessons, each on a thumbnail background. You confirm the video count before posting.",ok:true},
{id:"c09",f:"Carousel",p:"Proof",who:"claude",t:"How District 22's launch teaser hit 15k views",hook:"How we teased a clothing launch on Dublin streets.",src:"Website Short Clips/District · the May BTS carousel",how:"Teaser frames, the 3-post countdown, the result (15,133 views on the collab).",ok:true},
{id:"c10",f:"Carousel",p:"Tips",who:"both",t:"What's in my bag for a Super League game",hook:"Everything I bring to film a Super League game.",src:"Website kit list (FX3, 24-70, 70-180, lavs, lights)",how:"One item per slide with what it's for. Claude designs it; a quick photo of your bag makes it better.",ok:false},
{id:"c11",f:"Carousel",p:"Tips",who:"both",t:"My settings for dark sports halls",hook:"Sports halls are dark. Here's how I set the FX3.",src:"Your real settings (you confirm)",how:"Frame rate, shutter, ISO, S-Log3, white balance, each with a frame from Éanna.",ok:false},
{id:"c12",f:"Carousel",p:"Tips",who:"claude",t:"5 shots every club should get on game day",hook:"5 shots every club should post on game day.",src:"Eanna game day frames · Full Walkout",how:"Arrival, warm-up detail, walk-out, crowd reaction, final whistle. One frame each.",ok:false},
{id:"c13",f:"Carousel",p:"BTS",who:"both",t:"Anatomy of a matchday, 4pm to midnight",hook:"A Super League matchday, from my side of the camera.",src:"Game day footage stills · your timings",how:"Timeline slides with times. You give Claude the rough times once.",ok:false},
{id:"c14",f:"Carousel",p:"Craft",who:"claude",t:"Same frame, three grades. Which one?",hook:"Pick one: warm, clean or moody?",src:"Any graded still",how:"Claude makes 3 looks of one frame. Ask people to comment 1, 2 or 3. Easy comments.",ok:false},
{id:"c15",f:"Carousel",p:"Proof",who:"claude",t:"Player cards from the Éanna photoshoot",hook:"We shot the whole squad. Here's how the cards came out.",src:"Lightroom/Eanna 2026 Photoshoot w:o bg",how:"Cut-out players on the club's colours as matchday-style cards.",ok:true},
{id:"c16",f:"Carousel",p:"Craft",who:"claude",t:"The graphics behind a matchday",hook:"Everything on screen at an Éanna game, I built.",src:"Watch Party stingers · Lower Third · Stats Overlay · Keys to the Game",how:"One graphic per slide with what it's for.",ok:true},
{id:"c17",f:"Carousel",p:"Craft",who:"both",t:"I built a live stats overlay for our stream",hook:"Our stream needed live stats, so I built them.",src:"Eanna/Stats Overlay",how:"Screenshots and a short how-it-works. You add one line on why.",ok:true},
{id:"c18",f:"Carousel",p:"Tips",who:"both",t:"How I plan a club's season of content",hook:"How I plan a whole season of content for a club.",src:"Éanna Media Calendar screenshots",how:"Calendar view, task flow, approvals, then the result. Blur anything private.",ok:true},
{id:"c19",f:"Carousel",p:"Tips",who:"claude",t:"How clubs can give sponsors real value with video",hook:"Your sponsors want more than a logo on a jersey.",src:"Ideas from your Éanna and 3x3 sponsor pitches (no prices)",how:"5 sponsor-friendly content ideas. General, nothing confidential from the decks.",ok:false},
{id:"c20",f:"Carousel",p:"Proof",who:"both",t:"Ep 3 with Niall Scully: 5 lines that stuck",hook:"5 things Niall Scully said on the podcast.",src:"Daniel Davey/Podcasts/New Pod Snippets · Transcripts",how:"Quote slides over podcast frames. Post as a collab with Daniel only.",ok:true},
{id:"c21",f:"Carousel",p:"BTS",who:"both",t:"From idea to post: one Daniel Davey video",hook:"One 40-second video. Here's everything behind it.",src:"Davey script/transcript · BTS Photos · final stills",how:"Idea, script, setup, shoot, edit, thumbnail, scheduled. You pick the video.",ok:true},
{id:"c22",f:"Carousel",p:"Story",who:"both",t:"Freelancing in Ireland: what I wish I knew",hook:"Things nobody told me about freelancing in Ireland.",src:"Your year so far",how:"Registering, pricing, deposits, saying no, kit. Claude drafts, you tweak in your words.",ok:false},
{id:"c23",f:"Carousel",p:"Proof",who:"claude",t:"What €150 gets your club on game day",hook:"What a €150 matchday package actually looks like.",src:"Pricing page · Éanna clips",how:"3 clips, delivery in 24 hours, examples of each. Ends with the booking link.",ok:false},
{id:"c24",f:"Carousel",p:"Craft",who:"claude",t:"Frames from Morocco",hook:"Morocco from above.",src:"Videography/Morocco (DJI drone)",how:"Graded drone stills. Shows you're more than sport.",ok:false},
{id:"c25",f:"Carousel",p:"Story",who:"both",t:"Film graduate to club content manager in 12 months",hook:"A year ago I finished film school. Since then:",src:"Your timeline: Trinity, Saleen, 3x3, Davey, Éanna",how:"Timeline slides with a frame from each stage.",ok:false},
{id:"c26",f:"Carousel",p:"Tips",who:"claude",t:"Why your club's highlights look flat",hook:"Why your club's highlights look flat (and the fix).",src:"Phone-style frame vs your graded frame",how:"Light, shutter, angle, grade, sound. One fix per slide.",ok:false},
{id:"c27",f:"Carousel",p:"Craft",who:"claude",t:"Interview setup, drawn out",hook:"Two lights and a lav. My interview setup.",src:"Eanna 2026:27/Interviews stills",how:"Top-down diagram slide plus the finished frame.",ok:false},
{id:"c28",f:"Carousel",p:"Craft",who:"claude",t:"The walk-out: mock-up vs final",hook:"Mock-up vs what went on the big screen.",src:"Eanna 2026:27/Full Walkout (mock 1, mock 2)",how:"Side-by-side frames showing how the idea developed.",ok:true},
{id:"c29",f:"Carousel",p:"Story",who:"both",t:"Mistakes from my first year filming sport",hook:"5 mistakes from my first year filming sport.",src:"Your experience",how:"Honest list. People save and share these.",ok:false},
{id:"c30",f:"Carousel",p:"Tips",who:"claude",t:"How to brief a videographer",hook:"Hiring a videographer? Send them this first.",src:"Your enquiry form questions",how:"Goal, audience, where it's posted, deadline, budget. Aimed at clubs and brands.",ok:false},
{id:"c31",f:"Carousel",p:"Tips",who:"claude",t:"Game day posting checklist for clubs",hook:"What your club should post on game day, hour by hour.",src:"Your matchday packages",how:"Pre-game, half time, full time, next day. Saveable checklist.",ok:false},
{id:"c32",f:"Carousel",p:"Craft",who:"both",t:"My DaVinci Resolve workflow",hook:"How I edit a matchday video in DaVinci Resolve.",src:"Screenshots of your timeline and Color page",how:"You take 5 screenshots; Claude lays them out with notes.",ok:false},
{id:"c33",f:"Carousel",p:"Proof",who:"both",t:"Brand deals on an athlete's account",hook:"What a sponsored post looks like when it's done right.",src:"Davey sponsored work (Glenilen, Kinetica, Irish Life)",how:"Frames plus what made each one work. Ask Daniel first.",ok:true},
{id:"c34",f:"Carousel",p:"BTS",who:"both",t:"Behind the Éanna 2026 photoshoot",hook:"How we shot a whole squad in one evening.",src:"Lightroom/Eanna Photoshoot · BTS phone pics",how:"Setup, lighting, finished shots.",ok:true},
{id:"c35",hold:true,f:"Carousel",p:"Craft",who:"claude",t:"Saleen poster drafts",hook:"Every poster draft for my short film.",src:"Saleen/Posters",how:"Draft 1 to final, what changed each time.",ok:false},
{id:"c36",f:"Carousel",p:"Proof",who:"claude",t:"30 Seconds With: the player series",hook:"30 seconds with every player. Here's the series.",src:"Eanna/30 Seconds",how:"Frame per player, link to the reels. Collab with the club.",ok:true},
{id:"c37",f:"Carousel",p:"Craft",who:"claude",t:"Which shot would you post?",hook:"A or B?",src:"Pairs of similar frames",how:"Engagement post. Reveal your pick in the caption.",ok:false},
{id:"c38",f:"Carousel",p:"Proof",who:"claude",t:"New website tour",hook:"I built a new website. Here's what's on it.",src:"milomotionimages site screenshots",how:"Hero slider, matchday film, clip viewer, booking. Ends with the link.",ok:false},
{id:"c39",f:"Carousel",p:"Proof",who:"both",t:"Best lines from pre-game interviews",hook:"What Éanna players say before tip-off.",src:"Eanna 2026:27/Interviews",how:"Claude transcribes, picks lines, puts them over frames. Club approves.",ok:true},
{id:"c40",f:"Carousel",p:"Tips",who:"claude",t:"Phone vs camera: when each wins",hook:"I shoot on a phone too. Here's when.",src:"Your mixed camera and phone work",how:"Situations where each is right. Builds trust with small clubs.",ok:false},
{id:"c41",f:"Carousel",p:"Tips",who:"claude",t:"Content ideas for a club's off-season",hook:"Off-season? 8 things your club can still post.",src:"Jersey Hoops camps · S&C programme video",how:"Training, S&C, signings, behind the scenes.",ok:false},
{id:"c42",f:"Carousel",p:"Proof",who:"claude",t:"The S&C programme video: how it was made",hook:"How we filmed a youth strength programme.",src:"Éanna S&C collab (7.4k views) · BTS clip",how:"Setup, shots, result. Tag the coaches.",ok:true},
{id:"c43",f:"Carousel",p:"Tips",who:"claude",t:"Sound design matters more than you think",hook:"Turn your sound on for this one.",src:"Any clip with and without SFX",how:"Pairs with reel r09.",ok:false},
{id:"c44",f:"Carousel",p:"Story",who:"both",t:"Why I film sport",hook:"Why I film sport.",src:"Your best frames",how:"Short personal text over 6 frames. Great first-week post.",ok:false},
// ---------------- REELS ----------------
{id:"r01",f:"Reel",p:"Craft",who:"claude",t:"Flat to graded wipe: Éanna interview",hook:"Straight off the camera vs. the final grade.",src:"Website grade clip: grade-eanna",how:"Wipe from log to graded with a whoosh. 8–10s.",ok:false},
{id:"r02",f:"Reel",p:"Craft",who:"claude",t:"Flat to graded: Daniel outdoors",hook:"What the camera saw. What the client got.",src:"grade-davey",how:"Same as r01. Caption: comment GRADE.",ok:true},
{id:"r03",hold:true,f:"Reel",p:"Craft",who:"claude",t:"Saleen trailer: no grade vs graded, split screen",hook:"My short film, before and after colour.",src:"Saleen/Trailer Drafts (No Grade) + graded",how:"Vertical split, slider moving across.",ok:false},
{id:"r04",f:"Reel",p:"Proof",who:"claude",t:"The Frame: best 10s of the matchday film",hook:"Super League. Rathfarnham. 8pm.",src:"Downloads · new matchday film",how:"One moment, slow-mo, sound design. Collab with Éanna.",ok:true},
{id:"r05",f:"Reel",p:"Proof",who:"claude",t:"Jay's dunk, slowed right down",hook:"Watch his hand on the rim.",src:"Eanna/Highlights/Jay dunks.mov",how:"Speed ramp into slow-mo, crowd sound up.",ok:true},
{id:"r06",f:"Reel",p:"Proof",who:"claude",t:"Game day recuts: one moment each",hook:"\"Don't let him shoot.\"",src:"Eanna/Game Day Videos (I wanna fly, Go Crazy…)",how:"Re-cut each into an 8s single moment. Several posts from one folder.",ok:true},
{id:"r07",f:"Reel",p:"Craft",who:"claude",t:"Every Davey thumbnail in 15 seconds",hook:"Every thumbnail I made this year. 15 seconds.",src:"Daniel Davey/Stills",how:"Fast flick-through on the beat. Satisfying, very rewatchable.",ok:true},
{id:"r08",f:"Reel",p:"Craft",who:"claude",t:"Stingers and graphics showcase",hook:"The graphics I made for an Irish basketball club.",src:"Watch Party stingers · Lower Third · Keys to the Game",how:"Montage of your motion graphics with SFX.",ok:true},
{id:"r09",f:"Reel",p:"Craft",who:"claude",t:"Sound off vs sound on",hook:"Same clip. Now turn the sound on.",src:"Any game clip",how:"First half silent, second half with your sound design.",ok:false},
{id:"r10",f:"Reel",p:"Craft",who:"claude",t:"Same clip, three edits",hook:"Hype, cinematic or clean?",src:"One Éanna clip",how:"Claude makes 3 versions back to back. Ask which one.",ok:false},
{id:"r11",f:"Reel",p:"Craft",who:"claude",t:"Raw footage vs final edit",hook:"What 40 minutes of footage turns into.",src:"Unedited Footage → finished video",how:"Fast scroll of raw clips, then the finished 20s.",ok:false},
{id:"r12",f:"Reel",p:"BTS",who:"claude",t:"Podcast setup reveal",hook:"Three cameras, two mics, one kitchen table.",src:"Davey/Podcasts footage",how:"Cut between the angles, label each camera.",ok:true},
{id:"r13",f:"Reel",p:"Craft",who:"claude",t:"Morocco drone in 10 seconds",hook:"Morocco from 100 metres up.",src:"Videography/Morocco",how:"Graded drone shots on a beat.",ok:false},
{id:"r14",f:"Reel",p:"Proof",who:"claude",t:"A season in 30 seconds",hook:"Éanna's season in 30 seconds.",src:"Eanna/Game Day Videos · Highlights",how:"Montage of the best moments. Collab with the club.",ok:true},
{id:"r15",hold:true,f:"Reel",p:"Craft",who:"claude",t:"Saleen trailer, vertical cut",hook:"I made a short film in Dublin.",src:"Saleen/Trailer Drafts/Highest Quality",how:"Vertical reframe of the trailer.",ok:false},
{id:"r16",f:"Reel",p:"Craft",who:"claude",t:"Colour test: chopping fruit",hook:"I tested 3 grades on a bowl of fruit.",src:"Davey/Unfinished Videos/Chopping your fruits colour test",how:"Quick comparison, very shareable with editors.",ok:true},
{id:"r17",f:"Reel",p:"Craft",who:"claude",t:"Speed ramp breakdown",hook:"How this speed ramp works.",src:"Any game clip with a ramp",how:"Show the graph, then the result. Short tutorial, gets saves.",ok:false},
{id:"r18",f:"Reel",p:"Craft",who:"claude",t:"My caption style, before and after",hook:"Plain clip vs the version that got watched.",src:"A Davey video with and without captions",how:"Shows your animated captions and punch-ins.",ok:true},
{id:"r19",f:"Reel",p:"Proof",who:"claude",t:"Men's 3x3 best moment, re-graded",hook:"The best play of the 3x3 summer.",src:"Men's 3x3 footage (your top posts)",how:"New grade and sound on your 7.9k-view moment.",ok:false},
{id:"r20",f:"Reel",p:"BTS",who:"both",t:"How I shot it: Daniel's kitchen video",hook:"One light, one lav, one kitchen.",src:"Davey BTS Photos + final video",how:"Claude cuts it; you record a 15s voiceover on your phone.",ok:true},
{id:"r21",f:"Reel",p:"BTS",who:"both",t:"How I shot it: District 22 on the streets",hook:"Filming a clothing drop on Dublin streets.",src:"District BTS + teaser",how:"BTS then final. Optional voiceover.",ok:true},
{id:"r22",f:"Reel",p:"BTS",who:"you",t:"Game day POV",hook:"POV: you're the content manager for a Super League club.",src:"Phone footage at the next home game",how:"Arrive, set up, shoot, edit, post. Hands and voice only.",ok:false},
{id:"r23",f:"Reel",p:"BTS",who:"you",t:"Editing timelapse",hook:"6 hours of editing in 15 seconds.",src:"Screen recording of a Resolve session",how:"Record your screen while you edit, speed it up.",ok:false},
{id:"r24",f:"Reel",p:"Tips",who:"you",t:"3 shots every club needs (talking)",hook:"3 shots every club should get on game day.",src:"20s to camera + Éanna frames",how:"Ladder step 5. Claude writes the script and cuts the pauses.",ok:false},
{id:"r25",f:"Reel",p:"Story",who:"both",t:"Text reel: POV you hire me",hook:"POV: you hire a videographer who also does the graphics.",src:"Your clips + graphics",how:"Kinetic text over a montage. Light and funny.",ok:false},
{id:"r26",f:"Reel",p:"Proof",who:"claude",t:"30 Seconds With: a re-edit",hook:"30 seconds with an Éanna player.",src:"Eanna/30 Seconds",how:"Fresh vertical cut of one episode. Collab.",ok:true},
{id:"r27",f:"Reel",p:"Craft",who:"claude",t:"Walk-out: mock-up to big screen",hook:"From mock-up to the big screen.",src:"Full Walkout mock 1 + mock 2",how:"Split or sequence of the versions.",ok:true},
{id:"r28",f:"Reel",p:"Proof",who:"claude",t:"Ireland AM BTS, part 2",hook:"When national TV came to the club.",src:"Spare footage from that day",how:"Follow-up to your best-performing post.",ok:true},
{id:"r29",f:"Reel",p:"Craft",who:"claude",t:"Stats overlay in action",hook:"Live stats on a club stream, built from scratch.",src:"Screen recording of the overlay",how:"Short demo with a couple of call-outs.",ok:true},
{id:"r30",f:"Reel",p:"Craft",who:"claude",t:"Lens test: 24-70 vs 70-180 courtside",hook:"Same play, two lenses.",src:"Game footage on both lenses",how:"Side by side, what each is good for.",ok:false},
// ---------------- STORIES ----------------
{id:"s01",f:"Story",p:"Craft",who:"claude",t:"Poll: which grade?",hook:"Warm or cold?",src:"Any still, two grades",how:"Poll sticker. 2 minutes to make.",ok:false},
{id:"s02",f:"Story",p:"BTS",who:"you",t:"Setup shot at every shoot",hook:"Today's office.",src:"Phone, at the shoot",how:"One photo of the setup, location tag.",ok:false},
{id:"s03",f:"Story",p:"Proof",who:"claude",t:"Re-share every collab",hook:"Out now on @client.",src:"Collab posts",how:"Share each collab to your story the day it goes up.",ok:false},
{id:"s04",f:"Story",p:"Proof",who:"claude",t:"Booking now for November",hook:"2 matchday slots left in November.",src:"Your calendar",how:"Only when it's true. Link sticker to the booking page.",ok:false},
{id:"s05",f:"Story",p:"Tips",who:"claude",t:"Ask me anything about filming sport",hook:"Ask me anything about filming sport.",src:"Question sticker",how:"Answer the best ones as reels later.",ok:false},
{id:"s06",f:"Story",p:"BTS",who:"you",t:"Edit progress, before and after",hook:"Before / after, tonight's edit.",src:"Screen photos",how:"Two frames, quick and real.",ok:false},
{id:"s07",f:"Story",p:"Proof",who:"claude",t:"Countdown to game day",hook:"Game day in 2 days.",src:"Countdown sticker + walk-out still",how:"Followers get a reminder when it starts.",ok:true},
{id:"s08",f:"Story",p:"Proof",who:"claude",t:"Quiz: guess the lens",hook:"Which lens was this?",src:"Any frame",how:"Quiz sticker. Easy engagement.",ok:false},
// ---------------- SERIES ----------------
{id:"x01",f:"Series",p:"Craft",who:"claude",t:"Frame of the Week",hook:"Frame of the week #1.",src:"Any graded still",how:"Same template every week, one still. Easiest habit there is.",ok:false},
{id:"x02",f:"Series",p:"Craft",who:"claude",t:"Grade of the Week",hook:"Grade of the week: log vs final.",src:"Grade clips and stills",how:"Weekly before/after with the same layout.",ok:false},
{id:"x03",f:"Series",p:"BTS",who:"you",t:"Matchday Diary",hook:"Matchday diary: vs Ballincollig.",src:"Each Éanna home game",how:"Same format every game: 3 BTS clips plus the best frame.",ok:true},
{id:"x04",f:"Series",p:"Story",who:"both",t:"Freelancer Notes",hook:"Freelancer notes #1: deposits.",src:"Your week",how:"Short text carousel about running the business. Builds trust with clients.",ok:false},
{id:"x05",f:"Series",p:"Tips",who:"claude",t:"Club Content Tip",hook:"Club content tip #1.",src:"Your matchday know-how",how:"One tip a week aimed at club PROs. They're the people who hire you.",ok:false},
{id:"x06",f:"Series",p:"Proof",who:"claude",t:"Then vs Now",hook:"My edit in April vs my edit now.",src:"First posts (April) vs recent work",how:"Shows growth. Your first-ever-shot post fits here.",ok:false}
];

// Batch 2: variety beyond client work. old:true = brings back footage from your older folders
IDEAS = IDEAS.concat([
// ---------- GEAR ----------
{id:"g01",f:"Carousel",p:"Gear",who:"you",t:"Everything in my bag, ranked by how often I use it",hook:"Everything in my camera bag, ranked by how often it comes out.",src:"Photo of your kit laid out on the floor",how:"One flat-lay photo, then one slide per item with a use count bar. You take one photo, Claude does the rest.",ok:false},
{id:"g02",f:"Carousel",p:"Gear",who:"claude",t:"Gear tier list: what's actually worth it",hook:"Gear tier list. Some of this I'd buy again, some I wouldn't.",src:"Your kit list (FX3, 24-70, 70-180, Osmo, lavs, lights, monitors)",how:"S/A/B/C tiers, one slide per tier with a line on why. Comments argue, which helps reach.",ok:false},
{id:"g03",f:"Reel",p:"Gear",who:"you",t:"Rig build in 15 seconds",hook:"Building my courtside rig in 15 seconds.",src:"New: phone on a stand while you set up",how:"Sped-up setup on a table, label each piece as it goes on.",ok:false},
{id:"g04",f:"Carousel",p:"Gear",who:"claude",t:"The €50 accessories that changed my footage",hook:"Cheap kit that made the biggest difference to my footage.",src:"Your accessories (you confirm the list)",how:"Small items: ND filter, lav clips, softbox, cage. Saveable buying list.",ok:false},
{id:"g05",f:"Reel",p:"Gear",who:"claude",t:"24-70 vs 70-180: same play, two lenses",hook:"Same play. Two lenses. Which would you use?",src:"Eanna/Spare Footage (shots on both lenses)",how:"Side-by-side or back-to-back, label each lens.",ok:false,old:true},
{id:"g06",f:"Carousel",p:"Gear",who:"claude",t:"Phone vs FX3: when I use each",hook:"I still shoot on my phone. Here's when.",src:"Davey phone clips + FX3 frames",how:"Situations where each wins. Reassures small clubs and brands.",ok:false},
{id:"g07",f:"Reel",p:"Gear",who:"you",t:"What's on my camera right now",hook:"Exactly what's on my camera for a Super League game.",src:"New: 20s phone clip pointing at each part",how:"Text labels on each accessory. Good first voiceover reel.",ok:false},
// ---------- HOW I DID IT ----------
{id:"h01",f:"Reel",p:"How I did it",who:"both",t:"How I shot the walk-out lights",hook:"How we made a sports hall look like an arena.",src:"Eanna 2026:27/Full Walkout · Lottot intro",how:"Setup clip or photo, then the final. Voiceover or text.",ok:true},
{id:"h02",f:"Reel",p:"How I did it",who:"claude",t:"One shot, three takes: which made the edit",hook:"Three takes of the same shot. Only one made the edit.",src:"Eanna/Spare Footage",how:"Show takes 1-3, reveal the chosen one and why.",ok:false,old:true},
{id:"h03",f:"Carousel",p:"How I did it",who:"claude",t:"Anatomy of a 30-second player feature",hook:"Every shot in a 30-second player feature, broken down.",src:"Eanna/30 Seconds",how:"Frame per shot with its job: establish, detail, action, payoff.",ok:true},
{id:"h04",f:"Reel",p:"How I did it",who:"claude",t:"The shot I almost didn't get",hook:"I nearly missed this shot.",src:"A near-miss moment from Spare Footage",how:"Story text over the clip. Relatable for every shooter.",ok:false,old:true},
{id:"h05",f:"Reel",p:"How I did it",who:"both",t:"Filming Ireland AM at the club",hook:"National TV came to the club. Here's my side of it.",src:"Documents/Undiscovered/Ireland Am",how:"Follow-up to your best post ever. Short voiceover.",ok:true,old:true},
{id:"h06",f:"Carousel",p:"How I did it",who:"claude",t:"How I light an interview with two lights",hook:"Two lights, one lav. My whole interview setup.",src:"Eanna 2026:27/Interviews frames",how:"Diagram slide plus final frame.",ok:false},
// ---------- GRADING ----------
{id:"k01",f:"Reel",p:"Grading",who:"claude",t:"Grading a beach scene from my old short",hook:"Some footage just sits on a drive for a year. Let's grade it.",src:"Videography/Karl and Ava.mov",how:"Flat to finished on a non-sport scene. Shows range. Check the people in it are OK with it.",ok:true,old:true},
{id:"k02",f:"Carousel",p:"Grading",who:"claude",t:"5 looks, 1 frame",hook:"One frame, five looks. Which would you post?",src:"Any graded still",how:"Warm, cool, filmic, punchy, natural. Comments pick a number.",ok:false},
{id:"k03",f:"Reel",p:"Grading",who:"both",t:"My grading in 3 nodes",hook:"Every sports clip I grade goes through these 3 nodes.",src:"Screen recording of the Resolve Color page",how:"Show each node turning on. Saveable.",ok:false},
{id:"k04",f:"Carousel",p:"Grading",who:"claude",t:"Fixing ugly sports-hall light",hook:"Sports halls have the worst light. Here's how I fix it.",src:"Log vs graded frames from halls",how:"Green tint, flicker, mixed temperature, each with a fix.",ok:false},
{id:"k05",f:"Reel",p:"Grading",who:"claude",t:"Drone flat to graded",hook:"Morocco, before and after.",src:"Videography/Morocco DJI clips",how:"Wipe from D-Log to graded. DJI's own before/after short did 121k.",ok:false,old:true},
// ---------- EDITING ----------
{id:"e01",f:"Reel",p:"Editing",who:"both",t:"My edit in 4 passes",hook:"How a 6-hour edit actually goes.",src:"Screen recordings of a Resolve timeline",how:"Rough cut, music, sound, grade. One pass per beat.",ok:false},
{id:"e02",f:"Carousel",p:"Editing",who:"claude",t:"5 editing habits that made my reels better",hook:"5 editing habits that changed my reels.",src:"Your style: captions, punch-ins, SFX, pacing",how:"Each habit with a before/after frame.",ok:false},
{id:"e03",f:"Reel",p:"Editing",who:"claude",t:"Same clip, cut three ways",hook:"Hype, cinematic or clean?",src:"Eanna/Spare Footage",how:"Three edits back to back, ask which.",ok:false,old:true},
{id:"e04",f:"Reel",p:"Editing",who:"claude",t:"Captions on vs off",hook:"Same video. One version keeps people watching.",src:"A Davey video with and without captions",how:"Shows why your caption style works. Ask Daniel.",ok:true},
{id:"e05",f:"Carousel",p:"Editing",who:"claude",t:"Keyboard shortcuts I use every day in Resolve",hook:"The Resolve shortcuts I use every single day.",src:"Your shortcuts (you confirm)",how:"One per slide. Very saveable.",ok:false},
{id:"e06",f:"Reel",p:"Editing",who:"claude",t:"Re-editing my first ever video",hook:"I re-edited my first ever video. Then vs now.",src:"Your April first-shot post + original footage",how:"Old edit, then new edit with today's skills.",ok:false,old:true},
// ---------- IDEAS FOR BRANDS ----------
{id:"b01",f:"Carousel",p:"Ideas for brands",who:"claude",t:"If I ran content for a Dublin café",hook:"If I ran content for a Dublin café, I'd post these 5 things.",src:"Concept slides with your frames as examples",how:"Pick a type of business each time. Business owners save and share these.",ok:false},
{id:"b02",f:"Carousel",p:"Ideas for brands",who:"claude",t:"5 videos every gym should post",hook:"5 videos every gym should be posting.",src:"S&C programme, Davey and Resync work",how:"Each idea with a frame from your work as proof.",ok:false},
{id:"b03",f:"Carousel",p:"Ideas for brands",who:"claude",t:"Content ideas for a clothing launch",hook:"Launching a clothing brand? Film these 6 things.",src:"District 22/Unedited Footage + finished videos",how:"Teaser, detail, street, fit check, countdown, launch day.",ok:true,old:true},
{id:"b04",f:"Carousel",p:"Ideas for brands",who:"claude",t:"What a physio clinic should film",hook:"Physio clinics: these videos bring in bookings.",src:"Resync shoot plan (general ideas only)",how:"Exercise demos, patient journey, myth busting. No client details.",ok:false},
{id:"b05",f:"Carousel",p:"Ideas for brands",who:"claude",t:"Content ideas for a youth basketball academy",hook:"Run a youth academy? Parents want to see these.",src:"3x3 Academy work",how:"Skills, progress, coaches, events. Avoid showing kids' faces up close unless parents agreed.",ok:false},
{id:"b06",f:"Reel",p:"Ideas for brands",who:"both",t:"Pitching an idea in 30 seconds",hook:"How I'd pitch a video idea to a brand.",src:"Text reel over District 22 footage",how:"Problem, idea, shot list, result. Shows how you think.",ok:true},
// ---------- TIPS & TRICKS ----------
{id:"t01",f:"Carousel",p:"Tips",who:"claude",t:"Indoor sports settings cheat sheet",hook:"Save this before your next indoor game.",src:"Your settings (you confirm)",how:"One saveable slide with all settings, then one slide per setting explained.",ok:false},
{id:"t02",f:"Reel",p:"Tips",who:"claude",t:"Where to stand at a basketball game",hook:"Where to stand to film basketball (and where not to).",src:"Court diagram + Spare Footage examples",how:"Overhead court graphic with positions, then the shot from each.",ok:false,old:true},
{id:"t03",f:"Carousel",p:"Tips",who:"claude",t:"Myths about filming sport",hook:"Myths about filming sport that cost me months.",src:"Your experience",how:"Myth slide, then the fact. Save prompt at the end.",ok:false},
{id:"t04",f:"Carousel",p:"Tips",who:"claude",t:"Make your phone footage look better tonight",hook:"5 changes that make phone footage look more expensive.",src:"Phone vs graded frames",how:"Aimed at club PROs and small brands, the people who'd hire you later.",ok:false},
{id:"t05",f:"Reel",p:"Tips",who:"claude",t:"The 3-second rule for highlights",hook:"Every highlight clip should do this in 3 seconds.",src:"Game Day Videos",how:"Show a slow start vs a strong start.",ok:false},
{id:"t06",f:"Carousel",p:"Tips",who:"claude",t:"Audio tips for interviews in loud halls",hook:"Recording interviews in a loud sports hall? Do this.",src:"Interviews setups",how:"Lav placement, gain, room choice, backup.",ok:false},
// ---------- LISTS & TIERS ----------
{id:"l01",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Tier list: shots on a matchday",hook:"Ranking every shot I get on a matchday.",src:"Matchday film frames",how:"Walk-out S tier, crowd A, scoreboard C… people will disagree in the comments.",ok:false},
{id:"l02",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Tier list: sports to film",hook:"Ranking sports by how hard they are to film.",src:"Your experience (basketball, 3x3, GAA BTS, gym)",how:"Opinion post, built for comments.",ok:false},
{id:"l03",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Tier list: transitions",hook:"Every transition, ranked.",src:"Examples from your edits",how:"Whip pan, match cut, speed ramp, flash. Each with a frame.",ok:false},
{id:"l04",f:"Carousel",p:"Lists & tiers",who:"claude",t:"10 things I'd tell myself on day one",hook:"10 things I'd tell myself the day I bought my first camera.",src:"Your story",how:"Text slides over frames. Very shareable.",ok:false},
{id:"l05",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Free tools I use every week",hook:"Free tools I actually use every week as a videographer.",src:"Your workflow",how:"Saveable list. Check each tool is still free before posting.",ok:false},
{id:"l06",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Green flags in a client",hook:"Green flags when a club or brand hires me.",src:"Your experience",how:"Light, honest, shows you're easy to work with.",ok:false},
// ---------- STORY / WHY ----------
{id:"y01",f:"Reel",p:"Story",who:"both",t:"Why I film sport",hook:"Why I film sport.",src:"Best frames + 20s voiceover",how:"Your reason in your words. Huge for trust.",ok:false},
{id:"y02",f:"Carousel",p:"Story",who:"both",t:"From Trinity film student to club content manager",hook:"How I went from film school to filming the Super League.",src:"Timeline of your projects (no Saleen footage yet)",how:"One slide per step with a frame.",ok:false},
{id:"y03",f:"Reel",p:"Story",who:"claude",t:"Footage I never posted",hook:"Footage that's been sitting on my drive for a year.",src:"Eanna/Spare Footage · SL Inclusive · District 22 unused",how:"Quick montage of unseen clips. A good reason to bring old work back.",ok:false,old:true},
{id:"y04",f:"Reel",p:"Story",who:"claude",t:"Then vs now: my footage a year apart",hook:"My footage a year ago vs now.",src:"Your first posts vs recent work",how:"Split screen. Shows growth, people love progress.",ok:false,old:true},
{id:"y05",f:"Carousel",p:"Story",who:"both",t:"What a week of freelancing looks like",hook:"A real week as a freelance videographer in Dublin.",src:"Your calendar plus frames",how:"Mon to Sun, shoots, edits, admin.",ok:false},
{id:"y06",f:"Reel",p:"Story",who:"you",t:"The moment I knew I loved this",hook:"The moment I knew this was what I wanted to do.",src:"Short talking clip or voiceover",how:"Camera ladder step 4. Personal posts build the trust that books you.",ok:false},
// ---------- WHY WORK WITH ME ----------
{id:"w01",f:"Carousel",p:"Why me",who:"claude",t:"What happens when you book me",hook:"What actually happens when you book a shoot with me.",src:"Your 5-step process",how:"Enquire, book, plan, shoot, deliver. Ends with the booking link.",ok:false},
{id:"w02",f:"Carousel",p:"Why me",who:"claude",t:"Questions clubs ask me before booking",hook:"The questions every club asks before booking.",src:"Your FAQ page",how:"Q on one slide, answer on the next. Handles objections.",ok:false},
{id:"w03",f:"Reel",p:"Why me",who:"claude",t:"24 hours from final whistle to posted",hook:"Final whistle to posted clips in under 24 hours.",src:"Game day footage + timestamps",how:"Countdown clock graphic over the process.",ok:false},
{id:"w04",f:"Carousel",p:"Why me",who:"both",t:"What clients say (once testimonials arrive)",hook:"What clubs and brands say about working with me.",src:"Testimonials when they come in",how:"Quote per slide over their footage.",ok:true},
{id:"w05",f:"Story",p:"Why me",who:"claude",t:"Weekly 'booking now' story",hook:"Booking matchdays for November.",src:"Your calendar",how:"Only when true. Link sticker to the booking page.",ok:false},
// ---------- THROWBACKS / OLD FOOTAGE ----------
{id:"o01",f:"Reel",p:"Throwback",who:"claude",t:"Sunday Sets: Motion, re-cut",hook:"An old project I never shared properly.",src:"Documents/Eanna/Sunday Sets/Ep 1 - Motion (1080).mov",how:"Vertical re-cut, best 15 seconds.",ok:true,old:true},
{id:"o02",f:"Reel",p:"Throwback",who:"claude",t:"Coaching session highlight",hook:"What a one-to-one basketball session looks like.",src:"Videography Projects/Morgan · Josh coaching sessions",how:"Coach-focused cut. Ask the coach and parents first if players are minors.",ok:true,old:true},
{id:"o03",f:"Reel",p:"Throwback",who:"claude",t:"District 22: the shots that didn't make it",hook:"The District 22 shots that didn't make the final cut.",src:"Videography Projects/District 22/Unedited Footage",how:"Outtakes with your grade. Shows how much you shoot for one launch.",ok:true,old:true},
{id:"o04",f:"Reel",p:"Throwback",who:"claude",t:"SL Inclusive: day on the court",hook:"A day filming inclusive basketball.",src:"Documents/Eanna/SL Inclusive/Unedited Footage (72 clips)",how:"Warm, human edit. Check consent with the club before posting.",ok:true,old:true},
{id:"o05",f:"Reel",p:"Throwback",who:"claude",t:"Lottot intro breakdown",hook:"How I made the intro for the club's lotto video.",src:"Documents/Eanna 2026:27/Lottot",how:"Final intro, then the raw shots it came from.",ok:true,old:true},
{id:"o06",f:"Carousel",p:"Throwback",who:"claude",t:"Frames from shoots you never saw",hook:"Frames from shoots I never posted.",src:"Spare Footage, Mark Kenny, Morgan, District 22 unused",how:"Best stills from old folders. Easy and brings the whole archive back.",ok:false,old:true},
// ---------- GROWTH / OFFER ----------
{id:"f01",f:"Reel",p:"Growth",who:"claude",t:"Comment GUIDE for my club content checklist",hook:"Comment GUIDE and I'll send you my game day checklist.",src:"A one-page checklist Claude makes for you",how:"Lead magnet: everyone who comments gets a DM, every DM is a lead.",ok:false},
{id:"f02",f:"Carousel",p:"Growth",who:"claude",t:"Free content audit for 3 clubs",hook:"I'll review 3 clubs' Instagram for free this month.",src:"Text carousel",how:"Low-risk offer. Ask them to comment or DM AUDIT.",ok:false},
{id:"f03",f:"Story",p:"Growth",who:"claude",t:"Poll: what should I post next?",hook:"What do you want to see next: gear, editing or grading?",src:"Poll sticker",how:"Lets followers pick, then you post what they asked for.",ok:false}
]);

// More like these: new ideas built from the ones Milo saved. from = the saved idea it grew out of.
var MORE = [
// ---------- GEAR (from g01-g07, c10, r30) ----------
{id:"m001",from:"g02",f:"Carousel",p:"Gear",who:"claude",t:"Tier list: camera bags and cases",hook:"Every camera bag I've owned, ranked.",how:"S to C tiers, one line on what broke or what saved a shoot."},
{id:"m002",from:"g02",f:"Carousel",p:"Gear",who:"claude",t:"Tier list: microphones for interviews",hook:"Interview mics, ranked by how much I trust them.",how:"Lavs, shotgun, on-camera. A clip of each if you have one."},
{id:"m003",from:"g04",f:"Carousel",p:"Gear",who:"claude",t:"Gear I regret buying",hook:"Gear I bought and barely used.",how:"Honest list. People trust you more when you admit mistakes."},
{id:"m004",from:"g04",f:"Carousel",p:"Gear",who:"claude",t:"What I'd buy with €500, €1,500 and €3,000",hook:"Starting out in sports video? Here's what I'd buy at each budget.",how:"Three budget slides. Check current prices before posting.",ok:false},
{id:"m005",from:"g03",f:"Reel",p:"Gear",who:"you",t:"Pack with me for a matchday",hook:"Packing for a Super League game.",how:"Top-down phone shot, sped up, each item labelled as it goes in."},
{id:"m006",from:"g07",f:"Reel",p:"Gear",who:"you",t:"Unpacking after a game",hook:"What a camera bag looks like at 11pm after a game.",how:"Batteries on charge, cards backed up, lens cleaned. Shows you're careful with client footage."},
{id:"m007",from:"g05",f:"Reel",p:"Gear",who:"claude",t:"Gimbal vs handheld: same walk-out",hook:"Gimbal or handheld? Same walk-out, two feels.",how:"Back-to-back clips from the archive, label each."},
{id:"m008",from:"g06",f:"Carousel",p:"Gear",who:"claude",t:"What the FX3 can't do",hook:"The FX3 is great. Here's what it can't do.",how:"Honest limits and how you work around them. Gear people love these."},
{id:"m009",from:"g01",f:"Carousel",p:"Gear",who:"you",t:"My card and backup system",hook:"How I make sure I never lose a client's footage.",how:"Cards, two drives, cloud. One photo of the setup. Builds client trust."},
{id:"m010",from:"c10",f:"Carousel",p:"Gear",who:"claude",t:"Lens guide for basketball",hook:"Which lens for which shot on a basketball court.",how:"Court diagram with 24-70 and 70-180 positions, a frame from each."},
// ---------- HOW I DID IT (from h01-h06, c21, c27, c34) ----------
{id:"m011",from:"h03",f:"Carousel",p:"How I did it",who:"claude",t:"Anatomy of a 15-second game day reel",hook:"Every cut in a 15-second game day reel, explained.",how:"Frame per cut with its job: hook, build, payoff, logo."},
{id:"m012",from:"h06",f:"Carousel",p:"How I did it",who:"claude",t:"One light, three looks",hook:"One light. Three completely different looks.",how:"Same face, light moved front, side, back. Diagram on each slide."},
{id:"m013",from:"h01",f:"Reel",p:"How I did it",who:"both",t:"How I shot the slow-mo free throw",hook:"How to make a free throw look like a film.",how:"Settings, position, the final shot. Short voiceover or text."},
{id:"m014",from:"h04",f:"Reel",p:"How I did it",who:"claude",t:"The shot that took 20 tries",hook:"This 2-second shot took 20 tries.",how:"Fast montage of failed takes, then the good one."},
{id:"m015",from:"h02",f:"Carousel",p:"How I did it",who:"claude",t:"Why I picked this take",hook:"Four takes. Here's why only one made the edit.",how:"Frames side by side with notes on focus, framing, timing."},
{id:"m016",from:"c21",f:"Carousel",p:"How I did it",who:"both",t:"From brief to post: a matchday graphic",hook:"How a matchday graphic goes from idea to posted.",how:"Brief, sketch, draft, final. Use an Éanna graphic (club OK).",ok:true},
{id:"m017",from:"c27",f:"Carousel",p:"How I did it",who:"claude",t:"Podcast setup, drawn out",hook:"Three cameras, two mics. My podcast setup on one page.",how:"Top-down diagram plus a frame from each angle.",ok:true},
{id:"m018",from:"c34",f:"Carousel",p:"How I did it",who:"both",t:"How I shot a squad photo day fast",hook:"How to shoot a whole squad without running out of time.",how:"Schedule, station setup, lighting, final shots.",ok:true},
{id:"m019",from:"h01",f:"Reel",p:"How I did it",who:"claude",t:"Making a hall look like an arena: 3 tricks",hook:"Three tricks that make a sports hall look like an arena.",how:"Low angles, lights in frame, crowd sound. Before/after for each."},
{id:"m020",from:"c21",f:"Reel",p:"How I did it",who:"both",t:"One video, every file it took",hook:"One 30-second video. Every file it took to make it.",how:"Screen record the folder: clips, music, graphics, exports. Shows the work."},
// ---------- GRADING (from k02-k05, r01, r02, r16, c14) ----------
{id:"m021",from:"k02",f:"Carousel",p:"Grading",who:"claude",t:"Grading skin in a sports hall",hook:"Sports-hall light makes skin look green. Here's my fix.",how:"Before/after crops on faces, one fix per slide."},
{id:"m022",from:"k04",f:"Reel",p:"Grading",who:"claude",t:"Fixing flicker in a sports hall",hook:"That flicker in your sports footage? Here's why.",how:"Show flicker, explain shutter vs mains frequency, show the fixed clip."},
{id:"m023",from:"k03",f:"Carousel",p:"Grading",who:"both",t:"My 3 favourite Resolve grading tools",hook:"Three grading tools I use on every single clip.",how:"Screenshot per tool with what it does."},
{id:"m024",from:"r01",f:"Reel",p:"Grading",who:"claude",t:"Flat to graded: 5 clips in 15 seconds",hook:"Five clips. Flat, then graded.",how:"Quick wipes on the beat. Ask people to comment GRADE."},
{id:"m025",from:"k05",f:"Reel",p:"Grading",who:"claude",t:"Night vs day: same street, graded",hook:"I made daytime footage look like night.",how:"Day-for-night grade on an archive street clip."},
{id:"m026",from:"c14",f:"Carousel",p:"Grading",who:"claude",t:"Grade inspired by a film",hook:"I graded basketball like a famous film look.",how:"Name the style (e.g. warm 70s, teal and orange), not a specific film's frames."},
{id:"m027",from:"r16",f:"Reel",p:"Grading",who:"claude",t:"Colour test: food vs sport",hook:"Same grade on food and on sport. Does it work?",how:"Davey kitchen clip and an Éanna clip, same look.",ok:true},
{id:"m028",from:"k02",f:"Story",p:"Grading",who:"claude",t:"Story poll: grade A or B",hook:"Which grade would you post?",how:"Two versions of one still, poll sticker. Repeat weekly."},
{id:"m029",from:"k04",f:"Carousel",p:"Grading",who:"claude",t:"Log footage explained in 5 slides",hook:"Why my footage looks grey before I grade it.",how:"Simple explainer for clients who ask why raw looks flat."},
// ---------- EDITING (from e02-e05, r09, r10, r17, r18, c32) ----------
{id:"m030",from:"e05",f:"Carousel",p:"Editing",who:"claude",t:"Resolve settings I change on every new project",hook:"Settings I change in every new Resolve project.",how:"Frame rate, colour management, cache, auto-save. Saveable."},
{id:"m031",from:"e02",f:"Carousel",p:"Editing",who:"claude",t:"Pacing: why your edit feels slow",hook:"Your edit feels slow. Here's usually why.",how:"Long starts, no music cuts, repeated shots. A fix for each."},
{id:"m032",from:"r09",f:"Reel",p:"Editing",who:"claude",t:"Music on vs off",hook:"Same edit. Watch it without music first.",how:"Silent half, then with the track. Shows how much music does."},
{id:"m033",from:"r17",f:"Reel",p:"Editing",who:"claude",t:"How I cut on the beat",hook:"How I make every cut land on the beat.",how:"Timeline with markers, then the result."},
{id:"m034",from:"r10",f:"Reel",p:"Editing",who:"claude",t:"Same clip: TikTok edit vs YouTube edit",hook:"Same footage. One for TikTok, one for YouTube.",how:"Fast vertical vs slow wide. Explains why platforms differ."},
{id:"m035",from:"r18",f:"Reel",p:"Editing",who:"claude",t:"Punch-in zooms: with vs without",hook:"One edit trick that keeps people watching.",how:"Talking clip plain, then with punch-ins on key words.",ok:true},
{id:"m036",from:"c32",f:"Carousel",p:"Editing",who:"both",t:"How I organise a project folder",hook:"My folder system. Never lose a clip again.",how:"Screenshot of your folder tree with notes."},
{id:"m037",from:"e03",f:"Reel",p:"Editing",who:"claude",t:"The 3 transitions I actually use",hook:"I only use 3 transitions. Here they are.",how:"Each one on a real clip, labelled."},
{id:"m038",from:"r09",f:"Reel",p:"Editing",who:"claude",t:"Sound effects breakdown",hook:"Every sound effect in this 10-second clip.",how:"Play the clip, then each sound labelled on screen."},
{id:"m039",from:"e04",f:"Carousel",p:"Editing",who:"claude",t:"Caption styles, ranked",hook:"Caption styles, ranked from worst to best.",how:"Examples of each style on the same frame."},
// ---------- IDEAS FOR BRANDS (from b01-b03, b06, c19) ----------
{id:"m040",from:"b01",f:"Carousel",p:"Ideas for brands",who:"claude",t:"If I ran content for a Dublin barber",hook:"If I ran content for a Dublin barber, I'd post these.",how:"5 ideas with mock frames. Barbers share these."},
{id:"m041",from:"b01",f:"Carousel",p:"Ideas for brands",who:"claude",t:"If I ran content for a GAA club",hook:"If I ran a GAA club's Instagram, here's my plan.",how:"Matchday, players, history, sponsors, community. Close to your basketball work."},
{id:"m042",from:"b02",f:"Carousel",p:"Ideas for brands",who:"claude",t:"5 videos every personal trainer should post",hook:"Personal trainers: post these 5 videos.",how:"Each with a frame from Davey or S&C work as proof."},
{id:"m043",from:"b01",f:"Carousel",p:"Ideas for brands",who:"claude",t:"If I ran content for a restaurant",hook:"If I ran a restaurant's Instagram, I'd post this every week.",how:"Kitchen BTS, plating, staff, regulars, specials."},
{id:"m044",from:"b03",f:"Carousel",p:"Ideas for brands",who:"claude",t:"Sports brand launch: the shot list",hook:"Launching a sports brand? This is your shot list.",how:"Product, athlete, action, detail, lifestyle."},
{id:"m045",from:"c19",f:"Carousel",p:"Ideas for brands",who:"claude",t:"Sponsor content ideas for a local business",hook:"Sponsor a club? Here's how to get more than a logo.",how:"Aimed at the sponsors themselves. They pay for content too."},
{id:"m046",from:"b06",f:"Reel",p:"Ideas for brands",who:"both",t:"I made a free concept video for a brand",hook:"I made a video for a brand that didn't ask for one.",how:"Spec ad for a local business you like, then tag them. A known way to land clients."},
{id:"m047",from:"b01",f:"Carousel",p:"Ideas for brands",who:"claude",t:"If I ran content for a sports physio",hook:"If I ran a physio clinic's Instagram, I'd post these.",how:"Myth busting, exercise demos, patient wins. General ideas only."},
{id:"m048",from:"b02",f:"Carousel",p:"Ideas for brands",who:"claude",t:"Content ideas for a nutrition coach",hook:"Nutrition coaches: 5 videos that build trust.",how:"Draw on your Davey experience, nothing private.",ok:true},
{id:"m049",from:"b06",f:"Reel",p:"Ideas for brands",who:"claude",t:"Rebranding a club's Instagram in 30 seconds",hook:"If I took over your club's Instagram tomorrow.",how:"Mock grid before and after, quick screen recording."},
// ---------- TIPS (from t02-t06, c26, c30, c31, c40, c41) ----------
{id:"m050",from:"t04",f:"Carousel",p:"Tips",who:"claude",t:"Phone settings for filming your club",hook:"Club PROs: change these phone settings before the next game.",how:"Frame rate, lock exposure, grid, clean lens. Saveable."},
{id:"m051",from:"t02",f:"Carousel",p:"Tips",who:"claude",t:"Where to stand at a GAA match",hook:"Where to stand to film a GAA match.",how:"Pitch diagram with spots and what each gets you."},
{id:"m052",from:"t05",f:"Carousel",p:"Tips",who:"claude",t:"Hooks for club highlight videos",hook:"10 opening lines for your club's highlight videos.",how:"Copyable list. PROs save these."},
{id:"m053",from:"t06",f:"Reel",p:"Tips",who:"claude",t:"Lav placement in 15 seconds",hook:"Where to put a lav mic so it doesn't rustle.",how:"Quick demo with good vs bad audio."},
{id:"m054",from:"c31",f:"Carousel",p:"Tips",who:"claude",t:"Captions for game day posts",hook:"Stuck on a caption for game day? Use these.",how:"Templates for pre-game, win, loss, signings."},
{id:"m055",from:"c41",f:"Carousel",p:"Tips",who:"claude",t:"What to post when your team loses",hook:"Your team lost. Here's what to post.",how:"Respectful ideas: effort, fans, next game. Very relatable for clubs."},
{id:"m056",from:"c30",f:"Carousel",p:"Tips",who:"claude",t:"What to send your videographer after the shoot",hook:"After the shoot, send your videographer this.",how:"Feedback, logos, captions, deadlines. Aimed at clients."},
{id:"m057",from:"c26",f:"Carousel",p:"Tips",who:"claude",t:"Why your club photos look dark",hook:"Why your sports-hall photos look dark (and the fix).",how:"Exposure, white balance, angle. Frames from your archive."},
{id:"m058",from:"t03",f:"Carousel",p:"Tips",who:"claude",t:"Instagram myths for clubs",hook:"Instagram myths that hold clubs back.",how:"Myth, then fact. Ends with your offer."},
{id:"m059",from:"c40",f:"Reel",p:"Tips",who:"you",t:"Phone filming hack for club PROs",hook:"Club PROs, try this on your phone at the next game.",how:"One trick, 15 seconds, shot on your phone."},
{id:"m060",from:"t05",f:"Carousel",p:"Tips",who:"claude",t:"Best length for each kind of club video",hook:"How long should your club's videos be?",how:"Reel, highlight, interview, recap. One length each."},
// ---------- LISTS & TIERS (from l01-l06, c37) ----------
{id:"m061",from:"l01",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Tier list: matchday graphics",hook:"Ranking every matchday graphic a club posts.",how:"Starting five, score, MVP, schedule. Opinion post for comments."},
{id:"m062",from:"l02",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Tier list: Irish sports to film",hook:"Irish sports ranked by how fun they are to film.",how:"Basketball, GAA, rugby, boxing, athletics. Built for comments."},
{id:"m063",from:"l03",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Tier list: camera moves",hook:"Every camera move, ranked.",how:"Push-in, pan, orbit, tilt, whip. A frame of each."},
{id:"m064",from:"l05",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Apps I use to run my business",hook:"Every app I use to run a videography business.",how:"Booking, invoicing, notes, storage. Check names and prices."},
{id:"m065",from:"l06",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Red flags in a client brief",hook:"Red flags in a video brief (from a freelancer).",how:"Light and fair. Ends with what a good brief looks like."},
{id:"m066",from:"l04",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Things I stopped doing this year",hook:"Things I stopped doing as a videographer this year.",how:"Short honest list. Very relatable."},
{id:"m067",from:"l01",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Tier list: celebrations to film",hook:"Ranking basketball celebrations by how good they look on camera.",how:"Fun, engagement-friendly."},
{id:"m068",from:"c37",f:"Carousel",p:"Lists & tiers",who:"claude",t:"This or that: videographer edition",hook:"This or that: videographer edition.",how:"Zoom or prime? Gimbal or handheld? People answer in comments."},
{id:"m069",from:"l05",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Best free music and SFX sources",hook:"Where I get free music and sound effects.",how:"Saveable list. Check each source's licence first."},
{id:"m070",from:"l04",f:"Carousel",p:"Lists & tiers",who:"claude",t:"Books and films that shaped how I shoot",hook:"Films that changed how I shoot sport.",how:"Name each film and what you took from it. Text only, no frames from them."},
// ---------- STORY (from y01-y06, c22, c25, c29, c44) ----------
{id:"m071",from:"c22",f:"Carousel",p:"Story",who:"both",t:"What registering as a sole trader was like",hook:"I just registered as a sole trader in Ireland. Here's how it went.",how:"Steps in plain words. Helpful for other freelancers, shows you're legit."},
{id:"m072",from:"c29",f:"Carousel",p:"Story",who:"both",t:"My worst shoot",hook:"My worst shoot so far, and what I learned.",how:"Honest story, keep the client anonymous."},
{id:"m073",from:"y05",f:"Reel",p:"Story",who:"you",t:"Day in the life: edit day",hook:"A day in the life of a freelance editor in Dublin.",how:"Coffee, timeline, export, send. Phone clips."},
{id:"m074",from:"y02",f:"Carousel",p:"Story",who:"both",t:"What film school didn't teach me",hook:"What film school didn't teach me about getting work.",how:"Pricing, clients, social media, contracts."},
{id:"m075",from:"c25",f:"Carousel",p:"Story",who:"both",t:"My first paid job",hook:"My first paid video job. What I charged and what I'd do now.",how:"You check the numbers before posting.",ok:false},
{id:"m076",from:"y04",f:"Reel",p:"Story",who:"claude",t:"My first grade vs my latest grade",hook:"My first ever grade vs my latest.",how:"Split screen. Progress posts do well."},
{id:"m077",from:"c44",f:"Carousel",p:"Story",who:"both",t:"What sport has taught me about filmmaking",hook:"Filming sport made me a better filmmaker. Here's how.",how:"Speed, reading play, one-take moments."},
{id:"m078",from:"y03",f:"Reel",p:"Story",who:"claude",t:"Clips I love that never got posted",hook:"Clips I love that nobody's seen.",how:"Archive montage. Easy to make, brings old footage back."},
{id:"m079",from:"y06",f:"Carousel",p:"Story",who:"both",t:"Goals for my first year in business",hook:"My goals for year one as a freelance videographer.",how:"Public goals. Come back and update in 6 months."},
{id:"m080",from:"y05",f:"Carousel",p:"Story",who:"both",t:"How I split my week",hook:"How I split a week: shooting, editing, admin.",how:"Pie chart slide, then each part."},
// ---------- WHY ME (from w01-w05, c23) ----------
{id:"m081",from:"w01",f:"Carousel",p:"Why me",who:"claude",t:"What you get in every delivery",hook:"What lands in your inbox after a shoot with me.",how:"Files, formats, captions, thumbnails. Clear and reassuring."},
{id:"m082",from:"w02",f:"Carousel",p:"Why me",who:"claude",t:"Do I need a videographer or a phone?",hook:"Does your club need a videographer, or is a phone enough?",how:"Honest answer. Builds trust with small clubs."},
{id:"m083",from:"w03",f:"Reel",p:"Why me",who:"claude",t:"Shot, edited and graded by one person",hook:"No agency. Every clip planned, shot and edited by me.",how:"Montage of you at each stage. Your tagline as the end card."},
{id:"m084",from:"c23",f:"Carousel",p:"Why me",who:"claude",t:"Packages explained in plain words",hook:"What each of my packages actually includes.",how:"One package per slide, straight from the website."},
{id:"m085",from:"w02",f:"Carousel",p:"Why me",who:"claude",t:"How far I travel",hook:"Dublin based. Here's where I'll travel to film.",how:"Map slide. Answers a common question."},
{id:"m086",from:"w04",f:"Carousel",p:"Why me",who:"both",t:"Before and after: a club's Instagram",hook:"A club's Instagram before and after we worked together.",how:"Grid screenshots, real numbers you confirm.",ok:true},
// ---------- SERIES (from x01-x06) ----------
{id:"m087",from:"x05",f:"Series",p:"Tips",who:"claude",t:"Monday Fix",hook:"Monday fix: one thing to improve your club's video.",how:"Same template every Monday."},
{id:"m088",from:"x04",f:"Series",p:"Story",who:"both",t:"Freelance Friday",hook:"Freelance Friday: what this week taught me.",how:"Short text carousel or talking clip every Friday."},
{id:"m089",from:"x01",f:"Series",p:"Grading",who:"claude",t:"Shot of the Month",hook:"Shot of the month: October.",how:"Your best frame with settings. Monthly is easy to keep up."},
{id:"m090",from:"x06",f:"Series",p:"Story",who:"claude",t:"One year ago today",hook:"One year ago vs today.",how:"Archive clip against recent work."},
{id:"m091",from:"x03",f:"Series",p:"BTS",who:"you",t:"Kit Check",hook:"Kit check: what I brought today.",how:"Story or reel at each shoot. Five seconds of flat-lay."},
// ---------- BTS / ENGAGEMENT (from r22, r23, s01-s07, f01-f03) ----------
{id:"m092",from:"r22",f:"Reel",p:"BTS",who:"you",t:"POV: filming a media day",hook:"POV: you're filming a club's media day.",how:"Setup, players, reveal of the final photos and clips."},
{id:"m093",from:"r23",f:"Reel",p:"BTS",who:"you",t:"Export bar anxiety",hook:"Waiting for an export at 1am.",how:"Funny, relatable. Screen recording plus your reaction."},
{id:"m094",from:"s05",f:"Story",p:"Growth",who:"claude",t:"Question box: what should I film?",hook:"What should I film next?",how:"Question sticker. Turn the answers into posts."},
{id:"m095",from:"s07",f:"Story",p:"Growth",who:"claude",t:"Sneak peek before a post",hook:"Something's coming tomorrow.",how:"Blurred frame from your next post. Gets people back the next day."},
{id:"m096",from:"f01",f:"Reel",p:"Growth",who:"claude",t:"Comment SHOTLIST for my matchday shot list",hook:"Comment SHOTLIST and I'll send you my matchday shot list.",how:"Second lead magnet. Every comment becomes a DM."},
{id:"m097",from:"f02",f:"Carousel",p:"Growth",who:"claude",t:"I reviewed a club's Instagram (with permission)",hook:"I reviewed a club's Instagram. Here's what I'd change.",how:"Only with the club's OK. Shows your eye and gets other clubs asking.",ok:true},
{id:"m098",from:"f03",f:"Story",p:"Growth",who:"claude",t:"This or that sticker series",hook:"Gimbal or handheld?",how:"Daily quick poll. Keeps your stories active."},
{id:"m099",from:"s02",f:"Story",p:"BTS",who:"you",t:"Arrival shot at every venue",hook:"Tonight's venue.",how:"One wide photo of each hall or pitch, location tag."},
{id:"m100",from:"f01",f:"Carousel",p:"Growth",who:"claude",t:"Free template: game day content plan",hook:"Free game day content plan for clubs. Comment PLAN.",how:"One-page PDF Claude makes. Another lead magnet."},
// ---------- ARCHIVE & PROOF (from o01-o06, c17-c20, c24, c28, c33, c36, c39, c42, r04-r08, r13, r14, r20, r21) ----------
{id:"m101",from:"o06",f:"Carousel",p:"Throwback",who:"claude",t:"Best drone frames from the archive",hook:"Every good drone frame I've ever shot.",how:"Morocco and anything else from above. Easy from your folders."},
{id:"m102",from:"o02",f:"Reel",p:"Throwback",who:"claude",t:"Coaching session: one drill, slowed down",hook:"One drill. Every detail.",how:"Coach-focused slow-mo. Ask the coach first.",ok:true},
{id:"m103",from:"c24",f:"Reel",p:"Throwback",who:"claude",t:"Travel reel from the archive",hook:"I don't only film sport.",how:"Morocco and travel clips. Shows range."},
{id:"m104",from:"c36",f:"Carousel",p:"Proof",who:"claude",t:"Series I've made for clients",hook:"Every content series I've built for clients.",how:"30 Seconds With, Sunday Sets, podcasts. A cover frame each.",ok:true},
{id:"m105",from:"c39",f:"Reel",p:"Proof",who:"claude",t:"Best interview moment, re-edited",hook:"The best thing a player said this season.",how:"One quote, captions, slow push-in.",ok:true},
{id:"m106",from:"c42",f:"Carousel",p:"Proof",who:"claude",t:"Youth programme video results",hook:"How one programme video brought in sign-ups.",how:"Only with numbers the coaches confirm.",ok:true},
{id:"m107",from:"r05",f:"Reel",p:"Proof",who:"claude",t:"Top 5 dunks I've filmed",hook:"The 5 best dunks I've filmed.",how:"Countdown format, slow-mo on each.",ok:true},
{id:"m108",from:"r06",f:"Reel",p:"Proof",who:"claude",t:"Crowd reactions only",hook:"No basketball. Just the crowd.",how:"Montage of crowd moments. Shows atmosphere.",ok:true},
{id:"m109",from:"r08",f:"Reel",p:"Proof",who:"claude",t:"Every graphic I've made in 20 seconds",hook:"Every graphic I made this year in 20 seconds.",how:"Fast flick-through on the beat.",ok:true},
{id:"m110",from:"r20",f:"Reel",p:"BTS",who:"both",t:"How I shot it: a sponsor video",hook:"How I shot a sponsored video in one afternoon.",how:"BTS then final. Ask the client first.",ok:true},
{id:"m111",from:"r14",f:"Reel",p:"Proof",who:"claude",t:"Best moments of 2026",hook:"My 2026 in 30 seconds.",how:"Year-end montage across all clients. Ask each client.",ok:true},
{id:"m112",from:"c33",f:"Carousel",p:"Proof",who:"both",t:"What makes a sponsored video work",hook:"Sponsored videos that don't feel like ads.",how:"3 rules with frames. Ask clients before using their work.",ok:true},
{id:"m113",from:"r13",f:"Reel",p:"Throwback",who:"claude",t:"Drone vs ground: same place",hook:"Same place. Ground vs 100 metres up.",how:"Back-to-back clips from Morocco."},
{id:"m114",from:"c28",f:"Carousel",p:"How I did it",who:"claude",t:"First draft vs final: three projects",hook:"First draft vs final, three projects.",how:"Shows how much you refine. Clients like seeing that care.",ok:true},
{id:"m115",from:"r04",f:"Reel",p:"Proof",who:"claude",t:"One second from every game this season",hook:"One second from every game this season.",how:"Rapid montage, grows each week. Collab with the club.",ok:true},
{id:"m116",from:"c20",f:"Carousel",p:"Proof",who:"both",t:"Podcast quotes as graphics",hook:"Lines from the podcast worth saving.",how:"Quote cards. Post as a collab only.",ok:true},
{id:"m117",from:"c17",f:"Reel",p:"How I did it",who:"both",t:"Building a club livestream setup",hook:"How I set up a club's livestream.",how:"Cameras, overlay, laptop. Screen recording plus a photo.",ok:true},
{id:"m118",from:"c18",f:"Carousel",p:"Tips",who:"claude",t:"How to plan a month of club content",hook:"How to plan a month of club content in one hour.",how:"Template slides PROs can copy."},
{id:"m119",from:"r21",f:"Reel",p:"BTS",who:"both",t:"Street shoot BTS: how I direct people",hook:"How I get people relaxed on camera.",how:"BTS clips with text tips. Good for brand clients.",ok:true},
{id:"m120",from:"r07",f:"Reel",p:"Proof",who:"claude",t:"Thumbnails before and after text",hook:"Same thumbnail. With and without text.",how:"Quick flicks show your design eye.",ok:true}
];

// Talking head ideas. lvl = how much of you is on camera (1 voice only, 2 hands or half on camera, 3 full face to camera).
// beats = the three points to say. broll = what to cut over the top so it isn't just a face.
var TALK = [
// ---------- START HERE (easy) ----------
{id:"th01",lvl:1,p:"Start here",t:"Why I film sport (voiceover)",hook:"I don't film sport for the highlights.",beats:["The moment you love capturing","Why the hours nobody sees matter","Make it look how it felt"],broll:"Best matchday frames, walk-out, crowd",len:"20s"},
{id:"th02",lvl:1,p:"Start here",t:"Talk over your edit",hook:"Let me show you what I did to this clip.",beats:["The raw clip","The one change that mattered","The final"],broll:"Your Resolve timeline, before and after",len:"25s"},
{id:"th03",lvl:2,p:"Start here",t:"Hands-only gear explainer",hook:"This is everything on my camera for a game.",beats:["Camera and lens","Mic and monitor","Why this setup works in dark halls"],broll:"Close-ups of your hands on the rig",len:"30s"},
{id:"th04",lvl:2,p:"Start here",t:"Walk-and-talk into a venue",hook:"Come with me to film a Super League game.",beats:["Where you are tonight","What you need to get","One thing that's hard about it"],broll:"Phone in hand, walking in, then the court",len:"20s"},
{id:"th05",lvl:3,p:"Start here",t:"Introduce yourself in 20 seconds",hook:"I'm Milo, and I film sport in Dublin.",beats:["What you do","Who you do it for","What to do if they want you"],broll:"Your best 3 clips",len:"20s"},
// ---------- TIPS FOR CLUBS ----------
{id:"th06",lvl:3,p:"Tips for clubs",t:"3 shots every club should get on game day",hook:"If your club only gets three shots on game day, get these.",beats:["The walk-out","The crowd reaction","The final whistle"],broll:"A frame of each shot",len:"30s"},
{id:"th07",lvl:3,p:"Tips for clubs",t:"The biggest mistake clubs make on Instagram",hook:"Most clubs make the same mistake on Instagram.",beats:["Only posting results","What people actually want to see","One easy fix"],broll:"Generic score graphic vs a player moment",len:"30s"},
{id:"th08",lvl:3,p:"Tips for clubs",t:"How to film on your phone at a game",hook:"Club PROs, film this way on your phone.",beats:["Lock exposure","Shoot horizontal for highlights, vertical for reels","Get close, not zoomed"],broll:"Phone screen recording at a game",len:"35s"},
{id:"th09",lvl:3,p:"Tips for clubs",t:"What to post the day after a game",hook:"The game's over. Don't go quiet the next day.",beats:["Best moment recap","Player of the game","Thank the fans"],broll:"Next-day post examples",len:"25s"},
{id:"th10",lvl:3,p:"Tips for clubs",t:"How to get your sponsors more value",hook:"Your sponsors want more than a logo on a jersey.",beats:["Feature them in a series","Tag them in matchday posts","Give them clips they can use"],broll:"Sponsor graphics, matchday clips",len:"35s"},
{id:"th11",lvl:3,p:"Tips for clubs",t:"Do you need a videographer?",hook:"Does your club actually need a videographer?",beats:["When a phone is fine","When it's not","What changes when you hire one"],broll:"Phone clip vs your graded clip",len:"35s"},
{id:"th12",lvl:3,p:"Tips for clubs",t:"How often should a club post?",hook:"How often should your club post on Instagram?",beats:["Game weeks","Off weeks","What matters more than how often"],broll:"Calendar screenshot",len:"30s"},
// ---------- FILMMAKING TIPS ----------
{id:"th13",lvl:3,p:"Filmmaking tips",t:"Shutter speed for sport, simply",hook:"Your sports footage looks blurry. It's probably this.",beats:["What shutter speed does","Why 1/50 smears fast action","What I use for slow-mo"],broll:"Blurry frame vs sharp frame",len:"35s"},
{id:"th14",lvl:3,p:"Filmmaking tips",t:"Why I shoot in log",hook:"My footage looks grey on purpose.",beats:["What log is","Why it helps in dark halls","The before and after"],broll:"Log vs graded wipe",len:"30s"},
{id:"th15",lvl:3,p:"Filmmaking tips",t:"One lighting trick for interviews",hook:"One light move that makes any interview look better.",beats:["Move the light to the side","Turn off the overheads","Add something behind them"],broll:"Before and after frames",len:"25s"},
{id:"th16",lvl:3,p:"Filmmaking tips",t:"How I get clean audio in loud halls",hook:"Recording an interview next to a basketball game? Here's how.",beats:["Lav, not camera mic","Find the quietest corner","Record a backup"],broll:"Interview setup clips",len:"30s"},
{id:"th17",lvl:3,p:"Filmmaking tips",t:"The edit trick that keeps people watching",hook:"This one edit trick keeps people watching to the end.",beats:["Cut the first second","Punch in on key words","End before they expect"],broll:"Same clip before and after",len:"30s"},
{id:"th18",lvl:2,p:"Filmmaking tips",t:"My grading in 3 steps",hook:"Every clip I grade goes through three steps.",beats:["Balance","Look","Skin"],broll:"Resolve Color page",len:"35s"},
{id:"th19",lvl:3,p:"Filmmaking tips",t:"Where to stand at a basketball game",hook:"Where you stand matters more than your camera.",beats:["Baseline for dunks","Halfway for the bench","High up for wides"],broll:"Court diagram and a frame from each",len:"35s"},
// ---------- STORY & WHY ME ----------
{id:"th20",lvl:3,p:"Story & why me",t:"How I got into filming sport",hook:"I didn't plan to film sport.",beats:["Where it started","The moment it clicked","Where I am now"],broll:"Old footage to new footage",len:"40s"},
{id:"th21",lvl:3,p:"Story & why me",t:"Why I do everything myself",hook:"I plan it, shoot it, edit it and grade it myself.",beats:["What that means for clients","Why it's faster","Why it looks consistent"],broll:"You at each stage",len:"30s"},
{id:"th22",lvl:3,p:"Story & why me",t:"What film school taught me (and didn't)",hook:"I studied film at Trinity. Here's what actually helped.",beats:["The useful bit","What I had to learn myself","Advice for students"],broll:"Archive student work",len:"40s"},
{id:"th23",lvl:3,p:"Story & why me",t:"My first year freelancing",hook:"My first year as a freelance videographer, honestly.",beats:["What went well","What was hard","What's next"],broll:"Montage of the year",len:"45s"},
{id:"th24",lvl:3,p:"Story & why me",t:"What working with me looks like",hook:"Thinking of hiring me? Here's how it works.",beats:["You enquire, I reply in 24-48 hours","We plan it","You get it in 5-7 working days"],broll:"Website screen recording",len:"30s"},
{id:"th25",lvl:3,p:"Story & why me",t:"The best part of my job",hook:"The best part of this job isn't the filming.",beats:["The moment a client sees it","A real example","Why that matters to you"],broll:"Reaction or final video",len:"25s"},
// ---------- OPINIONS & HOT TAKES ----------
{id:"th26",lvl:3,p:"Opinions",t:"Unpopular opinion: gear doesn't matter (much)",hook:"Unpopular opinion: your camera isn't the problem.",beats:["What matters more","When gear does matter","Proof: phone vs FX3"],broll:"Phone and FX3 clips side by side",len:"30s"},
{id:"th27",lvl:3,p:"Opinions",t:"Clubs should post fewer results",hook:"Clubs should post fewer results. Here's why.",beats:["Results get the fewest views","People follow people","What to post instead"],broll:"Player-focused clips",len:"30s"},
{id:"th28",lvl:3,p:"Opinions",t:"Trends: when to use them, when not to",hook:"Should your brand jump on trends?",beats:["When it works","When it looks desperate","My rule"],broll:"A trend you've done for Éanna",len:"35s"},
{id:"th29",lvl:3,p:"Opinions",t:"Slow-mo is overused",hook:"Slow-mo is overused in sport videos.",beats:["When it works","When it kills the energy","What to do instead"],broll:"Good and bad slow-mo examples",len:"30s"},
{id:"th30",lvl:3,p:"Opinions",t:"Irish sport deserves better content",hook:"Irish sport deserves to look as good as the Premier League.",beats:["The gap right now","Why it matters for clubs","What I'm trying to do"],broll:"Your best frames",len:"35s"},
// ---------- BREAKDOWNS & REACTIONS ----------
{id:"th31",lvl:2,p:"Breakdowns",t:"Green screen: breaking down a great sports ad",hook:"Why this sports ad works.",beats:["The hook","The sound","The ending"],broll:"Green-screen over screenshots (short clips only, credit the brand)",len:"40s"},
{id:"th32",lvl:2,p:"Breakdowns",t:"Breaking down my own viral post",hook:"Why this post got so many views.",beats:["The first second","The sound","Why people shared it"],broll:"Your best-performing reel",len:"35s"},
{id:"th33",lvl:2,p:"Breakdowns",t:"Rating a club's Instagram (with permission)",hook:"I rated a club's Instagram. Here's my honest feedback.",beats:["What's good","What I'd change","One quick fix"],broll:"Screenshots of their grid",len:"45s",ok:true},
{id:"th34",lvl:2,p:"Breakdowns",t:"Reacting to my old edits",hook:"Reacting to my first ever edits.",beats:["What I got wrong","What I still like","How I'd do it now"],broll:"Old edits in the corner",len:"40s"},
{id:"th35",lvl:2,p:"Breakdowns",t:"Breaking down a shot from the matchday film",hook:"One shot from my matchday film, broken down.",beats:["Lens and settings","Where I stood","The grade"],broll:"The shot frozen with call-outs",len:"30s"},
// ---------- Q&A AND BUSINESS ----------
{id:"th36",lvl:3,p:"Q&A & business",t:"Answering: how much should a club pay?",hook:"How much should a club pay for video?",beats:["What affects the price","What you get at each level","My starting point is on the site"],broll:"Packages page",len:"35s"},
{id:"th37",lvl:3,p:"Q&A & business",t:"Answering a question from my stories",hook:"Someone asked me this.",beats:["The question","The short answer","One example"],broll:"Story screenshot plus examples",len:"30s"},
{id:"th38",lvl:3,p:"Q&A & business",t:"How I price my work",hook:"How I decide what to charge.",beats:["Time","Kit and travel","Usage"],broll:"Text graphics",len:"35s"},
{id:"th39",lvl:3,p:"Q&A & business",t:"Why I take a deposit",hook:"I ask for a 50% deposit. Here's why.",beats:["It locks your date","It protects both of us","It's normal"],broll:"Booking page",len:"25s"},
{id:"th40",lvl:3,p:"Q&A & business",t:"Advice for someone starting out",hook:"If you want to film sport, start here.",beats:["Film your local club","Post every week","Ask for nothing at first, then charge"],broll:"Your early footage",len:"35s"}
];

// Website launch: promoting milomotionimages.ie to bring in clients. ph = phase, in posting order.
// f "Action" = not a post, a thing to do that gets the site in front of buyers.
var LAUNCH_PHASES = [
  ["before","Before launch","Build a bit of curiosity in the week before it goes live."],
  ["day","Launch day","One big push. Post, story and DMs on the same day."],
  ["week","Launch week","Keep it in front of people for 7 days, a different angle each day."],
  ["after","Ongoing","A steady drip that sends people to the site every week."],
  ["action","Get it in front of buyers","Not posts: the things that turn the site into enquiries."]
];
var LAUNCH = [
// ---------- BEFORE ----------
{id:"wl01",ph:"before",f:"Story",who:"claude",t:"Blurred sneak peek",hook:"Something new is coming this week.",how:"Blurred screenshot of the hero. Countdown sticker so followers get a reminder."},
{id:"wl02",ph:"before",f:"Reel",who:"claude",t:"Building my website in 15 seconds",hook:"I built my own website. Here's the whole process in 15 seconds.",how:"Fast screen recording: blank page to finished site. Ends on 'Live this week'."},
{id:"wl03",ph:"before",f:"Story",who:"claude",t:"Poll: what should the site show first?",hook:"Which should go at the top: matchday or grading?",how:"People who vote feel part of it and come back to see it."},
{id:"wl04",ph:"before",f:"Carousel",who:"claude",t:"Logo and look reveal",hook:"New look for Milo Motion Images.",how:"Logo, colours (darkroom black, tungsten), fonts, the tagline. Teaser for the site."},
// ---------- LAUNCH DAY ----------
{id:"wl05",ph:"day",f:"Reel",who:"claude",t:"Website tour reel",hook:"My new website is live. Here's a 20-second tour.",how:"Phone screen recording scrolling the site: hero, matchday film, log vs graded slider, packages. Link in bio."},
{id:"wl06",ph:"day",f:"Carousel",who:"claude",t:"Website tour carousel",hook:"I built a new website. Here's what's on it.",how:"Already saved as C38. One slide per section, last slide: milomotionimages.ie."},
{id:"wl07",ph:"day",f:"Story",who:"claude",t:"Link sticker story set",hook:"It's live.",how:"3 stories: hero screenshot, the slider, the booking page, each with a link sticker. Pin to a Highlight called Book."},
{id:"wl08",ph:"day",f:"Action",who:"you",t:"Update your bio",hook:"Matchday and brand video for Irish sport. Book below.",how:"Bio line plus milomotionimages.ie as the main link. Add the booking page as a second link."},
{id:"wl09",ph:"day",f:"Action",who:"you",t:"Send it to past clients",hook:"Hey, my new site's live, would love you to have a look.",how:"Personal message to Éanna, Daniel, District 22 and anyone you've filmed. Ask them to share the story if they like it."},
{id:"wl10",ph:"day",f:"Reel",who:"you",t:"Talking head: why I built it",hook:"I built a website so clubs can see exactly what they're getting.",how:"20s to camera. Your first talking-head post, a great reason to start. Claude cuts it."},
// ---------- LAUNCH WEEK ----------
{id:"wl11",ph:"week",f:"Reel",who:"claude",t:"The log vs graded slider",hook:"Drag the slider on my site and watch the grade change.",how:"Screen record dragging it slowly. Satisfying, sends people to try it."},
{id:"wl12",ph:"week",f:"Carousel",who:"claude",t:"Packages explained",hook:"Matchday packages from €150. Here's what you get.",how:"One package per slide, straight from the site. Final slide: book at milomotionimages.ie."},
{id:"wl13",ph:"week",f:"Reel",who:"claude",t:"The matchday film, full screen",hook:"This is the film on my homepage.",how:"Best 15 seconds of the matchday film. Caption: watch the full one on the site."},
{id:"wl14",ph:"week",f:"Carousel",who:"claude",t:"How booking works",hook:"Booking a shoot with me takes 2 minutes.",how:"Enquire, reply in 24-48 hours, 50% deposit, shoot, delivery in 5-7 working days."},
{id:"wl15",ph:"week",f:"Story",who:"claude",t:"Quiz: guess which client",hook:"Which client is this from?",how:"Frame from the site's clip viewer. Answer links to the site."},
{id:"wl16",ph:"week",f:"Reel",who:"claude",t:"Every clip on my site in 15 seconds",hook:"Everything on my website in 15 seconds.",how:"Fast montage of all the site's clips on the beat."},
{id:"wl17",ph:"week",f:"Carousel",who:"claude",t:"FAQ from the site",hook:"Questions clubs ask before booking me.",how:"From your FAQ section. Handles doubts before someone enquires."},
// ---------- ONGOING ----------
{id:"wl18",ph:"after",f:"Series",who:"claude",t:"End every post with the site",hook:"Book at milomotionimages.ie",how:"Small end card or last slide on every portfolio post. Same look every time."},
{id:"wl19",ph:"after",f:"Story",who:"claude",t:"Monthly 'booking now' story",hook:"Booking matchdays for December.",how:"Only when true. Link sticker to the booking page."},
{id:"wl20",ph:"after",f:"Reel",who:"claude",t:"New on the site",hook:"Just added this to my portfolio.",how:"Each time you add a project, post the clip and say it's on the site."},
{id:"wl21",ph:"after",f:"Carousel",who:"claude",t:"Case study, with link",hook:"How I filmed a season for an Irish basketball club.",how:"Brief, approach, result, then 'full case study on the site'. Needs a case study page later.",ok:true},
{id:"wl22",ph:"after",f:"Reel",who:"claude",t:"Comment BOOK for the link",hook:"Comment BOOK and I'll send you my packages.",how:"Every comment gets a DM with the site link. Turns views into leads."},
{id:"wl23",ph:"after",f:"Carousel",who:"both",t:"Testimonials, linked",hook:"What clubs say about working with me.",how:"When testimonials come in. Last slide: more on the site."},
{id:"wl24",ph:"after",f:"Reel",who:"you",t:"Talking head: what €150 gets your club",hook:"What €150 actually gets your club on game day.",how:"20s to camera with clips over it. Ends on the packages page."},
// ---------- GET IT IN FRONT OF BUYERS ----------
{id:"wl25",ph:"action",f:"Action",who:"both",t:"DM 10 clubs a week",hook:"Hi, I film matchday content for Super League clubs. Here's my work if useful.",how:"Short, personal DM with one relevant clip and the site. Basketball, GAA, rugby clubs around Dublin. Claude can draft each one."},
{id:"wl26",ph:"action",f:"Action",who:"you",t:"Google Business Profile",hook:"Milo Motion Images, videographer, Dublin",how:"Free. Shows you when people search 'videographer Dublin'. Add the site, photos and ask clients for reviews."},
{id:"wl27",ph:"action",f:"Action",who:"you",t:"Email signature",hook:"Milo Herbst · Milo Motion Images · milomotionimages.ie",how:"Set it once Zoho is live. Every email becomes an ad."},
{id:"wl28",ph:"action",f:"Action",who:"both",t:"LinkedIn launch post",hook:"I've launched Milo Motion Images.",how:"Club committees, marketing managers and sponsors are on LinkedIn. Claude drafts it in your voice."},
{id:"wl29",ph:"action",f:"Action",who:"both",t:"Email club PROs and sponsors",hook:"Short note with one clip and the site.",how:"Club PROs and the local businesses that sponsor them. Claude helps find and draft, you send."},
{id:"wl30",ph:"action",f:"Action",who:"you",t:"Ask clients to tag the site",hook:"Video by @milomotionimages",how:"Ask clients to credit you on posts you made. Every credit sends people your way."},
{id:"wl31",ph:"action",f:"Action",who:"both",t:"Spec video for a dream client",hook:"I made this for you, no strings.",how:"A short free concept for one club or brand you really want, sent with the site link."},
{id:"wl32",ph:"action",f:"Action",who:"you",t:"QR code on your kit and at games",hook:"Scan to see my work",how:"Small QR sticker on your camera case or a card at courtside. Parents, coaches and sponsors ask who you are."}
];

// Ideas saved in the Claude version on 28 Oct 2026. Used only the first time the site opens in a browser.
var SEED_SAVED=["b01", "b02", "b03", "b06", "c17", "c18", "c19", "c20", "c21", "c22", "c23", "c24", "c25", "c26", "c27", "c28", "c29", "c30", "c31", "c32", "c33", "c34", "c36", "c37", "c38", "c39", "c40", "c41", "c42", "c43", "c44", "e02", "e03", "e04", "e05", "f01", "f02", "f03", "g01", "g02", "g03", "g04", "g05", "g06", "g07", "h01", "h02", "h03", "h04", "h06", "k02", "k03", "k04", "k05", "l01", "l02", "l03", "l04", "l05", "l06", "m001", "m002", "m003", "m004", "m005", "m006", "m007", "m008", "m009", "m010", "m011", "m012", "m013", "m014", "m015", "m016", "m017", "m018", "m019", "m020", "m021", "m022", "m023", "m024", "m025", "m026", "m027", "m028", "m029", "m030", "m031", "m032", "m033", "m034", "m035", "m036", "m037", "m038", "m039", "m040", "m041", "m042", "m043", "m044", "m045", "m046", "m047", "m048", "m049", "m050", "m053", "m054", "m055", "m056", "m057", "m058", "m059", "m060", "m061", "m062", "m063", "m064", "m065", "m067", "m068", "m069", "m070", "m071", "m072", "m073", "m074", "m075", "m076", "m077", "m078", "m079", "m080", "m081", "m082", "m083", "m084", "m085", "m086", "m087", "m088", "m089", "m090", "m091", "m092", "m093", "m094", "m095", "m096", "m097", "m098", "m099", "m100", "m102", "m104", "m105", "m107", "m108", "m110", "m111", "m112", "m114", "m115", "m116", "m117", "m118", "m119", "m120", "o01", "o02", "o04", "o06", "r01", "r02", "r04", "r05", "r06", "r07", "r08", "r09", "r10", "r13", "r14", "r16", "r17", "r18", "r20", "r21", "r22", "r23", "r24", "r25", "r30", "s01", "s02", "s05", "s06", "s07", "t02", "t03", "t04", "t05", "t06", "w01", "w02", "w03", "w04", "w05", "x01", "x02", "x03", "x04", "x05", "x06", "y01", "y02", "y03", "y04", "y05", "y06"];

// Categories worked out from each idea's text, so new ideas sort themselves.
var CLIENT_RULES=[
  ['District 22',/District/i],
  ['Daniel Davey',/Davey|Daniel|podcast|Glenilen|Kinetica|Irish Life|Niall Scully|kitchen|nutrition coach|thumbnail/i],
  ['Éanna',/[ÉE]anna|Super League|walk-?out|Walkout|30 Seconds|Lott|Ireland AM|SL Inclusive|Jay's|Stats Overlay|stats overlay|Sunday Sets|Watch Party|squad|matchday film|S&C|livestream|club stream|dunk|crowd/i],
  ['Travel & drone',/Morocco|drone|Karl and Ava|travel/i],
  ['Coaching & 3x3',/3x3|coaching|Morgan|Josh|academy|drill/i]
];
var GOALS={Reach:['Tips','Lists & tiers','Gear','Grading','Editing','How I did it','Craft','Tips for clubs','Filmmaking tips','Opinions','Breakdowns'],
  Trust:['Proof','Why me','Story','BTS','Throwback','Story & why me','Start here'],
  Leads:['Growth','Website launch','Ideas for brands','Q&A & business']};
var NEEDS={claude:'Ready from my files',both:'Quick input from me',you:'Needs filming'};
var ALL=[];
(function(){
  IDEAS.forEach(function(i){i.kind='idea'});
  MORE.forEach(function(i){i.kind='more'});
  TALK.forEach(function(i){i.kind='talk';i.f='Talking head';i.who=i.lvl===1?'both':'you'});
  LAUNCH.forEach(function(i){i.kind='launch';i.p='Website launch';if(i.f==='Action')i.f='To do'});
  ALL=IDEAS.concat(MORE,TALK,LAUNCH);
  var byId={};ALL.forEach(function(i){byId[i.id]=i});
  ALL.forEach(function(i){
    var parent=i.from&&byId[i.from];
    var hay=[i.t,i.hook,i.src,i.how,i.broll,parent&&parent.src].join(' ');
    i.client='My brand';
    if(i.hold)i.client='Saleen';
    else for(var r=0;r<CLIENT_RULES.length;r++){if(CLIENT_RULES[r][1].test(hay)){i.client=CLIENT_RULES[r][0];break}}
    i.goal='Trust';for(var g in GOALS){if(GOALS[g].indexOf(i.p)>=0){i.goal=g;break}}
    i.needs=i.f==='To do'?'To do':NEEDS[i.who]||'Quick input from me';
    i.parent=parent||null;
  });
  window.BYID=byId;
})();
