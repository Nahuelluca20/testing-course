const text = "hola mundo"
const fruits = ["apple", "banana"]

test('should have a text', () => {
  expect(text).toMatch(/mundo/)
})

test('we have banana?', () => {
  expect(fruits).toContain("banana")
})

test('To Be Greater Than', () => {
  expect(10).toBeGreaterThan(9)
})

test('true', () => {
  expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
}

test("Testing callbacks", () => {
  reverseString("hola", (str) => {
    expect(str).toBe("aloh")
  })
})

const reverseString2 =  (str) => {
  return new Promise((resolve, reject) =>{
    if(!str) {
      reject(Error("Error"))
    }
    resolve(str.split("").reverse().join(""))
  })
}

test('Testing Promise', () => {
  return reverseString2("hola")
    .then(string => {
      expect(string).toBe("aloh")
    })
})

test('Test async/await', async () => {
  const string = await reverseString2("hola")

  expect(string).toBe("aloh")
})

// afterEach(() => {
//   console.log("después de cada prueba")
// })

// afterAll(() => {
//   console.log("después de todas las pruebas")
// })

// beforeEach(() => {
//   console.log("antes de cada prueba")
// })

// beforeAll(() => {
//   console.log("antes de todas las pruebas")
// })



