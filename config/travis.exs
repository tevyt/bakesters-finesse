use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :bakesters, BakestersWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :bakesters, Bakesters.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("POSTGRES_DB_USER"),
  password: System.get_env("POSTGRES_DB_PASS"),
  database: System.get_env("BAKESTERS_DB_TEST"),
  hostname: System.get_env("POSTGRES_DB_HOST"),
  pool: Ecto.Adapters.SQL.Sandbox
