import cors from 'cors';

export default cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3000",
    "https://shopauthenticdalat.com",
  ],
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  credentials: true,
  maxAge: 380000,
  exposedHeaders: ["Authorization"],
});
