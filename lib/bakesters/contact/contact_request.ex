defmodule Bakesters.ContactRequest do
  use Ecto.Schema
  import Ecto.Changeset

  schema "contact" do
    field :name, :string
    field :email, :string
    field :phone, :string
    field :message, :string
  end


  @required_fields [:name, :email, :phone, :message]

  def changeset(model, params \\ %{}) do
    model
    |> cast(params, @required_fields)
    |> validate_required(@required_fields)
    |> validate_format(:phone, ~r/^[0-9]{7,11}$/)
    |> validate_format(:email, ~r/@/)
  end

end