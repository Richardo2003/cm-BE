-- CreateTable
CREATE TABLE "Pelanggan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Pelanggan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pesanan" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "waktu" TIMESTAMP(3) NOT NULL,
    "lokasi" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "metode_bayar" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "pelangganId" INTEGER NOT NULL,

    CONSTRAINT "Pesanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPesanan" (
    "id" SERIAL NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "harga_total" DOUBLE PRECISION NOT NULL,
    "pesananId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,

    CONSTRAINT "ItemPesanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pesanan" ADD CONSTRAINT "Pesanan_pelangganId_fkey" FOREIGN KEY ("pelangganId") REFERENCES "Pelanggan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPesanan" ADD CONSTRAINT "ItemPesanan_pesananId_fkey" FOREIGN KEY ("pesananId") REFERENCES "Pesanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPesanan" ADD CONSTRAINT "ItemPesanan_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
