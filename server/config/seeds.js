const db = require('./connection');
const { User, Event, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Gallery/Museum Opening' },
    { name: 'Artist Talk' },
    { name: 'Open Studios' },
    { name: 'Film Screening' },
    { name: 'Performance' }

    // { name: 'Monday' },
    // { name: 'Tuesday' },
    // { name: 'Wednesday' },
    // { name: 'Thursday' },
    // { name: 'Friday' },
    // { name: 'Saturday' },
    // { name: 'Sunday' }
  ]);

  // Do we want to have these as parts of the Events? Or should these be the categories?
  // const eventType = [
  //   { key: "g", text: "Gallery/Museum Opening", value: "gallery/museum opening" },
  //   { key: "a", text: "Artist Talk", value: "artist talk" },
  //   { key: "o", text: "Open Studios", value: "open studios" },
  //   { key: "f", text: "Film Screening", value: "film screening" },
  //   { key: "p", text: "Performance", value: "performance" },
  // ];

  console.log('Categories successfully seeded!');

  await Event.deleteMany();

  const events = await Event.insertMany([
    
    {
      name: 'Paint Night w/ featured artist "NOWHAMS"',
      category: categories[2]._id,
      description: "Enjoy being guided through one of three picture options available while you laugh and drink with friends. Tickets $25.",
      imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F143380333%2F145070161103%2F1%2Foriginal.20210802-220615?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=9d242a98d92c0dce2953fec11e1a9246',
      date: '8/26/2021, 6:00:00 PM',
      link: 'https://www.eventbrite.com/e/paint-night-w-featured-artist-nowhams-tickets-165824400245?aff=ebdssbdestsearch',
      locationName: "Paint N' Sip (inside Regency Mall)",
      locationAddress: '1420 North Parham Road, Henrico, VA 23229'
    },
    {
      name: 'Asland Fourth Fridays',
      category: categories[4]._id,
      description:
        'Exhibits the work of jewelers, painters, designers, entertainers, chefs, farmers, and musicians',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAC9FBMVEX///8AAADFP4jaPj9ysCvDVAz/9fQki6r+/fuGXgAVfJunQ8mzRwAAAAPDjA7/9u9DqslDgACYNLruaLHGYuh7uTSzT9Xy/+Mwl7bOMjPw+///9PpSkAu3MXqcbAD89f/cbSX/+/9enBf/+OZqqCMAAAq7hAb+1eu5VdvCTwAMDAzGVw/67f2/NIOxQAD2/+iTZwP21//24P04osLARgD///hDhwCJXQDC8v7/3MfSTJXWMjH44uSRXwD92dj95KQTExPQ/5eSH7V+VACbP7n36unfhYbinp30ysjcXwCxOADMJCQ4eQC4Ug+6Ly8kGAZSOgrf/b1XJwttSgkiMRHY/q/Y/6Lv/9owTBL85tejPgDV9vw/YR7bdnZbjSQUQ1MPFghKcSAyJQlMNQgWCx3dq8YNGh8pWWf/78QWKTLSgawqDyH84O4zFz+jN3NTHTocDBZrI02ILl5UImXXXFXnsbHWSkbot7LagHvfWFbYaGjxSUvyY2jzq6zvTVHSRi/etqDOiWLvenzLQA/KcDPlq4PHekvnupvbfkPTamnJi2mfVQCgdyjb0bP/4cThYyTLt4PlnYa4nFvd0beHiYXTwo+lnYmjh0WMTSlwb2mKTQ7b18XFBwSXioc3IiNsLg7EoU7LopuKFBN7Hx+rqGu5tLQ4NDRaWVNycwB5plBOTU14cFkzFQjUtWqcjGWcwH1nGRl9ChMoLyNjV1nEY0VbPj5JRjWStW+hcnDF3ql6SUPNw8Y+Gghzk06mCw02GQiJODs6AAB4h2CTo4gNIwC6c1JlLxElhW8WNAC9xLGDvcxEQAhpigt3tMR3JADJexBrXhinkBhajz1RoGZpUrQujIs1b6DIldaMpCaycsnMi+BZsaFKekOinxxzTqxvY3V1KYymlKkoLk9ZXqeyVrxhrIGnKY0rWlznufBodCHZnrhOjLl3k9M7fIqUgtn/97dULmKbfN53O4eh1G3YhrXzbLaJP2fLZpdZubpGi1C5Qa8tgDnF5shnAAAgAElEQVR4nO2de1xU553w5yAMM8BxhASFiOhw0TBcRS7BGQZ0ZoA4jBhBZRC5Koii4gVQrAlmUZuoWVeTGGOtu80GY2Jrt+k2r6v75t1smtps6/a2SW3fdskmzZvXxE1q0prN/vP+fr/nec5lAOMgSu3n/SXOnDkzzpzv+d2f5zlHg+H/y7iKx+FweCb6IG6jOFZNstvtk7aV/7lCdgMdiX1SxUQfy22RCu8kReyOiT6a2yCmnkka6Zvow7kNUmHXEv45KrFMT9g90ccz/tKnJyyb6OMZf3lsko6wfKKPZ/xlu16Huyb6eMZfVtn/jHVoNBo93TpAkF6P0Wia6CMbDzH2rtq2o6dnUiAg7Ojp2bFte8XdTtk9yT6MTcdp77m7K7gy743wmHjv5tTYexOAd3d903czgHdl9veUgX+Vezw3BThpUo/RUdbjnVRunOjjvkkxGZzxGF0A8iYJJ/VQOLL33C2dsemmyQLEfrf0VBU3zA83RLxLYk752Anvktw4rEC7eULnRB/7zYlnlCxoh9izA6THPlqdE3+3lHDlQBAIYY/v63YarSb4z+ipKN827H147e2d6CO/aent6+su1xbb9kllDpMRe4xHy/DZZHKWxWvf7ykv71t1l3ihIh414thXObCFAnHu/ArbAEZ1XMPefbdkQr0oPa+92+ToJhUaKzihybnLalROwV3aD6tlt9NqKtu5i1npjjIrIe7Y6TSpmdN7lwRRnRiVysZpMpoqHn7YYVTF1E26VBH77pYoqhFhgnYnKg2UqCPsfbiCdveKT91tUQaK0x3CxZhVGj1WoxaRP1nFQPHdUpKqIuyvz2q0MBqLyuforjCJbXYmHsmzTPQRBytcN/FOo9MYKLt27nyYqdDjtJKd5oWl9U/0EQcrLNnZVxl27XzUoQc07dr5MCPs/cpOp7Vn0iNhYWFpu4P8AROX23L0NyHWeB5AIIruLLPqCcse3vmwiVLHzkc9pu6/CEPC9OB+wDTRhA5mpD3gfI5deju1Vux8uILVcBW9VovRH4WEYVFBfLtJJ7cN4obiZEa6HbWn16DR8xWe/Vn8sZgG0pAwmFDzp0DIQqm922QMFNOjOx/VAlry9zBC/01/udVkmnhGTjg8jmKY8Ri1hJb+vOAIA/kmlNBh8QQEUsfDO3tNKp/f77cU3cWEXs9XHn64TEf46M4ylc/inzXrwT3+u5LQyQl37Hz4UU2k4RW3YqBawpuONH8ahEZmpR6jQ2el6IVOkwJIks+sNOymv3s44Z1HdHT38bZvWCx9FBCtGj6MNBhL0wZuQYd3mNBRvsPu9TId9g6LpYSYrwW0sGyRFra3/+YgJxbQU97j9Xon9XVTe2hnw06WAMS/fNDPDdQED6a9RDiQlpeXd1OQE0horHjM643vWVXhMZgo1Nh3QHvv2KVPGBUQXfYxwn37ki2WZKbCZP++vWlpeWF/9aUxdcIIUX32+PjFDhMqzrKDpXxTxY6dZTpv3PegQjjrwa/6TZTw0/aCRvOPZEWFpaXt/dK5/QkB9JTFg/5AvOXI43CsYmZqKIPuSUtosRTt44CWooEH/flkpHn7wDfzH8+KAknLG+jPD4LwjvA5tnvt9r7H7EjodXicIHz2wmFx6vn04s8/QrkijTzTF0USlpeX1n/jA7/DhDjla99eYfXE2709ZRXI5/B4aKzNXmbVDF8E8oHaLKRCNFJQKakwatGR/oG8PN8N9XhHCS3loLntZIndfd1Oh8NZgTR8HMNewUoaUwChiKb7WJzZZ1KMNGu3Kd+yb2B/8YGDN/pZ653Bgx/ojgf381ZgeMF16s7e7fE9uNypWwyXEhz09R6t7vY92G8iUAIEOQJBlRlpFsD7n/j4qcTi4qPHDRM+jurYRuHF7nUYHWid5TsgnnoheDqVEfttCFjxyF+S1kwK4Sx85fdxwrQ0S37/IgJ8HGLO2pLk/ORDOTnFh24ccm67mMrt3ngKL5O6EdBj3M7iqVMzEWzv8xitf/XgHqazWbuZdX71wSJ4NSBUiMF0NxppVpY/P39tSUlycnL+4cKc4gNHJhLQscPr3e55zGv3bofY4sDG1sNU2qddEmzf4TH5eYIoevCr3A/7LaYinwIInmjJ4ip88thTCJi81mUuNOcUH54wNZrKvd4d4H+enr4KiC7bKaRYewnxa727NLODj+T1m/IDCI35lj15KmBYXhEz0qin2yTJdhBVeLTQbDYX5uQkHpkYb/SAB5ZRFAH9ObfHe3vY4EQfWm18j1MDGAY5/IiFGJO/uocATcn9Axq+sDSfZS/p8BkJ5RgQHnSZkbBworyxAvyvj1aOYnzpwXj6WD4SOpknllVMggbDPomGe8OQcZ8f6rL8fBP8l3xkz4CqwDQoR33+fB8SPmtDQFspEB41k7gOHiouPpB8xwHLvVSgGSiCGrdp6jVTGQ820yFz9E16JB2FGNN8e3fv2bdvz+4BX1qeqr283f1+jLP+7y6qK25NlWw2oDzOVWh2HQJtJhYn3jA3jr8Y+4gi/msVFECNHgqo8V4HZfceOxbgjx0/ceLYqa/bqs50XTjpS+fKYqI1zwG/6Bb9Tx06apNRhTIQ5hQS4FEMOSV/XVz81J0EhBhKETMeKxgqWCoY8Q6P0WSy/s03nvv2mS5JEThouS49bGQZSFaqnJK1+c+Lv3P8EPNC8zQELFl7uLD4b++cM1ZAFgclerdBCC1jI6JWbpplnuePDdoISidy6SiAaX4BmIw58BR+uLRUkg4KJwQVAqAl+akXCk7fKcReu7fPCK633emo6PMuZhHUtAMt89tcczYpkDDVNzLgPoMoVteWrE1Opg8D4OC3UIWF6IQIiNnxXEFBw52JN912OyYJT7nD0Y2muo0RehQ8jVDQIMILo6hwTxFlEWMyqfC4IHzpANno0R8O2k5R+s9ecboyuiAh+w4Alnvtq6jFdTq5Za6CAt/z5IsyN02hP5mChizL+GfpyCrESOqDUJpPzpac/bQgfPow6vDAS/h1mDmmZQNgdHTCHUCkLAHVCwA6WHQB53v+lHA9WynnJDIIilVdXWeWXvKFjRZoCHL/Xx9M/hht8RT/DumHa79pdrm+lUrf9cPsadlnEfBOIJYztUGIcXpMTsoRi58LsE5ZGnzx1NKTz9TV+cKoDksbnY/eL4aqJfGv0RZLmWlLg+h8h54aZCZxLDv7HAOMvu2G2s0At1U4HZQj4u2Ln7Nxj2N4Xd9+7hvHLf1fTUtLZ4fPxyVG5/MVYvEJzeDhg8fFV52i5uJp/uo7KmDDaUS8fVVqr506pT6no7cXCzZD99/p9Df4d4vj4xdl7WUVWVTUlyBSK7EfKk9zTiJIceISiSeLl6h7epHbbOmKaCErVjTczohaYbdjLbPN6ayI9/YaTJ4TpRq80hPn87d7H4nC8UA8/nSNEke30WJqHxKZtMrcGp5CpzzOw1bqdxoYXmXDiuzsFUkFDbcrLzogTRgqvDsgDU4CTXY/SVGPx86Xnz9x7ITR+F0Gkz5r1qx0DeJobuhDQNLgbJQq4ciUAZ8Ufv06Bzy9InvatGULEgpO3x4z9fTYV0Hx4qxw9PaAsX7jnzT6e/l899/D0zEaOAO0WbP0iCPzpe1nhUsiJ0wUieZ71AAfE6evVgBOQ8Dl5xIKXrkthH3eHUbKg1CD2hcTXyk7pBefd/wPfCV/3acBRML0GyqRA+YIwpxUTvi3UKVxN0Qd1hPgK8A3bfmC5Suyobo5dxsAMb1XmDAPerYtfo5siQXQwb9xOP+BeeKl9DBqlRhgmIZwGCZ3QYUQGV2imi1+KpmnDjiHstSMgGfBQlcg4DRIjgUF499M9X6NGkAANBrOdzFvofD5JCiVAcoX0pmgG6aTMgMINWmRJQkIoy6XmceZxCW8WGjJKT4MTSFLHfDn04bKynMMcBlaavaKhIKE8Y42Dtb/lQGgSelwUJ53OB0nuDXVpWtEr8O6upMXzpy5lJ6msdDq6taWqqpSW1VVVcsSF+iwhRMugcxx4OOz4idqHlpxFgCzVyxYsAwtNftcNJSo4xxtjNsoET7mcJQ7jgn3gD//tBhyPyeWT2r5mJmySFN36YKNHfyzXIvp+11LqjQdFhWvLaWcEJX6QtI/ijdfAjr4/6HlAhDTf0HB2XElpBrb3uN0lP9PZjs2AnwuvsJRcV7S2yg3UxZLw8LqTr6amipzmkuMML24VZb1LaRMQpstAPijhIRaGU3URmUpcD20YMFDuDFNVKgFx8cREDt4O1ajvYsV54ACbbG327Er/ozORsMUHdJm3VIsxWWmcVlmHYavVQ5E0+K25iBgQo14PQ3BEJBc8B+bm1l6TBjHxG+cBCGm52sQZv6XBnBwsXeXY5f9OW6ybwi+MD70BH+evaAcOpqhrY65YAvtpXdAu3IqPWqGBUr/pbkyIUHmPzU4jdIgA/zhd+BzNZQ9osctK5rARrcZ8z3lTufLmjP9otFZ7uj2LhYtbphOd8h40paqfFqWz5ysY7F0f6vor6paq6tdLgioha7q6iWtVRpIuYmr0AadBQFiPcP7R7kZ8z9kxfGyUyhHnSajpVPETDr/pzxGD+T+Ry7xPScV95tFhL6TslwqNAgdcB3Ph77EamawVUtcIhNyqRbfrRFshpOxkIGKNDv7FN/bXFlwLjv7lehxslPjNm+ZAaetT2h++Z+6DTjU/d2sV3lj7xMRlHSIfLI4WPnCpTqR8fcnJrag27VUF4qWQuT72Zywtr5G0srgk6/94yv//PTTTx4b5Hter3xlRTZlxX8eF8Jybw8N3WsBbYsx+Xssyd/nFEsVDSLgs12s5EEnS32jTpSnoEBUVVPVksIcs7anIMLJnDApNCWpobm+SRpJ8Lw1NWB2hOzx6Q/C7xsHQI8XEj2o8Lz2hxbb7b1Oh8mSL/Y+q6hwVnrdGfQ/qujkqpOayma/CsQIC3WErUyFKSkpSQkJSYoiZUnTozU1Xaw9i8F1xbIFy1b+OOLH40C4Cmckeiqc2hP5DYB29Pv8pnyW/mUy0jBiHFjK231ZSl36LO3lvXxxzjBCc6JGqHdKbUY+IBQ6rK1/7YfHTr146tSx1145e7YSIkw2y47LVt63MiJi5S0DOnmu52GUDv7bdvs2Z1FUVlZ/EWvx5TMi06c/Y+PGJC+95OPVG1Ogzu24leag/4ldLAJVJjDhPiw1J5zORqYVy5ZDyj93bgUrUBc8dB/ImxFxt0zIFpDs0tpoF9htxRM4F5blY9TyUl7M1J3haa7qWVWrmCSg1S0EtzMvaWVqyynkTqgSVlNuaeKA0ZwwNSGhANsKUBq1FeCBtD3tPpK4iAduEZDmI+x9zkEN4fleb/kTe3A6M62OHwcrScOW8hHSpVTf+KqkZ3js2Y9IhZAoZKqrkdCcU91SzVp7xvgv9F0XOWEz/+aLYLMF50TGp6oGFLiM8d33QFxE+C0S9tlpoYU2jh4zmfxPsJUv6Sf5cRDRs2dY/lv6XWp+05fC9gAh7gd9YWInC041k5XmtEIlU02AkxHwRxfpm5rBBdET65l1pNYibgPP+NOmcWUyPog0IG/eogondcd7+xw6FRotfqbCsPQ3mGvKYJK+pYz2jI9X3T58AwifvbAEDRKslHK9JFcTIepTakE8HMbISShowgRqQ0AMphdZGZfajIQFpx9igKTAh7IRz8D4IiLibqmN6rOXG4xlFdqO8JQBAP35/VlZUHq+KtFkn5QO2iQLvfCsbxYvbOq+LktnZs3CWesWIjSzfomao5xCanfhDVRlaw46HhLWJBFhSkINr9ejyWYLzjENLlMVyPlAbsUTHd5JOPLr0NajJ5Lzi4oslvzj0Cek88GxLiix8XBefeaZpQBsu/AsKBHqudQ6dEZ4xwWEZhdrMGw5pMMqHPNfwlKEXAOOh4EmtTYlIQEBE5p4rcScsr75eDbmePTG+1gQVeVWwul2WgHr0OXCS98tKqI5v4G09HQb0yHrFrtO+i6wTAG2WpcO20tn/atZ5oZpLmQ1i9zCsoWMf626lZeuzUn19MGGFB5peDqsQb4a/NAxyPELlq0gC30gQidjz4kedkWIs0IzHyifDCNA0768sHQfn5ImOZk+6wL7yBnEBK3KA7MnL1EJ2Yi2xAhZ/d3KT4h0MYkCjY2n+5Qk/osQaGr4SXgN8uE0ArxPxxcXPvbCptzbRyo8j/OACuRLT+z2FZmSqf5kjoU54A3wvWepC4QM8apMWy6Ik6kqYYukBJrEnCWsspOllp/gJ5qo4UVrJUBOKEv1BWp9enbFtHzmg+Eq3pv3rQyPGGt1atrhraDVMuf1c7qDb1yq6++vq7t08oLojpZSVniDdJwelvasDH8hlWImpXHwQ7NCSCk/h486SVU5P6K90Ugi1xMhOGID+6zU/Lrmd7N5kniAe2H4mytZzBlrwqjwenuNVo9TKboVPcpi7pO/fIbFT04IpQ3tzlF7PhcWoSwsyVTL5FRx7ZtfoNzeVElfVil02Mz+XhOZqPghzvfAAyuR78cPiLQfHj6mhGEybIfqrKcbmiSTTdLW94EiyyxDDLCjXnryDVmYJptrkapwbNTMOv4WVrXx8rW6MJpyey0hyUnCD+v5OYVvqm3gL6TzhPfASsz1b3K8lbBryhhjjZHWBO2APtdwTMWx6QyWI/qocbogzrasEjK9LcE6m+f7JZMn4wA+U0tr4QvRzZAQbQn1YNhyDSUKlIvK2atPSQmtZS8Enypsz5tjbKJ62aonR3d82d+MrDux8Sp1v5jzz1D2k1uqBCGvYsxQgLLomWqejGJmp8v1k+jo6PqmpuakWtBwU32KQGzivyBju8i9UgrgY3io0YixdcLUVcRXOFZ5vfHP2dTxPkWJqcJ038AuAjOH7AvzDfj2J85egiVlKwRQluMTEYqpM5W2RRL5aQKbnKfRURl6Q9b+is4CaxyVMPVNLZ5WoeFjqmvISO2POZzwtCjqpDpsxs9uKiT4N9gL6p2wCL+A3dK/Qq2JhBI0EcwyqwiKnx/a5jOFPw0NDU0qIEZKFg2CsJL/TFM0BtaUn9GLxikB6hOvDGCmY4g1FdxId3njscq+ZEuFo1b0R0vVRNFGvVMpKTMsnZqFVvSq6hwzm2tZQlDMYBkts96a2NBQxkhmKduSGB+WcEyJFFuTfn6VXkSEr1TxNPa68k3oocZAuD0eL4BBI80Skw/CUk+9URdF7RLHvZSenneJoe5nTS0Rujih7FKhGC13w/pQLoCF504NNLXsw9Q6JfwgvBFftIWHv2nQWyflinmYOn6RGzSgqSf+sfivbXM6F6uzY3WXXnr6peePe/xpYUjo42tnIJRG5WEzKNft5217FaZ8cyJ3N7OGsJq5IW03hyqSgF9VG8pUGB3N625qnf4tPLyDjDQiPE4JLsw673uAdRhvuRe+HTShw95jNXaXO/jSZCZZ+/xZe/vz96RFIeFSlozlUlw2c0YirfGRCZpKms1JZAouObx1mqxGnQaVkGJJLbfRaDGEAUbaEB4eHkEODDVMhE59D4gG6t2YmBh30ITl3lUGo9Xh3Be1KEsh9BXtW5S1aACJwtIvsYIMUjy+hSOkNjMfHjTLEHtRW1SbVWkMU8pRfFKWQgMIm8UYTTMPZ9HR/w2A4e2kwvAIMFPVOg1Kg/jbGJTpwRKu8uKl9NAJJvfvFYxZe/10VQvNUdeJ6CrjgHYdZG0sXfigkszTQgtlRyJ0SaoOc2izRkcIpyqaA0aLIib6B4RAbtiOheiPNYS8/H6L+GIWzg0S0Nrjhd7X8gT2uhb/40yRYKQDgvCSLIb7LiD8Jez2qvi6CqrViAsJeXDhE6LI/RtGUB+rIYTg2SRsNJqX2xcZYEQHM1IgbJQGlXTIdPgLwlsYE/N2kNHU4423GC1+1uvmm0CRWVlRWUVFURywTikAUmlO4iSt0hNLR8A45RxOyINLNT8j4Jy/jGWBpDlAhzWhEEkxO/JISmpDwe0O3EBzfZKH0wceYCFmYcx7l9+e+8HC94LUYa/3UYNJEBKl/3HfIv++RYzwkgIon6Th7CWyjROac6isZs5HA/VmSvH8b8z+KcPRBxryQ0iPKVjiNIsv1xLSdhsSPiDiaXjEWwiXO9NqtebGRAbpiGXeR77f78cBGUVMlqInHkfCdN/SVIXwDBvOrkYdymz1CI6p8ZiJ2YI2q0UZ+wLg8CmJJA1hErfaJCBUel4O2C4IG/E73lTC6cqVGQg3E8XqXtgZHOG2R6KyFkUVFfUnW5Trro2WIv++AdUFhY3i2jsXxZ1qtsSpRU5tJcDJ1ZwwB4pOm1Acj5TaQBOaBOeM/DIhukaEsLYIjQ7b+POgmi0YGvzJyM3N/dXCD4Ij/At0rr1FRYsW7e0vsuQzSv8TFsPxf7Bpp2rfyPMV0rIYyPEs1JgLl0Bcnc0IczAxmifPBrpqluUbYmnOBT5cqyVMaRJ+Wcs7axukeI0O4RXl/fM6wIwMoJsLkvtBkDk/OQ9D5270u6ysRbRO2QRWWmTRdIoIuDSKr9xCLNBoi8vsapF5M8ETn2yeDbuaeEtYm1LDjl8XaMhyUYexzdTYUykh3DAilV62kbEqKpwp4OaCBjOmf7DwclCER4hwj38Pu5wsa1GW7/H+ZL//RR0fOCFYKF+7xRbDYKqXFEAKNdAtgloSJ/+URmJsTaJNbtARQgKpjQ2NrcexmYts+lgZbmrETo2K/vZwNnSxMoPBAV1GBllr7kK3NRjCfiRctM+/W61nwC2feFqnQWlpnViahldGKBVAiwo4OZEvM8mZ/Bvhf5JMoeR1HSAG06akFGzmm/+LtGXrUAcMO7hjtmNVg7kil6tuJoszaK8xMTODyYiP8wS/VyWMyhrwayZoQBEn9xeaNVJto2HF1pzJWnFh2K1KnPxLoLhIuE3NhFobqyNMaYK/3YQa/HUci7uNKmFEeyMIVTVTMFXkKqrjYrUaIhdmBKPD3VkgUUV+n7bs3qsQYvy4UEfrl3WMra2u2ZMDZHZ1deLs3zCK+tdrGxpSYjE12JJCA5TIbOB/fz5lHvuRiJEkfB5kwgwNGWQLsNgP3r7sjpkbzMqMgbzHd/t8Rf4srQ53P/F4Fx9pSj1zyVdsHi6FgXxMfhlIU1MbCBga29Bka6r/3RQQtMq2EQGhgbpP1dz0XCKDog3LtpgPgrFSX5rflO+HDL/XB1GGYULg2Vv3BgaBMycv0eLJ4ZI4Et9PA2EAJ3b4PhQCnDJl3sh4SPihxjQzOBqXYCpTC7vgqsifn5/s7/+r7/sWLYKuaQ/W3XV1dWi6wyyUyUiAvxkZZgRJ+fUULqMSvuXOwCSIkpsxV4MXLGFaOl4Tz6tSyPf+ov7dUfv8vqy8KFpSWUxZXmOdo6sw0EJHl59PUSRuNMDIyLk8T0AwnasDjLkcBKE/zWexaOtui8XjOX68//Fn6khoCBvXoqFUu1wCVISZ2bTWApp9bqENDc0g9c31DSmjK/B3U+apiCMDvhuDhKroCYPpLvx5AxpCz7FSMaafCoLj1mastdnCLny0tbQu0cQZc6pMaV1uZRaKjQPPlrbahhHoGmpqapra2mwdHVeJ72p7Y0djow6uvb0dm/nIyIznXx6USl8+D5nQenmhRiLfC0aHeQP5KuFxXmaxQyzFnK4M0kviAjVciSeM1MybY5mXng0ix9BDTUNgmIkVPT20gUTITocWEfdsBT1Fuv+df/JJAyu5eekGHWIwQzX+Rb7+/iNIaMzPz9cuxOBVC1Tb1YFjxHL1bIWQI/Ks3iDrPicNQxSzFHAe45CQhi3UupQX30S4QfmiEwZdzs8NivAIFNyLIHbuiRrY+3i/dhafEyoLK8QefCgVwcUsug+9DlU1NgfUM5qJLTLTONrUpEQq2yDzxVzTNDbntYQzgyTM4oU35MKsRUsDCSUiVHRY1dLCej+zxg9JLjKCZuUv2qA2k1JrUvXO+APNGWifMpIS8dUnGE1Ww8YgN9R/z9UKBNYxEO6jXB9IKOt1KEPf66J5wiWBhDWBhHJzPQ0GNGlKmtOft2sI24gwnFSlKJGAhwBwCPe/k8uW9wzO1cn4ELL5eRqQUQlpdpDGnBQrlUYhBPus174TSlmwQ3kbUMgR+S7tQM0GVOFW3MqY+Q779PMZGsldGBkEoV8Q0oD3Bf7z3zv0rWpKf5gA+doRTggqxbPLg6lydc8IhKGxtUyZHBDrNPXtq9wRp1wlJbIG6q3/wLcwzsRgnLEZrHza/UnrmP2QET4uCPkBv/TxYVychot/CElLaHZh/HSxOlQJ/k0pwwlDQ1+nHooB/ppMUpG4DqmRVaYs+LBCDbdS3YJQmjmTEx7TEs4dA+FuTviq0GHJN11sDaV5mJUWmjHYLGGFdgBhbABhg7J1+nOkUdxQliDEMEecIgZnoI7ZqqgwZj1unrdOZ/n5ZQP0hdhAwaNhblAjpoxwr78IY2mWsNIWJHS5chILRySUGOEvQxVC2TYiIbPTmlhRiGrcEKxT4u0F2xPx24UxtEqXVMh0eGymlYWaY79aGON2u9977/Lly2+//f71IAgtUVHf3bt39xNPwOPe7wsdtpSUHD18+PABtsBXtdJWrQ6x0K5XctaIVkqDo5D3eaukccP2KRBUwrVK3IopUOJxJibmE9q5JnfuO++8cz43V+ktFsa8PyMzKELePdGAcD6/ysF2ai1d2nmwOEevw1ayWtRhNSu0FSu1BRKyABNLw23/R/QRKmEE+t9V3W6utyFGMkT7XhaFmlJ0vz9jxozMdUEQmnx5KqFFXMfxIiNcS6GGT2ArhAT8f3mZKYaMRyEET7SJElSETZI4zPWN3ExZ1h8a0qgwxs0+d8KKY4kZH3AdfjEDJfNKEISGgbwihTBZQ3jk+PHk5AMjELpolikpoJBOTdLrVBCmpOIcMW+WGpV3O8g42+bxPp/2bdCqMFKUpc9jFLWyDpjxAeGaYAj35uH94m1cPDYAABKpSURBVPxImKwQlg5+B+9S8S0WapTrz1JbXdWtVLbxMlQh5Mix9WqRztMgmWl4YKDpaO/oaBP7P3RvVd4QKoyMfEdiYfQYZYi3L7vdmTME4ZxgCB/P28PbJ35NtaT2T9U5uA7dvEQZH+UX18liMim2VnknRa9TQfhrNtnCdNUmBQg54kdTY9yrJV6rDymEGaINeNGBDeLM6Y45a9ZdZ4RBTc305+1WCU/plibK1ZDzCzVWqiyOEmWKSiiNTPj5FFo+0shLUK3Y+P7/vHcqjzE6wsu5cxV7AEudDkL5sHPOmhmZM4MhPJJH96J8gm59ox/Kh0I7J4CQHZicNAqhxg9T61maJ0KW2yN0345f1DFl3u/vvTdyOGHkwg8yct+RhDk92TmdEOmhMzMkqFF9f54Pp7dLSg4eOmqu0qpKlpbgHKjGStlFvPCro+lQS9jM0nwcHaYm7+n0+OG9945MGJkxc6ZBbchPzEHp7MwAwjVBpUODIT8qz+/vP1xScsAlltjD4dlsVd9raYU9RKjEUltT00WsNWsCCYVatbH0dxrnCwg0ijO8h4QxIxBepviiduTvdM7h0rkmqHQIMhC1qM7lKinBW/1wQrmqsLDk4xwoX6A0LSxUrbQmOrrgIgabFEGovBVIKNK8SjhPpaeziA/XOOFqPWFkzAes1Fau/ij1TM/I6CTMNcElCwimi/ZDkvsm1drKgmWz6/DHh12FLhcUboWtipVeLODrQ5qHWekwwvZAQk1FcxXXzoT/Frp5ALxfq0M3N9K5uTRlkaGcwWPkhCjXgwulEExp5vNoSQnEFHEjANlceKCkxHX4qbVrkVCx0ot43TFaWG2glQ7L+MMJNW5Ib9x772ppPRBO1eqQE16mceCMmVb1ChcPB8zIDAlypYKfjfKCI5pFpJGrXOYDdGec5OTDOTkqIV1ajcNlMidULo58PTDSiKJznk0gqW6IofUjYINEfz8FmgArjVyYOxMLUnC6meLGLlC/McI5mdeDXE+TT/f0A0c8ygcokPBgcv5adu+0g8WJAYSoNz6tq/qhbRhhu7asDmwsIAuCXKNQo3SDKqGbViWQ23WK0bmXZ7JkcSXYQGMw0L1DmSNywtJBZGOEycptOiR+g5xm3GSrnFQr5X5Yq9bWnDBclN5aN5zyewS89z0MNVNjAq2UxRlSGDC+w9/pur5uTid0wNeDDTQGA922sBAc0eXihNJ3qLNAM33qgDmQkK4mqNHr0CayhToeelXT/DVO4amfSTgDREfcQEaq6tAtkqGIK9M7eTyVsV67fmVNSGbQ/wrtcbwPgAsc8aC4Cl4mHYISn8qBAKsSSkRYQKMvDXqrFIRq5X1V00+06wPNvUKgzb03JtBKIxe+nTunUyFUgs1GXneHBAtosBwoPHD4qWT0O9FbfIcRlrB736r3tni9UoQali8UHco1wg+Vz17V9BNXdYFmg0J4TQRPbaSJdOdSZs8QjKU6wuDd0GA4XHyI3+tP1KV4d79D5qMffxNv9PCCEk7kpkplNVptQE0zSixl3jdPxFSSawrheyLFawgjY9ZYp5/oGkQ5j8HFysJp15haJyZHio8ylWkID5mhZCspMQNgQSBhJZoiDa4FRppfa0xRjIZKLNBoGov3tIRbAwm/CAEoXpGeIEWyEcX1gjCospuJpThnLUWWtUpvQVOhUNd80/VCQbQyX8QJ2YK7Bi2hjQh/PWUYIVvepA809yuEGGo0hLKUOvTFjDlWoTbpZay2p3to+++vj9lIIV/Q/ajATDmhLPO57JKSH1VWnv5eICHl/Ga9DlNCUz7XhZN2litA/7Z5ukCzXgWEULNar8MtIdeBycpb8ZczyCNp+5h1zrqgRzCEHBRm+j09oevw8k+jz2UfU1IAJ8R4Il9M0fcWNOYbqEO29F5f0XyiIdzKHVEQ2jZmUpDhOjxlmJ4BKZFajBPY/l6ZMSPoVd4oluJClgC1hLg+oRIvHc9W1vDJNkZYSavRKoFQMWDp54Et4FVumjKNxsxTrxNTA829kUPwEgfWlCSz8YoB9cb98BSVMRnv4Pbz1rEVNEwgmpISOaGtiQh/Ev3KigXLpqmEQoeVTTgz1ZyitdJ5IxCyQNo4Re+GaqC5f6qbhRq3YqXrsJHv7HyHvRo0qBkRVTtz/lgiKcqR4kSoQI8KQnYV4U9Og/6WgRJVQq7D6IuUL5JSNP1h3HDCeR00KhCue0PWEE6dev96FmoUwvOsvuYTMjYPAhswPAx2UmsY3ACGKvkHig8ddbmOviRIwAdfoAvjVyxfPtxKWY8oJyWF3kiHCCi18fpUdcPVGsCp938ipeoJ2WCMh7v++c4rnYbpuAVG2tn5WXBjwVo5lEM9lNChzXXgqWx2a4OHFixTYqkkMcICutJFTmBrKEchbGeOx4bZPpQUT9ug2igIOKIbKlPl3XdYvSaC6b+HQC36Dm6xMajga1IhyeweK2KcpuqQuDdF9rTly1UMmQgTkpJeB2trak5KUq10GCGdKRsb1v7oPXXfNS0gOuK1+yPfV949j6EUYLiZYprPXC8pcSa4MSidHKZZJdFbfI/zTcte8bOE5a/pCIEvKYnm6GuTki6KunQYIY0WSm3knh/de00ldHPAyMhINNNUaev980OUE3V+ZichTueDUFCMboGnTeugcZoeMtY4g3KcMqAYpxnkfNlnKyHjIyFfz1xZkERChdvrmnvJDY80NB5K3P9JTYQQFZAIN0ib5s+fr9zBFyJNBqmRFTJS18aNXUyV1zHOjB3QYDigLEIAOcVvL9JAVlmbym+RjKuXGWESvdbc4okTapKCJJpgbOfVpmqDCoiEU69JMhAq3dN53vfOmXlCHX/fxCvSsdUzQuju9ktaBgfxdOKt4bKnnY3mJYw4vtSa2FiOWE/LgX6mzETwaSRGKOPutnY270LdLvvrmPXJDacqgFPfJ0KhQxvrC7GQETlRkjaLmjvYISi95B9l/8DE2pJzx5kCT4v7TldefO21l558+p9/eDYpNjY2lCE219fX/1dceER7e2Nje3t7HB+VgVcd8H9Ho9jze1GdaVQYGSkIv5g/f2PI/Hv+sEm8L1pfNNXzx6CBOnVio5hzujUVkhJpYGb5gml4hybwQOXG05WfLl8+LTt5WSwTbqhJP4gTMm8kwb0f3i/EPdWNgptTFQFAkHtANv7xj3888eTz5+co3T2qMQPnYjLWieZ+jNleiOmoGUu3acuwUFMVSDcunrZiwfJp52KFkKU2/Fvcl8qHU28o8xXAe/4A8hngTAfdZfBpmE7W6BsNc66PhwpBiYXQJoJ9Lljw0LloLeDZbLprWqwqYKk/+3K+uI9uyPeeysfls5lcd9NVU+0k2DXohbcKCG2i+TC/BVyBxkIbqHrLXhark5+PCVBjoBoL1SBaFUSrVURVYuwcBxUaDP7CH53Lzs4+t2D5p5WqhVJ1k31OD/i78CkEEdEmtV2ljXYtWzg+vCtYrrn5RuQ19uyORMAt6zdtuecPAYgmsEpQXad1zRrFHcFsDetupZxR5W8LktADG5YvDxWI7L5UgYCfd0C5iSRSW6NNQrhGKYLY2jvwEXf9pwCEwowh3n+NbbihUIMYSrHzjwGIa6zMOqHVvd5pUELOnMxgp2NGluSEgtPggRA6FxSIu9uzzKHjO/35PJp6AJ7SiHnhNhuorE1iSmyUwhG8I+73ijlCpth6PyekDbf0CdgnFGPrIQ1uHAkR/Q6EbQNi57qxdr6Bco45ICCinXILDQT8OQ2cUTrvaCNFRsAfTtiGuoyQ2n6r+h7OnLEtHLMgws2M8DrqMcAVGSIfG72ewRjXZI5lhG0kMZ3mtyYmV+R3TgsA/B0byG5nA9rh3PE4YXgpI5TcCqEbq58h2tyACw+xjIFS9J4/AuEfAHFTgBLvmQNUyroS4oWu6RZKbr1kF/D4snzB6XOiwfhUC0gXu0gdpR2sSGukuU68F0K7+tyOTZ8QWum0lTZRm59EZm6UNoWE/OGP6IRYzNwTKHOs1jkCcca66TOnXx8vG0U5V6BUMStGAvycgV3tYKV2GwPTE354TUu4VdqwVeqizfXYB28MIUKmQ1Ti9UAl3jMHs4OQjZ1XbrEgDRBmp5XnlkEVQx2wFvC0mE8CNbXPiyOiRk7WGBFxFa8laH8rckhLuF66xondq6UNq6X1jDAE/HAjuCM8DlPiPdO1iDPG0UZRkhNYll9Bd36HBipUKWRCfwfFJjobhJN2qUOrPM1SmU8iI7U6dHdJbiAeYoSbN0vSlo1AyQhDQqD7g8fA5I/D3o6NCuE42ijKwQKoQ6exu/dnn4uOxnvlJCWxu8cIp2tDZUWE83t1tOsIh/SEED/dQzJyR0YCYch6qWsLEW5mhPSoEYL9DOsYx3XRNI0voMFwtiCBsgQgLq+M5vfoYHePCRdQ1N+GX0X1NeINcyJwMV57O4Jfo+AyJAg3sMUlXYDstkGa2CjJAMl0uAU514cMk8zrczqNuOqC2eiYR59GldOAyIbZIGcUcL6GqwIwnI8MNsZ1kIXi4hE0VnDLd4cCCZXR7KFI9wwbOiBEz64uYaWwa8twwpCQTlaNXh+XlmK45DcUnMYYcxoC6qec8GfhqgBcY3ujZANlpkaEYznDI84vIt3EpiFE5CF0xGtfhMyQkBCzPOoNnkNmbII9G4cDZvIGw7ouyNWyNyvZUL3hIA2Wb+w+K/+lAYxAs4yLsIEjQt3djtmfdPghGqJCCN3ukBvdcD2zVWCbIdk2M+Vxwi1dkg1ebhpOOAdLNQio84NeWnJTYjIcLyg4zdLigmGAoDlKEI1olzRO00h++B9klIJQ5qZ5Da0WYw8a5npmkpuIaSMfY+qSNg8nvEL9bwYAjlO1Nkx44o+u1AVRQUhRNMKGT+0djREsWzC73LoBNbkhdfXq1Rs2bHVHutnu97+OUJu6ZuDxz+gi0M2btmwkt5wxnHAdzs/MWTe+qV4rJsM53j0VaIOoMFPdqzh6vKYETxZgIt3al5khwym4SCOoEHIG1tufzch03MZ/Hfgsr8GHA44gETqeQHGPRkeE60eCzwQnXDdOPeEoYuKICQ03AfgWAxlSObXbX9wIcBTJnGO9fnsBUV5Bwp9dHQkpghvqVXy++m4kK8kgRl5TcsRqhuh2E6DICPS8WbzaPEKi4ISf3WYNopgQ8b9HVhqU3iQs42/gUEqb5JZSh1bT3shUKlmg1t7CnreE8MI7ZJR6RkiQC/LHKGdHARTh9Co8ffhb6GopH3ziHlrNCtINkCLc1xjresYi2VBfW3SF2npp5IKGafFOABoMb0aMTBjBUmKHFP6RaJW2ovrcG0iJLMtTlpAoQWyWbLyf2IwPjBAT4vBkL+TOAJoMb46ixLY2erS9GykIN5CxDmETMcRbesgSMwRhF+mLCIUOEbtrYgFRVo4IiIOHqEkGpSNcHynqGEyDIYJw83rk0hFuktYHtk532ESZ3Bc3oiNCyQ1127VAwk9QfVtpx9AQHqskc8KNmNo3MkXy6CNtWT9iug8JGf9+6Yby45EdMe6j9VSpaQjdWyWZqu0h7HYpjEipnHD+JjBJrR9CAQ6txUjd4fw7DGgY0RmltnfdSppgkWb11tXUHTLCT1h9zexwMzZJoEROuIm5Ydf8LZI8HPC68Tb+G7mjyMphIRWaX/cQG5pQdEgToJGc8AsO0iXN4ISYMjYzZyTCLqlr8ya5KdARb08/+KUy3BkhmmxgAUXR4Qa8jJBtDn3Bo0rIeptCiPmPtcD4xgw+Ta93xMw7GET1YtJb6luYylNZw6TocOtU1h1CLN1MoXKzXochW7SE8GLTps2b9Bkxc93t6pZuQu6LU00VC9HVUirVMpFDNlnJ+KspEw5x+9xCetuoEKISFULRBndpFTiu46JBi6rGX0Qyv9sQqbPSrSJlvC+BaW5kna3WSnGfhnAL80bhiJmZV4wTCghyH8sbvxVg1/iGqsMhaTUAEtB6BrWJCMVYDEUaIpyhpP3NnG/dHc8Rw8VkWPnj8A954wclKO+PWKM0hMA4Gfo+6aqLlyubmRVu4praRIQbhSLFc2bm9YmKMMNk5eWFSpfLn1mz695AmlydGcJjCg+SowxfbLRtVN7/U+JDyX1PYRxBMjnAllGb20D5U+NDyb0c8yWANy+ZIev+5PhQOn81MmOQgJmZIVcmMAHeSEymmR+4hxtrcIBgnhOb/75Ucn/l1mnyhoOGI+BdCeo+q3deTCaTYebcX0XGjAEwM3P+lc473j+MTUwz577NzfWm6UB7dwuekIwPLrsj3/9yJwS4kOtX5kx4bTYmMWXMuXJ9PjJkjkDKdl9ft6bzTzRy3qxYp3euWbNunSDN5Lzzr6/7bE2n4y6H04nJZFXEaL2DLvf/AIfZGiHJjaFQAAAAAElFTkSuQmCC',
      // Dates: May 1, 2021 - September 1, 2021
      // startDate: '5pm',
      // endDate: '7pm',
      // time: '5:00 pm',
      // date: '2021-08-27',
      date: '8/27/2021, 5:00:00 PM',
      link: 'https://www.ashlandvirginia.com/fourthfridays',
      locationName: 'Downtown Ashland, Virginia',
      locationAddress: '108 Robinson Street, Ashland, VA 23005'
    },
  
    {
      name: '4th Friday Art Shows - Dog Days of Summer Fundraiser',
      category: categories[0]._id,
      description:
        'Opening of several exhibits: James River Renderings 2021, Death of an Iceberg.',
      // NO IMAGE
      imageLink: 'https://artworksrva.com/wp-content/uploads/2020/12/3-Award-HaynesJames-Incoming-Transmission-17x30-Acrylic-800x1417.jpg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: '8/27/2021, 6:00:00 PM',
      link: 'https://artworksrva.com/blog/events/4th-friday-art-shows-08-27-2021/',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    {
      name: 'James River Renderings 2021 - Exhibit Opening',
      category: categories[0]._id,
      description:
        'Opening of James River Renderings 2021. Exhibit runs through September 18, 2021',
      // NO IMAGE
      imageLink: 'https://artworksrva.com/wp-content/uploads/2020/12/River-2-gk-bw.jpg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: '8/27/2021, 6:00:00 PM',
      link: 'https://artworksrva.com/blog/events/james-river-renderings/',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    {
      name: 'Death of an Iceberg - Exhibit Opening',
      category: categories[0]._id,
      description:
        "Opening of Heidi Nunnally's photography exhibit, which follows the path of an iceberg along the arctic currents.",
      imageLink: 'https://artworksrva.com/wp-content/uploads/2020/12/2021.08-Heidi-Nunnally-Death-of-an-Iceberg-Heidi-M.-Nunnally.jpg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: '8/27/2021, 6:00:00 PM',
      link: 'https://artworksrva.com/blog/events/heidi-nunnally/',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    {
      name: 'Faces and City Lights - Exhibit Opening',
      category: categories[0]._id,
      description: "Opening of Cathy Cazares's exhibit, which includes photography, transfers, and pastels.",
      imageLink: 'https://artworksrva.com/wp-content/uploads/2020/12/2021.08-Cathy-Cazares2.jpeg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: '8/27/2021, 6:00:00 PM',
      link: 'https://artworksrva.com/blog/events/cathy-cazares-2/',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    
    {
      name: "'Sirena's Gallery' Film Screening at the Byrd Theatre",
      category: categories[3]._id,
      description: "Live feature film screening about a Salvadoran-American woman and her difficulties as an art gallery owner whose husband recently took his own life. Tickets $10.",
      imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F136118449%2F195910722160%2F1%2Foriginal.20210521-024754?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C77%2C2556%2C1278&s=d942db5d9a26a036c071e7a1a7ab488f',
      date: '8/27/2021, 7:00:00 PM',
      link: 'https://www.eventbrite.com/e/sirenas-gallery-feature-film-screening-at-the-byrd-theatre-tickets-156194946289?aff=ebdssbdestsearch',
      locationName: "The Byrd Theatre",
      locationAddress: '2908 West Cary Street, Richmond, VA 23221'
    },
    {
      name: "Art n' Flow: Black Art Showcase",
      category: categories[4]._id,
      description: "Enjoy live art, music, and performances 3-7pm in this celebratiob of local artists of various mediums. Refreshments and cash bar. Tickets $25.",
      imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F143525319%2F209943078851%2F1%2Foriginal.20210804-020616?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C68%2C560%2C280&s=d09491fee48bfa00cfec239313f8291c',
      // alternative imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F143525223%2F209943078851%2F1%2Foriginal.20210804-021147?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=1b0c189339ae53c3fecd1f5b78d913ac',
      date: '9/04/2021, 3:00:00 PM',
      link: 'https://www.eventbrite.com/e/art-n-flow-black-art-showcase-tickets-166006775735?aff=ebdssbdestsearch',
      locationName: 'Delta Hotel',
      locationAddress: '555 East Canal Street, Richmond, VA 23219'
    },
    {
      name: 'Open Figure Drawing Sessions',
      category: categories[2]._id,
      description: "RVA Thriving Artists hosts a figure drawing session at Art Works 1-4pm. Bring your own easel and drawing materials. $10 to cover model's fee.",
      imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F136679989%2F545513438723%2F1%2Foriginal.20210526-160035?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=4816defb9361d728ba19a6330a794cb0',
      date: '9/05/2021, 1:00:00 PM',
      link: 'https://www.eventbrite.com/e/open-figure-drawing-sessions-september-2021-tickets-163724569595?aff=ebdssbdestsearch',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    {
      name: "Richmond RVA Exotic Paintings: BYOB Paint & Sip",
      category: categories[2]._id,
      description: "Instructional painting event with live models. BYOB. Tickets sold for $35, includes 8x10 canvas, painting supplies, and instructor's guidance",
      imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F108746661%2F70074178483%2F1%2Foriginal.20200817-105025?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C179%2C524%2C262&s=6e28dbc1944d4fd541030ac8ea4a0db2',
      date: '9/12/2021, 7:00:00 PM',
      link: 'https://www.eventbrite.com/e/richmond-rva-exotic-paintings-byob-paint-sip-tickets-52795985213?aff=ebdssbdestsearch',
      locationName: "Venue 065",
      locationAddress: '3056 Hull Street, Richmond, VA 23224'
    },

    {
      name: 'All Media Show Fall Opening Reception',
      category: categories[0]._id,
      description:
        'Art, food, music, bar, and more! Exhibit runs September 17, 2021 to November 7, 2021.',
      imageLink: 'https://images.freeimages.com/images/large-previews/144/artist-palette-1172306.jpg',
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-09-17',
      date: '9/17/2021, 6:00:00 PM',
      link: 'https://www.crossroadsartcenter.com/pages/exhibitions',
      locationName: 'Crossroads Art Center',
      locationAddress: '2016 Staples Mill Rd, Richmond, VA 23230'
    },
    {
      name: "Richmond RVA Exotic Paintings: BYOB Paint & Sip",
      category: categories[2]._id,
      description: "Instructional painting event with live models. BYOB. Tickets sold for $35, includes 8x10 canvas, painting supplies, and instructor's guidance",
      imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F108746661%2F70074178483%2F1%2Foriginal.20200817-105025?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C179%2C524%2C262&s=6e28dbc1944d4fd541030ac8ea4a0db2',
      date: '10/1/2021, 7:00:00 PM',
      link: 'https://www.eventbrite.com/e/richmond-rva-exotic-paintings-byob-paint-sip-tickets-52795985213?aff=ebdssbdestsearch',
      locationName: "Venue 065",
      locationAddress: '3056 Hull Street, Richmond, VA 23224'
    },
    {
      name: 'All Media Show Winter Opening Reception',
      category: categories[0]._id,
      description:
        'Art, food, music, bar, and more! Exhibit runs November 17, 2021 to January 9, 2022.',
      imageLink: 'https://images.freeimages.com/images/large-previews/144/artist-palette-1172306.jpg',
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-11-19',
      date: '11/11/2021, 6:00:00 PM',
      link: 'https://www.crossroadsartcenter.com/pages/exhibitions',
      locationName: 'Crossroads Art Center',
      locationAddress: '2016 Staples Mill Rd, Richmond, VA 23230'
    },
    {
      name: "Richmond RVA Exotic Paintings: BYOB Paint & Sip",
      category: categories[2]._id,
      description: "Instructional painting event with live models. BYOB. Tickets sold for $35, includes 8x10 canvas, painting supplies, and instructor's guidance",
      imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F108746661%2F70074178483%2F1%2Foriginal.20200817-105025?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C179%2C524%2C262&s=6e28dbc1944d4fd541030ac8ea4a0db2',
      date: '11/27/2021, 7:00:00 PM',
      link: 'https://www.eventbrite.com/e/richmond-rva-exotic-paintings-byob-paint-sip-tickets-52795985213?aff=ebdssbdestsearch',
      locationName: "Venue 065",
      locationAddress: '3056 Hull Street, Richmond, VA 23224'
    },





  ]);

  console.log('Events successfully seeded!');

  await User.deleteMany();

  const users = await User.insertMany([
    {
      username: "Sal",
      email: "sal@hotmail.com",
      password: "password12345",
      events: [
        {
          events: [events[0]._id, events[1]._id]
        }
      ]
    },
    {
      username: "Casey",
      email: "casey@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[2]._id, events[3]._id, events[8]._id]
        }
      ]
    },
    {
      username: "Catherine",
      email: "cat@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[4]._id, events[5]._id, events[7]._id]
        }
      ]
    },
    {
      username: "Seth",
      email: "seth@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[5]._id]
        }
      ]
    },
    {
      username: "Erick",
      email: "erick@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[6]._id]
        }
      ]
    }
  ]);


  console.log('Users successfully seeded!');

  process.exit();
});