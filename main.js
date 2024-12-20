// 101 Street Quotes
const QUOTES = [
  { id: 1, ot: "Journey of thousand miles start wit transport money." },
  {
    id: 2,
    ot: "Life na mathematics, if you no hustle, sapa go dey constant.",
  },
  { id: 3, ot: "Make you dey rest and recharge your body." },
  { id: 4, ot: "Show kindness to yourself and people around you." },
  { id: 5, ot: "See challenges as opportunity to grow." },
  { id: 6, ot: "Set clear goals wey you fit achieve." },
  { id: 7, ot: "Dey grateful every day." },
  { id: 8, ot: "Listen well before you talk." },
  { id: 9, ot: "Arrange yourself to reduce stress." },
  { id: 10, ot: "Build strong, better relationships." },
  { id: 11, ot: "Dey present for the moment wey you dey." },
  { id: 12, ot: "Learn from your mistakes." },
  { id: 13, ot: "Celebrate even small wins." },
  { id: 14, ot: "Drink water and chop better food." },
  { id: 15, ot: "Find time do wetin dey make you happy." },
  { id: 16, ot: "Dey waka comot your comfort zone sometimes." },
  { id: 17, ot: "No fear to ask for help when you need am." },
  { id: 18, ot: "Dey think positive always." },
  { id: 19, ot: "Plan your day before you sleep." },
  { id: 20, ot: "Breathe well when stress wan catch you." },
  { id: 21, ot: "Surround yourself with positive vibes." },
  { id: 22, ot: "Read book to learn new things." },
  { id: 23, ot: "Help your community." },
  { id: 24, ot: "Trust the timing of your life." },
  { id: 25, ot: "Get patience with yourself and others." },
  { id: 26, ot: "Learn to say “no” without feeling bad." },
  { id: 27, ot: "Spend time for nature to clear your head." },
  { id: 28, ot: "Dey listen well well when people dey talk." },
  { id: 29, ot: "Ask for feedback so you fit improve." },
  { id: 30, ot: "Focus on solution, no be problem." },
  { id: 31, ot: "No give up; keep at it." },
  { id: 32, ot: "Take care of your mental health." },
  { id: 33, ot: "Dey laugh often and enjoy small small things." },
  { id: 34, ot: "Follow your passion with all your heart." },
  { id: 35, ot: "Dey honest with yourself and others." },
  { id: 36, ot: "Value quality over quantity for relationships." },
  { id: 37, ot: "Take time reflect on yourself." },
  { id: 38, ot: "Focus on things wey matter pass." },
  { id: 39, ot: "Find lessons for your failures." },
  { id: 40, ot: "Learn how to adapt to change." },
  { id: 41, ot: "Invest in your personal growth." },
  { id: 42, ot: "Accept responsibility for wetin you do." },
  { id: 43, ot: "Leave wetin you no fit control." },
  {
    id: 44,
    ot: "Start your morning with a routine wey go help you succeed.",
  },
  {
    id: 45,
    ot: "Focus on wetin you fit give, no be just wetin you fit collect.",
  },
  { id: 46, ot: "Take break so you no go burn out." },
  { id: 47, ot: "Dey open to new ideas and perspectives." },
  { id: 48, ot: "Work smart, no be say you go just work hard." },
  { id: 49, ot: "Growth no be today-today thing; e dey take time." },
  { id: 50, ot: "Dey careful with your words and actions." },
  { id: 51, ot: "Develop habits wey go help you reach your goals." },
  { id: 52, ot: "Treat people the way you want make dem treat you." },
  { id: 53, ot: "Enjoy the journey, no be only the destination." },
  { id: 54, ot: "Learn how to forgive yourself and others." },
  { id: 55, ot: "Keep journal to write your thoughts and progress." },
  { id: 56, ot: "Believe for yourself say you fit do am." },
  { id: 57, ot: "Hold on to your values strong strong." },
  { id: 58, ot: "No dey compare yourself with others." },
  { id: 59, ot: "Celebrate other people achievements." },
  { id: 60, ot: "Manage your time well." },
  { id: 61, ot: "Dey proactive, no just dey wait react." },
  { id: 62, ot: "Take care of your body well well." },
  { id: 63, ot: "Focus on wetin really matter." },
  { id: 64, ot: "Dey intentional with wetin you dey do." },
  { id: 65, ot: "Embrace uncertainty, no fear am." },
  { id: 66, ot: "Find mentors and role models to learn from." },
  { id: 67, ot: "Humble yourself and ready to learn." },
  { id: 68, ot: "Show empathy for everything you dey do." },
  { id: 69, ot: "Create vision for your future." },
  { id: 70, ot: "Be proud of wetin you don achieve." },
  { id: 71, ot: "Dey generous with your time and resources." },
  { id: 72, ot: "Stay grounded when wahala come." },
  { id: 73, ot: "Dey keep your promises." },
  { id: 74, ot: "No fear to start afresh." },
  { id: 75, ot: "Learn to enjoy the process." },
  { id: 76, ot: "Take risks, but think am well before you do." },
  { id: 77, ot: "Dey learn till you grow old." },
  { id: 78, ot: "Never lose your sense of wonder." },
  { id: 79, ot: "Respect other people opinions." },
  { id: 80, ot: "Take responsibility for your own happiness." },
  { id: 81, ot: "Discipline yourself for your daily life." },
  { id: 82, ot: "Dey mindful of how you dey spend your money." },
  {
    id: 83,
    ot: "Focus on creating memories, no be just to gather things.",
  },
  { id: 84, ot: "Learn to control your emotions well." },
  { id: 85, ot: "Stay curious about wetin dey around you." },
  { id: 86, ot: "Encourage people make dem be their best." },
  { id: 87, ot: "Take the first step to pursue your dreams." },
  { id: 88, ot: "Be the positivity wey people need." },
  { id: 89, ot: "Create system wey go support your goals." },
  { id: 90, ot: "Trust yourself and your instincts." },
  { id: 91, ot: "Learn to let go of grudges." },
  { id: 92, ot: "Be consistent with wetin you dey do." },
  { id: 93, ot: "Focus on wetin you fit control." },
  { id: 94, ot: "Celebrate even small progress." },
  { id: 95, ot: "Get patience for the process." },
  { id: 96, ot: "Value experiences more than material things." },
  { id: 97, ot: "Learn from people wey dey inspire you." },
  { id: 98, ot: "Keep growth mindset for everything you do." },
  { id: 99, ot: "Take time to appreciate the present moment." },
  { id: 100, ot: "Always dey strive to improve yourself." },
  { id: 101, ot: "Focus on progress, no be perfection." },
  { id: 102, ot: "No use your last card take impress people wey no care." },
  { id: 103, ot: "Person wey no hustle no suppose dey complain." },
  { id: 104, ot: "If you no fit endure, you no go fit enjoy." },
  { id: 105, ot: "Big boys no dey shout, na moves dem dey make." },
  { id: 106, ot: "No carry another person mata for head like gala." },
  { id: 107, ot: "Make sure say your vibe match your hustle." },
  { id: 108, ot: "If plan A no work, na alphabet full ground." },
  { id: 109, ot: "No dey reason wetin no concern your pocket." },
  { id: 110, ot: "Your circle fit dey hold you back, check am." },
  { id: 111, ot: "Loyalty no be by mouth, na by action." },
  { id: 112, ot: "Free things fit cost pass wetin you buy." },
  { id: 113, ot: "No use today play if you want chop tomorrow." },
  { id: 114, ot: "Your vibe fit dey scare people wey no get vision." },
  { id: 115, ot: "Keep your plans coded until e don click." },
  { id: 116, ot: "No dey expect respect if you no dey give am." },
  { id: 117, ot: "Wahala no dey finish, choose your own wisely." },
  { id: 118, ot: "Focus on your lane, traffic dey for other people side." },
  { id: 119, ot: "Person wey no support you no deserve your energy." },
  { id: 120, ot: "Street no soft, but sense go help you survive." },
  { id: 121, ot: "Better no dey rush, e go come when e suppose come." },
  { id: 122, ot: "No be everything wey shine na gold." },
  { id: 123, ot: "No let cruise carry you go where you no suppose dey." },
  { id: 124, ot: "If you no wise, person go use you play." },
  { id: 125, ot: "Success no dey come from noise, na focus work am." },
  { id: 126, ot: "No be who first start dey always finish first." },
  { id: 127, ot: "Street OT no complete if you no dey loyal to yourself." },
  { id: 128, ot: "Make sure say your hustle dey legit, peace sweet pass." },
  {
    id: 129,
    ot: "Your network fit be your net worth, choose people wisely.",
  },
  { id: 130, ot: "If you dey fear failure, success go dey far from you." },
  { id: 131, ot: "No dey loud your move, result go speak." },
  {
    id: 132,
    ot: "No let social media tension you, real life pass that one.",
  },
  { id: 133, ot: "Person wey no dey learn no go fit grow." },
  { id: 134, ot: "No dey compete with who no even notice you." },
  { id: 135, ot: "Street no soft, but na sense go make am smooth." },
  { id: 136, ot: "If you wan enjoy, you go gats endure first." },
  { id: 137, ot: "Run your own race, no follow crowd." },
  { id: 138, ot: "No borrow problem wey no concern you." },
  { id: 139, ot: "Keep your enemies close, but your money closer." },
  { id: 140, ot: "No use your energy follow person wey no send you." },
  { id: 141, ot: "Street OT no complete if you no get patience." },
  { id: 142, ot: "If you no get plan, you go follow another person plan." },
  { id: 143, ot: "No let your background keep you for ground." },
  { id: 144, ot: "No let temporary setback make you give up." },
  { id: 145, ot: "Hustle wey go pay, no be every hustle." },
  { id: 146, ot: "Your mouth fit put you for trouble, talk less." },
  { id: 147, ot: "Keep your head down, but your game high." },
  { id: 148, ot: "No dey compare your chapter 1 with person chapter 10." },
  { id: 149, ot: "The way you treat people fit be your real worth." },
  { id: 150, ot: "If e too good to be true, check am well." },
  {
    id: 151,
    ot: "Your environment fit shape your mindset, choose wisely.",
  },
  { id: 152, ot: "Hustle dey sweet, but results dey sweeter." },
  { id: 153, ot: "No go enter lane wey no be your size." },
  { id: 154, ot: "Plan well, or regret go dey plan for you." },
  { id: 155, ot: "No dey too quick to trust." },
  { id: 156, ot: "No use your hand block your own blessing." },
  { id: 157, ot: "Street OT no complete if you no dey grateful." },
  { id: 158, ot: "No let your ego stop you from learning." },
  { id: 159, ot: "People go believe you if your actions match your talk." },
  { id: 160, ot: "Money no be everything, but e dey sweet life." },
  { id: 161, ot: "Stay real, no fake am for anybody." },
  { id: 162, ot: "No be everybody wey smile with you be your guy." },
  { id: 163, ot: "Small small, na im e dey enter pot." },
  {
    id: 164,
    ot: "If you no believe for yourself, nobody go believe for you.",
  },
  { id: 165, ot: "Use wetin you get to get wetin you want." },
  { id: 166, ot: "Street OT: Learn to observe more, talk less." },
  { id: 167, ot: "Hustle no dey finish, but rest no go kill you." },
  { id: 168, ot: "Invest in wetin go bring better return tomorrow." },
  { id: 169, ot: "If you too greedy, you fit lose everything." },
  { id: 170, ot: "No go chop wetin your hand never fit reach." },
  { id: 171, ot: "Dey respect people, no matter their level." },
  { id: 172, ot: "If e no work today, no mean say e no go work tomorrow." },
  { id: 173, ot: "You go gats bend sometimes to stand strong later." },
  {
    id: 174,
    ot: "No dey explain your dream to people wey no understand am.",
  },
  { id: 175, ot: "Person wey no dey take risk no go fit gain." },
  { id: 176, ot: "Keep your mindset sharp; street no be playground." },
  { id: 177, ot: "No let person downgrade you, know your worth." },
  { id: 178, ot: "Street OT: Na results dem dey respect pass noise." },
  { id: 179, ot: "No use today play; na tomorrow you go regret am." },
  { id: 180, ot: "No carry fake vibe enter real zone." },
  { id: 181, ot: "Street no soft, but steady hustle go keep you afloat." },
  { id: 182, ot: "Work on yourself, make your life no be mistake." },
  { id: 183, ot: "Your vibe fit intimidate people, but keep am real." },
  { id: 184, ot: "If you too slow, opportunity go pass you by." },
  { id: 185, ot: "Trust your hustle, but no forget to dey smart." },
  { id: 186, ot: "No give up; your time go come." },
  { id: 187, ot: "Be humble; na street we all dey." },
  { id: 188, ot: "Your attitude fit open door wey money no fit open." },
  { id: 189, ot: "Street OT: Dey move with purpose, no just waka." },
  { id: 190, ot: "Respect yourself; na so people go respect you." },
  { id: 191, ot: "No depend on luck; create your own opportunity." },
  { id: 192, ot: "Street smart pass book smart for survival sometimes." },
  { id: 193, ot: "No follow crowd; create your own lane." },
  { id: 194, ot: "Stay focused; distraction no dey help hustle." },
  { id: 195, ot: "Na street OT: Patience fit save you from wahala." },
  { id: 196, ot: "Make sure say your hand clean for wetin you dey do." },
  { id: 197, ot: "No let frustration push you do wetin you go regret." },
  { id: 198, ot: "Dey learn new skills; e fit be your jackpot tomorrow." },
  { id: 199, ot: "Dey loyal to people wey dey loyal to you." },
  {
    id: 200,
    ot: "No put all your energy for noise; results na im matter.",
  },
  { id: 201, ot: "Make your presence matter even when you no dey around." },
  { id: 202, ot: "Street OT: Grind dey necessary, but balance na key." },
];
const broke = [
  { id: 1, joke: "I’m so broke, I can't even pay attention." },
  { id: 2, joke: "I don't need a wallet; my pockets are already empty." },
  {
    id: 3,
    joke: "My bank account is like a horror movie: a lot of screaming and nothing to look at.",
  },
  {
    id: 4,
    joke: "I’m not saying I’m poor, but my idea of a meal is ‘Do you want fries with that?’",
  },
  {
    id: 5,
    joke: "I’m living paycheck to paycheck, but I’m too broke to even check my paycheck.",
  },
  {
    id: 6,
    joke: "I don’t have a dollar to my name, but at least my ego’s rich.",
  },
  {
    id: 7,
    joke: "My financial advisor told me I have an amazing budget… it’s called ‘no budget.’",
  },
  {
    id: 8,
    joke: "I’m so broke, my credit card declined my request for a nap.",
  },
  {
    id: 9,
    joke: "Being broke is a lifestyle choice. Unfortunately, it's not a very fun one.",
  },
  {
    id: 10,
    joke: "My money’s like my friends—hard to find and even harder to keep.",
  },
  {
    id: 11,
    joke: "I tried to pay for something with my smile, but apparently that doesn’t work at the bank.",
  },
  {
    id: 12,
    joke: "I’m so broke, my change jar is just a sad little paperclip.",
  },
  {
    id: 13,
    joke: "I wanted to go on a diet, but my wallet says it’s already starving.",
  },
  { id: 14, joke: "I’m not poor, I’m just financially challenged." },
  {
    id: 15,
    joke: "I’m so broke, I can’t even afford the ‘free’ samples at the grocery store.",
  },
  {
    id: 16,
    joke: "I’m not poor, I’m just in an exclusive financial club… and the membership fee is impossible to pay.",
  },
  {
    id: 17,
    joke: "I’m so broke, I can’t even afford to make a phone call for help.",
  },
  { id: 18, joke: "My wallet’s so empty, it echoes when I open it." },
  {
    id: 19,
    joke: "I wanted to buy a vacation, but my bank account only offers staycations.",
  },
  {
    id: 20,
    joke: "I’m so broke, my idea of a shopping spree is walking through the clearance aisle.",
  },
  {
    id: 21,
    joke: "My bank account and I have one thing in common: we both need some serious help.",
  },
  {
    id: 22,
    joke: "I’m so broke, I thought about selling my soul, but the market’s flooded.",
  },
  {
    id: 23,
    joke: "I don’t know what’s worse: my credit score or my dating life.",
  },
  {
    id: 24,
    joke: "I’m so broke, my financial plan involves hoping for a miracle.",
  },
  { id: 25, joke: "I’m not broke, I’m just living on ‘creative funding.’" },
  {
    id: 26,
    joke: "I don’t have a credit card, but I do have a ‘Sorry, I’m Out of Funds’ card.",
  },
  {
    id: 27,
    joke: "I’m so broke, even my imaginary friend’s charging me rent.",
  },
  {
    id: 28,
    joke: "My life is like a reality show: I’m constantly living on a budget.",
  },
  {
    id: 29,
    joke: "I’m so broke, I can’t even afford to fake it 'til I make it.",
  },
  {
    id: 30,
    joke: "I’m living proof that the more you spend, the less you have.",
  },
  { id: 31, joke: "I’m not poor, I’m just ‘wealth-challenged.’" },
  {
    id: 32,
    joke: "I’m so broke, I’m considering starting a GoFundMe for my next meal.",
  },
  { id: 33, joke: "My wallet’s on a permanent vacation." },
  { id: 34, joke: "I’m so broke, even my pockets have empty promises." },
  {
    id: 35,
    joke: "I’m so broke, I’m not even in the red—I’m in the gray.",
  },
  {
    id: 36,
    joke: "I tried to buy something on sale, but my credit card just laughed at me.",
  },
  {
    id: 37,
    joke: "I’m not living paycheck to paycheck, I’m living ‘Wait a second, did I just get paid?’ to ‘Where did it go?’",
  },
  {
    id: 38,
    joke: "I’m so broke, I can’t even afford to say ‘goodbye’—it’s a ‘good luck’ instead.",
  },
  { id: 39, joke: "I’m so broke, I’m trying to sell my dreams on eBay." },
  {
    id: 40,
    joke: "My wallet is like a phone with no battery—it’s totally useless.",
  },
  {
    id: 41,
    joke: "I’m so broke, I can’t afford a subscription to Netflix's 'Free Trial'.",
  },
  {
    id: 42,
    joke: "I’m not broke; I’m just doing a really intense savings challenge.",
  },
  { id: 43, joke: "My bank account balance is a unicorn—nonexistent." },
  {
    id: 44,
    joke: "I’m so broke, I thought about selling my last pair of socks, but they don’t even have enough value to be worth it.",
  },
  {
    id: 45,
    joke: "I’m not poor; I’m just experiencing an extended vacation from wealth.",
  },
  {
    id: 46,
    joke: "I’m so broke, I think my bank account is allergic to deposits.",
  },
  {
    id: 47,
    joke: "My money is like a ghost: it disappears without a trace.",
  },
  {
    id: 48,
    joke: "I’m so broke, my plans for the future involve a lot of wishful thinking.",
  },
  {
    id: 49,
    joke: "I’m not poor, I’m just on a budget that’s stuck in a perpetual state of ‘almost there.’",
  },
  {
    id: 50,
    joke: "I’m so broke, my PayPal account sends me ‘Are you sure you want to do this?’",
  },
  { id: 51, joke: "My financial advice? Don’t follow me. I’m lost too." },
  {
    id: 52,
    joke: "I’m so broke, I’m trying to negotiate with my rent like it’s a yard sale.",
  },
  {
    id: 53,
    joke: "I’m not poor; I’m just living in a ‘tight budget’ mansion.",
  },
  { id: 54, joke: "I’m so broke, even my thoughts are on layaway." },
  {
    id: 55,
    joke: "I don’t have money for a date, but I do have enough for a walk in the park… if it’s free.",
  },
  {
    id: 56,
    joke: "I’m so broke, I only carry around enough change to buy a fortune cookie, but not the fortune.",
  },
  {
    id: 57,
    joke: "I’m so broke, my credit card’s only job is to collect dust.",
  },
  { id: 58, joke: "I’m not broke, I’m just financially adventurous." },
  {
    id: 59,
    joke: "I’m so broke, I’m using my last dollar to write this joke.",
  },
  { id: 60, joke: "I’m so broke, I can’t even pay my respects." },
  {
    id: 61,
    joke: "I’m so broke, I thought I heard coins rattling in my pocket, but it was just the sound of my hopes and dreams falling apart.",
  },
  {
    id: 62,
    joke: "I’m not poor, I’m just temporarily without money while I wait for my next big break.",
  },
  {
    id: 63,
    joke: "I’m so broke, I have to borrow a dollar just to say ‘goodbye.’",
  },
  { id: 64, joke: "I’m so broke, I had to cancel my plans to be rich." },
  { id: 65, joke: "I’m not poor; I’m just experiencing a wealth drought." },
  {
    id: 66,
    joke: "I’m so broke, I’m trying to make a meal out of a prayer and some hope.",
  },
  {
    id: 67,
    joke: "I’m so broke, my financial status has its own theme song: ‘The Struggle Is Real.’",
  },
  {
    id: 68,
    joke: "I’m not broke, I’m just having a long-term savings plan… that’s yet to begin.",
  },
  { id: 69, joke: "I’m so broke, I can’t even afford a cup of ambition." },
  {
    id: 70,
    joke: "I’m so broke, my bank account sends me ‘Are you sure you want to keep going?’",
  },
  {
    id: 71,
    joke: "I’m so broke, I’m considering taking a second job as a fortune teller—because I sure can’t predict my financial future.",
  },
  {
    id: 72,
    joke: "I’m so broke, my most valuable asset is a can of beans.",
  },
  {
    id: 73,
    joke: "I’m not poor; I’m just living like I’m in an episode of ‘Survivor: Budget Edition.’",
  },
  {
    id: 74,
    joke: "I’m so broke, I need a GoFundMe just to afford a cup of coffee.",
  },
  {
    id: 75,
    joke: "I’m so broke, even my plans for the weekend are on layaway.",
  },
  { id: 76, joke: "My credit card is maxed out and my spirits are too." },
  {
    id: 77,
    joke: "I’m so broke, I think about investing in stocks, but the only stock I have is my own hope.",
  },
  { id: 78, joke: "I’m so broke, even my thoughts are on sale." },
  {
    id: 79,
    joke: "I’m so broke, I couldn’t even afford to buy this joke a punchline.",
  },
  {
    id: 80,
    joke: "I’m so broke, I’m waiting for my bank to start charging me rent for existing.",
  },
  {
    id: 81,
    joke: "I’m so broke, I can’t even make cents out of my situation.",
  },
  {
    id: 82,
    joke: "I’m so broke, I’m not sure if I’m still working or if I’m just surviving.",
  },
  { id: 83, joke: "I’m so broke, even my budget needs a budget." },
  {
    id: 84,
    joke: "I’m so broke, my credit card is collecting dust like it’s its full-time job.",
  },
  {
    id: 85,
    joke: "I’m so broke, I can’t afford to be shocked by my bank account anymore.",
  },
  {
    id: 86,
    joke: "I’m so broke, I’m starting to consider a second job in my dreams.",
  },
  {
    id: 87,
    joke: "I’m so broke, I’ll need a miracle to afford the miracle.",
  },
  {
    id: 88,
    joke: "I’m so broke, I’m considering selling my thoughts for spare change.",
  },
  {
    id: 89,
    joke: "I’m so broke, I’m thinking of putting my thoughts on eBay just to make a little cash.",
  },
  {
    id: 90,
    joke: "I’m so broke, I’ve started to refer to my change jar as my ‘retirement fund.’",
  },
  {
    id: 91,
    joke: "I’m so broke, I can’t even buy my way into a better attitude.",
  },
  {
    id: 92,
    joke: "I’m so broke, I’m making my own savings account out of wishful thinking.",
  },
  {
    id: 93,
    joke: "I’m so broke, I just realized I’ve been giving ‘credit’ to my dreams.",
  },
  {
    id: 94,
    joke: "I’m so broke, even my piggy bank is filing for bankruptcy.",
  },
  { id: 95, joke: "I’m so broke, I have to borrow money from myself." },
  {
    id: 96,
    joke: "I’m so broke, I’m considering asking my credit card company for a loan.",
  },
  { id: 97, joke: "I’m so broke, I’m using my imagination to pay bills." },
  {
    id: 98,
    joke: "I’m so broke, my financial future has been delayed indefinitely.",
  },
  { id: 99, joke: "I’m so broke, even my promises are in debt." },
  {
    id: 100,
    joke: "I’m so broke, even my positive thinking has gone into foreclosure.",
  },
];
const quote = document.querySelector("[data-quote]");
const button = document.querySelector("[data-button]");
let index = (QUOTES.length * Math.random() * Math.random()).toFixed(0);
let brokeIndex = (broke.length * Math.random() * Math.random()).toFixed(0);
quote.innerText = broke[brokeIndex].joke;
button.addEventListener("click", (e) => {
  e.preventDefault();
  index = (QUOTES.length * Math.random() * Math.random()).toFixed(0);
  brokeIndex = (broke.length * Math.random() * Math.random()).toFixed(0);
  quote.innerText = broke[brokeIndex].joke;
});
