DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username TEXT,
  img TEXT,
  groupID INTEGER
);