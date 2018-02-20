defmodule BakestersWeb.Router do
  use BakestersWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", BakestersWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api", BakestersWeb do
    pipe_through :api

    post "/contact", ContactController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", BakestersWeb do
  #   pipe_through :api
  # end
end
