DROP DATABASE IF EXISTS "amazon-pharmacy";

CREATE DATABASE "amazon-pharmacy";

\c "amazon-pharmacy"

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "hashed_pw" varchar NOT NULL
);

CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "price" decimal NOT NULL,
  "description" varchar,
  "photo_url" varchar
);

CREATE TABLE "order_items" (
  "id" SERIAL PRIMARY KEY,
  "product_id" int NOT NULL,
  "quantity" int NOT NULL
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "order_id" int NOT NULL UNIQUE
);

ALTER TABLE "products" ADD FOREIGN KEY ("id") REFERENCES "order_items" ("product_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("order_id") REFERENCES "order_items" ("id");

COPY products (name, price, description, photo_url) FROM stdin;
ColdCare Chewable Tablets Cherry	7.99	Upper respiratory remedies	https://pics.drugstore.com/prodimg/610738/900.jpg
Oral Analgesic Paste	4.79	Oral analgesics	https://pics.drugstore.com/prodimg/505457/900.jpg
Frequent Heartburn Medicine Acid Reflux Reducer Tablets	27.99	Heartburn	https://pics.drugstore.com/prodimg/83093/900.jpg
Anti-Perspirant Deodorant Wilderness with Lavender	6.99	Antiperspirants	https://pics.drugstore.com/prodimg/611453/900.jpg
Cavity Protection Toothpaste with Fluoride	1.79	Toothpaste	https://pics.drugstore.com/prodimg/569971/900.jpg
Antiseptic Mouthwash Cool Mint	5.49	Oral antiseptics and rinses	https://pics.drugstore.com/prodimg/412048/900.jpg