const users = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    firts_name: "George",
    last_name: "Bluth",
    tag: "new_user",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    firts_name: "Janet",
    last_name: "Weaver",
    tag: "old_user",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    firts_name: "emma",
    last_name: "wong",
    tag: "new_user",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    firts_name: "eve",
    last_name: "holt",
    tag: "old_user",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    firts_name: "charles",
    last_name: "morria",
    tag: "new_user",
  },
];

//menampilkan email new user
const emailOldUser = users.filter((user) => user.tag !== "old_user");
console.log(emailOldUser);

//menampilkan semua email
const emailUser = users.map((user) => user.email);
console.log(emailUser);

//menampilkan email tag new_user
const emailemails = users
  .filter((user) => user.tag == "old_user")
  .map((user) => user.email);

console.log(emailemails);
