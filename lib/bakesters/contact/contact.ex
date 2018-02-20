defmodule Bakesters.Contact do
  import Bamboo.Email

  def contact_email(contact_request) do
    new_email() 
    |> to("travis.alexander.smith.ja@gmail.com")
    |> from("contact@bakesters-finesse.herokuapp.com")
    |> subject("Potential Customer")
    |> text_body(build_text_body(contact_request))
  end

  defp build_text_body(%{"name" => name, "email" => email, "phone" => phone, "message" => message}) do
    "Name: #{name}
     Email: #{email}
     Phone: #{phone}
     

     #{message}

    "
  end
end