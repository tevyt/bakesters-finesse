defmodule Bakesters.Contact do
  import Bamboo.Email

  def contact_email(contact_request, recipient_email) do
    new_email()
    |> to(recipient_email)
    |> from("contact@bakesters-finesse.herokuapp.com")
    |> subject("Potential Customer")
    |> text_body(build_text_body(contact_request))
  end

  defp build_text_body(params) do
    "
    Name: #{params["name"]}
    Email: #{params["email"]}
    #{
      if params["phone"] do
        "Phone: #{params["phone"]}"
      end
    }

    #{params["message"]}

    "
  end
end
