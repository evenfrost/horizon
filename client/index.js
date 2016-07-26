import Horizon from '@horizon/client';

const horizon = new Horizon({ host: 'localhost:5001' });

horizon.onReady(() => {
  document.querySelector('h1').innerHTML = 'index';

  const chat = horizon('messages');

  // let message = {
  //   text: "What a beautiful horizon!",
  //   datetime: new Date(),
  //   author: "@dalanmiller"
  // };

  // chat.store(message);

  chat.fetch().subscribe(
    items => {
      items.forEach((item) => {
        // Each result from the chat collection
        //  will pass through this function
        console.log(item);
      });
    },
    // If an error occurs, this function
    //  will execute with the `err` message
    err => {
      console.log(err);
    });
});
horizon.connect();
