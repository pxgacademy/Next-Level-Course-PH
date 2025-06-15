{
  // SPREAD OPERATOR | REST OPERATOR

  // learn spread operator
  const bros1: string[] = ["Rakib", "Sakib", "Akib"];
  const bros2: string[] = ["Sadia", "Anika", "Monika"];

  // bros1.push(bros2); // 🔴 wrong way
  bros1.push(...bros2); // 🟢 right way

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator
  const greetFriends = (...friends: string[]) => {
    return friends.forEach((friend: string) => {
      `Hi ${friend}`;
    });
  };
  const greetings = greetFriends("Abul", "Babul");
  console.log(greetings);
}
