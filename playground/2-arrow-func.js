const e = {
  name: "Huu Thanh",
  guestList: ["John", "Jane", "Mary"],
  print: () => {
    console.log("Guest list for the party of " + e.guestList.join(", "));
    e.guestList.map((guest) => {
      console.log(guest + " is attending " + e.name);
    });
  },
};
e.print();
