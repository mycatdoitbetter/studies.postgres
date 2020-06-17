const db = require("../config/database");

exports.create = async (req, res) => {
  const { name, phone, description } = req.body;
  const {
    rows,
  } = await db.query(
    "INSERT INTO contacts (name, phone, description) VALUES ($1, $2, $3)",
    [name, phone, description]
  );

  res.json({
    message: "contact added successfully!",
    body: {
      contact: { name, phone, description },
    },
  });
};

exports.read = async (req, res) => {
  const response = await db.query("select * from contacts ORDER BY name ASC");
  res.json(response.rows);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { name, phone, description } = req.body;

  await db.query(
    "UPDATE contacts SET name = $1, phone = $2, description = $3 WHERE id = $4",
    [name, phone, description, id]
  );

  res.json({ message: "Contact updated!" });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const deletedContact = await db.query(
    "select * from contacts where id = $1 order by name ASC",
    [id]
  );

  await db.query("delete from contacts where id = $1", [id]);

  res.json({
    message: "Contact deleted!",
  });
};
