const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTaksToDo: () => {
    const taksToDo = tasks.tasks.map((item) => {
      if (item.completed === false)
        return console.log("Taks to do is: " + item.text);
      else {
        console.log("Taks done is: " + item.text);
      }
    });
  },
};
tasks.getTaksToDo();
