import pool from "./db.js";

try {
  const [rows] = await pool.query(
    "SELECT VERSION() AS versi, DATABASE() AS db"
  );

  console.log("Pengguna:", process.env.DB_USER);
  console.log(rows[0]);
} catch (error) {
  console.error("Koneksi database gagal:", error.code);
  process.exitCode = 1;
} finally {
  await pool.end();
}
