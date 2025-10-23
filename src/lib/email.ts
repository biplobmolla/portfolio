import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

export const sendEmail = async (templateParams: {
  from_name: string
  from_email: string
  subject: string
  message: string
}) => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

export const initializeEmailJS = () => {
  if (typeof window !== 'undefined' && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }
}

