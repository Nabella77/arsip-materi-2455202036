export async function ambilMateri() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/materi`
    );

    if (!res.ok) {
      throw new Error(`Gagal mengambil materi. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Tidak dapat terhubung ke server. Periksa koneksi API.");
    }

    throw error;
  }
}