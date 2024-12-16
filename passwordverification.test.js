//password must be at least 8 characters long (completed)
//password must contain at least one uppercase letter (completed)
//password must contain at least one lowercase letter (completed)
//password must contain at least one digit (completed)
//password must contain at least one special character

const verifyPassword = require("./passwordverification")

// descibe - explaining the set of tests we are running / can be used for individual tests as well

// it - describes what we expect from the function we are testing

// expect - what we expect the funciton to actually return (boolean of false, string, etc)

describe("Password verification checker", () => {
    
    it("should return false if the password is fewer than 8 characters", () => {
        expect(verifyPassword("short")).toBe(false)
    })

    it("should return false if the password does not contain an uppercase letter", () => {
        expect(verifyPassword("lowercase")).toBe(false)
    })

    it("should return false if the password does not contain a lowercase letter", () => {
        expect(verifyPassword("UPPERCASE")).toBe(false)
    })

    it("should return false if the password does not contain a digit", () => {
        expect(verifyPassword("NoDigitHere")).toBe(false)
    })

    it("should return false if the password does not contain a special character", () => {
        expect(verifyPassword("NoSpecial1")).toBe(false)
    })

    it("should return true if the password meets all the criteria", () => {
        expect(verifyPassword("HelloWorld123!")).toBe(true)
    })

})