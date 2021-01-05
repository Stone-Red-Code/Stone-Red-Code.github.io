var answerArray = new Array(
    "“A million sorry’s is not equal to 1 thank you.” – Emilia (Re:Zero)",
    "“When you said that you hate yourself, it made me want to tell you all the wonderful things I know about you.” – Rem (Re:Zero)",
    "“No matter what happens, even when it looks like you’re gonna lose, when no one else believes in you, when you don’t believe in your self, I will believe!” – Rem (Re:Zero)",
    "“Please let me believe in everything you believed in. Let me believe that life is great.” - Kanade Tachibana (Angel Beats!)",
    "“God is so cruel. He stole all my happiness away.” - Yui Nakamura (Angel Beats!)",
    "“I only wanted to love you, to make you proud.” - Yuri Nakamura (Angel Beats!)",
    "“Why am I myself, and not somebody else.” – Yuu Otosaka (Charlotte)",
    "“Life is something you live only once, right?” – Sala Shane (Charlotte)",
    "“The scars that you can’t see are the hardest to heal.” – Nao Tomori (Charlotte)",
    "“Life is not a game of luck. If you wanna win, work hard.” – Sora (No Game No Life)",
    "“There is more than one way to win a game. You can win without fighting!” – Sora (No Game No Life)",
    "“There’s no more trusted observer than someone who suspects you.” – Sora (No Game No Life)",
    "“In reality, the least interesting answer is usually the correct one.” – Tet (No Game No Life)",
    "“Chess is no different than tic-tac-toe.” – Shiro (No Game No Life)",
    "“A temporary defeat is nothing if it leads to ultimate victory!” – Stephanie Dola (No Game No Life)"
);

document.getElementById('quotes').innerHTML = answerArray[Math.floor(Math.random() * answerArray.length)];