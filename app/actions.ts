"use server"

export async function submitWaitlistForm(data: FormData) {
  const email = data.get("email") as string

  // Basic email validation
  if (!email || !email.includes("@")) {
    return {
      success: false,
      error: "Geçerli bir e-posta adresi giriniz",
    }
  }

  try {
    // Başvuru email'ini kaydet
    console.log("Yeni gönüllü başvurusu:", email)

    // Burada başvuruyu kaydetmek için istediğiniz servisi kullanabilirsiniz:
    // - Veritabanı
    // - Google Sheets API
    // - Email gönderimi
    // - Diğer servisler

    return { success: true }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      error: "Form gönderilirken bir hata oluştu",
    }
  }
}
