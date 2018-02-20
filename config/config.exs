# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :bakesters,
  ecto_repos: [Bakesters.Repo]

# Configures the endpoint
config :bakesters, BakestersWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "V7YkLR9KrPff5TdEJK0ofPJ/Grvr1yR1zG3gkNBLaQWYYqyxEzfk1KXzFbFQ351N",
  render_errors: [view: BakestersWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Bakesters.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :bakesters, Bakesters.Mailer,
  adapter: Bamboo.MailgunAdapter,
  api_key: "my_api_key", #TODO Replace with actual API key
  domain: "bakesters-finesse.herokuapp.com"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
