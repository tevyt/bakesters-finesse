defmodule Bakesters.ContactRequest do
  use Ecto.Schema
  import Ecto.Changeset

  schema "contact" do
    field(:name, :string)
    field(:email, :string)
    field(:phone, :string)
    field(:message, :string)
  end

  @required_fields [:name, :email, :phone, :message]

  def changeset(model, params \\ %{}) do
    import Bakesters.Validators

    model
    |> cast(params, @required_fields)
    |> validate_required(@required_fields)
    |> validate_format(:name, ~r/^[A-z\s'\.\-,]{1,40}$/)
    |> validate_format(:email, ~r/^[a-zA-Z0-9_\-.+]+@[a-zA-Z0-9_\-.+]+\.[a-zA-Z]{2,5}$/)
    |> validate_phone_number(:phone)
  end
end
