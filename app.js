var Crawler = require("crawler");

var c = new Crawler({

    maxConnections: 10,

    callback: function (error, res, done) {

        if (error)

            console.log(error);

        else

            setInterval(() => {

                var $ = res.$;

                let data_key = $('tr').text();

                let data_ary = data_key.split(' ');

                let result1 = data_ary[143].slice(8, 9);

                let result2 = data_ary[119].slice(4, 5);

                let set = data_ary[143].slice(0, 9);

                let val = data_ary[119].slice(0, 9);


                let api_test = {

                    "SET": set,

                    "VAL": val,

                    "RES1": result1,

                    "RES2": result2,

                    "RESULT": result1 + result2

                };

                console.log(api_test.SET);

                console.log(api_test.VAL);

                console.log(api_test.RESULT);

            }, 1000);

        done();
    }
});


c.queue('https://marketdata.set.or.th/mkt/marketsummary.do?language=th&country=TH');
