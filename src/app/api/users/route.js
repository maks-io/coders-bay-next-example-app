const dummyUsers = [
  {
    id: 1,
    name: "fatima",
    age: 25,
  },
  {
    id: 2,
    name: "robert",
    age: 40,
  },
  {
    id: 3,
    name: "michael",
    age: 32,
  },
];

export async function GET() {
  console.log("DEBUG called GET /users");

  return Response.json(dummyUsers);
}
