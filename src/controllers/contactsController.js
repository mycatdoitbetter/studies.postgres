const db = require("../config/database");

exports.create = async (req, res) => {
  const { name, phone, description } = req.body;
  const {
    rows,
  } = await db.query(
    "INSERT INTO contacts (name, phone, description) VALUES ($1, $2, $3)",
    [name, phone, description]
  );

  res.status(201).send({
    message: "contact added successfully!",
    body: {
      contact: { name, phone, description },
    },
  });
};

exports.read = async (req, res) => {};

exports.update = async (req, res) => {};
