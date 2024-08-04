export const checkValidData = (name, email, password) => {
  let isValidName = null;
  if (name !== null) {
    isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  }
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if (!isValidName && isValidName !== null) return "Name is not valid"
  if (!isValidEmail) return "Email ID is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
}