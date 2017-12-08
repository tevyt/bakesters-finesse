defmodule BakestersWeb.PageController do
  use BakestersWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
