defmodule BakestersWeb.ContactController do
  use BakestersWeb, :controller
  alias Bakesters.ContactRequest
  alias Bakesters.Contact
  alias Bakesters.Mailer

  def index(conn, params) do
    contact = ContactRequest.changeset(%ContactRequest{}, params)
    case contact do
    %Ecto.Changeset{valid?: true} ->
      params
      |> Contact.contact_email(Application.get_env(:bakesters, :recipient_email))
      |> Mailer.deliver_now

      conn |> json(%{message: "Message sent."})

    %Ecto.Changeset{errors: errors} ->
      IO.inspect(errors)
      conn
      |> put_status(400)
      |> json(formatErrors(errors))
    end
  end

  defp formatErrors(errors) do
    errors 
    |> Enum.map fn {key, {message, _validation}} -> 
      %{key => message} 
    end

  end

end