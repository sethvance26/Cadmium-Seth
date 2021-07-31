const db = require('./connection');
const { User, Event, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Monday' },
    { name: 'Tuesday' },
    { name: 'Wednesday' },
    { name: 'Thursday' },
    { name: 'Friday' },
    { name: 'Saturday' },
    { name: 'Sunday' }
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
    // need to change images? these are the images on the webiste - assuming copyright
    {
      name: 'Rhythm on the River',
      description:
        'A celebration of the arts in the VMFA Sculpture Garden, featuring live performances (music & spoken word) and visual artists.',
      image: 'rhythm-on-the-river.jpg',
      category: categories[4]._id,
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-06',
      date: 'Aug 6, 2021 6:00 pm', 
      link: 'https://www.eventbrite.com/e/rhythm-on-the-river-tickets-154611911389?aff=ebdssbdestsearch',
      locationName: 'Virginia Museum of Fine Arts',
      locationAddress: '200 North Arthur Ashe Boulevard, Richmond, VA 23220',
    },
    {
      name: 'Richmond RVA Exotic Paintings: BYOB Paint & Sip',
      description:
        "Instructional painting event with live models. BYOB. Tickets sold for $35, includes 8x10 canvas, painting supplies, and instructor's guidance",
      image: 'exotic-painting.jpeg',
      category: categories[5]._id,
      // multiple dates, different times for different dates
      // startDate: '8pm',
      // endDate: '9:30pm',
      // time: '8:00 pm',
      // date: '2021-08-14',
      date: 'Aug 14, 2021 8:00 pm', 
      link: 'https://www.eventbrite.com/e/richmond-rva-exotic-paintings-byob-paint-sip-tickets-52795985213?aff=ebdssbdestsearch',
      locationName: 'Venue 065',
      locationAddress: '3056 Hull Street, Richmond, VA 23224'
    },
    {
      name: 'Asland Fourth Fridays',
      category: categories[4]._id,
      description:
        'Exhibits the work of jewelers, painters, designers, entertainers, chefs, farmers, and musicians',
      image: 'ashland-fourth-fridays.jpeg',
      // Dates: May 1, 2021 - September 1, 2021
      // startDate: '5pm',
      // endDate: '7pm',
      // time: '5:00 pm',
      // date: '2021-08-27',
      date: 'Aug 27, 2021 5:00 pm', 
      link: 'https://www.ashlandvirginia.com/fourthfridays',
      locationName: 'Downtown Ashland, Virginia',
      locationAddress: '108 Robinson Street, Ashland, VA 23005'
    },
    {
      name: 'Meet the Artist - Artist Talk - Chuck Scalin',
      category: categories[4]._id,
      description:
        'Works spanning 5 decades, 1971-2021, by Chuck Scalin. Exhibition open July 10th through August 27th 2021',
      image: 'chuck-scalin.jpg',
      // startDate: '5pm',
      // endDate: '7pm',
      // time: '5:00 pm',
      // date: '2021-08-06',
      date: 'Aug 6, 2021 5:00 pm', 
      link: 'https://thehighpointrichmond.com/',
      locationName: 'The Highpoint',
      locationAddress: '3300 West Broad Street, Richmond, VA 23230'
    },
    {
      name: 'All Media Show Fall Opening Reception',
      category: categories[4]._id,
      description:
        'Art, food, music, bar, and more! Exhibit runs September 17, 2021 to November 7, 2021. $12 per piece for non-members, $9 for members',
      // NO IMAGE
      image: 'camera.jpg',
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-09-17',
      date: 'Sept 17, 2021 6:00 pm', 
      link: 'https://www.crossroadsartcenter.com/pages/exhibitions',
      locationName: 'Crossroads Art Center',
      locationAddress: '2016 Staples Mill Rd, Richmond, VA 23230'
    },
    {
      name: 'All Media Show Winter Opening Reception',
      category: categories[4]._id,
      description:
        'Art, food, music, bar, and more! Exhibit runs November 17, 2021 to January 9, 2022. $12 per piece for non-members, $9 for members',
      // NO IMAGE
      image: 'camera.jpg',
      // startDate: '6pm',
      // endDate: '9pm',
      // time: '6:00 pm',
      // date: '2021-11-19',
      date: 'Nov 11, 2021 6:00 pm', 
      link: 'https://www.crossroadsartcenter.com/pages/exhibitions',
      locationName: 'Crossroads Art Center',
      locationAddress: '2016 Staples Mill Rd, Richmond, VA 23230'
    },
    {
      name: '4th Friday Art Shows - Dog Days of Summer Fundraiser',
      category: categories[4]._id,
      description:
        'Opening of several exhibits: James River Renderings 2021, Death of an Iceberg, and . Dogs welcome, donations go to local animal shelters. Exhibits run through September 18, 2021',
      // NO IMAGE
      image: 'camera.jpg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: 'Aug 27, 2021 6:00 pm', 
      link: 'https://artworksrva.com/blog/events/4th-friday-art-shows-08-27-2021/',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    {
      name: 'James River Renderings 2021 - Exhibit Opening',
      category: categories[4]._id,
      description:
        'Opening of James River Renderings 2021. Exhibit runs through September 18, 2021',
      // NO IMAGE
      image: 'camera.jpg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: 'Aug 27, 2021 6:00 pm', 
      link: 'https://artworksrva.com/blog/events/james-river-renderings/', 
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    {
      name: 'Death of an Iceberg - Exhibit Opening',
      category: categories[4]._id,
      description:
        "Opening of Heidi Nunnally's photography exhibit, which follows the path of an iceberg along the arctic currents. Exhibit runs through September 18, 2021",
      // NO IMAGE
      image: 'camera.jpg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: 'Aug 27, 2021 6:00 pm', 
      link: 'https://artworksrva.com/blog/events/heidi-nunnally/',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    },
    {
      name: 'Faces and City Lights - Exhibit Opening',
      category: categories[4]._id,
      description: "Opening of Cathy Cazares's exhibit, which includes photography, transfers, and pastels. Exhibit runs through September 18, 2021",
      // NO IMAGE
      image: 'camera.jpg',
      // startDate: '6pm',
      // endDate: '8pm',
      // time: '6:00 pm',
      // date: '2021-08-27',
      date: 'Aug 27, 2021 6:00 pm', 
      link: 'https://artworksrva.com/blog/events/cathy-cazares-2/',
      locationName: 'Art Works',
      locationAddress: '320 Hull St, Richmond, VA 23224'
    }
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