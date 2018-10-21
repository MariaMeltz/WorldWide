'use strict';
const texts = {
    "indo": `"Just started using TransferWise and all I can say is that so far everything has been brilliant- 
how refreshing when compared to the big banks- they could learn a lot from TransferWise, Thank you"
Freddie H.
Kalianda, Indonesia`,
    "china": `"I was amazed by how fast the transaction is!"
Mikel P.
Qiujima, China`,
    "canada": `"Pleased to save money every time I use TransferWise"
Lesli C.
Saint-Sauveur, Canada`
};
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
$(async () => {
    while (true) {
        $("flag.indo").addClass("active");
        $("pre").html(texts["indo"]).addClass("active");
        await sleep(3000);
        $("flag.indo").removeClass("active");
        $("pre").removeClass("active");
        await sleep(1000);

        $("flag.china").addClass("active");
        $("pre").html(texts["china"]).addClass("active");
        await sleep(3000);
        $("flag.china").removeClass("active");
        $("pre").removeClass("active");
        await sleep(1000);

        $("flag.canada").addClass("active");
        $("pre").html(texts["canada"]).addClass("active");
        await sleep(3000);
        $("flag.canada").removeClass("active");
        $("pre").removeClass("active");
        await sleep(1000);
    }
});
