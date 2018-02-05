export default class ValidationError extends Error {
  constructor (msg, { errors }) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(msg)

    // Maintains proper stack trace for where our error was thrown
    Error.captureStackTrace(this, ValidationError)

    // Custom debugging information
    this.errors = errors
    this.date = new Date()
  }
}
