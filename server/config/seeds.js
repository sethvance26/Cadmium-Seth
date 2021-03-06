const db = require("./connection");
const { User, Event, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Gallery/Museum Opening" },
    { name: "Artist Talk" },
    { name: "Open Studios" },
    { name: "Film Screening" },
    { name: "Performance" },

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

  console.log("Categories successfully seeded!");

  await Event.deleteMany();

  const events = await Event.insertMany([
    {
      name: "Paint Night w/ artist",
      category: categories[2]._id,
      description:
        "Enjoy being guided through one of three picture options available while you laugh and drink with friends.",
      imageLink:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F143380333%2F145070161103%2F1%2Foriginal.20210802-220615?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=9d242a98d92c0dce2953fec11e1a9246",
      date: "8/26/2021, 6:00:00 PM",
      link: "https://www.eventbrite.com/e/paint-night-w-featured-artist-nowhams-tickets-165824400245?aff=ebdssbdestsearch",
      locationName: "Paint N' Sip (inside Regency Mall)",
      locationAddress: "1420 North Parham Road, Henrico, VA 23229",
    },
    {
      name: "Ashland Fourth Fridays",
      category: categories[4]._id,
      description:
        "Exhibits the work of jewelers, painters, designers, entertainers, chefs, farmers, and musicians",
      imageLink:
        "https://images.squarespace-cdn.com/content/v1/5cacfe067ede390001107c30/1619555312532-UPJBINW6NB72J7Y1IQS6/175135280_1006561993083253_7149335627177260712_n.jpg?format=300w",
      // Dates: May 1, 2021 - September 1, 2021
      // startDate: '5pm',
      // endDate: '7pm',
      // time: '5:00 pm',
      // date: '2021-08-27',
      date: "8/27/2021, 5:00:00 PM",
      link: "https://www.ashlandvirginia.com/fourthfridays",
      locationName: "Downtown Ashland, Virginia",
      locationAddress: "108 Robinson Street, Ashland, VA 23005",
    },

    {
      name: "4th Friday Art Shows - Dog Days of Summer Fundraiser",
      category: categories[0]._id,
      description:
        "Opening of several exhibits: James River Renderings 2021, Death of an Iceberg.",
      imageLink:
        "https://artworksrva.com/wp-content/uploads/2020/12/3-Award-HaynesJames-Incoming-Transmission-17x30-Acrylic-800x1417.jpg",
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: "8/27/2021, 6:00:00 PM",
      link: "https://artworksrva.com/blog/events/all-media-art-show-9/",
      locationName: "Art Works",
      locationAddress: "320 Hull St, Richmond, VA 23224",
    },
    {
      name: "James River Renderings 2021 - Exhibit Opening",
      category: categories[0]._id,
      description:
        "Opening of James River Renderings 2021. Exhibit runs through September 18, 2021",
      // NO IMAGE
      imageLink:
        "https://artworksrva.com/wp-content/uploads/2020/12/River-2-gk-bw.jpg",
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: "8/27/2021, 6:00:00 PM",
      link: "https://artworksrva.com/blog/events/james-river-renderings/",
      locationName: "Art Works",
      locationAddress: "320 Hull St, Richmond, VA 23224",
    },

    {
      name: "'Sirena's Gallery' Film Screening",
      category: categories[3]._id,
      description:
        "Live feature film screening about a Salvadoran-American woman and her difficulties as a gallery owner whose husband took his own life.",
      imageLink:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F136118449%2F195910722160%2F1%2Foriginal.20210521-024754?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C77%2C2556%2C1278&s=d942db5d9a26a036c071e7a1a7ab488f",
      date: "8/27/2021, 7:00:00 PM",
      link: "https://www.eventbrite.com/e/sirenas-gallery-feature-film-screening-at-the-byrd-theatre-tickets-156194946289?aff=ebdssbdestsearch",
      locationName: "The Byrd Theatre",
      locationAddress: "2908 West Cary Street, Richmond, VA 23221",
    },
    {
      name: "Blossom: Sakura Miyazaki",
      category: categories[3]._id,
      description:
        "Blossom is a world of self reflection and self actualization, with hand painted mirrors and a crafted atmosphere.",
      imageLink:
        "https://images.squarespace-cdn.com/content/v1/5e63fae024473b53ae219502/1629204545974-U11Q3BMEND8NTQKAX98D/hi+mirror.jpeg?format=1500w",
      date: "8/27/2021, 6:00:00 PM",
      link: "https://edenairlines.com/upcoming-exhibition",
      locationName: "Eden Airlines",
      locationAddress: "214 E Grace Street, Richmond, VA 23219",
    },
    {
      name: "Jess Perlitz - Being Carrier Bag",
      category: categories[2]._id,
      description:
        "Drawing on Ursula K. Le Guin's 1986 essay, The Carrier Bag Theory of Fiction, Perlitz explors the forms of the body as narrative.",
      imageLink:
        "https://images.squarespace-cdn.com/content/v1/533dc02de4b0e277ef5c5244/1592944521512-I7QB3Z2Z42CFHGW2OBMK/barely+there_thumbnail.jpg?format=500w",
      date: "9/3/2021, 5:00:00 PM",
      link: "https://arts.vcu.edu/event/jess-perlitz-being-carrier-bag/",
      locationName: "The Anderson Gallery",
      locationAddress: "907 1/2 Franklin Street, Richmond, VA 23220",
    },
    {
      name: "Art n' Flow: Black Art Showcase",
      category: categories[4]._id,
      description:
        "Enjoy live art, music, and performances 3-7pm in this celebration of local artists.",
      imageLink:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F143525319%2F209943078851%2F1%2Foriginal.20210804-020616?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C68%2C560%2C280&s=d09491fee48bfa00cfec239313f8291c",
      // alternative imageLink: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F143525223%2F209943078851%2F1%2Foriginal.20210804-021147?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=1b0c189339ae53c3fecd1f5b78d913ac',
      date: "9/04/2021, 3:00:00 PM",
      link: "https://www.eventbrite.com/e/art-n-flow-black-art-showcase-tickets-166006775735?aff=ebdssbdestsearch",
      locationName: "Delta Hotel",
      locationAddress: "555 East Canal Street, Richmond, VA 23219",
    },
    {
      name: "Open Figure Drawing Sessions",
      category: categories[2]._id,
      description:
        "RVA Thriving Artists hosts a figure drawing session at Art Works 1-4pm. Bring your own easel and drawing materials. $10 to cover model's fee.",
      imageLink:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F136679989%2F545513438723%2F1%2Foriginal.20210526-160035?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=4816defb9361d728ba19a6330a794cb0",
      date: "9/05/2021, 1:00:00 PM",
      link: "https://www.eventbrite.com/e/open-figure-drawing-sessions-september-2021-tickets-163724569595?aff=ebdssbdestsearch",
      locationName: "Art Works",
      locationAddress: "320 Hull St, Richmond, VA 23224",
    },
    {
      name: "Nancy Blum & Joseph Scheer",
      category: categories[2]._id,
      description:
        "A two-person exhibition presenting the works of Nancy Blum and Joseph Sheer.",
      imageLink:
        "https://www.reynoldsgallery.com/wp-content/uploads/2021/08/JSC.1024.jpg",
      date: "9/10/2021, 5:00:00 PM",
      link: "https://www.reynoldsgallery.com/homepagesecondary/in-front-of-nature-2-2/",
      locationName: "Reynolds Gallery",
      locationAddress: "1514 West Main Street, Richmond, VA 23220",
    },

    {
      name: "Death of an Iceberg - Exhibit Opening",
      category: categories[0]._id,
      description:
        "Opening of Heidi Nunnally's photography exhibit, which follows the path of an iceberg along the arctic currents.",
      imageLink:
        "https://artworksrva.com/wp-content/uploads/2020/12/2021.08-Heidi-Nunnally-Death-of-an-Iceberg-Heidi-M.-Nunnally.jpg",
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-09-17',
      date: "9/17/2021, 6:00:00 PM",
      link: "https://artworksrva.com/blog/events/heidi-nunnally/",
      locationName: "Art Works",
      locationAddress: "320 Hull Street, Richmond, VA 23224",
    },
    {
      name: "All Media Show Fall Opening Reception",
      category: categories[0]._id,
      description:
        "Art, food, music, bar, and more! Exhibit runs September 17, 2021 to November 7, 2021.",
      imageLink:
        "https://images.freeimages.com/images/large-previews/144/artist-palette-1172306.jpg",
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-09-17',
      date: "9/17/2021, 6:00:00 PM",
      link: "https://www.crossroadsartcenter.com/pages/exhibitions",
      locationName: "Crossroads Art Center",
      locationAddress: "2016 Staples Mill Rd, Richmond, VA 23230",
    },
    {
      name: "Ansel Adams: Compositions in Nature",
      category: categories[0]._id,
      description:
        "Behold the drama an splendor of the American landscape as seen through the lens of photographer Ansel Adams.",
      imageLink:
        "https://www.vmfa.museum/exhibitions/wp-content/uploads/sites/7/2020/03/AAWilliamson.jpg",
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-09-17',
      date: "9/25/2021, 6:00:00 PM",
      link: "https://www.vmfa.museum/exhibitions/exhibitions/ansel-adams-compositions-nature/",
      locationName: "Virginia Museum of Fine Arts",
      locationAddress: "200 N Arthur Ashe Blvd, Richmond, VA 23230",
    },
    {
      name: "Kutunza Kila Mmoja: Taking Care of Each Other",
      category: categories[0]._id,
      description:
        "Located in the Soul N' Vinegar cafe space, this exhibit celebrates artist Burkura Nyandwi and Milk River Arts. ",
      imageLink:
        "https://images.squarespace-cdn.com/content/v1/5cd9594865019f8d8cbb8982/1600710308338-0OF1R9YQNVB3B2YHSZ7I/immigrationofficebukuru002.jpg?format=2500w",
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-09-17',
      date: "10/10/2021, 6:00:00 PM",
      link: "https://icavcu.org/exhibitions/kutunza-kila-mmoja-taking-care-of-each-other/",
      locationName: "Institute for Contemporary Art",
      locationAddress: "601 W Broad Street, Richmond, VA 23230",
    },
    {
      name: "Man Ray: The Paris Years",
      category: categories[0]._id,
      description:
        "This exhibit focuses on the portrait photographs that artist Man Ray made in Paris, 1921-1940. ",
      imageLink:
        "https://www.vmfa.museum/exhibitions/wp-content/uploads/sites/7/2021/03/man-ray-slider.png",
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-09-17',
      date: "10/30/2021, 6:00:00 PM",
      link: "https://www.vmfa.museum/exhibitions/exhibitions/man-ray-paris-years/",
      locationName: "Virginia Museum of Fine Arts",
      locationAddress: "200 N Arthur Ashe Blvd, Richmond, VA 23230",
    },
    {
      name: "Faces and City Lights - Exhibit Opening",
      category: categories[0]._id,
      description:
        "Opening of Cathy Cazares's exhibit, which includes photography, transfers, and pastels.",
      imageLink:
        "https://artworksrva.com/wp-content/uploads/2020/12/2021.08-Cathy-Cazares2.jpeg",
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-11-19',
      date: "11/11/2021, 6:00:00 PM",
      link: "https://artworksrva.com/blog/events/cathy-cazares-2/",
      locationName: "Art Works",
      locationAddress: "320 Hull Street, Richmond, VA 23224",
    },
  ]);

  console.log("Events successfully seeded!");

  await User.deleteMany();

  const users = await User.insertMany([
    {
      username: "Sal",
      email: "sal@hotmail.com",
      password: "password12345",
      events: [
        {
          events: [events[0]._id, events[1]._id],
        },
      ],
    },
    {
      username: "Casey",
      email: "casey@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[2]._id, events[3]._id, events[8]._id],
        },
      ],
    },
    {
      username: "Catherine",
      email: "cat@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[4]._id, events[5]._id, events[7]._id],
        },
      ],
    },
    {
      username: "Seth",
      email: "seth@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[5]._id],
        },
      ],
    },
    {
      username: "Erick",
      email: "erick@gmail.com",
      password: "password12345",
      events: [
        {
          events: [events[6]._id],
        },
      ],
    },
  ]);

  console.log("Users successfully seeded!");

  process.exit();
});
