describe('Verify register flow Cermati', () => {
  it('Open register web Cermati', () => {
    cy.visit('https://www.cermati.com/app/gabung')
    cy.wait(2000)
    const email = 'test00@mail7.io'
    const phone = '08555555555'
    const password = '!Password00'
    const passwordConfirm = '!Password00'
    const firstName = 'testing'
    const lastName = 'last'
    const cityOrKabupaten = 'KOTA TANGERANG'

    const inputEmail = "input#email"
    const inputPhone = "input#mobilePhone"
    const inputPassword = "input#password"
    const inputConfirmPassword = "input#confirmPassword"
    const inputFirstName = "input#firstName"
    const inputLastName = "input#lastName"
    const inputCityOrKabupaten = "input#cityAndProvince"
    const btnRegister = "button[data-button-name='register-new']"
    const btnVerificationWA = "button[data-button-name='send-otp-whatsapp']"

    cy.get(inputEmail).type(email)
    cy.get(inputPhone).type(phone)
    cy.get(inputPassword).type(password)
    cy.get(inputConfirmPassword).type(passwordConfirm)
    cy.get(inputFirstName).type(firstName)
    cy.get(inputLastName).type(lastName)
    cy.get(inputCityOrKabupaten).type(cityOrKabupaten)
    cy.wait(2000)
    cy.get(inputLastName).click()
    cy.get(btnRegister).click()
    // cy.get(btnVerificationWA).click()
  })
})