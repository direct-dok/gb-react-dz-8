const defaultState = {
  chats: [{
      id: 1,
      status: 'Death threats, suspicious roadblocks, missing witnesses and moved bodies revealed in leaked documents obtained exclusively by CNN',
      name: 'Alex',
      avatar: '/img/avatar/1.jpg',
      message: 'Even though Israel is a small country it is always in the news.'
    },
    {
      id: 2,
      status: 'Drinking a little each week protects your heart if you have a cardiovascular condition, study finds',
      name: 'Noah',
      avatar: '/img/avatar/2.jpg',
      message: 'The news continues to report on Jews moving to Israel, on the technology invented there, but also on conflict, wars and tensions with surrounding people.'
    },
    {
      id: 3,
      status: '"This is not the general population -- the study applies to people who have already had something happen that relates to cardiovascular health," ',
      name: 'Liam',
      avatar: '/img/avatar/3.jpg',
      message: 'Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known'
    },
    {
      id: 4,
      status: 'Gakidou, who is senior director of organizational development and training at the Institute for Health Metrics and Evaluation at the University of Washington.',
      name: 'Mason',
      avatar: '/img/avatar/4.jpg',
      message: 'This ancient man is Abraham (also known as Abram).'
    },
    {
      id: 5,
      status: 'And what they find is that if you continue to drink after you\'ve had a cardiac event, it\'s not that bad for you',
      name: 'Elena',
      avatar: '/img/avatar/5.jpg',
      message: 'We can take his story seriously because the places and cities he visited are mentioned in other old writings.'
    },
    {
      id: 6,
      status: 'When compared with people who do not drink at all, the study found drinking up to 105 grams of alcohol each week',
      name: 'Vika',
      avatar: '/img/avatar/6.jpg',
      message: 'I will make you into a great nation, and I will bless you'
    },
    {
      id: 7,
      status: 'the equivalent of just over a bottle of wine or a six-pack of medium strength beer -- appeared to protect people who had already',
      name: 'Anatoly',
      avatar: '/img/avatar/7.jpg',
      message: 'I will make your name great, and you will be a blessing'
    },
    {
      id: 8,
      status: 'That\'s much less than the recommended upper drinking limit set by the World Health Organization for men and women',
      name: 'Emily',
      avatar: '/img/avatar/8.jpg',
      message: 'Most of us wonder if there is a God and if He really is the God of the Bible.'
    },
    {
      id: 9,
      status: 'However, the most benefit came from drinking less than half that amount, according to the study published Monday in the journal BMC Medicine.',
      name: 'Lily',
      avatar: '/img/avatar/9.jpg',
      message: 'The earliest copy of Genesis found in the Dead Sea Scrolls is dated 200-100 B.C.'
    },
    {
      id: 10,
      status: 'Our findings suggest that people with CVD (cardiovascular disease) may not need to stop drinking in order to prevent additional heart',
      name: 'Sophie',
      avatar: '/img/avatar/10.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 11,
      status: 'But this finding would not apply to everyone, as drinking alcohol raises the risk for certain diseases such as cirrhosis',
      name: 'Alice',
      avatar: '/img/avatar/11.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 12,
      status: 'If your main health condition risk is cancer, then the safest level of drinking is probably zero',
      name: 'Amelia',
      avatar: '/img/avatar/12.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 13,
      status: 'In what researchers are calling the largest study to date to examine the risk of alcohol use in people with existing cardiovascular disease',
      name: 'Ariel',
      avatar: '/img/avatar/13.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 14,
      status: 'Results from an additional 12 studies was added to the analysis to make a combined sample of over 48,000 people',
      name: 'Daniel',
      avatar: '/img/avatar/14.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 15,
      status: 'The new study found the lowest risk occurred when people with existing heart conditions drank from 6 to 8 grams of alcohol per day',
      name: 'James',
      avatar: '/img/avatar/15.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 16,
      status: 'But when people drank a bit less -- only 6 grams of alcohol a day -- the benefit almost doubled.',
      name: 'Alexander',
      avatar: '/img/avatar/16.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 17,
      status: 'They had a 50% lower risk of having another heart attack, stroke or episode of angina than those who did not drink',
      name: 'Michael',
      avatar: '/img/avatar/17.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 18,
      status: 'In the United States, that would be about a half a glass of regular beer or wine or 0.75 ounces of distilled spirits',
      name: 'Ethan',
      avatar: '/img/avatar/18.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 19,
      status: 'In the UK, where a standard unit of alcohol is 10 milliliters or 8 grams, it\'s a bit more complicated',
      name: 'Jacob',
      avatar: '/img/avatar/19.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    },
    {
      id: 20,
      status: 'For decades, a "drink a day" was considered fine by public health standards because many similar studies over the years found a positive',
      name: 'Charley',
      avatar: '/img/avatar/20.jpg',
      message: 'Surprisingly Abraham really did nothing important in his life.'
    }
  ],
  chatMessages: {
    1: [
      'this tutorial is exactly what i need and always searched for, finally after years of googling MVC there is a solid tutorial, thank you.',
      'It is such an awesome series, you will learn many things on the way. This series will start your intermediate phase from beginners. ',
      'The code quality is awesome. From last year I did a couple of MVC frameworks but none is comparable to this series.'
    ],
    2: [
      'This is excellent! Programming is a hands-on experience. By building your own mini MVC framework you get to grasp how larger frameworks',
      'Thanks a lot for this very good video ! '
    ],
    3: [
      'This is superb. Fast paced & does exactly what it says on the tin. Thank you very much for creating and sharing this for free, it is absolutely invaluable and you are very generous!',
    ],
    4: [
      'Please can you do a tutorial on how to host this on cPanel: I\'m having issues hosting it',
      'I just learned python and now i want to become an expert. This channel helped alot.',
      'Thank you so much for this tutorial it is really awesome.'
    ],
    5: [
      'If possible could you answer this question?',
      'How did you learn all of this, is it over the years or is there some kind of documentation that you used.'
    ],
    6: [
      'And how would you advise people when trying to improve their php knowledge',
      'Thanks a lot for this very good video ! '
    ],
    7: [
      'Thank you for making it in one complete video, warm greetings from Indonesian developers',
      'I just learned python and now i want to become an expert. This channel helped alot.'
    ],
    8: [
      'Thank you so much for this tutorial it is really awesome.',
      'Enjoyed the video and love the fact that your using phpstorm by jetbrains',
      'It is really amazing, useful and learnable video. Thanks dear.'
    ],
    9: [
      'A Big Thanks to you, and for your effort. I know working on core PHP is more helpful to understand things well, I appreciate your effort, this video will help us to understand or learn PHP a lot well, a happy subscriber, i subscribe to your channel as well thanks for amazing content',
      '',
      ''
    ],
    10: [
      'Thanks for this video tutorial, greetings from Romania.',
      'Great video, what are you using for programming? Is that a particular IDE. Is that ok if I write down code on a simple file notepad ++ ? Let me know thanks a lot. I share your video on my fb'
    ],
    11: [
      'I like your framework is combines laravel and yii2 frameworks ',
      'Hello to everyone, does any one know how you could pass data/params in layout?'
    ],
    12: [
      'very well begin of tutorial, I will watch all this video, thanks a lot. I think it is very helpfull',
      'I\'m from Bangladesh. I am a native of Bengali. That\'s why  I\'m not well at English. But I enjoy this tutorial... A lot of love for You',
      'Thanks for the tutorial! May i ask for the PHPStorm theme used ?'
    ],
    13: [
      'How did you call a non-static function with call_user_func() ?',
      'Has anybody tried using this framework and deployed it on production?'
    ],
    14: [
      'thanx for the fantastic course!',
      'This is the great job!My opinion is you to go ahead and create real App using this framework,let say kind of magazine.Thanks again!',
      'At 1:08:50, why don\'t you use extract($params) instead of foreach(...) ?'
    ],
    15: [
      'i have seen the tutorial not even 10 minutes ...',
      'but what I have seen tells me that I can use it well ...',
      'Thank you for sharing this information with others.'
    ],
    16: [
      'i haven\'t done anything about php for a long time',
      'how do you set up PHP to avoid "not found" at 8:52. I am using MAMP'
    ],
    17: [
      'Nice tutorial. How to run this project from xampp without running server?'
    ],
    18: [
      'I will see this video later. Now I have php course to study',
      'Good job for learn. Few month searching of this. I know it\'s small, project and use to teaching. It\'s not laravel but better for db its use illuminate\database, I think. Routing better separating to other file/s. Maybe you say of this. My english is poor ;)'
    ],
    19: [
      'Does anyone one know extension he uses for those file/class creation shortcuts?',
      'Plugin : Material Theme | Theme: Material Oceanic'
    ],
    20: [
      'You are awesome..I admired a lot about your videos..I ha ve one suggestion ..can you please do a Xamarin Forms full course ?'
    ]
  },
  profile: {
    name: 'John',
    age: 23,
    online: true
  },
  news: [], 
  newsAddError: false

}

export default defaultState