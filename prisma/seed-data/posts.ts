import { PostCategory } from "@prisma/client";

export interface SeedPost {
  title: string;
  slug: string;
  contentEn: string;
  category: PostCategory;
  publishedAt: Date;
}

export const seedPosts: SeedPost[] = [
  {
    title: "Presentation",
    slug: "presentation",
    category: "INTRODUCTION",
    publishedAt: new Date("2023-07-27"),
    contentEn: `Hi i am Luis and welcome to my blog. This blog will be dedicated to my loves of life, my Bulgarian princess and philosophy. During this journey i will try to express all my thoughs, feelings and everything i can extract of my mind about this topics. So i hope everyone to enjoy this blog and of course to debate with me or express your opions. I am open to everything So Letsss goooo.`,
  },
  {
    title: "Start",
    slug: "start",
    category: "REFLECTION",
    publishedAt: new Date("2023-07-27"),
    contentEn: `Everything in life has a start, a starting point where a journey begins, it can be the university, a new job, a relationship or life itself.

So this post will go about the beginning, you never know what's next, our life circulates with a series of circumstances which without waiting can change the next day and give way to a new reality.

Maybe your mom dies or maybe you get a job opportunity you've been waiting for years for. The future has thousands of different life beginnings waiting for us, reality changes that totally change our perspective on life and that change the way we think, feel and act.

In my case, I don't know where to go back, since every effect, that is, every start, has a cause, so the start of something is preceded by something else, which in turn was started by something. In my case, I could say that the beginning of everything was going on Erasmus, but perhaps the beginning of everything was entering the university where I am now. Be that as it may, in my personal case that I want to explain here, everything starts through an interaction, in life we meet people and many times we never realize what those people could be for us in the future. How many people met without expectations of anything and ended up forming relationships that today bring joy to their hearts, that is my case.

When the clichés of love say that love is not sought, that love is found, I consider that it is a half-truth because I always believe that there are two points of view in everything, for me that love is found means that a person does not actively seeks love in people but rather lets it flow by opening its arms to everything be it love, friendship or rejection, it does not generate expectations and lets life circulate knowing that at some point it will find it therefore there is a search part but there is a part of understanding that another part is needed to create that love, I have always been with open arms to love and many times I asked myself why I did not feel that it was close but love does not warn when it arrives.

When you least expect it, he knocks on the door, like that friend you wait for hours and hours at your door and when you have already decided that he is not going to come, he just rings the bell, receiving you with a smile of: 'here I am'. Desperation and the constant search for something that cannot be sought produce great dissatisfaction in many people since they yearn for something that cannot be achieved by oneself but almost a miracle is needed for it to occur: the right person, the right time, the right conversation and a series of almost miraculous steps so that boom love is generated.

Also, love is not something that is created out of nowhere, love is worked on, examined and felt. Two people must discover each other and connect in a way that is not done with other people, at that moment love is born. The fantasies of Disney and Hollywood making believe that love is something that comes out of nowhere and that the destiny of two people is to be together with just one look are nonsense, love has to grow like a plant. You buy the seed that you like the most but if you don't water it or take care of it or take an interest in it or you don't like it the first leaf that grows, the plant will never grow. But if you dedicate affection, attention, curiosity,... you see how it grows and grows until it becomes love.

Maybe this speech is too cheesy and surely I have gone too far from the main topic of the post, sorry. As I wanted to express in this post, my beginnings with the most incredible woman I have ever met were really normal beginnings, it was not an instant connection or anything like that you tell your friends: "I looked into her eyes and fell in love". None of that, but it makes me reflect that perhaps at first you think that something is not for you, that something does not attract you, that you do not find interest in it, but all you need is to discover, learn and give something time to see if does the plant grow or not. We don't know what the future holds for us, giving up at the first change should not be an option who knows if the wind changes direction the next day.

And I think that for the moment this is enough, I don't know if reading this has been a tremendous beating and if you have understood something, I'm sure you haven't, but hey, it's my blog and I do what I want.

Bye bye.`,
  },
  {
    title: "Enferma",
    slug: "enferma",
    category: "REFLECTION",
    publishedAt: new Date("2023-07-28"),
    contentEn: `My beloved Maria is sick, well, sorry I'm wrong, her stomach hurts, it doesn't have to be from a disease. For example, my heart hurts, but I do not consider that I am sick.

The subject of diseases has always been something that did not cause me great curiosity, perhaps because of my few notions of biology, because I am not a recurring person with pain or viruses, or because there are other topics that fill my desire to learn more.

The thing is that a few years ago while shopping with one of my best friends, he bought me a book called 'The disease as a path' by Thorwald Derhlefsen and another gentleman.

This book pleasantly surprised me since I expected absolutely nothing from it, but its vision of diseases seemed curious to say the least, I liked the book so much that I gave it 5 stars on goodread, although I'm sure it would lower that rating.

The content of the book is based mainly on the fact that the origin of our illnesses are symptoms of something else, they are bodily expressions of evils that exist within us, of unresolved problems, of situations that we are not facing... and although clearly a person can have pain caused by your period or, for example, by a food infection, yes, there can be many diseases where the real symptom is this. This change of paradigm and vision left me deeply thoughtful and that is why I appreciate the book so much.

I don't know to what extent it's true and I don't think 100% of the cases are really like that, but listening to different opinions and theories gives you at least the option of thinking and analyzing what you hear makes more sense than it seems.

I am not going to go into detail about what the book refers to since if someone is interested, then read it, but I would like to reflect on the fact of the great influence that our thoughts and feelings have on our body.

Sometimes we are not aware of the connection between our mind and body, the Stoics were very aware of this connection and knew that working in each of the fields was beneficial for the development of the other, which is why if If you investigate, you will realize the incredible benefits that body work, sports, bodily efforts have for the mind, which are really beneficial and at the same time the cultivation of a healthy, free, positive, happy mind is all positivism for the body. We have more energy, the body is lighter, the pain is less intense,...

Pain is nothing more than a way of expressing that something is not going well and sometimes fatigue, pain and so on are the expression not of diseases but of our head. The issue is not solving or eliminating them, because we know that all repressed desire goes to the unconscious and will return. The issue of giving them another life, techniques such as writing, talking with friends or family about our problems that live trapped in us for fear of telling, produce tremendous liberation in our minds and in our bodies. Because we are capable of transforming that pain, that situation that is causing us so much damage into something more real, it is no longer in our head to be in the real world. Seneca says that "we suffer more in our thoughts than in real life" and that we have to be able to let things come as they come, so that I will suffer for something when this something arrives, I will already suffer at that moment, but saying to release the chains of our mental suffering and making it real in the world is a form of liberation and also helps us to feel much better.

The great punishment of humanity has always been loneliness, formerly banished, locked up without human contact, condemned as in different myths to wander the earth alone, like Sisyphus to climb the world all his life in solitude. All of them come because in the solitude of our head there is no other universe, without contact with life we are not part of anything, and all our fears, impulses, desires,... remain repressed in us with no opportunity for them to ever come out. Sharing problems, pain, experiences,... that must be the most painful thing for humans, I could comment on many more things about loneliness but I think I would deviate from the topic.

Another thing that we can observe is the huge number of people who, when they speak, talk about their problems, with their work, with their studies, with their family, with their partner,... Here two versions are disputed: the first is what I am speaking of that liberation, of taking problems out into the real world and not living in the endless well that is your mind, but it is also true that many people only seek attention, affection and nice words, but let's think positive.

Well, this is getting long, if you have any questions, do not agree on something or want to tell me something, leave it in the comments.

Also comment that I do not consider myself an intelligent person, or a philosopher or anyone superior to give lessons on how life is and about how people behave, I only express my personal reflections and in the vast majority of occasions I will make serious mistakes and I will be wrong.

Finally, dedicate a lot of strength to my beautiful and dear Maria, you know that you have what you need for me and that my love for you only grows day after day. I really feel that there are no words that truly express my feelings, you make me feel like the luckiest man every day and that is priceless.

bye`,
  },
  {
    title: "Night talks #1",
    slug: "night-talks-1",
    category: "LOVE_LETTER",
    publishedAt: new Date("2023-07-28"),
    contentEn: `Maria every time I hear this word everything changes. It is like the sound of the sea that she is capable of calming even the most broken soul.

What you give me and contribute to me cannot be measured at all, it would fall short and it would not be fair to reality.

Even though we are apart and your absence causes me a real sense of need, my heart flows like a river and is filled with love and compassion for a person who means everything to me.

My words may seem overwhelming, they may be shocking, but nothing can stop me from feeling this way.

I don't know why or how it happened, maybe it seems surreal or even exceeds the limits, but what does it matter what my love gives is nothing I'm still satisfied with.

I don't know how to express love, each one understands it in a way like an old man values his days more than a young man who sees himself with life ahead of him.

Maria has set my sights on the future before, she only thought about today and the future seemed overwhelming to me. Nothing was clear or anything for reference today. It was a whole sea of possibilities where I let myself be carried away by the current with which I woke up. but not now, the breeze changed and took a single direction in which I hope to reach my promised land, the one where my prince awaits me.

I don't know what will be of the future what we want is just the first step so that something can happen but in the end life rocks your ship in such a way that a bad decision can be your sentence

If someone had told me that I had fallen in love with the most charming girl this planet has ever known, I would not have believed it, who am I to deserve such a fate.

María, I love you madly, many times I wonder if so much love overwhelms you makes you feel that I am exceeding myself and that my feelings seem out of place to you, but what am I going to do? You conquered my mind and my heart and even being the strongest man in the world No one in the world can beat this.

I hope these words serve as a guide for the rest of your life with or without me. I know that life has reserved a special place for you and wherever it is, I will be happy for you and I will always carry you in this little heart that one day you decided so too. It was yours

I love you I love you and I love you

Luis`,
  },
  {
    title: "Diary of a Princess #1",
    slug: "diary-of-a-princess-1",
    category: "LOVE_LETTER",
    publishedAt: new Date("2023-07-31"),
    contentEn: `Dear Maria

I hope you never read this words.

Almost four months ago we started an adventure with no direction, a story with no ending where two people crossed in a sea of coincidences to unite the puzzle of their lifes.

This four months have been a lot more, i experimented every feeling possible, the initial crush, first discussions, doubts, sadness but mostly a plenty love feeling that put me in doubt abouy my own head.

Our love has been unique, a surprise box where every day i have been discovering a wonderful person who manage to conquer my heart, together we have been through beautiful, special, hard and intimate moments but always we manage to find the halo oh hope that conquered our relationship.

I always think about how i sailed lost in the sea of love, i did not know what i want nor what i was looking for but you appeared my beautiful princess with your bright smile and your amazing warmth to make me realise that what i wanted was you.

My thanks to you are nothing in how you change my life, you returned my faith in life and showed me what is to love and be loved, you change my way of feel.

With you time was gold, every second we were together i would not change for all the gold in the world because what you give me is something you can not buy with anything.

With you i learned, i learned geography, cooking, history but most important i learned to laugh, to cry and to be able to wake up grateful and full of love. You are the source who inspire me everyday to be greater. to be better than yesterday and never lose my spirit because the moral debt i have with you is impossible to find other way to pay.

Maria with you there is no other way that walking through life together, growing one next to the other and be there when somebody needs. Your values, your attitude, your way of see life inspire me to follow the virtue's life and i want you to be part of it.

Maria each day i ask myself if i am right in deliver you my heart, a valuable good that i have been protecting long time for fear op people not be able to take care as good as i do. But with you is more, i know you have the power to destroy it completly, to leave a hole in my heart that will follow me the rest of my life but i don't care i choose to give it to you, to take care of it with the biggest love you have. The love you make me feel is a no explication feeling and besides the suffer i can feel. Only to hear your voice, look your face and see your look one day more i risk everything even my own heart.

Luis

"A gift consists not in what is done or given, but in the intention of the giver or doer"`,
  },
  {
    title: "Night talks #2",
    slug: "night-talks-2",
    category: "NIGHT_TALK",
    publishedAt: new Date("2023-08-01"),
    contentEn: `Maria Maria, your name resounds in my head with the song I'm listening to hahaha so you can't concentrate!

Ok, ok, I find the inspiration to start, right now I am on a bus to Bilbao to see a person who I consider a brother to me and that makes me very happy because I have shared so many things with him who has always been in the best moments of life and in the worst ones too

During this journey I had planned to sleep but not between stops here not even a Koala sleeps but it is what it is, I am not complaining eh hahaha I will only complain about one thing today but I keep it to myself. Not being able to sleep I wonder what to do? Well, nothing better than writing for my followers in this wonderful blog

Today the moon is beautiful, bright round, it has a presence... that's how I like it and when I see it it's always like my mind lights up (now I don't see it but I remember like before yes, that's enough for me) I feel very lucky in life, clearly there are better and worse days but feeling grateful is vital to living happily

One of my favorite things in these long trips is to review old things, photos, conversations and also notes. In this case, I want to highlight a note that I wrote in June on one of the most difficult days for me, people will wonder if I wish there weren't happened, well, it cannot be that it did, but how did it happen? I keep what there is and I feel grateful because? Very easy when reviewing what I wrote that day I realize what marked that day in me, in many aspects. That day I realized how much I loved the most special person in me, I discovered my fragility and it taught me to love better and to understand myself better. That day was a very big change in me, I told myself that the pain would never overcome my love anymore, that day was like the resurgence of the phoenix.

When I read and remember the feelings a few tears fall, that day marked me and will continue to do so but not as something bad but as the beginning of something new that was born in me and that made me (I hope) a better boyfriend and person. As one of my favorite songs said, "you never know where you might end or start". For me it was a start, an awakening that has helped me to be more humble, more humane and to seek to continue working more on myself. That day I made many mistakes and hurt people I loved, I worried my friends and life lacked color but from this moment everything looks very different.

You never know what bad experience can become the great catalyst of your new life

We never know if the negative of today can be the good of tomorrow, that hope should guide us through the path of life. Those bad moments give meaning to our changes, to our lives.

Victories are made up of hundreds of defeats, that day you get fired from your job, you're screwed and you think the world has ended, but in a few months the offer of your dreams arrives, now it's not such a bad experience, eh? Life is always going to throw stones at us, the trick is to know that despite the pain I can get something good out of it.

If all these bad things in love hadn't happened to me, I would never have found the woman of my life. So I thank these moments for the lessons and for everything they brought into my life. I know it is a fanciful version of life and it may not conform to reality, but I live it like this, no one will take away my hope and the knowledge that, despite any disappointment, I will find something that motivates me to live more and better.

Finally I want to leave here the words I wrote that day to always keep them in mind when reading this fragment: (Wow now my favorite song starts playing)

I don't even know where to start, the last 16 hours have been possibly the worst 16 hours of my life and I resort to this as a lifeline in time of war, my personal life has taken too big a turn and part of the fault is mine, first because personally I have not been able to process what has happened, everything has been too much for me from being in the luxury bed to a situation in which I have not had the necessary personal tools to face it. I don't want this to end, I refuse to let it end for me and I think I haven't been able to understand her either, she knows that she has made mistakes and that the whole situation has been influenced by her decisions that have dragged us both to the end here but I can't blame her for what she's done, their friendship is important to her and the pain of having to send him home tomorrow is clearly something that really hurts her. I misbehaved in this regard and it really hurts.

My pain is too deep, I do not believe I deserve this and I feel that at the moment when I need the most support, the person who is most important to me is not there when I need it the most, I feel alone with my pain and I don't know how to process this. I don't want her to leave and all this only causes me pain. I just want to be with her, my feelings are so deep that not even words come out, I don't know how to express everything. I just want to smile again as I did before, enjoy and have my soul again to see the beauty that life awaits and that I await as a person.

All this pain will only serve me to grow to show myself that everything can come out of it and that with work, effort, communication and faith everything is possible.`,
  },
  {
    title: "Night Talks #3",
    slug: "night-talks-3",
    category: "NIGHT_TALK",
    publishedAt: new Date("2023-08-29"),
    contentEn: `My beloved vlog I had you very forgotten in my mind, how good that we meet again dear readers (ahem, Maria) in the face of a review of almost 25 days in which I have not written anything.

Now I come back stronger than ever, although knowing who I am, the truth is that tomorrow is a mystery. That if proud of how I am, every day I am more proud of myself not because I consider myself better than anyone or those kinds of thoughts but because I love myself as I am, that is me and nothing is going to make me different my aura, my soul are constituted in me and it is the way I live. I don't have to change it to please someone or because there are other better ways of doing things, how I do them in a unique way and with my own style is what makes me unique and that my life experience is only mine. Every day when I think about how I am, what I do, what I want, do I realize that I must be authentic with myself, I must not pretend, I must not want something that I really do not want, being true to oneself is the most complicated things in this life full of influences, expectations and comparisons where it seems that you have to reach certain standards and objectives, otherwise you are a failure and you are not worth it, but what is the use of pretending? What is the use of living a false life where you are not faithful to what you are looking for and your life mission. I always wanted money, fame, recognition and I always wanted to be someone else because nobody saw the value in myself, all of that changed not overnight, but with time and maturity one realizes that there are people who love you. You will value that being that you really are with all your value and the positive things of your being, there are people who see it and who are capable of making you feel that perhaps you are worth it. Am I unique, am I special and what? What's wrong, one must be able to appreciate all the good that life has one of my biggest mantras is that in every situation in life there is always something good and something bad, I always go for the good because I abandoned the bad a long time ago. People are negative because they are afraid of being disappointed, of thinking about the good and that later it will not turn out like this, it is understandable that you suffer less, but I am one of the good ones. I believe that in things if you put in the work and believe that they can be achieved, I need that good energy That good vibration of believing that it can be done and that we are going to achieve it, then life will say, but the mindset of yes, that it is going to be achieved, that we are going to do it excellent, is what moves a person, if you You don't really believe that you can do it, no one is going to do it for you.

All the great feats, the great things were achieved from the positivism of what we are going to achieve, think of everything that has been achieved in history since the victory in a battle 500 years ago or even the kid who wins the race in his neighborhood They believe that if they do their best they can, it does not mean that they will, but believing and yes that I can and I am going to achieve it is only the first step to achieve it. I'm not much of mystical beliefs in energies that if you think positively the universe will give you things or something like that, but I value being here at 12 in the morning I live in my room with relaxing music in the background freeing me, releasing all my soul in a Word sheet and wondering what for? Why not waste my time on something negative, on the no, why not go out there and trust and believe. I did not come to this life to transmit that shit, I came to give joy, I came to show others that you have to smile and that even in the most horrible situations you have to get ahead because there is always a reason for it, our battles make us stronger and give us the power to grow and become someone better for the future, that is achieved with a positive vision of life. I know that today I am wrong, that I am screwed and I reject it, NO. I accept that I'm wrong, but that doesn't take me away from my path, from my vision of moving forward step by step. We cannot stay stuck in something from our past, life goes on, there are opportunities out there for those who seek and want them and those who want them and those who believe that they can be achieved achieve this. Life is one and you have to live it, you have to take risks, make mistakes, fall into failures, get up, fight and achieve our personal success. When I see the life of simple people, Without motivation, without dreams, without objectives, without inspiration, I feel sorry. Let's go out, let's experiment, let's fail, let's try, let's grow as beings and above all live. Let's live unique experiences alone and together, let's see places that open our minds and inspire us to reach new levels of life, let's enjoy small and big moments. Every moment of our life is unique, what you are doing now is unique, maybe you will not be like this again in the rest of your life, we are not aware of where we are and what we are doing. It's time to build, to discover who we are and who we want to be. It's time to do crazy things that you're afraid of doing, what you really want to do, that there is a part of you that says no, that your family says no, that rationality says no, do it.

There is a very famous saying that says that people regret more what they do not do than what they do and it is so because you take something with you from what you do, an experience, a learning experience, a change in your life. Feel, live and give thanks for who we are and where we are, who would have told me 5 years ago that I would have lived what I have lived and I want more because out there and in us are the keys to reach that being that we want to be and of which we want to be proud.

I will end with the famous phrase Mark Twain, which I do not remember very well but what does it say. We have two lives, the second one begins when we discover that we have one. Let nothing stop you from what you really want, life has taught me that when you really want there is always a way.

Good night

Luis`,
  },
  {
    title: "LOVE",
    slug: "love",
    category: "LOVE_LETTER",
    publishedAt: new Date("2023-09-19"),
    contentEn: `A cloudy heart like a September 19 in Valencia is a good way to define my current state as a person if I can consider myself a person at the moment because if someone saw me it would seem that today could be my last day.

My heart in a fist, my soul broken into pieces and my mind trying to save myself from falling into a loop of madness from which it would be impossible to get out, I have no words to express how I feel I only know that I am not well, how do I know? Very easy, when I am bad I have different states, from being happy to being sad to a deeper sadness until ending up in a depressive state where I just wish that the world would end and I would stop suffering and so on in a circle.

So yes, I'm wrong. My thought is that we cannot eliminate the bad, we have to live with it, we have to learn to cope with it, it is the only thing we have, accept what happens to us and what is there, we are not going to change reality no matter how much it hurts us or no matter how much we Let's cry, sometimes I'm even so masochistic about myself that I enjoy suffering, it's so human to suffer. At this moment I think that my pain is unique, that no one can understand me, that no one suffers like me, but that is not the case. Pain for love is at the same time something very personal to each person because each one experiences it in such a special and so special way. different, being at the same time a pain that we all share that we all go through in our lives and that makes us all one because the vast majority of people on this planet have suffered this pain, they have gone through this, how beautiful love is and how much it makes us suffer.

I like to write about this, it makes me feel better by letting go of everything my soul wants to let go and letting myself go without thinking about any of the things that torment my being these infinite hours that seem to never end. Love is something unique in human existence, I believe that there is no feeling in us that is capable of so much in a person, love has a unique positive part of happiness, of giving yourself to another person, of commitment, of responsibility, of discipline, of enthusiasm, of feeling unique in the world and feeling that you have a very special person in your life to whom you can take care of yourself and give yourself. What a beautiful feeling and how blessed are those who are able to feel this love every day of their life, I have also felt like this, getting up every morning before my beloved and being able to admire her beautiful sleeping face for hours, analyzing each one of the parts of his beautiful face, parts that probably no one knows. Admire every small gesture, every caress, every smile he gives me, every good word. A unique connection that makes me vibrate and feel in heaven. That is what I feel and I am not being fair with everything I feel for her in these words, but if my feelings could be expressed with the senses the whole world would fall down due to the magnitude of them, that is why I try to show them in each of my gestures in my laughter, in my looks, in my touch, in my treatment, in my appreciation, in everything I can I try to show her all the love I profess for such a beautiful angel who is capable of filling my heart with the only thing that I need her to live.

Maria is my guardian angel, my entire home is dedicated to her, the photos of her, the memories all belong to her. I am a slave to his love, his sympathy, his beauty, his smile, I live in a world imprisoned by a person who fills me, who makes me feel alive and loved and who I know understands me and loves me like few others, but all this too. It causes pain in me. I have learned what it is to truly cry and suffer for someone. All my life I have escaped from creating ties that could hurt me, but with her I was willing to do anything, to risk everything I had to create a life with her, to show that I will always be by her side for her and to dream and trust that our love could do everything, but like the yin and the yang, like everything in life, everything has a dark side, a cross and in love it also exists What I have suffered for my angel is not written in any of the chapters of my life, what I have cried could fill all the rivers in which I have sailed, the brokenness of my heart is only comparable to the most inhuman pains that exist. Sometimes I wonder if it's worth it, if this is really necessary. Love is not supposed to be all pretty, fantasy, happiness. No, dear reader, love is suffering, I cry, sadness, disappointment, suffering, but there is something that makes it special, something that makes it different, something that only he has and that is love itself, that meaning that despite everything The negative is that love for the person, no one can take that away. Love is there, that beauty continues to exist and your soul, your heart knows it and when you look at the photo of that person and a tear of sadness falls on you, love is present.

I want you to know María that there is nothing that makes me happier than your smile, that I cannot look at our photos without a tear falling and that you have made me, you make me and you will make me the happiest man in the world. I think about you every moment, every hour, every minute, my mind is flooded with your smell, your touch, your happiness with me, that's why I wonder every moment what we are facing today, I feel like you everything. Our exterior would like ours not to work as if the world is trying to sabotage us, you know I think that life is testing us that it wants to know how far our love can go.

Maria I love you, обичам те

Luis`,
  },
  {
    title: "Maria",
    slug: "maria",
    category: "REFLECTION",
    publishedAt: new Date("2023-10-06"),
    contentEn: `I don't know what love is, this is the question that will never have an answer, love is not something, love is different for each person, therefore love does not have its own definition capable of being valid for all people. This question has been sowing in my head for days, because I really don't know what it is, it's not that I don't know how to love or see love in the world, it's not knowing what love means to me.

There are people who need to be in physical contact with their partner, others not so much in terms of feeling love, other people will need to feel the person close to them, feel that they are interested in them and that they are a priority, others will not.

In my relationship I feel loved but I don't feel like I have my partner's love, it's strange to explain, I don't like the way our relationship is, not because I feel bad towards her, my feelings are the same, it's the feeling that she doesn't reciprocate to my feelings. I feel like I'm giving 100% for this relationship, but I don't feel like she's giving it, mind you, I don't want to say that she doesn't want to, but I have the feeling that she doesn't give it and this leaves me empty, it leaves me with the feeling of that I am giving everything for someone who is not capable of giving it and I wonder what I do? If I love the person I must wait for them to reach the desired point in a moment, I must stop giving 100%, I must go looking for in another person what I think is what I want in my partner, I don't know what to do. I am not one to give up, I am one of those who have hope that things will change, improve over time, but if not, I must go out searching or I must remain in this hope, waiting. I have no idea, I don't know anything about love, I don't know, nor is it the love I want to receive. Do I want more attention from you? I don't know, maybe he gives it to me and it overwhelms me and this with many things. The only thing I can understand is that I do not feel loved, throughout my life I have not received positive messages from my family or my friends, on very few occasions and very few people have I really felt the value of people towards me in gestures and words, I have not received messages about what a good person you are, what a good friend, what a good son, what a good companion,... and on many occasions it is true that I have not deserved to be told this, but I I have done a lot for others, I have worked for others and I have always wanted to be a support for the people who love me but as the person I am and no one takes away from that, I value that people value what I do for them friends who I have been in bad times with them and I have not received a thank you.

When I feel that I give everything for a person and I feel not that it doesn't matter but the feeling that that person does not value what I do, I think that what produces the most negative feelings in me is that I have let many things pass in my relationship, I crossed barriers. That the me from 1 year ago would call myself crazy for leaving them and all for love and because I love a person, I think it is a noble reason to do it but I don't know to what extent it is really good for a person. I work, think and do everything based on the person I love because love is the most beautiful thing in the world and I don't think anything inspires me more in my life than love that's why I do it, which makes me feel like I love someone. person is a motivation to move forward, my problem is when I give that love but I don't feel it in return, it is very possible that I am the one who does not know how to interpret the love of others but my emotional needs will continue to be there.

As for Maria more specifically, I am going to express everything I have inside without attacks, without accusations, only from my point of view, without wanting to say this is the truth. My vision of love is that the person you love should be a priority in your life, not in a sense of leaving everything for them but in a more emotional sense, the person whose well-being you care about the most, the person you love. know everything, a person who, if you are in the middle of the most fun party of the year and calls you, you go outside and pick up the phone, that is the type of priority I am referring to, in Maria I don't feel that way, I feel that I am not really above other people in their lives in my humble opinion I feel that I am not number 1 and surely this concept is very selfish on my part but it is something that I carry with me and it is something that I feel that I cannot change so that lying. I feel that I am another friend for her, that yes we are in a relationship that we say I love you to each other but in her day to day life I feel that I am one more of her friends where we talk about how our days are and little else, we even have more than one week without talking on the phone. When we were together she always picked up her phone to talk to different people but my feeling is that if it were me calling she wouldn't pick it up, she would just tell me I can't talk now, I don't know if it's true I haven't tried it it's just like I see how things would be.

I don't want to talk to her as if we were just friends, about what we do in our day, I want more, I want to talk about what worries us, what we don't like, things that for someone else are stupid but for us not because every little detail Mind you, I want us to support each other, to be special to each other.

I don't like that she doesn't tell me things because she thinks it can hurt me, she keeps everything to herself and I think if she isn't able to share it with me she really has that trust and love in me to be able to do it, I have confessed to her Things I didn't do with close friends but not her.

Finally, I think that social networks have also been very negative in this whole aspect, seeing how all the women have a style of communication, of making plans, of making video calls, of even making online appointments, of seeing a greater commitment and love than The one I see in my relationship makes me feel like mine doesn't work because it's not like her. The question here is really my relationship is fine and is it the networks that make me believe in an idyllic relationship or is it my relationship that is not fine?`,
  },
  {
    title: "YEAR 2023",
    slug: "year-2023",
    category: "MILESTONE",
    publishedAt: new Date("2024-01-01"),
    contentEn: `Well, 2023 is over, another year that goes away and remains in our memories. I hope the Luis of the future remembers this year as well as I am able to at this moment because who knows what it may mean for the future. One of the things I like most about life is the uncertainty of the future. Who knows what this year can mark in my life. Maybe I have found things that will mark a before or after. Or maybe this year was kept in the trunk of the books. memories being another year but for a few hours while I write on this paper that will not happen.

It seems very romantic to me to take stock of the year and look back at all the experiences, people and situations that you have experienced this year, each change of year seems as if everything restarts as if it remained in the books and it is time to build the story of new so here is my chapter of the year 2023, I have the pleasure of trying to imagine how the me from a year ago would look like now and I think he would be very proud of me.

It has been an trying year, I have lived incredible experiences, I have met wonderful people and I have had the opportunity to continue growing as a person, to see new places, learn different cultures and be excited about a promising future. I consider that this year I have truly lived, the greatest experience was Erasmus, it was a great discovery for me, the opportunity to get to know a new place, new people... it did not disappoint me at all and it has greatly marked how the last ones developed. 6 months of the year. Today I have more confidence, I feel more sure of who I am and what I want, I can't wait to see what the future has in store for me. I have managed to continue with what helped me get out of the pit that was once my mind, I have improved physically and mentally, I continue reading as I like, investing my money and developing for my future. Here I must thank my girlfriend Maria, I am not going to say everything that she has meant this year because it would be too much, but just that she has opened my eyes in many things, she has taught me to love and to be a better person, sometimes You need beings of light in your life to help you realize your defects and to help you be better, she has been the great source of inspiration and knowledge this year and for the future I have learned a lot from her, I hope she is alone be the beginning of an endless story.

The year has also had its difficult moments, my father's cancer, the arguments at home, my problems in the relationship,... they are all moments that I do not remember fondly but that are also necessary sometimes these are the ones that help you to grow and face the future more decisively, as after a hard winter the spring sun always comes out. I do not consider that it has been the most difficult year, but it is not because the situations were not difficult or because I have known how to deal with it better, being more resilient and growing as a person makes us strong in the face of adversity, that should show us how year after year year we must be able to face them in a better way. There will be better and worse years, moments that will mark the rest of our existence and that will help us to be strong. When I have a good year like this I am always grateful, I know that life takes many turns and one must always be prepared for the worst but expect the worst. Better yet, it is the culmination of our existence. Here I think a lot about Maria, it has not been an easy year for her and I know that she will not remember it with the joy and emotion that perhaps the rest of us do, I do not try to change her vision, bad years exist but that should not make her lose her mind. hope that good times will come. There is a phrase that I really like that says that if you go into the cinema and see the beautiful ending of a movie and then watch it again in moments of difficulty, you will not be worried because you know that in the end everything will turn out well, well that's a bit of the life. We need that faith that the good times are there and if we are in them, be grateful for what we have, we all have it in our power to make our years something memorable and great. Let's not let external circumstances take away the hope and joy of life. life, let us be humble, grateful and kind, only then can we find that meaning in our lives that makes every year remembered with joy either for the good moments they give us or for the experiences and lessons we draw from them.

If I had to choose one moment from this year it would be: my first days in Romania, the new place and new people led me to that discomfort of something new that forces you to bring out the best in yourself, then I would choose the international party with Nacho since it was our first contact with local people and we had a great time. The first night I met Maria was also very special, the night she was sick and we talked alone in the Planetarium I also remember it very well but the trip to Deva was possibly the moment that I will remember best although Valencia and Bulgaria were also very good that trip It symbolized something else in our relationship. And at the end of the year when I started working it was a moment that has gone down in history.

All these experiences and more have greatly changed my vision of the world and my perspective of myself, I consider myself a more mature person, more aware and with more desire to discover the world, I have learned a lot and I have seen parts of myself that I didn't even I wasn't even aware of it. I think the key has been the more open mentality that I have acquired over the years and my desire to continue living and growing.

Strength and positivity are not traits like intelligence that one always carries with them, I have had many sad, negative moments, where I have felt very frustrated and sad but the key is hope for the future, I do not spend more than two sad moments because The joy of living and the faith in a better future always encourage me.

In difficult times I always think about the stupidity of existence, we really are beings who are here for a tiny amount of time in the entire existence of the world and really nothing is so important as to make you lose the illusion of this experience, I assume that there are moments good and some bad, with that I move forward.

The people who have been fundamental do not need anything special from me, I always try to make them see what they are for me and how they make my life something wonderful, this year I have not been able to say it in person to Maria but I am sure that very soon I will be able to tell her talk about how it has influenced my year.`,
  },
];
