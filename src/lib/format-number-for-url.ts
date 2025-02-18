export function formatPhoneNumberForURL(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '')

  // if (cleaned.length !== 13) {
  //   throw new Error('Número de telefone inválido. O formato esperado é +55 (XX) 9 XXXX-XXXX.');
  // }

  return encodeURIComponent(cleaned)
}
