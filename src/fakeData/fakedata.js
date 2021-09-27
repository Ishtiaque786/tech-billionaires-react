const fakedata = [
  {
    name: "Bill Gates",
    age: 65,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
    netWorth: 84,
    company: "Microsoft",
    country: "United States",
  },
  {
    name: "Jeff Bezos",
    age: 57,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",
    netWorth: 81,
    company: "Amazon.com",
    country: "United States",
  },

  {
    name: "Mark Zuckerberg",
    age: 37,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401",
    netWorth: 69,
    company: "Facebook",
    country: "United States",
  },
  {
    name: "Larry Ellison",
    age: 77,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e8b62cfc095010007bffea0%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4529%26cropY1%3D652%26cropY2%3D5184",
    netWorth: 59,
    company: "software",
    country: "United States",
  },

  {
    name: "Larry Page",
    age: 48,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76bcaaa7ea43100043c836%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D227%26cropX2%3D2022%26cropY1%3D22%26cropY2%3D1817",
    netWorth: 43,
    company: "Google",
    country: "United States",
  },
  {
    name: "Sergey Brin",
    age: 48,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7c254bbe6f78090d831f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D475%26cropX2%3D2887%26cropY1%3D168%26cropY2%3D2582",
    netWorth: 42,
    company: "Google",
    country: "United States",
  },

  {
    name: "Jack Ma",
    age: 57,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F605e22fe6df966b3fcbd3e15%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1080%26cropY1%3D0%26cropY2%3D1080",
    netWorth: 37,
    company: "e-commerce",
    country: "China",
  },

  {
    name: "Ma Huateng",
    age: 49,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F605e23c0f0986f688fbd3e15%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1080%26cropY1%3D0%26cropY2%3D1080",
    netWorth: 36,
    company: "internet-media",
    country: "China",
  },

  {
    name: " Steve Ballmer",
    age: 65,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F59d50c47a7ea436b47b36d66%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D553%26cropX2%3D2940%26cropY1%3D322%26cropY2%3D2708",
    netWorth: 32,
    company: "Microsoft",
    country: "USA",
  },
  {
    name: "Michael Dell",
    age: 56,
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5efa0fd18e7e930007731112%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1034%26cropX2%3D3701%26cropY1%3D0%26cropY2%3D2667",
    netWorth: 22,
    company: "Dell computers",
    country: "United States",
  },
];
