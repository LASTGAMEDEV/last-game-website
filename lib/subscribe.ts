export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function buildContactPayload(email: string, audienceId: string) {
  return {
    email,
    audienceId,
    unsubscribed: false,
  }
}
